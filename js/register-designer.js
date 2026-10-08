/**
 * Kageshwori Manohara Municipality - E-BPS
 * Register Designer (Sign Up) Form Controller
 * Strictly adheres to municipal E-BPS requirements with modern UX & validation
 */

let currentCaptchaText = '';

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationMethodToggle();
  initFileUploadHandlers();
  initCaptchaGenerator();
  initFormSubmission();

  window.addEventListener('languageChanged', (e) => {
    onLanguageChanged(e.detail.lang);
  });
});

/**
 * Toggle sections based on Registration Method:
 * - 'nec': Hides Proprietor Details and Proprietor Documents
 * - 'consultancy': Shows Proprietor Details and Proprietor Documents
 */
function initRegistrationMethodToggle() {
  const methodSelect = document.getElementById('regMethodSelect');
  const proprietorDetailsSec = document.getElementById('proprietorDetailsSection');
  const proprietorDocsSec = document.getElementById('proprietorDocsSection');
  const firmNameGroup = document.getElementById('firmNameGroup');

  if (!methodSelect) return;

  function updateVisibility() {
    const val = methodSelect.value;
    if (val === 'consultancy') {
      if (proprietorDetailsSec) proprietorDetailsSec.style.display = 'block';
      if (proprietorDocsSec) proprietorDocsSec.style.display = 'block';
      if (firmNameGroup) firmNameGroup.querySelector('.req-star').style.display = 'inline';
    } else {
      if (proprietorDetailsSec) proprietorDetailsSec.style.display = 'none';
      if (proprietorDocsSec) proprietorDocsSec.style.display = 'none';
      if (firmNameGroup) firmNameGroup.querySelector('.req-star').style.display = 'none';
    }
  }

  methodSelect.addEventListener('change', updateVisibility);
  updateVisibility();
}

/**
 * Handle custom file upload triggers and validate < 500 KB limit
 */
function initFileUploadHandlers() {
  const fileInputs = document.querySelectorAll('input[type="file"].custom-file-input');

  fileInputs.forEach(input => {
    const parent = input.closest('.file-upload-item');
    if (!parent) return;

    const btn = parent.querySelector('.btn-file-custom');
    const statusText = parent.querySelector('.file-chosen-status');

    if (btn) {
      btn.addEventListener('click', () => {
        input.click();
      });
    }

    input.addEventListener('change', () => {
      if (!input.files || input.files.length === 0) {
        if (statusText) {
          const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
          statusText.textContent = isEn ? 'No file chosen' : 'कुनै फाइल छानिएको छैन';
          statusText.classList.remove('has-file');
        }
        return;
      }

      const file = input.files[0];
      const maxSizeBytes = 500 * 1024; // 500 KB limit as mandated

      if (file.size > maxSizeBytes) {
        const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
        alert(isEn 
          ? `File "${file.name}" exceeds maximum allowed size of 500 KB (${(file.size / 1024).toFixed(1)} KB). Please choose a smaller file.`
          : `फाइल "${file.name}" ५०० KB भन्दा ठूलो छ (${(file.size / 1024).toFixed(1)} KB)। कृपया ५०० KB भन्दा सानो फाइल छान्नुहोस्।`);
        input.value = '';
        if (statusText) {
          statusText.textContent = isEn ? 'File too large (> 500 KB)' : 'फाइल ५०० KB भन्दा ठूलो भयो';
          statusText.classList.remove('has-file');
          statusText.style.color = '#dc2626';
        }
        return;
      }

      const sizeKb = (file.size / 1024).toFixed(1);
      if (statusText) {
        statusText.textContent = `${file.name} (${sizeKb} KB)`;
        statusText.classList.add('has-file');
        statusText.style.color = '#047857';
      }
    });
  });
}

/**
 * Generate randomized alphanumeric captcha
 */
function initCaptchaGenerator() {
  const badge = document.getElementById('captchaBadge');
  const refreshBtn = document.getElementById('captchaRefreshBtn');

  function generateCaptcha() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptchaText = result;

    if (badge) {
      badge.textContent = result.split('').join(' ');
    }
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', generateCaptcha);
  }

  generateCaptcha();
}

/**
 * Handle form submission validation & confirmation
 */
