/**
 * Kageshwori Manohara Municipality - E-BPS
 * Designer List Management Controller
 * Strictly fetches live data from Java backend /ebps/designer-list/fetch
 * Pure Nepali / English localization without mixing.
 */

function getDesignerApiUrl() {
  if (window.EBPS_DESIGNER_API) return window.EBPS_DESIGNER_API;
  const host = window.location.hostname || 'localhost';
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'https://localhost:8444/ebps/designer-list/fetch';
  }
  return `https://${host}:8444/ebps/designer-list/fetch`;
}

const API_URL = getDesignerApiUrl();

let allDesigners = [];
let filteredDesigners = [];
let currentPage = 1;
let pageSize = 10;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadDesignerData();

  window.addEventListener('languageChanged', () => {
    applyFilterAndRender();
  });
});

/**
 * Fetch data strictly from the backend API endpoint
 */
async function loadDesignerData() {
  const loader = document.getElementById('designerLoader');
  const errorMsg = document.getElementById('designerErrorMessage');
  const tableWrap = document.getElementById('designerTableWrap');

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

    if (data.Error || !data.data || !Array.isArray(data.data)) {
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
      const errText = data.Error || (isEn ? 'No designer records found.' : 'कुनै प्राविधिक विवरण प्राप्त भएन।');
      showError(errText);
      return;
    }

    allDesigners = data.data;

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
      let serverOrigin = 'https://localhost:8444';
      try { serverOrigin = new URL(API_URL).origin; } catch(_) {}
      errorDetail += isEn ? `
        <div style="font-size: 0.85rem; background: #fff; padding: 12px; border-radius: 6px; border: 1px dashed #fca5a5; text-align: left; margin-bottom: 12px; color: #374151;">
          <strong><i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> Possible Cause & Solution:</strong><br>
          1. The server <code>${serverOrigin}</code> may be stopped or using a self-signed SSL certificate.<br>
          2. Please open this link in a new tab: <a href="${API_URL}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${API_URL}</a> and click <strong>"Advanced &rarr; Proceed (unsafe)"</strong>.<br>
          3. Then click the button below to retry.
        </div>
      ` : `
        <div style="font-size: 0.85rem; background: #fff; padding: 12px; border-radius: 6px; border: 1px dashed #fca5a5; text-align: left; margin-bottom: 12px; color: #374151;">
          <strong><i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> सम्भावित कारण र समाधान:</strong><br>
          १. सर्भर <code>${serverOrigin}</code> बन्द भएको वा सेल्फ-साइन्ड SSL सर्टिफिकेट प्रयोग भएको हुनसक्छ।<br>
          २. कृपया नयाँ ट्याबमा सिधै यो लिङ्क खोल्नुहोस्: <a href="${API_URL}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${API_URL}</a> र <strong>"Advanced &rarr; Proceed (unsafe)"</strong> मा क्लिक गरी अनुमति दिनुहोस्।<br>
          ३. त्यसपछि तलको बटन थिचेर पुनः प्रयास गर्नुहोस्।
        </div>
      `;
    }

    const retryText = isEn ? 'Retry Fetch' : 'पुनः प्रयास गर्नुहोस्';
    errorDetail += `
      <button type="button" onclick="loadDesignerData()" style="background: #dc2626; color: #fff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">
        <i class="fa-solid fa-rotate-right"></i> ${retryText}
      </button>
    `;

    showError(errorDetail);
  }
}

function showError(htmlContent) {
  const errorMsg = document.getElementById('designerErrorMessage');
  const tableWrap = document.getElementById('designerTableWrap');
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
  const searchInput = document.getElementById('designerSearchInput');
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
      pageSize = e.target.value === 'all' ? allDesigners.length : parseInt(e.target.value, 10);
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
    filteredDesigners = [...allDesigners];
  } else {
    filteredDesigners = allDesigners.filter(d => {
      const num = (d.number || '').toString().toLowerCase();
      const name = (d.name || '').toLowerCase();
      const address = (d.address || '').toLowerCase();
      const phone = (d.phone || '').toLowerCase();
      const email = (d.email || '').toLowerCase();
      return name.includes(searchQuery) ||
             address.includes(searchQuery) ||
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
  const tbody = document.getElementById('designerTableBody');
  const emptyState = document.getElementById('tableEmptyState');
  if (!tbody) return;

  if (filteredDesigners.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const badgeText = isEn ? 'Certified Designer' : 'प्रमाणित प्राविधिक';
  const fallbackConsultant = isEn ? 'Consultant' : 'परामर्शदाता';

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredDesigners.length);
  const pageItems = filteredDesigners.slice(startIndex, endIndex);

  tbody.innerHTML = pageItems.map((item, index) => {
    const globalIndex = startIndex + index + 1;
    const serialNumber = item.number || globalIndex;
    const displayName = (!item.name || item.name.trim() === '-' || item.name.trim() === '')
      ? fallbackConsultant
      : item.name;
    const displayAddress = (!item.address || item.address.trim() === '-' || item.address.trim() === '')
      ? '-'
      : item.address;
    const displayPhone = item.phone || '-';
    const displayEmail = item.email || '-';

    // Photo avatar handling (base64 or URL)
    let photoHtml = '';
    if (item.image && item.image.trim() !== '') {
      const imgSrc = item.image.startsWith('http') || item.image.startsWith('data:')
        ? item.image
        : `data:image/png;base64,${item.image}`;
      photoHtml = `
        <div class="designer-avatar-wrap">
          <img src="${imgSrc}" alt="${displayName}" class="designer-avatar-img" onerror="this.parentElement.innerHTML='<div class=\\\'designer-avatar-fallback\\\'><i class=\\\'fa-solid fa-user-tie\\\'></i></div>';">
        </div>
      `;
    } else {
      const initial = displayName.charAt(0);
      photoHtml = `
        <div class="designer-avatar-wrap">
          <div class="designer-avatar-fallback">
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
            <span class="designer-badge"><i class="fa-solid fa-certificate"></i> ${badgeText}</span>
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

  const totalPages = Math.ceil(filteredDesigners.length / pageSize) || 1;

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
  const totalPages = Math.ceil(filteredDesigners.length / pageSize) || 1;
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
    countBadge.textContent = filteredDesigners.length;
  }

  if (!infoEl) return;

  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

  if (filteredDesigners.length === 0) {
    infoEl.textContent = isEn ? 'Showing 0 entries' : 'कुनै नतिजा फेला परेन';
    return;
  }

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, filteredDesigners.length);
  const total = filteredDesigners.length;

  infoEl.textContent = isEn
    ? `Showing ${start} to ${end} of ${total} entries`
    : `प्रविष्टि ${start} देखि ${end} सम्म देखाउँदै (जम्मा ${total} मध्ये)`;
}

/**
 * Export current dataset to Excel-compatible CSV file (UTF-8 BOM encoded)
 */
function exportToExcelCSV() {
  const dataToExport = filteredDesigners.length > 0 ? filteredDesigners : allDesigners;
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
    const sn = item.number || (index + 1);
    const name = `"${(item.name || '').replace(/"/g, '""')}"`;
    const address = `"${(item.address || '').replace(/"/g, '""')}"`;
    const email = `"${(item.email || '').replace(/"/g, '""')}"`;
    const phone = `"${(item.phone || '').replace(/"/g, '""')}"`;

    csvRows.push([sn, name, address, email, phone].join(','));
  });

  const csvContent = '\uFEFF' + csvRows.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Kageshwori_Manohara_EBPS_Designers_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
