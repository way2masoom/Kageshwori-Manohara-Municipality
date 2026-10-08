/**
 * Kageshwori Manohara Municipality - E-BPS
 * Mason List Management Controller
 * Strictly fetches live data from https://192.168.1.73:8444/ebps/mason/fetch
 * Pure Nepali / English localization without mixing.
 */

const API_URL = 'https://192.168.1.73:8444/ebps/mason/fetch';

let allMasons = [];
let filteredMasons = [];
let currentPage = 1;
let pageSize = 10;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadMasonData();

  window.addEventListener('languageChanged', () => {
    applyFilterAndRender();
  });
});

/**
 * Fetch data strictly from the backend API endpoint
 */
async function loadMasonData() {
  const loader = document.getElementById('masonLoader');
  const errorMsg = document.getElementById('masonErrorMessage');
  const tableWrap = document.getElementById('masonTableWrap');

  if (loader) loader.style.display = 'flex';
  if (errorMsg) errorMsg.style.display = 'none';
  if (tableWrap) tableWrap.style.display = 'none';

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (loader) loader.style.display = 'none';

    // Flexible extraction: handles { Error: ..., data: [...] } or direct array [...]
    let rawList = [];
    if (Array.isArray(data)) {
      rawList = data;
    } else if (data && Array.isArray(data.data)) {
      rawList = data.data;
    } else if (data && data.Error) {
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
      showError(data.Error || (isEn ? 'No mason records found.' : 'कुनै डकर्मी विवरण प्राप्त भएन।'));
      return;
    }

    if (!rawList || rawList.length === 0) {
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
      showError(isEn ? 'No mason records found.' : 'कुनै डकर्मी विवरण प्राप्त भएन।');
      return;
    }

    allMasons = rawList;

    if (tableWrap) tableWrap.style.display = 'block';
    applyFilterAndRender();

  } catch (err) {
    if (loader) loader.style.display = 'none';

    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    const isSslOrNetworkError = (err.message && err.message.includes('Failed to fetch')) || err.name === 'TypeError';

    let errorDetail = `
      <div style="font-weight: 700; font-size: 1rem; margin-bottom: 8px;">
        <i class="fa-solid fa-circle-exclamation"></i> ${isEn ? 'Error fetching data from server' : 'सर्भरबाट तथ्याङ्क तान्न सकिएन'}
      </div>
      <div style="font-size: 0.88rem; margin-bottom: 12px; color: #4b5563;">
        <strong>URL:</strong> <code>${API_URL}</code><br>
        <strong>${isEn ? 'Detail' : 'विवरण'}:</strong> ${err.message || err}
      </div>
    `;

    if (isSslOrNetworkError) {
      errorDetail += isEn ? `
        <div style="font-size: 0.85rem; background: #fff; padding: 12px; border-radius: 6px; border: 1px dashed #fca5a5; text-align: left; margin-bottom: 12px; color: #374151;">
          <strong><i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> Possible Cause & Solution:</strong><br>
          1. The server <code>https://192.168.1.73:8444</code> may be using a self-signed SSL certificate.<br>
          2. Please open this link in a new tab: <a href="${API_URL}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${API_URL}</a> and click <strong>"Advanced &rarr; Proceed (unsafe)"</strong>.<br>
          3. Then click the button below to retry.
        </div>
      ` : `
        <div style="font-size: 0.85rem; background: #fff; padding: 12px; border-radius: 6px; border: 1px dashed #fca5a5; text-align: left; margin-bottom: 12px; color: #374151;">
          <strong><i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> सम्भावित कारण र समाधान:</strong><br>
          १. सर्भर <code>https://192.168.1.73:8444</code> मा सेल्फ-साइन्ड SSL सर्टिफिकेट प्रयोग भएको हुनसक्छ।<br>
          २. कृपया नयाँ ट्याबमा सिधै यो लिङ्क खोल्नुहोस्: <a href="${API_URL}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${API_URL}</a> र <strong>"Advanced &rarr; Proceed (unsafe)"</strong> मा क्लिक गरी अनुमति दिनुहोस्।<br>
          ३. त्यसपछि तलको बटन थिचेर पुनः प्रयास गर्नुहोस्।
        </div>
      `;
    }

    const retryText = isEn ? 'Retry Fetch' : 'पुनः प्रयास गर्नुहोस्';
    errorDetail += `
      <button type="button" onclick="loadMasonData()" style="background: #dc2626; color: #fff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">
        <i class="fa-solid fa-rotate-right"></i> ${retryText}
      </button>
    `;

    showError(errorDetail);
  }
}

function showError(htmlContent) {
  const errorMsg = document.getElementById('masonErrorMessage');
  const tableWrap = document.getElementById('masonTableWrap');
  if (tableWrap) tableWrap.style.display = 'none';
  if (errorMsg) {
    errorMsg.innerHTML = htmlContent;
    errorMsg.style.display = 'block';
  }
}