function initFormSubmission() {
  const form = document.getElementById('designerRegistrationForm');
  const resetBtn = document.getElementById('btnResetForm');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
      if (confirm(isEn ? 'Are you sure you want to reset the form?' : 'के तपाईं फारम खाली गर्न निश्चित हुनुहुन्छ?')) {
        form.reset();
        document.querySelectorAll('.file-chosen-status').forEach(s => {
          s.textContent = isEn ? 'No file chosen' : 'कुनै फाइल छानिएको छैन';
          s.classList.remove('has-file');
          s.style.color = '#64748b';
        });
        const methodSelect = document.getElementById('regMethodSelect');
        if (methodSelect) {
          methodSelect.dispatchEvent(new Event('change'));
        }
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

    // 1. Check Registration Method
    const methodSelect = document.getElementById('regMethodSelect');
    if (!methodSelect || !methodSelect.value) {
      alert(isEn ? 'Please select a Registration Method.' : 'कृपया दर्ता प्रक्रिया छान्नुहोस्।');
      if (methodSelect) methodSelect.focus();
      return;
    }

    // 2. Check Designer Type
    const designerTypeSelect = document.getElementById('designerTypeSelect');
    if (!designerTypeSelect || !designerTypeSelect.value) {
      alert(isEn ? 'Please select a Designer Type.' : 'कृपया डिजाइनर प्रकार छान्नुहोस्।');
      if (designerTypeSelect) designerTypeSelect.focus();
      return;
    }

    // 3. Check NEC Number
    const necNo = document.getElementById('necCouncilNo');
    if (!necNo || !necNo.value.trim()) {
      alert(isEn ? 'Please enter your Nepal Engineering Council Number.' : 'कृपया नेपाल इन्जिनियरिङ्ग परिषद् नम्बर लेख्नुहोस्।');
      if (necNo) necNo.focus();
      return;
    }

    // 4. Check Designer Name
    const designerNameEn = document.getElementById('designerNameEn');
    if (!designerNameEn || !designerNameEn.value.trim()) {
      alert(isEn ? "Please enter Designer's Full Name (In English)." : 'कृपया डिजाइनरको पूरा नाम (अंग्रेजीमा) लेख्नुहोस्।');
      if (designerNameEn) designerNameEn.focus();
      return;
    }

    // 5. Check Mobile and Email
    const mobileNo = document.getElementById('designerMobile');
    if (!mobileNo || !mobileNo.value.trim()) {
      alert(isEn ? 'Please enter Designer Mobile Number.' : 'कृपया मोबाइल नम्बर प्रविष्ट गर्नुहोस्।');
      if (mobileNo) mobileNo.focus();
      return;
    }

    const email = document.getElementById('designerEmail');
    if (!email || !email.value.trim()) {
      alert(isEn ? 'Please enter Designer Email Address.' : 'कृपया इमेल ठेगाना प्रविष्ट गर्नुहोस्।');
      if (email) email.focus();
      return;
    }

    // 6. Check Captcha
    const captchaInput = document.getElementById('captchaInput');
    if (!captchaInput || captchaInput.value.trim().toUpperCase() !== currentCaptchaText.toUpperCase()) {
      alert(isEn ? 'Invalid Captcha Code. Please try again.' : 'क्याप्चा कोड मिलेन। कृपया पुनः प्रयास गर्नुहोस्।');
      if (captchaInput) {
        captchaInput.value = '';
        captchaInput.focus();
      }
      return;
    }

    // 7. Check Declaration Checkbox
    const declarationCheck = document.getElementById('declarationCheckbox');
    if (!declarationCheck || !declarationCheck.checked) {
      alert(isEn 
        ? 'Please agree to the legal declaration checkbox before submitting.' 
        : 'कृपया फारम पेश गर्नुअघि घोषणापत्रको सर्तमा टिक लगाउनुहोस्।');
      if (declarationCheck) declarationCheck.focus();
      return;
    }

    // All valid - Generate tracking reference code
    const randomRef = 'KM-EBPS-REG-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    showSuccessModal(randomRef);
  });
}

/**
 * Display confirmation modal upon successful application submission
 */
function showSuccessModal(refCode) {
  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

  const title = isEn ? 'Application Submitted Successfully!' : 'आवेदन सफलतापूर्वक दर्ता भयो!';
  const desc = isEn 
    ? `Your application has been registered into the E-BPS system of Kageshwori Manohara Municipality.<br><br><strong>Application Reference No:</strong> <code style="color: #0a5233; font-size: 1.1rem; background: #e2e8f0; padding: 3px 8px; border-radius: 4px;">${refCode}</code><br><br>You will be notified via email and SMS once the municipal technical team verifies your documents.`
    : `तपाईंको प्राविधिक दर्ता आवेदन कागेश्वरी मनोहरा नगरपालिका ई-विपिएस प्रणालीमा सफलतापूर्वक दर्ता भएको छ।<br><br><strong>आवेदन दर्ता नम्बर (Reference No):</strong> <code style="color: #0a5233; font-size: 1.1rem; background: #e2e8f0; padding: 3px 8px; border-radius: 4px;">${refCode}</code><br><br>नगरपालिकाको प्राविधिक शाखाबाट कागजात प्रमाणीकरण भएपछि तपाईंलाई इमेल र एसएमएस मार्फत जानकारी गराइनेछ।`;

  const overlay = document.createElement('div');
  overlay.className = 'reg-modal-overlay';
  overlay.innerHTML = `
    <div class="reg-modal-card">
      <div class="modal-icon-success">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <h3 class="modal-title-success">${title}</h3>
      <div class="modal-desc-success">${desc}</div>
      <div style="display: flex; justify-content: center; gap: 12px;">
        <button type="button" class="btn-modal-close" onclick="window.print()">
          <i class="fa-solid fa-print"></i> ${isEn ? 'Print Slip' : 'रसिद छाप्नुहोस्'}
        </button>
        <button type="button" class="btn-modal-close" style="background: #334155;" onclick="this.closest('.reg-modal-overlay').remove(); window.location.href='index.html';">
          ${isEn ? 'Go to Home' : 'गृहपृष्ठमा जानुहोस्'}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

/**
 * Handle dynamic language updates for file chosen status and captcha
 */
function onLanguageChanged(lang) {
  const isEn = lang === 'en';
  document.querySelectorAll('.file-chosen-status:not(.has-file)').forEach(el => {
    el.textContent = isEn ? 'No file chosen' : 'कुनै फाइल छानिएको छैन';
  });
}
