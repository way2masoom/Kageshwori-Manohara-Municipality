/**
 * E-BPS - Kageshwori Manohara Municipality
 * Frontend Controller, Multilingual Support & Modern Scroll Effects
 */

const TRANSLATIONS = {
  ne: {
    langBtnText: 'English',
    topPhone: '+९७७ ०१-४४५१२४२ / ४४५०९८६',
    topTollFree: 'टोल-फ्री: १६६००१२७७७७',
    navHome: 'गृहपृष्ठ',
    navAbout: 'हाम्रो बारेमा',
    navOwnerDocs: 'घरधनीको कागजातहरु',
    navMyaadThap: 'म्याद थप निवेदन',
    navLogin: 'लगइन',
    navSignUp: 'दर्ता',
    munTitle: 'कागेश्वरी मनोहरा नगरपालिका',
    munOffice: 'नगर कार्यपालिकाको कार्यालय',
    munLocation: 'डाँछी, काठमाडौं | बागमती प्रदेश',
    navWard: 'वडा विवरण',
    navReferences: 'सन्दर्भ सामग्री',
    navDesigners: 'प्राविधिक सूची',
    wardPrefix: 'वडा नं. ',
    bylawsDoc: 'भवन निर्माण मापदण्ड २०८०',
    nbcCode: 'राष्ट्रिय भवन संहिता (NBC 105)',
    docChecklist: 'आवश्यक कागजात चेकलिस्ट',
    feeRates: 'राजश्व तथा दस्तुर दररेट',
    digiSign: 'डिजिटल हस्ताक्षर निर्देशिका',
    
    // Modern Hero Translations
    heroPill: 'ई-विपिएस अनलाइन प्रणाली | कागेश्वरी मनोहरा',
    heroTitle1: 'सुरक्षित, व्यवस्थित र',
    heroTitleHighlight: 'डिजिटल भवन निर्माण',
    heroTitle2: 'इजाजत',
    heroDesc: 'कागेश्वरी मनोहरा नगरपालिकाको अत्याधुनिक ई-विपिएस (E-BPS) प्रणालीमार्फत घरको नक्सा पास आवेदन, प्राविधिक प्रमाणीकरण तथा निर्माण सम्पन्न प्रमाणपत्र अनलाइनमै प्राप्त गर्नुहोस्।',
    heroBtnApply: 'नयाँ नक्सा पास आवेदन',
    heroBtnBylaws: 'भवन निर्माण मापदण्ड २०८०',
    feat1: 'छिटो र पारदर्शी',
    feat2: 'NBC 105:2020 संहिता',
    feat3: '१००% कागज-रहित',
    badgeGov: 'ई-सुशासन सेवा',
    badgePermit: 'डिजिटल इजाजतपत्र',

    // About Section
    ebpsTitle: 'E-BPS',
    ebpsSubtitle: 'An application software system',
    ebpsP1: 'ई-विपिएस (E-BPS) कागेश्वरी मनोहरा नगरपालिकामा भवन निर्माण इजाजत प्रक्रियालाई पारदर्शी, छिटो र व्यवस्थित बनाउन लागू गरिएको विद्युतीय प्रणाली हो। यसले नेपाल राष्ट्रिय भवन संहिता (NBC 105:2020) र नगरपालिकाको भवन निर्माण मापदण्डको पूर्ण पालना सुनिश्चित गरी सुरक्षित र योजनाबद्ध सहरी विकासमा सहयोग पुर्‍याउँछ।',
    ebpsP2: 'यस प्रणालीमार्फत नगरबासी तथा सूचीकृत प्राविधिकहरूले घरमै बसी अनलाइनबाटै नक्सा दर्ता गर्न, स्थलगत सर्जिमिन स्थिति बुझ्न, १५ दिने सूचना प्रक्रिया तथा अन्तिम निर्माण सम्पन्न प्रमाणपत्र प्राप्त गर्न सक्दछन्।',
    btnReadMore: 'READ MORE >>',
    btnReadLess: 'SHOW LESS <<',

    // Cards Grid
    sectionProcessTitle: 'BUILDING PERMIT PROCESS INFORMATION',
    card1Title: 'Municipal Building Permit Process',
    card1Desc: 'कागेश्वरी मनोहरा नगरपालिका क्षेत्रभित्र जुनसुकै प्रकारका आवासीय वा व्यावसायिक भवन निर्माण गर्नका लागि आवश्यक अनलाइन नक्सा पास प्रक्रिया, चरणबद्ध नियम तथा स्थायी इजाजतका मापदण्डहरु।',
    card1Link: 'Read More',
    card2Title: 'Registered Designers',
    card2Desc: 'नगरपालिकामा आधिकारिक रूपमा सूचीकृत भएका अनुभवी सिभिल इन्जिनियर, आर्किटेक्ट, स्ट्रक्चरल कन्सल्ट्यान्ट तथा परामर्शदाता संस्थाहरूको अद्यावधिक नामावली र सम्पर्क विवरण।',
    card2Link: 'Read More',
    card3Title: 'बिल्डिङ बाई-लज (Building By-Laws)',
    card3Desc: 'कागेश्वरी मनोहरा नगरपालिका भवन निर्माण मापदण्ड २०८० अनुसार सेटब्याक (Setback), सडकको चौडाइ, जमिन कभरेज (Ground Coverage), FAR तथा राष्ट्रिय भवन संहिता NBC 105:2020।',
    card3Link: 'Read More',

    // Footer
    footerContactTitle: 'सम्पर्क ठेगाना',
    footerAddress: 'नगर कार्यपालिकाको कार्यालय, डाँछी, काठमाडौं',
    footerPhone: 'फोन: +९७थ ०१-४४५१२४२, ०१-४४५०९८६ | टोल-फ्री: १६६००१२७७७७',
    footerEmail: 'इमेल: info@kageshworimanoharamun.gov.np, er.kageshworimun@gmail.com',
    footerLinksTitle: 'द्रुत लिङ्कहरु',
    footerHelpdeskTitle: 'ई-विपिएस सहायता कक्ष',
    footerHoursTitle: 'कार्यालय समय:',
    footerHours1: 'आइतबार – बिहीबार: १०:०० AM – ५:०० PM',
    footerHours2: 'शुक्रबार: १०:०० AM – ३:०० PM',
    footerCopyright: '© सर्वाधिकार सुरक्षित २०८१ / 2026 - कागेश्वरी मनोहरा नगरपालिका'
  },
  en: {
    langBtnText: 'नेपाली',
    topPhone: '+977 01-4451242 / 4450986',
    topTollFree: 'Toll-Free: 16600127777',
    navHome: 'Home',
    navAbout: 'About Us',
    navOwnerDocs: 'Owner Documents',
    navMyaadThap: 'Myaad Thap Request',
    navLogin: 'Login',
    navSignUp: 'Sign Up',
    munTitle: 'Kageshwori Manohara Municipality',
    munOffice: 'Office of the Municipal Executive',
    munLocation: 'Danchhi, Kathmandu | Bagmati Province',
    navWard: 'Ward Information',
    navReferences: 'References',
    navDesigners: 'Designer List',
    wardPrefix: 'Ward No. ',
    bylawsDoc: 'Building By-Laws 2080',
    nbcCode: 'National Building Code (NBC 105)',
    docChecklist: 'Required Documents Checklist',
    feeRates: 'Revenue & Fee Structure',
    digiSign: 'Digital Signature Guidelines',

    // Modern Hero Translations
    heroPill: 'E-BPS Online Portal | Kageshwori Manohara',
    heroTitle1: 'Smart, Resilient &',
    heroTitleHighlight: 'Digital Building Permit',
    heroTitle2: 'System',
    heroDesc: 'Experience streamlined municipal building permit applications, online architectural scrutinies, transparent field verifications, and digital building completion certificates.',
    heroBtnApply: 'Apply for Permit Online',
    heroBtnBylaws: 'Municipal By-Laws 2080',
    feat1: 'Fast & Transparent',
    feat2: 'NBC 105:2020 Compliant',
    feat3: '100% Paperless',
    badgeGov: 'E-Governance',
    badgePermit: 'Digital Verification',

    // About Section
    ebpsTitle: 'E-BPS',
    ebpsSubtitle: 'An application software system',
    ebpsP1: 'E-BPS is an application software system which has been developed to assist municipalities to improve their current building permit process. It does this by ensuring the effective compliance of the NBC and BBL in urban regions, thus promoting safe building practices and planned urban development for the entire municipality.',
    ebpsP2: 'Through this digital platform, citizens and registered consultants can apply for building permits online, track technical scrutinies, schedule site inspections, monitor public notices, and receive digitally signed completion certificates.',
    btnReadMore: 'READ MORE >>',
    btnReadLess: 'SHOW LESS <<',

    // Cards Grid
    sectionProcessTitle: 'BUILDING PERMIT PROCESS INFORMATION',
    card1Title: 'Municipal Building Permit Process',
    card1Desc: 'Step-by-step procedural guideline and documentation required for acquiring residential and commercial building construction permits in Kageshwori Manohara Municipality.',
    card1Link: 'Read More',
    card2Title: 'Registered Designers',
    card2Desc: 'Official municipal directory of authorized Civil Engineers, Architects, and structural consultancy firms recognized for building drawing submissions.',
    card2Link: 'Read More',
    card3Title: 'Building By-Laws',
    card3Desc: 'Comprehensive municipal zoning regulations, setbacks, road width requirements, ground coverage, FAR, and National Building Code NBC 105:2020 compliances.',
    card3Link: 'Read More',

    // Footer
    footerContactTitle: 'Contact Us',
    footerAddress: 'Office of the Municipal Executive, Danchhi, Kathmandu',
    footerPhone: 'Phone: +977 01-4451242, 01-4450986 | Toll-Free: 16600127777',
    footerEmail: 'Email: info@kageshworimanoharamun.gov.np, er.kageshworimun@gmail.com',
    footerLinksTitle: 'Quick Links',
    footerHelpdeskTitle: 'E-BPS Helpdesk',
    footerHoursTitle: 'Office Hours:',
    footerHours1: 'Sunday – Thursday: 10:00 AM – 5:00 PM',
    footerHours2: 'Friday: 10:00 AM – 3:00 PM',
    footerCopyright: '© All Rights Reserved 2026 - Kageshwori Manohara Municipality'
  }
};

