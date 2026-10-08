/**
 * Kageshwori Manohara Municipality - E-BPS
 * Designer List Management Controller
 * Strictly fetches live data from https://192.168.1.73:8444/ebps/designer-list/fetch
 * NO static data or fallback files.
 */

const API_URL = 'https://192.168.1.73:8444/ebps/designer-list/fetch';

let allDesigners = [];
let filteredDesigners = [];
let currentPage = 1;
let pageSize = 10;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadDesignerData();
});

/**
 * Fetch data strictly from the backend API endpoint
 */
async function loadDesignerData() {
  const loader = document.getElementById('designerLoader');
  const errorMsg = document.getElementById('designerErrorMessage');
  const tableWrap = document.getElementById('designerTableWrap');
  const statusBadge = document.getElementById('apiStatusBadge');

  if (loader) loader.style.display = 'flex';
  if (errorMsg) errorMsg.style.display = 'none';
  if (tableWrap) tableWrap.style.display = 'none';

  if (statusBadge) {
    statusBadge.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> सर्भरबाट लोड हुँदैछ (Connecting: 192.168.1.73:8444)...';
    statusBadge.className = 'status-badge';
  }

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
      showError(data.Error || 'सर्भरबाट कुनै प्राविधिक डेटा प्राप्त भएन (No Data Found in response).');
      return;
    }

    allDesigners = data.data;

    if (statusBadge) {
      statusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> प्रत्यक्ष सर्भरबाट लोड (Live API: 192.168.1.73:8444)';
      statusBadge.className = 'status-badge status-live';
    }

    if (tableWrap) tableWrap.style.display = 'block';
    applyFilterAndRender();

  } catch (err) {
    if (loader) loader.style.display = 'none';

    if (statusBadge) {
      statusBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> सर्भर सम्पर्क हुन सकेन (Connection Failed)';
      statusBadge.className = 'status-badge';
      statusBadge.style.background = 'rgba(239, 68, 68, 0.2)';
      statusBadge.style.color = '#fca5a5';
      statusBadge.style.border = '1px solid rgba(239, 68, 68, 0.4)';
    }

    const isSslOrNetworkError = (err.message && err.message.includes('Failed to fetch')) || err.name === 'TypeError';

    let errorDetail = `
      <div style="font-weight: 700; font-size: 1rem; margin-bottom: 8px;">
        <i class="fa-solid fa-circle-exclamation"></i> API बाट तथ्याङ्क तान्न सकिएन (Error fetching data)
      </div>
      <div style="font-size: 0.88rem; margin-bottom: 12px; color: #4b5563;">
        <strong>लक्ष्य URL:</strong> <code>${API_URL}</code><br>
        <strong>विवरण:</strong> ${err.message || err}
      </div>
    `;

    if (isSslOrNetworkError) {
      errorDetail += `
        <div style="font-size: 0.85rem; background: #fff; padding: 12px; border-radius: 6px; border: 1px dashed #fca5a5; text-align: left; margin-bottom: 12px; color: #374151;">
          <strong><i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> सम्भावित कारण र समाधान:</strong><br>
          १. सर्भर <code>https://192.168.1.73:8444</code> मा सेल्फ-साइन्ड (Self-Signed) SSL सर्टिफिकेट प्रयोग भएको हुनसक्छ।<br>
          २. कृपया नयाँ ट्याबमा सिधै यो लिङ्क खोल्नुहोस्: <a href="${API_URL}" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${API_URL}</a> र <strong>"Advanced &rarr; Proceed (unsafe)"</strong> मा क्लिक गरी सर्टिफिकेट स्वीकार गर्नुहोस्।<br>
          ३. त्यसपछि तलको बटन थिचेर पुनः प्रयास गर्नुहोस्।
        </div>
      `;
    }

    errorDetail += `
      <button type="button" onclick="loadDesignerData()" style="background: #dc2626; color: #fff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">
        <i class="fa-solid fa-rotate-right"></i> पुनः प्रयास गर्नुहोस् (Retry Fetch)
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

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredDesigners.length);
  const pageItems = filteredDesigners.slice(startIndex, endIndex);

  tbody.innerHTML = pageItems.map((item, index) => {
    const globalIndex = startIndex + index + 1;
    const serialNumber = item.number || globalIndex;
    const displayName = (!item.name || item.name.trim() === '-' || item.name.trim() === '')
      ? 'परामर्शदाता (Registered Designer)'
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
            <span class="designer-badge"><i class="fa-solid fa-certificate"></i> प्रमाणित प्राविधिक</span>
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

  let html = '';

  html += `
    <button class="page-btn page-nav-btn ${currentPage === 1 ? 'disabled' : ''}" 
            onclick="changePage(${currentPage - 1})" 
            ${currentPage === 1 ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-left"></i> Previous
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
      Next <i class="fa-solid fa-chevron-right"></i>
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

  const tableCard = document.querySelector('.designer-report-card');
  if (tableCard) {
    tableCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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

  if (filteredDesigners.length === 0) {
    infoEl.textContent = 'कुनै नतिजा फेला परेन (Showing 0 entries)';
    return;
  }

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, filteredDesigners.length);
  const total = filteredDesigners.length;

  infoEl.textContent = `प्रविष्टि ${start} देखि ${end} सम्म देखाउँदै (जम्मा ${total} मध्ये) | Showing ${start} to ${end} of ${total} entries`;
}

/**
 * Export current dataset to Excel-compatible CSV file (UTF-8 BOM encoded)
 */
function exportToExcelCSV() {
  const dataToExport = filteredDesigners.length > 0 ? filteredDesigners : allDesigners;
  if (dataToExport.length === 0) {
    alert('डाउनलोड गर्न कुनै तथ्याङ्क छैन। (No data to export)');
    return;
  }

  const headers = ['क्र.सं. (S.N.)', 'नाम (Designer Name)', 'ठेगाना (Address)', 'इमेल (Email)', 'सम्पर्क नं (Phone)'];
  
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
  link.setAttribute('download', `Kageshwori_Manohara_EBPS_Registered_Designers_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
