/**
 * E-BPS - Kageshwori Manohara Municipality
 * Frontend Controller, Multilingual Support, Hero Slider & Scroll Effects
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
    navMasons: 'डकर्मी सूची',
    navDesigners: 'प्राविधिक सूची',
    wardPrefix: 'वडा नं. ',
    bylawsDoc: 'भवन निर्माण मापदण्ड २०८०',
    nbcCode: 'राष्ट्रिय भवन संहिता (NBC 105)',
    docChecklist: 'आवश्यक कागजात चेकलिस्ट',
    feeRates: 'राजश्व तथा दस्तुर दररेट',
    digiSign: 'डिजिटल हस्ताक्षर निर्देशिका',
    
    // Stable Hero Section (Real Municipal Building & E-BPS Motto)
    heroPill: 'नगर कार्यपालिकाको कार्यालय, डाँछी, काठमाडौं',
    heroMottoMain: 'सुदृढ पूर्वाधार, समृद्ध नगर',
    heroMottoHighlight: 'विद्युतीय भवन निर्माण इजाजत प्रणाली',
    heroMottoAbbr: '(E-BPS)',
    heroDesc: 'कागेश्वरी मनोहरा नगरपालिकाको विद्युतीय भवन निर्माण इजाजत प्रणाली (Electronic Building Permit System - E-BPS) मार्फत सुरक्षित, भूकम्प प्रतिरोधी र व्यवस्थित सहरी विकासका लागि १००% पारदर्शी र कागज-रहित अनलाइन नक्सा पास सेवा।',
    heroBtnApply: 'नयाँ नक्सा पास आवेदन →',
    heroBtnBylaws: 'भवन निर्माण मापदण्ड २०८० →',

    // 5 Quick Service Pills
    serv1Title: 'अनलाइन नक्सा दर्ता',
    serv1Sub: 'डिजिटल ड्रइङ पेश',
    serv2Title: 'NBC 105 संहिता',
    serv2Sub: 'प्राविधिक मापदण्ड जाँच',
    serv3Title: 'स्थलगत सर्जिमिन',
    serv3Sub: 'वडा प्राविधिक टोली',
    serv4Title: '१५ दिने सूचना',
    serv4Sub: 'सार्वजनिक पारदर्शिता',
    serv5Title: 'इजाजत प्रमाणपत्र',
    serv5Sub: 'डिजिटल हस्ताक्षरयुक्त',

    // About Section
    aboutPill: 'डिजिटल भवन निर्माण तथा सुशासन प्रणाली',
    ebpsTitle: 'ई-विपिएस (E-BPS)',
    ebpsSubtitle: 'विद्युतीय भवन निर्माण इजाजत प्रणाली',
    aboutChip1: 'NBC 105:2020 मापदण्ड प्रमाणीकरण',
    aboutChip2: '१००% कागज-रहित पारदर्शी सेवा',
    aboutChip3: 'वडा-नगरपालिका एकीकृत प्रणाली',
    ebpsP1: 'ई-विपिएस (E-BPS) कागेश्वरी मनोहरा नगरपालिकामा भवन निर्माण इजाजत प्रक्रियालाई पारदर्शी, छिटो र व्यवस्थित बनाउन लागू गरिएको विद्युतीय प्रणाली हो। यसले नेपाल राष्ट्रिय भवन संहिता (NBC 105:2020) र नगरपालिकाको भवन निर्माण मापदण्डको पूर्ण पालना सुनिश्चित गरी सुरक्षित र योजनाबद्ध सहरी विकासमा सहयोग पुर्‍याउँछ।',
    ebpsP2: 'यस प्रणालीमार्फत नगरबासी तथा सूचीकृत प्राविधिकहरूले घरमै बसी अनलाइनबाटै नक्सा दर्ता गर्न, स्थलगत सर्जिमिन स्थिति बुझ्न, १५ दिने सूचना प्रक्रिया तथा अन्तिम निर्माण सम्पन्न प्रमाणपत्र प्राप्त गर्न सक्दछन्।',
    ebpsP3: 'यो सफ्टवेयर प्रणालीले भौतिक कागजातको झन्झट हटाउँदै आर्किटेक्चरल, स्ट्रक्चरल ड्रइङ तथा कित्ता नम्बर र जिओ-कोअर्डिनेटको डिजिटल रेकर्ड सुरक्षित राख्दछ। सूचीकृत इन्जिनियर, नगरपालिकाका प्राविधिक अधिकृत तथा वडा सचिवहरू एउटै सुरक्षित प्लेटफर्ममा जोडिएका छन्।',
    ebpsP4: 'कागेश्वरी मनोहरा नगरपालिकाका वडा नं. १ देखि ९ सम्मका सम्पूर्ण वडा कार्यालयहरू सिधै नगर कार्यपालिकाको ई-विपिएस केन्द्रिय सर्भरसँग जोडिएका छन्, जसले गर्दा सेवाग्राहीले आफ्नै वडाबाट सहजै सर्जिमिन तथा स्थलगत प्रतिवेदन प्रमाणीकरण गर्न सक्दछन्।',
    btnReadMore: 'थप जानकारी पढ्नुहोस्',
    btnReadLess: 'कम जानकारी देखाउनुहोस्',

    // Cards Grid
    processPill: 'मार्गदर्शन तथा डिजिटल निर्देशिका',
    sectionProcessTitle: 'भवन निर्माण इजाजत प्रक्रिया जानकारी',
    card1Title: 'नगरपालिका भवन निर्माण इजाजत प्रक्रिया',
    card1Desc: 'कागेश्वरी मनोहरा नगरपालिका क्षेत्रभित्र जुनसुकै प्रकारका आवासीय वा व्यावसायिक भवन निर्माण गर्नका लागि आवश्यक अनलाइन नक्सा पास प्रक्रिया, चरणबद्ध नियम तथा स्थायी इजाजतका मापदण्डहरु।',
    card1Link: 'थप पढ्नुहोस्',
    card2Title: 'सूचीकृत प्राविधिक तथा परामर्शदाता',
    card2Desc: 'नगरपालिकामा आधिकारिक रूपमा सूचीकृत भएका अनुभवी सिभिल इन्जिनियर, आर्किटेक्ट, स्ट्रक्चरल कन्सल्ट्यान्ट तथा परामर्शदाता संस्थाहरूको अद्यावधिक नामावली र सम्पर्क विवरण।',
    card2Link: 'थप पढ्नुहोस्',
    card3Title: 'भवन निर्माण मापदण्ड तथा संहिता',
    card3Desc: 'कागेश्वरी मनोहरा नगरपालिका भवन निर्माण मापदण्ड २०८० अनुसार सेटब्याक (Setback), सडकको चौडाइ, जमिन कभरेज (Ground Coverage), FAR तथा राष्ट्रिय भवन संहिता NBC 105:2020।',
    card3Link: 'थप पढ्नुहोस्',

    // Designer List Page
    designerMainTitle: 'दर्ता भएका प्राविधिक (डिजाईनर) सूची',
    designerMainSubtitle: 'कागेश्वरी मनोहरा नगरपालिका ई-विपिएस प्रणालीमा दर्ता भएका आधिकारिक इन्जिनियर, आर्किटेक्ट तथा प्राविधिक परामर्शदाताहरूको विवरण।',
    designerTotalCountLabel: 'जम्मा सूचीकृत:',
    btnExportExcelText: 'Excel डाउनलोड',
    lblShow: 'देखाउनुहोस्',
    lblEntries: 'प्रविष्टि',
    optAllEntries: 'सबै',
    designerSearchPlaceholder: 'खोज्नुहोस्: नाम, ठेगाना वा फोन...',
    designerLoadingText: 'प्राविधिक तथ्याङ्क लोड हुँदैछ...',
    thSN: 'क्र.सं.',
    thPhoto: 'फोटो',
    thName: 'नाम',
    thAddress: 'ठेगाना',
    thEmail: 'इमेल',
    thPhone: 'सम्पर्क फोन',
    thRegNo: 'नगरपालिका दर्ता नं.',
    emptyTitle: 'कुनै प्राविधिक फेला परेन',
    emptyDesc: 'खोजिएको शब्दसँग मिल्दो कुनै पनि विवरण भेटिएन।',
    masonModalTitle: 'भूकम्प प्रतिरोधी तालिमप्राप्त डकर्मी सूची',

    // Mason List Page
    masonMainTitle: 'भूकम्प प्रतिरोधी तालिमप्राप्त डकर्मी सूची',
    masonMainSubtitle: 'कागेश्वरी मनोहरा नगरपालिका ई-विपिएस प्रणालीमा सूचीकृत भूकम्प प्रतिरोधी आवास निर्माण तालिमप्राप्त प्रमाणित डकर्मीहरूको विवरण।',
    masonTotalCountLabel: 'जम्मा सूचीकृत डकर्मी:',
    masonSearchPlaceholder: 'खोज्नुहोस्: नाम, ठेगाना वा फोन...',
    masonLoadingText: 'डकर्मी तथ्याङ्क लोड हुँदैछ...',
    masonBadge: 'प्रमाणित डकर्मी',
    masonFallbackName: 'डकर्मी',
    emptyMasonTitle: 'कुनै डकर्मी फेला परेन',
    emptyMasonDesc: 'खोजिएको शब्दसँग मिल्दो कुनै पनि विवरण भेटिएन।',

    // Footer
    footerContactTitle: 'सम्पर्क ठेगाना',
    footerAddress: 'नगर कार्यपालिकाको कार्यालय, डाँछी, काठमाडौं',
    footerPhoneLabel: 'फोन:',
    footerTollFreeLabel: 'टोल-फ्री:',
    footerEmailLabel: 'इमेल:',
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
    navMasons: 'Masons List',
    navDesigners: 'Designer List',
    wardPrefix: 'Ward No. ',
    bylawsDoc: 'Building By-Laws 2080',
    nbcCode: 'National Building Code (NBC 105)',
    docChecklist: 'Required Documents Checklist',
    feeRates: 'Revenue & Fee Structure',
    digiSign: 'Digital Signature Guidelines',

    // Stable Hero Section (Real Municipal Building & E-BPS Motto)
    heroPill: 'Office of the Municipal Executive, Danchhi, Kathmandu',
    heroMottoMain: 'Building Tomorrow, Safeguarding Today',
    heroMottoHighlight: 'Electronic Building Permit System',
    heroMottoAbbr: '(E-BPS)',
    heroDesc: 'Empowering planned, earthquake-resilient urban expansion in Kageshwori Manohara Municipality through an advanced paperless Electronic Building Permit System (E-BPS).',
    heroBtnApply: 'Apply for Permit Online →',
    heroBtnBylaws: 'Municipal By-Laws 2080 →',

    // 5 Quick Service Pills
    serv1Title: 'Online Permit',
    serv1Sub: 'Digital Drawings',
    serv2Title: 'NBC 105 Code',
    serv2Sub: 'Technical Scrutiny',
    serv3Title: 'Site Inspection',
    serv3Sub: 'Ward Field Reports',
    serv4Title: 'Public Notice',
    serv4Sub: '15-Day Transparency',
    serv5Title: 'Permit Issuance',
    serv5Sub: 'Digital Signature',

    // About Section
    aboutPill: 'Digital Building Permit Platform | Digital Governance',
    ebpsTitle: 'E-BPS',
    ebpsSubtitle: 'Electronic Building Permit System',
    aboutChip1: 'NBC 105:2020 Standard Compliance',
    aboutChip2: '100% Paperless & Transparent',
    aboutChip3: 'Integrated Municipal & Ward System',
    ebpsP1: 'E-BPS is an advanced application software system developed to modernize and streamline the municipal building permit process in Kageshwori Manohara Municipality. It guarantees strict compliance with the National Building Code (NBC 105:2020) and municipal building by-laws.',
    ebpsP2: 'Through this digital portal, citizens and certified technical consultants can submit drawings online, track field verifications, monitor 15-day public notices, and receive digitally signed construction completion certificates without visiting municipal offices in person.',
    ebpsP3: 'The platform eliminates redundant paperwork, facilitates centralized storage of architectural and structural AutoCAD designs, and integrates geographic coordinates. Registered engineers, municipal review officers, ward secretaries, and executive authorities collaborate seamlessly.',
    ebpsP4: 'All nine ward offices of Kageshwori Manohara Municipality are interconnected with the central E-BPS cloud infrastructure, enabling instantaneous field inspection validation and expedited municipal approval workflows.',
    btnReadMore: 'Read More Details',
    btnReadLess: 'Show Less Details',

    // Cards Grid
    processPill: 'Guidelines & Reference Portals',
    sectionProcessTitle: 'BUILDING PERMIT PROCESS INFORMATION',
    card1Title: 'Municipal Building Permit Process',
    card1Desc: 'Step-by-step procedural guideline and documentation required for acquiring residential and commercial building construction permits in Kageshwori Manohara Municipality.',
    card1Link: 'Read More',
    card2Title: 'Registered Designers',
    card2Desc: 'Official municipal directory of authorized Civil Engineers, Architects, and structural consultancy firms recognized for building drawing submissions.',
    card2Link: 'Read More',
    card3Title: 'Building By-Laws & NBC Codes',
    card3Desc: 'Comprehensive municipal zoning regulations, setbacks, road width requirements, ground coverage, FAR, and National Building Code NBC 105:2020 compliances.',
    card3Link: 'Read More',

    // Designer List Page
    designerMainTitle: 'DESIGNER APPLICATION SUMMARY',
    designerMainSubtitle: 'Official municipal directory of registered engineers, architects, and technical consultancies in Kageshwori Manohara Municipality.',
    designerTotalCountLabel: 'Total Registered:',
    btnExportExcelText: 'Export to Excel',
    lblShow: 'Show',
    lblEntries: 'entries',
    optAllEntries: 'All',
    designerSearchPlaceholder: 'Search by name, address or phone...',
    designerLoadingText: 'Loading designer records...',
    thSN: '#',
    thPhoto: 'Photo',
    thName: 'Name',
    thAddress: 'Address',
    thEmail: 'Email',
    thPhone: 'Phone',
    thRegNo: 'Municipal Reg. No.',
    emptyTitle: 'No Designers Found',
    emptyDesc: 'No matching records found for your search query.',
    masonModalTitle: 'Certified Masons Directory',

    // Mason List Page
    masonMainTitle: 'CERTIFIED MASONS DIRECTORY',
    masonMainSubtitle: 'Official municipal directory of certified earthquake-resistant trained masons registered under E-BPS in Kageshwori Manohara Municipality.',
    masonTotalCountLabel: 'Total Registered Masons:',
    masonSearchPlaceholder: 'Search by name, address or phone...',
    masonLoadingText: 'Loading mason records...',
    masonBadge: 'Certified Mason',
    masonFallbackName: 'Mason',
    emptyMasonTitle: 'No Masons Found',
    emptyMasonDesc: 'No matching records found for your search query.',

    // Footer
    footerContactTitle: 'Contact Us',
    footerAddress: 'Office of the Municipal Executive, Danchhi, Kathmandu',
    footerPhoneLabel: 'Phone:',
    footerTollFreeLabel: 'Toll-Free:',
    footerEmailLabel: 'Email:',
    footerLinksTitle: 'Quick Links',
    footerHelpdeskTitle: 'E-BPS Helpdesk',
    footerHoursTitle: 'Office Hours:',
    footerHours1: 'Sunday – Thursday: 10:00 AM – 5:00 PM',
    footerHours2: 'Friday: 10:00 AM – 3:00 PM',
    footerCopyright: '© All Rights Reserved 2026 - Kageshwori Manohara Municipality'
  }
};

let currentLang = localStorage.getItem('ebps_lang') || 'ne';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMobileNav();
  initHeroBgCarousel();
  initReadMoreToggle();
  initModals();
  initWardSelector();
  initMasonDirectory();
  initDesignerDirectory();
  initScrollEffects();
});

/* ========================================================
   HERO BACKGROUND CAROUSEL CONTROLLER
   - Automatically crossfades background images
   - Text remains completely static and fixed
   ======================================================== */