let currentLang = 'ne';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMobileNav();
  initReadMoreToggle();
  initModals();
  initWardSelector();
  initDesignerDirectory();
  initScrollEffects();
});

/* ========================================================
   LANGUAGE SWITCHER
   ======================================================== */
function initLanguageSwitcher() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ne' ? 'en' : 'ne';
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const data = TRANSLATIONS[lang];
  if (!data) return;

  document.documentElement.lang = lang;
  if (lang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) {
    langBtnText.textContent = data.langBtnText;
  }
}

/* ========================================================
   SCROLL EFFECTS & ANIMATIONS
   ======================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Scroll Progress & Navbar Scrolled State
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }

    if (navbar) {
      if (winScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (winScroll > 320) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Reveal Animations with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ========================================================
   MOBILE NAVIGATION TOGGLE
   ======================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navbarCollapse');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }
}

/* ========================================================
   ABOUT SECTION READ MORE TOGGLE
   ======================================================== */
function initReadMoreToggle() {
  const btn = document.getElementById('btnReadMoreEbps');
  const extraContent = document.getElementById('ebpsExtraDetails');

  if (btn && extraContent) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = extraContent.style.display === 'none' || !extraContent.style.display;
      const dict = TRANSLATIONS[currentLang];
      
      if (isHidden) {
        extraContent.style.display = 'block';
        btn.innerHTML = `<span>${dict.btnReadLess}</span> <i class="fa-solid fa-chevron-up"></i>`;
      } else {
        extraContent.style.display = 'none';
        btn.innerHTML = `<span>${dict.btnReadMore}</span> <i class="fa-solid fa-angles-right"></i>`;
      }
    });
  }
}

