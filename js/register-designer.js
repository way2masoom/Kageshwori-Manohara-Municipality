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

    // 2. Check Registration Class (formerly Designer Type)
    const designerClassSelect = document.getElementById('designerClassSelect') || document.getElementById('designerTypeSelect');
    if (!designerClassSelect || !designerClassSelect.value) {
      alert(isEn ? 'Please select a Class (वर्ग).' : 'कृपया वर्ग (Class) छान्नुहोस्।');
      if (designerClassSelect) designerClassSelect.focus();
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

      const firmPan = document.getElementById('firmPan');
      if (!firmPan || !firmPan.value.trim()) {
        alert(isEn ? 'Please enter Firm PAN/VAT ID.' : 'कृपया फर्मको प्यान वा भ्याट नम्बर लेख्नुहोस्।');
        if (firmPan) firmPan.focus();
        return;
      }

      // Check Company Registration Certificate for Consultancy
      const companyRegCert = document.getElementById('companyRegCertInput');
      if (!companyRegCert || !companyRegCert.files || companyRegCert.files.length === 0) {
        alert(isEn ? 'Please upload Company Registration Certificate (*).' : 'कृपया कम्पनी दर्ता प्रमाणपत्र (*) अपलोड गर्नुहोस्।');
        const compDz = companyRegCert ? companyRegCert.closest('.upload-dropzone-box') : null;
        if (compDz) compDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Check PAN / VAT Registration Certificate for Consultancy
      const panVatCert = document.getElementById('panVatCertInput');
      if (!panVatCert || !panVatCert.files || panVatCert.files.length === 0) {
        alert(isEn ? 'Please upload PAN / VAT Certificate (*).' : 'कृपया पान / भ्याट दर्ता प्रमाणपत्र (*) अपलोड गर्नुहोस्।');
        const panDz = panVatCert ? panVatCert.closest('.upload-dropzone-box') : null;
        if (panDz) panDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }

    // 4. Check Designer Name (English)
    const designerName = document.getElementById('designerName');
    if (!designerName || !designerName.value.trim()) {
      alert(isEn ? "Please enter Designer's Full Name in English." : 'कृपया डिजाइनरको अंग्रेजी नाम लेख्नुहोस्।');
      if (designerName) designerName.focus();
      return;
    }

    // Check Designer Name in Nepali (Name2)
    const designerNameNepali = document.getElementById('designerNameNepali');
    if (!designerNameNepali || !designerNameNepali.value.trim()) {
      alert(isEn ? "Please enter Designer's Full Name in Nepali (Name2)." : 'कृपया डिजाइनरको पूरा नाम नेपालीमा (Name2) लेख्नुहोस्।');
      if (designerNameNepali) designerNameNepali.focus();
      return;
    }

    // 5. Check Designer Image upload (ad_image_ID)
    const designerImageInput = document.getElementById('designerImageInput');
    if (!designerImageInput || !designerImageInput.files || designerImageInput.files.length === 0) {
      alert(isEn ? 'Please upload Designer Photo (*).' : 'कृपया डिजाइनरको फोटो (*) अपलोड गर्नुहोस्।');
      const designerDropzone = document.getElementById('designerImageDropzone');
      if (designerDropzone) designerDropzone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // 6. Check Citizenship Number (citizen_no)
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

    // Check Designer PAN
    const designerPan = document.getElementById('designerPan');
    if (!designerPan || !designerPan.value.trim()) {
      alert(isEn ? 'Please enter Designer PAN Number / ID.' : 'कृपया डिजाइनरको प्यान नम्बर लेख्नुहोस्।');
      if (designerPan) designerPan.focus();
      return;
    }

    // 8. Check Required Designer Documents
    // Engineer Certificate (certificate)
    const necCert = document.getElementById('necCertInput');
    if (!necCert || !necCert.files || necCert.files.length === 0) {
      alert(isEn ? 'Please upload Nepal Engineering Council Certificate (*).' : 'कृपया नेपाल इन्जिनियरिङ्ग परिषद् प्रमाणपत्र (*) अपलोड गर्नुहोस्।');
      const necDz = necCert ? necCert.closest('.upload-dropzone-box') : null;
      if (necDz) necDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Transcript / Bachelor Degree (education_degree)
    const bachelorTranscript = document.getElementById('bachelorTranscriptInput');
    if (!bachelorTranscript || !bachelorTranscript.files || bachelorTranscript.files.length === 0) {
      alert(isEn ? 'Please upload Transcript / Education Degree (*).' : 'कृपया शैक्षिक ट्रान्सक्रिप्ट (Transcript) (*) अपलोड गर्नुहोस्।');
      const bachDz = bachelorTranscript ? bachelorTranscript.closest('.upload-dropzone-box') : null;
      if (bachDz) bachDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Company Registration (registercompany)
    const compRegDoc = document.getElementById('companyRegDocInput');
    const compRegCert = document.getElementById('companyRegCertInput');
    const hasCompanyReg = (compRegDoc && compRegDoc.files && compRegDoc.files.length > 0) ||
                          (compRegCert && compRegCert.files && compRegCert.files.length > 0);
    if (!hasCompanyReg && methodSelect.value === 'consultancy') {
      alert(isEn ? 'Please upload Company Registration Document (*).' : 'कृपया कम्पनी दर्ता प्रमाणपत्र (*) अपलोड गर्नुहोस्।');
      const compDz = compRegDoc ? compRegDoc.closest('.upload-dropzone-box') : (compRegCert ? compRegCert.closest('.upload-dropzone-box') : null);
      if (compDz) compDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Citizenship Document (citizenship_photo)
    const citizenshipDoc = document.getElementById('citizenshipDocInput');
    if (!citizenshipDoc || !citizenshipDoc.files || citizenshipDoc.files.length === 0) {
      alert(isEn ? 'Please upload Citizenship Certificate Photos (*).' : 'कृपया नागरिकता प्रमाणपत्र फोटो (*) अपलोड गर्नुहोस्।');
      const citDz = citizenshipDoc ? citizenshipDoc.closest('.upload-dropzone-box') : null;
      if (citDz) citDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Designer Signature Photo (signature_ID)
    const designerSignature = document.getElementById('designerSignatureInput');
    if (!designerSignature || !designerSignature.files || designerSignature.files.length === 0) {
      alert(isEn ? 'Please upload Designer Signature Image (*).' : 'कृपया डिजाइनरको हस्ताक्षर फोटो (*) अपलोड गर्नुहोस्।');
      const sigDz = designerSignature ? designerSignature.closest('.upload-dropzone-box') : null;
      if (sigDz) sigDz.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // 9. Check Captcha
    const captchaInput = document.getElementById('captchaInput');
    if (!captchaInput || captchaInput.value.trim().toUpperCase() !== currentCaptchaText.toUpperCase()) {
      alert(isEn ? 'Invalid Captcha Code. Please try again.' : 'क्याप्चा कोड मिलेन। कृपया पुनः प्रयास गर्नुहोस्।');
      if (captchaInput) {
        captchaInput.value = '';
        captchaInput.focus();
      }
      return;
    }

    // 10. Check Declaration Checkbox
    const declarationCheck = document.getElementById('declarationCheckbox');
    if (!declarationCheck || !declarationCheck.checked) {
      alert(isEn
        ? 'Please agree to the legal declaration checkbox before submitting.'
        : 'कृपया फारम पेश गर्नुअघि घोषणापत्रको सर्तमा टिक लगाउनुहोस्।');
      if (declarationCheck) declarationCheck.focus();
      return;
    }

    // All valid - Prepare Data for Backend
    const submitBtn = document.getElementById('btnSubmitForm');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isEn ? 'Submitting to Server...' : 'सर्भरमा दर्ता हुँदैछ...'}`;
    }

    // Helper: Convert File to Base64 Data URL
    function getFileBase64(fileInput) {
      return new Promise((resolve) => {
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
          resolve('');
          return;
        }
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve('');
        reader.readAsDataURL(file);
      });
    }

    // Generate tracking reference code
    const generatedRef = 'KM-EBPS-REG-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

    // Concatenate permanent address
    const pDist = (document.getElementById('permDistrict') && document.getElementById('permDistrict').value.trim()) || '';
    const pMun = (document.getElementById('permMunicipality') && document.getElementById('permMunicipality').value.trim()) || '';
    const pWard = (document.getElementById('permWard') && document.getElementById('permWard').value.trim()) || '';
    const pWardText = pWard ? (isEn ? `Ward No. ${pWard}` : `वडा नं. ${pWard}`) : '';
    const permAddress = [pDist, pMun, pWardText].filter(Boolean).join(', ');

    // Concatenate temporary address
    const tDist = (document.getElementById('tempDistrict') && document.getElementById('tempDistrict').value.trim()) || '';
    const tMun = (document.getElementById('tempMunicipality') && document.getElementById('tempMunicipality').value.trim()) || '';
    const tWard = (document.getElementById('tempWard') && document.getElementById('tempWard').value.trim()) || '';
    const tWardText = tWard ? (isEn ? `Ward No. ${tWard}` : `वडा नं. ${tWard}`) : '';
    const tempAddress = [tDist, tMun, tWardText].filter(Boolean).join(', ') || permAddress;

    // Collect asynchronous Base64 file readings
    Promise.all([
      getFileBase64(document.getElementById('necCertInput')),           // certificate (engineer certificate)
      getFileBase64(document.getElementById('citizenshipDocInput')),    // citizenship_photo (citizenship photos)
      getFileBase64(document.getElementById('companyRegDocInput')),     // registercompany (company registration doc)
      getFileBase64(document.getElementById('companyRegCertInput')),    // registercompany fallback
      getFileBase64(document.getElementById('designerImageInput')),     // ad_image_ID (designer photo)
      getFileBase64(document.getElementById('bachelorTranscriptInput')),// education_degree (transcript)
      getFileBase64(document.getElementById('designerSignatureInput')), // signature_ID (person signature image)
      getFileBase64(document.getElementById('consultancyStampInput')),  // stamp_ID (consultancy stamp image)
      getFileBase64(document.getElementById('panVatCertInput'))         // pan_vat_certificate
    ]).then(async ([
      necCertBase64,
      citizenDocBase64,
      compRegDocBase64,
      compRegCertBase64,
      photoBase64,
      transcriptBase64,
      signatureBase64,
      stampBase64,
      panVatBase64
    ]) => {

      const regMethod = methodSelect.value;
      const consultancyName = (regMethod === 'consultancy' && document.getElementById('firmNameInput'))
        ? document.getElementById('firmNameInput').value.trim()
        : ((document.getElementById('firmNameInput') && document.getElementById('firmNameInput').value.trim()) || '');
      const panNo = (regMethod === 'consultancy' && document.getElementById('firmPan') && document.getElementById('firmPan').value.trim())
        ? document.getElementById('firmPan').value.trim()
        : (document.getElementById('designerPan') ? document.getElementById('designerPan').value.trim() : '');
      const companyRegBase64 = compRegDocBase64 || compRegCertBase64 || '';

      // Payload mapped to the exact database columns requested:
      // consultancy_name, citizen_no, ad_image_ID, registercompany, certificate,
      // citizenship_photo, education_degree, Name2, stamp_ID, signature_ID
      const payload = {
        name: designerName.value.trim(),
        Name: designerName.value.trim(),
        Name2: designerNameNepali.value.trim(),
        name2: designerNameNepali.value.trim(),
        citizen_no: citizenshipNo.value.trim(),
        consultancy_name: consultancyName,
        email: email.value.trim(),
        phone: mobileNo.value.trim(),
        nec_no: necNo.value.trim(),
        value: necNo.value.trim(),                    // For legacy model.getvalue()
        registration_class: (designerClassSelect ? designerClassSelect.value : ''), // Class A, B, C, D (stored in registration_class / UserPIN)
        userpin: (designerClassSelect ? designerClassSelect.value : ''),            // Maps to UserPIN in AD_USER
        pan_no: panNo,
        address: permAddress,                         // Permanent Address
        address1: tempAddress,                       // Temporary Address
        registration_no: generatedRef,

        // Required Database Column Mappings
        ad_image_ID: photoBase64,                     // Designer photo
        ad_image_id: photoBase64,
        photo: photoBase64,

        registercompany: companyRegBase64,           // Company registration

        certificate: necCertBase64,                  // Engineer certificate

        citizenship_photo: citizenDocBase64,         // Citizenship photos

        education_degree: transcriptBase64,          // Transcript
        transcript: transcriptBase64,

        signature_ID: signatureBase64,               // Person signature image
        signature_id: signatureBase64,

        stamp_ID: stampBase64,                       // Image of stamp / consult of stamp
        stamp_id: stampBase64,

        pan_vat_certificate: panVatBase64
      };

      // Dynamic API Endpoint URL auto-detection
      function resolveBackendUrl() {
        if (window.EBPS_API_URL) return window.EBPS_API_URL;
        const host = window.location.hostname || 'localhost';
        if (host === 'localhost' || host === '127.0.0.1') {
          return 'https://localhost:8444/ebps/ebpsuser';
        }
        return `https://${host}:8444/ebps/ebpsuser`;
      }

      const apiUrl = resolveBackendUrl();

      console.log(`[EBPS] Submitting registration POST to Java backend: ${apiUrl}`, payload);

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const rawText = await response.text();
        let resData = null;
        try {
          resData = JSON.parse(rawText);
        } catch (e) {
          // Response is plain text or HTML
        }

        if (response.ok && (!resData || resData.error !== true)) {
          const finalRef = (resData && (resData.ref_no || resData.registration_no)) || generatedRef;
          showSuccessModal(finalRef);
          form.reset();
          document.querySelectorAll('.upload-dropzone-box').forEach(dz => {
            if (typeof dz._resetDropzone === 'function') dz._resetDropzone();
          });
          initCaptchaGenerator();
        } else {
          const serverMsg = (resData && resData.message) ? resData.message : rawText.trim();
          const errorDetail = `Backend Server [${apiUrl}] responded with HTTP ${response.status} (${response.statusText}):\n\n${serverMsg || 'Unknown error'}`;
          console.error(errorDetail);
          alert((isEn ? 'Registration Failed:\n\n' : 'दर्ता प्रक्रिया असफल भयो:\n\n') + errorDetail);
        }
      } catch (networkError) {
        console.error(`[EBPS] Network error contacting ${apiUrl}:`, networkError);
        let hostName = 'localhost';
        try {
          hostName = new URL(apiUrl, window.location.href).hostname;
        } catch (_) {}

        const connectionMsg = isEn
          ? `Could not connect to Java Backend Server at:\n${apiUrl}\n\nReason: ${networkError.message}\n\nTroubleshooting steps:\n1. Ensure your Java Backend Server (Jetty/Eclipse) is actively RUNNING on port 8444.\n2. If your browser blocks self-signed SSL certificates:\n   - Open ${apiUrl} in a new browser tab\n   - Click "Advanced" -> "Proceed to ${hostName} (unsafe)"\n3. Return here and submit again.`
          : `ब्याकएन्ड सर्भर (${apiUrl}) मा सम्पर्क हुन सकेन।\n\nकारण: ${networkError.message}\n\nसमाधानका उपायहरू:\n१. तपाईंको जाभा ब्याकएन्ड सर्भर (Jetty/Eclipse) पोर्ट 8444 मा चालू (Running) रहेको यकिन गर्नुहोस्।\n२. यदि ब्राउजरमा SSL / Certificate रोकिएको छ भने:\n   - नयाँ ट्याबमा सिधै यो खोल्नुहोस्: ${apiUrl}\n   - "Advanced" ➔ "Proceed to ${hostName} (unsafe)" क्लिक गर्नुहोस्\n३. त्यसपछि यहाँ फर्किएर पुनः सबमिट (Submit) गर्नुहोस्।`;
        alert(connectionMsg);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }).catch(err => {
      console.error('File reading failed:', err);
      alert(isEn ? 'Error reading uploaded files. Please re-select the files.' : 'कागजात फाइल पढ्न समस्या भयो। कृपया फाइलहरू पुनः छान्नुहोस्।');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
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