/**
 * Setup search, entries selector, and excel export listeners
 */
function setupEventListeners() {
  const searchInput = document.getElementById('masonSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const entriesSelect = document.getElementById('entriesSelect');
  const exportBtn = document.getElementById('exportExcelBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      currentPage = 1;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'inline-flex' : 'none';
      }
      applyFilterAndRender();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      currentPage = 1;
      applyFilterAndRender();
      if (searchInput) searchInput.focus();
    });
  }

  if (entriesSelect) {
    entriesSelect.addEventListener('change', (e) => {
      pageSize = e.target.value === 'all' ? allMasons.length : parseInt(e.target.value, 10);
      currentPage = 1;
      applyFilterAndRender();
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      exportToExcelCSV();
    });
  }
}

/**
 * Filter data by search query and re-render table + pagination
 */
function applyFilterAndRender() {
  if (!searchQuery) {
    filteredMasons = [...allMasons];
  } else {
    filteredMasons = allMasons.filter(m => {
      const num = (m.number || m.sn || m.id || '').toString().toLowerCase();
      const name = (m.name || m.mason_name || m.fullName || '').toLowerCase();
      const address = (m.address || m.tole || m.municipality || '').toLowerCase();
      const ward = (m.ward || '').toString().toLowerCase();
      const phone = (m.phone || m.mobile || m.contact || '').toLowerCase();
      const email = (m.email || m.mail || '').toLowerCase();
      return name.includes(searchQuery) ||
             address.includes(searchQuery) ||
             ward.includes(searchQuery) ||
             phone.includes(searchQuery) ||
             email.includes(searchQuery) ||
             num.includes(searchQuery);
    });
  }

  renderTable();
  renderPagination();
  updateEntriesInfo();
}

/**
 * Render table rows for current page
 */