/* ========================================================
   MODAL CONTROLLER
   ======================================================== */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close-modal');
      closeModal(targetId);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.trigger-bylaws-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('bylawsModal');
    });
  });

  document.querySelectorAll('.trigger-process-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('processModal');
    });
  });
}

/* ========================================================
   WARDS DIRECTORY DATA
   ======================================================== */
const WARDS_DATA = [
  { no: 1, name: 'गागलफेदी', enName: 'Gagalphedi', officer: 'रामेश्वर फुयाल (वडा अध्यक्ष)', phone: '०१-४४५१२०१', office: 'गागलफेदी' },
  { no: 2, name: 'आलापोट', enName: 'Aalapot', officer: 'नवराज पुडासैनी (वडा अध्यक्ष)', phone: '०१-४४५१२०२', office: 'आलापोट बजार' },
  { no: 3, name: 'भद्रबास', enName: 'Bhadrabas', officer: 'राम मणि पुडासैनी (वडा अध्यक्ष)', phone: '०१-४४५१२०३', office: 'भद्रबास चोक' },
  { no: 4, name: 'डाँछी', enName: 'Danchhi', officer: 'सुरेश श्रेष्ठ (वडा अध्यक्ष)', phone: '०१-४४५१२०४', office: 'डाँछी मूल चोक' },
  { no: 5, name: 'थली', enName: 'Thali', officer: 'महेन्द्र श्रेष्ठ (वडा अध्यक्ष)', phone: '०१-४४५१२०५', office: 'थली चोक' },
  { no: 6, name: 'मुलपानी', enName: 'Mulpani', officer: 'प्रकाश घिमिरे (वडा अध्यक्ष)', phone: '०१-४४५१२०६', office: 'मुलपानी' },
  { no: 7, name: 'हरहर महादेव', enName: 'Harahar Mahadev', officer: 'भीमसेन थापा (वडा अध्यक्ष)', phone: '०१-४४५१२०७', office: 'हरहर महादेव' },
  { no: 8, name: 'गोठाटार', enName: 'Gothatar', officer: 'कृष्ण बहादुर श्रेष्ठ (वडा अध्यक्ष)', phone: '०१-४४५१२०८', office: 'गोठाटार हाइट' },
  { no: 9, name: 'काँडाघारी', enName: 'Kadaghari', officer: 'अनिल कुमार तामाङ (वडा अध्यक्ष)', phone: '०१-४४५१२०९', office: 'काँडाघारी सनसिटी' },
];