function initHeroBgCarousel() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const heroSection = document.getElementById('home');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let carouselInterval = null;

  function showSlide(index) {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });
    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startAutoPlay() {
    stopAutoPlay();
    carouselInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoPlay() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  showSlide(0);
  startAutoPlay();
}

/* ========================================================
   LANGUAGE SWITCHER
   ======================================================== */
function initLanguageSwitcher() {
  const toggleBtn = document.getElementById('langToggleBtn');
  applyLanguage(currentLang);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ne' ? 'en' : 'ne';
    localStorage.setItem('ebps_lang', currentLang);
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const data = TRANSLATIONS[lang];
  if (!data) return;

  document.body.classList.add('lang-switching');

  document.documentElement.lang = lang;
  if (lang === 'en') {
    document.body.classList.add('lang-en');
    document.body.classList.remove('lang-ne');
  } else {
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-ne');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (data[key]) {
      el.placeholder = data[key];
    }
  });

  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) {
    langBtnText.textContent = data.langBtnText;
  }

  const btnReadMore = document.getElementById('btnReadMoreEbps');
  if (btnReadMore) {
    const isExpanded = btnReadMore.classList.contains('active');
    const textSpan = btnReadMore.querySelector('.btn-text');
    if (textSpan) {
      textSpan.textContent = isExpanded ? data.btnReadLess : data.btnReadMore;
    }
  }

  // Notify other modules of language change
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('lang-switching');
    });
  });
}