function renderTable() {
  const tbody = document.getElementById('masonTableBody');
  const emptyState = document.getElementById('tableEmptyState');
  if (!tbody) return;

  if (filteredMasons.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const badgeText = isEn ? 'Certified Mason' : 'प्रमाणित डकर्मी';
  const fallbackMason = isEn ? 'Mason' : 'डकर्मी';

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredMasons.length);
  const pageItems = filteredMasons.slice(startIndex, endIndex);

  tbody.innerHTML = pageItems.map((item, index) => {
    const globalIndex = startIndex + index + 1;
    const serialNumber = item.number || item.sn || item.id || globalIndex;

    const rawName = item.name || item.mason_name || item.fullName || '';
    const displayName = (!rawName || rawName.trim() === '-' || rawName.trim() === '')
      ? fallbackMason
      : rawName;

    let displayAddress = item.address || item.tole || item.municipality || '';
    if (!displayAddress && item.ward) {
      displayAddress = isEn ? `Ward No. ${item.ward}` : `वडा नं. ${item.ward}`;
    }
    if (!displayAddress || displayAddress.trim() === '-' || displayAddress.trim() === '') {
      displayAddress = '-';
    }

    const displayPhone = item.phone || item.mobile || item.contact || '-';
    const displayEmail = item.email || item.mail || '-';

    // Photo avatar handling (base64 or URL or fallback)
    const rawImg = item.image || item.photo || item.avatar || '';
    let photoHtml = '';
    if (rawImg && rawImg.trim() !== '') {
      const imgSrc = rawImg.startsWith('http') || rawImg.startsWith('data:')
        ? rawImg
        : `data:image/png;base64,${rawImg}`;
      photoHtml = `
        <div class="designer-avatar-wrap">
          <img src="${imgSrc}" alt="${displayName}" class="designer-avatar-img" onerror="this.parentElement.innerHTML='<div class=\\\'designer-avatar-fallback\\\'><i class=\\\'fa-solid fa-helmet-safety\\\'></i></div>';">
        </div>
      `;
    } else {
      const initial = displayName.charAt(0);
      photoHtml = `
        <div class="designer-avatar-wrap">
          <div class="designer-avatar-fallback" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff;">
            <span class="avatar-letter">${initial}</span>
          </div>
        </div>
      `;
    }

    return `
      <tr class="designer-row">
        <td class="col-sn">${serialNumber}</td>
        <td class="col-photo">${photoHtml}</td>
        <td class="col-name">
          <div class="designer-name-box">
            <span class="designer-name">${displayName}</span>
            <span class="designer-badge" style="background: #fef3c7; color: #b45309; border-color: #fde68a;">
              <i class="fa-solid fa-helmet-safety"></i> ${item.training || badgeText}
            </span>
          </div>
        </td>
        <td class="col-address">
          <div class="designer-address-box">
            <i class="fa-solid fa-location-dot"></i>
            <span>${displayAddress}</span>
          </div>
        </td>
        <td class="col-email">
          ${displayEmail !== '-' ? `
            <a href="mailto:${displayEmail}" class="designer-contact-link email-link" title="${displayEmail}">
              <i class="fa-regular fa-envelope"></i>
              <span>${displayEmail}</span>
            </a>
          ` : '<span class="text-muted">-</span>'}
        </td>
        <td class="col-phone">
          ${displayPhone !== '-' ? `
            <a href="tel:${displayPhone.replace(/[^0-9+]/g, '')}" class="designer-contact-link phone-link" title="${displayPhone}">
              <i class="fa-solid fa-phone"></i>
              <span>${displayPhone}</span>
            </a>
          ` : '<span class="text-muted">-</span>'}
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Render pagination controls
 */
function renderPagination() {
  const container = document.getElementById('paginationControls');
  if (!container) return;

  const totalPages = Math.ceil(filteredMasons.length / pageSize) || 1;

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const prevLabel = isEn ? 'Previous' : 'अघिल्लो';
  const nextLabel = isEn ? 'Next' : 'पछिल्लो';

  let html = '';

  html += `
    <button class="page-btn page-nav-btn ${currentPage === 1 ? 'disabled' : ''}" 
            onclick="changePage(${currentPage - 1})" 
            ${currentPage === 1 ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-left"></i> ${prevLabel}
    </button>
  `;

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  if (startPage > 1) {
    html += `<button class="page-btn" onclick="changePage(1)">1</button>`;
    if (startPage > 2) {
      html += `<span class="page-dots">...</span>`;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `
      <button class="page-btn ${i === currentPage ? 'active' : ''}" 
              onclick="changePage(${i})">${i}</button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      html += `<span class="page-dots">...</span>`;
    }
    html += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
  }

  html += `
    <button class="page-btn page-nav-btn ${currentPage === totalPages ? 'disabled' : ''}" 
            onclick="changePage(${currentPage + 1})" 
            ${currentPage === totalPages ? 'disabled' : ''}>
      ${nextLabel} <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  container.innerHTML = html;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredMasons.length / pageSize) || 1;
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderTable();
  renderPagination();
  updateEntriesInfo();
}

/**
 * Update the bottom "Showing X to Y of Z entries" string
 */
function updateEntriesInfo() {
  const infoEl = document.getElementById('tableEntriesInfo');
  const countBadge = document.getElementById('totalCountBadge');

  if (countBadge) {
    countBadge.textContent = filteredMasons.length;
  }

  if (!infoEl) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

  if (filteredMasons.length === 0) {
    infoEl.textContent = isEn ? 'Showing 0 entries' : 'कुनै नतिजा फेला परेन';
    return;
  }

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, filteredMasons.length);
  const total = filteredMasons.length;

  infoEl.textContent = isEn
    ? `Showing ${start} to ${end} of ${total} entries`
    : `प्रविष्टि ${start} देखि ${end} सम्म देखाउँदै (जम्मा ${total} मध्ये)`;
}

/**
 * Export current dataset to Excel-compatible CSV file (UTF-8 BOM encoded)
 */
function exportToExcelCSV() {
  const dataToExport = filteredMasons.length > 0 ? filteredMasons : allMasons;
  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

  if (dataToExport.length === 0) {
    alert(isEn ? 'No data available to export.' : 'डाउनलोड गर्न कुनै तथ्याङ्क छैन।');
    return;
  }

  const headers = isEn
    ? ['#', 'Name', 'Address', 'Email', 'Phone']
    : ['क्र.सं.', 'नाम', 'ठेगाना', 'इमेल', 'सम्पर्क फोन'];
  
  const csvRows = [
    headers.join(',')
  ];

  dataToExport.forEach((item, index) => {
    const sn = item.number || item.sn || item.id || (index + 1);
    const rawName = item.name || item.mason_name || item.fullName || '';
    const name = `"${rawName.replace(/"/g, '""')}"`;

    let rawAddr = item.address || item.tole || item.municipality || '';
    if (!rawAddr && item.ward) {
      rawAddr = isEn ? `Ward No. ${item.ward}` : `वडा नं. ${item.ward}`;
    }
    const address = `"${rawAddr.replace(/"/g, '""')}"`;

    const rawEmail = item.email || item.mail || '';
    const email = `"${rawEmail.replace(/"/g, '""')}"`;

    const rawPhone = item.phone || item.mobile || item.contact || '';
    const phone = `"${rawPhone.replace(/"/g, '""')}"`;

    csvRows.push([sn, name, address, email, phone].join(','));
  });

  const csvContent = '\uFEFF' + csvRows.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Kageshwori_Manohara_EBPS_Masons_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