function initWardSelector() {
  const container = document.getElementById('wardListCards');
  if (!container) return;

  container.innerHTML = WARDS_DATA.map(ward => `
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 10px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <strong style="color: #0a5233; font-size: 1.05rem;">वडा नं. ${ward.no} - ${ward.name} (${ward.enName})</strong>
        <span style="background: #d1fae5; color: #065f46; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">E-BPS Active</span>
      </div>
      <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
        <div><i class="fa-solid fa-user-tie" style="color: #0d6e44; width: 18px;"></i> <strong>प्रतिनिधि:</strong> ${ward.officer}</div>
        <div><i class="fa-solid fa-location-dot" style="color: #0d6e44; width: 18px;"></i> <strong>स्थान:</strong> ${ward.office}</div>
        <div><i class="fa-solid fa-phone" style="color: #0d6e44; width: 18px;"></i> <strong>सम्पर्क:</strong> ${ward.phone}</div>
      </div>
    </div>
  `).join('');
}

/* ========================================================
   DESIGNERS DIRECTORY
   ======================================================== */
const DESIGNERS_DATA = [
  { name: 'इ. रोहन श्रेष्ठ (Er. Rohan Shrestha)', type: 'Civil Engineer', nec: 'NEC #14205 Civil', firm: 'शिखर इन्जिनियरिङ कन्सल्ट्यान्सी, थली', phone: '०१-४४५१२४२' },
  { name: 'आर्किटेक्ट सुनिता महर्जन (Arch. Sunita Maharjan)', type: 'Architect', nec: 'NEC #09812 Arch', firm: 'क्रिएटिभ स्पेस डिजाइन, गोठाटार', phone: '०१-४४५०९८६' },
  { name: 'इ. दिपेश नेपाल (Er. Dipesh Nepal)', type: 'Civil & Geotechnical', nec: 'NEC #16890 Civil', firm: 'मनोहरा इन्जिनियरिङ एसोसिएट्स, मुलपानी', phone: '९८५११४५६७८' },
  { name: 'इ. पुजा फुयाल (Er. Pooja Phuyal)', type: 'Structural Engineer', nec: 'NEC #18921 Struct', firm: 'कागेश्वरी स्ट्रक्चरल ल्याब, डाँछी', phone: '९८६००११२२३' },
];

function initDesignerDirectory() {
  const container = document.getElementById('designersTableBody');
  const searchInput = document.getElementById('designerSearchInput');
  if (!container) return;

  function render(list) {
    if (list.length === 0) {
      container.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #94a3b8;">कुनै प्राविधिक भेटिएन (No designers matched)</td></tr>`;
      return;
    }
    container.innerHTML = list.map((d, idx) => `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px; font-weight: 600; color: #0a5233;">${idx + 1}. ${d.name}</td>
        <td style="padding: 12px; color: #475569;"><span style="background: #d1fae5; color: #065f46; padding: 2px 7px; border-radius: 4px; font-size: 0.78rem; font-weight: 600;">${d.nec}</span><br><small>${d.type}</small></td>
        <td style="padding: 12px; color: #334155;">${d.firm}</td>
        <td style="padding: 12px; color: #15803d; font-weight: 600;"><i class="fa-solid fa-phone"></i> ${d.phone}</td>
      </tr>
    `).join('');
  }

  render(DESIGNERS_DATA);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      const filtered = DESIGNERS_DATA.filter(d => 
        d.name.toLowerCase().includes(val) || 
        d.nec.toLowerCase().includes(val) || 
        d.firm.toLowerCase().includes(val)
      );
      render(filtered);
    });
  }
}