/* ========================================================
   SCROLL EFFECTS & ANIMATIONS
   ======================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

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
      const isExpanded = extraContent.classList.contains('expanded');
      const dict = TRANSLATIONS[currentLang];
      const textSpan = btn.querySelector('.btn-text');
      const icon = btn.querySelector('.btn-icon-bubble i');

      if (!isExpanded) {
        extraContent.classList.add('expanded');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        if (textSpan) textSpan.textContent = dict.btnReadLess;
        if (icon) icon.className = 'fa-solid fa-chevron-up';
      } else {
        extraContent.classList.remove('expanded');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        if (textSpan) textSpan.textContent = dict.btnReadMore;
        if (icon) icon.className = 'fa-solid fa-arrow-right';
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

/* ========================================================
   CERTIFIED MASONS DIRECTORY
   ======================================================== */
const MASONS_DATA = [
  { name: 'राम बहादुर श्रेष्ठ (Ram Bahadur Shrestha)', training: 'भूकम्प प्रतिरोधी डकर्मी (७ दिने तालिम प्राप्त)', certNo: 'KM-MSN-2078-042', ward: 'वडा नं. ४ (गोठाटार)', phone: '९८४१२३४५६७' },
  { name: 'कृष्ण प्रसाद दंगाल (Krishna Prasad Dangal)', training: 'प्रमाणित डकर्मी स्तर-२ (DUDBC / CTEVT)', certNo: 'KM-MSN-2079-018', ward: 'वडा नं. ६ (मुलपानी)', phone: '९८५१०२३९८१' },
  { name: 'बुद्धिमान तामाङ (Buddhiman Tamang)', training: 'भूकम्प प्रतिरोधी आवास निर्माण तालिम', certNo: 'KM-MSN-2078-105', ward: 'वडा नं. १ (गागलफेदी)', phone: '९८६०१२९८३४' },
  { name: 'सुरज नगरकोटी (Suraj Nagarkoti)', training: 'प्रमाणित मुख्य डकर्मी (Lead Mason)', certNo: 'KM-MSN-2080-007', ward: 'वडा नं. ३ (भद्रबास)', phone: '९८४९८७१२३०' },
  { name: 'प्रेम कुमार कार्की (Prem Kumar Karki)', training: 'भूकम्प प्रतिरोधी आर.सी.सी. र गारो तालिम', certNo: 'KM-MSN-2079-089', ward: 'वडा नं. ८ (डाँछी)', phone: '९८५११७८२३४' },
  { name: 'मीन बहादुर पुडासैनी (Min Bahadur Pudasaini)', training: 'CTEVT लेभल-१ प्रमाणित डकर्मी', certNo: 'KM-MSN-2080-054', ward: 'वडा नं. ९ (थली)', phone: '९८६१४५८९००' }
];

