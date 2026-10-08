/**
 * Kageshwori Manohara Municipality - E-BPS
 * Register Designer Form Controller
 * Modern UX, Drag-and-Drop File Uploads, Image Preview, Validation & Bilingual Support
 */

let currentCaptchaText = '';

document.addEventListener('DOMContentLoaded', () => {
  initRegistrationMethodToggle();
  initDropzoneUploads();
  initCaptchaGenerator();
  initFormSubmission();

  window.addEventListener('languageChanged', (e) => {
    onLanguageChanged(e.detail.lang);
  });
});

/**
 * Toggle sections based on Registration Method:
 * - 'nec': Individual technical practitioner (Hides Proprietor Details and Proprietor Documents)
 * - 'consultancy': Firm (Shows Proprietor Details and Proprietor Documents)
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
      if (firmNameGroup) {
        const star = firmNameGroup.querySelector('.req-star');
        if (star) star.style.display = 'inline';
      }
    } else {
      if (proprietorDetailsSec) proprietorDetailsSec.style.display = 'none';
      if (proprietorDocsSec) proprietorDocsSec.style.display = 'none';
      if (firmNameGroup) {
        const star = firmNameGroup.querySelector('.req-star');
        if (star) star.style.display = 'none';
      }
    }
  }

  methodSelect.addEventListener('change', updateVisibility);
  updateVisibility();
}

/**
 * Modern tactile dropzone file upload widget:
 * - Click anywhere to browse
 * - Drag and drop files directly
 * - Automatic image thumbnail preview for Designer Image
 * - Enforces < 500 KB limit
 * - Clear / remove button
 */
function initDropzoneUploads() {
  const dropzones = document.querySelectorAll('.upload-dropzone-box');

  dropzones.forEach(dropzone => {
    const input = dropzone.querySelector('input[type="file"]');
    const defaultView = dropzone.querySelector('.dropzone-default-view');
    const previewView = dropzone.querySelector('.dropzone-preview-view');
    const removeBtn = dropzone.querySelector('.btn-dropzone-remove');
    const fileNameEl = dropzone.querySelector('.preview-filename');
    const fileSizeEl = dropzone.querySelector('.preview-filesize');
    const previewImg = dropzone.querySelector('.dropzone-preview-img');

    if (!input) return;

    // Trigger file dialog on dropzone click (unless clicking remove button)
    dropzone.addEventListener('click', (e) => {
      if (e.target.closest('.btn-dropzone-remove')) return;
      input.click();
    });

    // Keyboard accessibility (Enter or Space)
    dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });

    // Drag & Drop events
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('drag-over');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        input.files = dt.files;
        handleSelectedFile(input.files[0]);
      }
    });

    // Native file input change
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) {
        handleSelectedFile(input.files[0]);
      } else {
        resetDropzone();
      }
    });

    // Remove file button
    if (removeBtn) {
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetDropzone();
      });
    }

    function handleSelectedFile(file) {
      const maxSizeBytes = 500 * 1024; // 500 KB limit
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

      if (file.size > maxSizeBytes) {
        alert(isEn
          ? `File "${file.name}" exceeds maximum allowed size of 500 KB (${(file.size / 1024).toFixed(1)} KB). Please choose a smaller file.`
          : `फाइल "${file.name}" ५०० KB भन्दा ठूलो छ (${(file.size / 1024).toFixed(1)} KB)। कृपया ५०० KB भन्दा सानो फाइल छान्नुहोस्।`);
        resetDropzone();
        return;
      }

      const sizeKb = (file.size / 1024).toFixed(1);
      if (fileNameEl) fileNameEl.textContent = file.name;
      if (fileSizeEl) fileSizeEl.textContent = `${sizeKb} KB`;

      // If this is an image file and preview element exists, render thumbnail
      if (previewImg && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }

      if (defaultView) defaultView.style.display = 'none';
      if (previewView) previewView.style.display = 'flex';
      dropzone.classList.add('has-file-selected');
    }

    function resetDropzone() {
      input.value = '';
      if (previewImg) previewImg.src = '';
      if (fileNameEl) fileNameEl.textContent = '';
      if (fileSizeEl) fileSizeEl.textContent = '';
      if (defaultView) defaultView.style.display = 'flex';
      if (previewView) previewView.style.display = 'none';
      dropzone.classList.remove('has-file-selected');
    }

    // Attach reset function to element for easy external resets
    dropzone._resetDropzone = resetDropzone;
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
 * Handle form submission validation & confirmation modal
 */
function initFormSubmission() {
  const form = document.getElementById('designerRegistrationForm');
  const resetBtn = document.getElementById('btnResetForm');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
      if (confirm(isEn ? 'Are you sure you want to reset the form?' : 'के तपाईं फारम खाली गर्न निश्चित हुनुहुन्छ?')) {
        form.reset();
        document.querySelectorAll('.upload-dropzone-box').forEach(dz => {
          if (typeof dz._resetDropzone === 'function') {
            dz._resetDropzone();
          }
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

    // If Consultancy Firm, validate Firm & Proprietor fields
    if (methodSelect.value === 'consultancy') {
      const firmName = document.getElementById('firmNameInput');
      if (!firmName || !firmName.value.trim()) {
        alert(isEn ? 'Please enter Consultancy Firm Name.' : 'कृपया परामर्शदाता फर्मको नाम लेख्नुहोस्।');
        if (firmName) firmName.focus();
        return;
      }

      const propName = document.getElementById('propName');
      if (!propName || !propName.value.trim()) {
        alert(isEn ? "Please enter Proprietor's Full Name." : 'कृपया प्रोपराइटरको पूरा नाम लेख्नुहोस्।');
        if (propName) propName.focus();
        return;
      }
    }

    // 4. Check Designer Name
    const designerName = document.getElementById('designerName');
    if (!designerName || !designerName.value.trim()) {
      alert(isEn ? "Please enter Designer's Full Name." : 'कृपया डिजाइनरको पूरा नाम लेख्नुहोस्।');
      if (designerName) designerName.focus();
      return;
    }

    // 5. Check Designer Image upload
    const designerImageInput = document.getElementById('designerImageInput');
    if (!designerImageInput || !designerImageInput.files || designerImageInput.files.length === 0) {
      alert(isEn ? 'Please upload Designer Image.' : 'कृपया डिजाइनरको फोटो अपलोड गर्नुहोस्।');
      const designerDropzone = document.getElementById('designerImageDropzone');
      if (designerDropzone) designerDropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // 6. Check Citizenship Number
    const citizenshipNo = document.getElementById('designerCitizenshipNo');
    if (!citizenshipNo || !citizenshipNo.value.trim()) {
      alert(isEn ? 'Please enter Citizenship Number.' : 'कृपया नागरिकता प्रमाणपत्र नम्बर लेख्नुहोस्।');
      if (citizenshipNo) citizenshipNo.focus();
      return;
    }

    // 7. Check Mobile & Email
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

    // 8. Check Captcha
    const captchaInput = document.getElementById('captchaInput');
    if (!captchaInput || captchaInput.value.trim().toUpperCase() !== currentCaptchaText.toUpperCase()) {
      alert(isEn ? 'Invalid Captcha Code. Please try again.' : 'क्याप्चा कोड मिलेन। कृपया पुनः प्रयास गर्नुहोस्।');
      if (captchaInput) {
        captchaInput.value = '';
        captchaInput.focus();
      }
      return;
    }

    // 9. Check Declaration Checkbox
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
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
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
 * Handle dynamic language updates
 */
function onLanguageChanged(lang) {
  // Handled automatically through data-i18n attributes
}