function initMasonDirectory() {
  const container = document.getElementById('masonsTableBody');
  const searchInput = document.getElementById('masonSearchInput');
  if (!container) return;

  function render(list) {
    if (list.length === 0) {
      container.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #94a3b8;">कुनै डकर्मी भेटिएन (No masons matched)</td></tr>`;
      return;
    }
    container.innerHTML = list.map((m, idx) => `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px; font-weight: 600; color: #0a5233;">${idx + 1}. ${m.name}</td>
        <td style="padding: 12px; color: #475569;">
          <span style="background: #e0f2fe; color: #0369a1; padding: 2px 7px; border-radius: 4px; font-size: 0.78rem; font-weight: 600;">${m.certNo}</span>
          <br><small style="color: #64748b;">${m.training}</small>
        </td>
        <td style="padding: 12px; color: #334155; font-weight: 500;">${m.ward}</td>
        <td style="padding: 12px; color: #15803d; font-weight: 600;"><i class="fa-solid fa-phone"></i> ${m.phone}</td>
      </tr>
    `).join('');
  }

  render(MASONS_DATA);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      const filtered = MASONS_DATA.filter(m => 
        m.name.toLowerCase().includes(val) || 
        m.training.toLowerCase().includes(val) || 
        m.certNo.toLowerCase().includes(val) || 
        m.ward.toLowerCase().includes(val)
      );
      render(filtered);
    });
  }
}

