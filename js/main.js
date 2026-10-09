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
    allWards: 'सबै वडा विवरण (१–९)',
    ward1: 'वडा नं. १ (गागलफेदी)',
    ward2: 'वडा नं. २ (आलापोट)',
    ward3: 'वडा नं. ३ (भद्रबास)',
    ward4: 'वडा नं. ४ (डाँछी)',
    ward5: 'वडा नं. ५ (थली)',
    ward6: 'वडा नं. ६ (मूलपानी)',
    ward7: 'वडा नं. ७ (काँडाघारी)',
    ward8: 'वडा नं. ८ (गोठाटार)',
    ward9: 'वडा नं. ९ (गोठाटार दक्षिण)',
    bylawsDoc: 'भवन निर्माण मापदण्ड २०८०',
    nbcCode: 'राष्ट्रिय भवन संहिता (NBC 105)',
    docChecklist: 'आवश्यक कागजात चेकलिस्ट',
    feeRates: 'राजश्व तथा दस्तुर दररेट',
    digiSign: 'डिजिटल हस्ताक्षर निर्देशिका',
    
    // Hero Section (Image 1)
    heroDeptPill: 'नगर कार्यपालिकाको कार्यालय, डाँछी, काठमाडौं | सहरी विकास तथा भवन सुरक्षा महाशाखा',
    heroDeptPillMain: 'नगर कार्यपालिकाको कार्यालय, डाँछी, काठमाडौं',
    heroDeptPillSub: ' | सहरी विकास तथा भवन सुरक्षा महाशाखा',
    heroMottoPart1: 'सुदृढ पूर्वाधार, ',
    heroMottoPart2: 'सुरक्षित भविष्य',
    heroMottoMain: 'सुदृढ पूर्वाधार, समृद्ध नगर',
    heroMottoHighlight: 'विद्युतीय भवन निर्माण इजाजत प्रणाली',
    heroMottoAbbr: '(E‑BPS)',
    heroMainTitleText: 'विद्युतीय भवन निर्माण इजाजत प्रणाली',
    heroMainTitleAbbr: '(E-BPS)',
    heroDesc: 'कागेश्वरी मनोहरा नगरपालिकाको विद्युतीय भवन निर्माण इजाजत प्रणाली (Electronic Building Permit System - E-BPS) मार्फत सुरक्षित, भूकम्प प्रतिरोधी र व्यवस्थित सहरी विकासका लागि १००% पारदर्शी र कागज-रहित अनलाइन नक्सा पास सेवा।',
    heroDescriptionText: 'कागेश्वरी मनोहरा नगरपालिकाको विद्युतीय भवन निर्माण इजाजत प्रणाली (Electronic Building Permit System - E-BPS) मार्फत सुरक्षित, भूकम्प प्रतिरोधी र व्यवस्थित सहरी विकासका लागि १००% पारदर्शी र कागज-रहित अनलाइन नक्सा पास सेवा।',
    heroBtnBylawsText: 'भवन निर्माण मापदण्ड र NBC १०५',
    heroBtnDesignersText: 'दर्ता भएका प्राविधिक (डिजाइनर) सूची',
    heroBtnApply: 'नयाँ नक्सा पास आवेदन →',
    heroBtnBylaws: 'भवन निर्माण मापदण्ड २०८० →',
    heroCapsule1: 'NBC 105:2020 भूकम्प संहिता प्रमाणीकरण',
    heroCapsule2: '१००% डिजिटल तथा कागज-रहित दर्ता',
    heroCapsule3: 'वडा नं. १–९ पूर्ण एकीकृत पहुँच',

    // Floating Quick-Action Dock
    dockPermitTitle: 'इजाजत प्रक्रिया',
    dockPermitDesc: 'चरणबद्ध मार्गदर्शन',
    dockDesignersTitle: 'सूचीकृत प्राविधिक',
    dockDesignersDesc: 'प्रमाणित इन्जिनियर तथा आर्किटेक्ट',
    dockMasonsTitle: 'प्रमाणित डकर्मी',
    dockMasonsDesc: 'भूकम्प प्रतिरोधी तालिमप्राप्त',
    dockWardTitle: 'वडा प्राविधिक डेस्क',
    dockWardDesc: 'वडा १ देखि ९ प्रत्यक्ष सेवा',

    // About Section (Image 2)
    aboutPill: 'डिजिटल भवन निर्माण तथा सुशासन प्रणाली',
    aboutSectionHeading: 'ई-विपिएस (E-BPS) — नगरपालिकामा डिजिटल रूपान्तरण',
    aboutSectionSubheading: 'कागेश्वरी मनोहरामा भवन संहिता पालना, भूकम्प प्रतिरोधी संरचना र नागरिक पारदर्शिता।',
    aboutGovTitle: 'संस्थागत भवन निर्माण सुशासन',
    aboutGovP1: 'ई-विपिएस (E-BPS) कागेश्वरी मनोहरा नगरपालिकामा भवन निर्माण इजाजत प्रक्रियालाई पारदर्शी, छिटो र व्यवस्थित बनाउन लागू गरिएको विद्युतीय प्रणाली हो। यसले नेपाल राष्ट्रिय भवन संहिता (NBC 105:2020) र नगरपालिकाको भवन निर्माण मापदण्डको पूर्ण पालना सुनिश्चित गरी सुरक्षित र योजनाबद्ध सहरी विकासमा सहयोग पुर्‍याउँछ।',
    aboutGovP2: 'यस प्रणालीमार्फत नगरबासी तथा सूचीकृत प्राविधिकहरूले घरमै बसी अनलाइनबाटै नक्सा दर्ता गर्न, स्थलगत सर्जिमिन स्थिति बुझ्न, १५ दिने सूचना प्रक्रिया तथा अन्तिम निर्माण सम्पन्न प्रमाणपत्र प्राप्त गर्न सक्दछन्।',
    btnExploreGuidelines: 'सञ्चालन कार्यविधि हेर्नुहोस्',
    govTagText: 'कागज-रहित तथा पारदर्शी',
    feat1Title: 'NBC 105:2020 मापदण्ड प्रमाणीकरण',
    feat1Desc: 'राष्ट्रिय भवन संहिता अनुसार भूकम्प प्रतिरोधी मापदण्ड, स्ट्रक्चरल अडिट र स्वचालित चेकलिस्ट प्रमाणीकरण।',
    feat2Title: '१००% कागज-रहित र पारदर्शी',
    feat2Desc: 'डिजिटल नक्सा दर्ता, स्वचालित राजश्व गणना तथा सुरक्षित डिजिटल हस्ताक्षरयुक्त प्रमाणपत्र वितरण।',
    feat3Title: 'एकीकृत नगरपालिका र वडा प्रणाली',
    feat3Desc: 'स्थलगत सर्जिमिन तथा स्वीकृतिको लागि सबै ९ वटा वडा कार्यालय र केन्द्रीय प्राविधिक महाशाखाबीच डिजिटल समन्वय।',

    // About Stats Strip
    stat1Num: '९ वडा',
    stat1Label: 'पूर्ण डिजिटल पहुँच',
    stat2Num: '१००%',
    stat2Label: 'कागज-रहित कार्यप्रणाली',
    stat3Num: 'NBC 105:2020',
    stat3Label: 'संहिता प्रमाणीकृत',
    stat4Num: '० पटक भ्रमण',
    stat4Label: 'झन्झटमुक्त सेवा',

    // Legacy / Extra about fields
    ebpsTitle: 'ई-विपिएस (E-BPS)',
    ebpsSubtitle: 'विद्युतीय भवन निर्माण इजाजत प्रणाली',
    aboutChip1: 'NBC 105:2020 मापदण्ड प्रमाणीकरण',
    aboutChip2: '१००% कागज-रहित पारदर्शी सेवा',
    aboutChip3: 'वडा-नगरपालिका एकीकृत प्रणाली',
    ebpsP1: 'ई-विपिएस (E-BPS) कागेश्वरी मनोहरा नगरपालिकामा भवन निर्माण इजाजत प्रक्रियालाई पारदर्शी, छिटो र व्यवस्थित बनाउन लागू गरिएको विद्युतीय प्रणाली हो।',
    ebpsP2: 'यस प्रणालीमार्फत नगरबासी तथा सूचीकृत प्राविधिकहरूले घरमै बसी अनलाइनबाटै नक्सा दर्ता गर्न सक्दछन्।',
    btnReadMore: 'थप जानकारी पढ्नुहोस्',
    btnReadLess: 'कम जानकारी देखाउनुहोस्',

    // Building Permit Process Info Cards (Image 3)
    processPill: 'मार्गदर्शन तथा डिजिटल सन्दर्भ पोर्टल',
    sectionProcessTitle: 'भवन निर्माण इजाजत प्रक्रिया जानकारी',
    card1Badge: 'प्रक्रिया निर्देशिका',
    card1Title: 'नगरपालिका भवन निर्माण इजाजत प्रक्रिया',
    card1Desc: 'कागेश्वरी मनोहरा नगरपालिका क्षेत्रभित्र जुनसुकै प्रकारका आवासीय वा व्यावसायिक भवन निर्माण गर्नका लागि आवश्यक अनलाइन नक्सा पास प्रक्रिया, चरणबद्ध नियम तथा स्थायी इजाजतका मापदण्डहरु।',
    card1Link: 'थप पढ्नुहोस्',
    card2Badge: 'प्राविधिक सूची',
    card2Title: 'सूचीकृत प्राविधिक तथा परामर्शदाता',
    card2Desc: 'नगरपालिकामा आधिकारिक रूपमा सूचीकृत भएका अनुभवी सिभिल इन्जिनियर, आर्किटेक्ट, स्ट्रक्चरल कन्सल्ट्यान्ट तथा परामर्शदाता संस्थाहरूको अद्यावधिक नामावली र सम्पर्क विवरण।',
    card2Link: 'थप पढ्नुहोस्',
    card3Badge: 'मापदण्ड तथा ऐन',
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

    // Designer Registration (Sign Up) Page
    regPageTitle: 'प्राविधिक / डिजाइनर दर्ता आवेदन',
    regPageSubtitle: 'कागेश्वरी मनोहरा नगरपालिका विद्युतीय भवन निर्माण इजाजत प्रणाली (E-BPS) मा नयाँ इन्जिनियर, आर्किटेक्ट तथा परामर्शदाता दर्ता प्रक्रिया।',
    regBreadcrumb: 'डिजाइनर दर्ता',
    regOldAlertText: 'पुरानो डिजाइनरहरूको अद्यावधिक गर्नको लागि Login मा गएर फारम दर्ता गरि दिनु होला । धन्यवाद !',
    regOldAlertLink: 'लगइन गर्नुहोस् →',
    regNewAlertText: 'नयाँ डिजाइनरहरूको अद्यावधिक गर्नको लागि यो फारम दर्ता गरि दिनु होला । धन्यवाद !',
    lblRegMethod: 'दर्ता प्रक्रिया (Registration Method) *',
    optSelectMethod: '-- दर्ता प्रक्रिया छान्नुहोस् --',
    optNec: 'नेपाल इन्जिनियरिङ्ग परिषद् (व्यक्तिगत प्राविधिक - NEC)',
    optConsultancy: 'परामर्शदाता कम्पनी / कन्सल्टेन्सी फर्म (Consultancy Firm)',
    lblDesignerType: 'डिजाइनर प्रकार (Designer Type) *',
    lblDesignerClass: 'वर्ग (Class) *',
    optSelectClass: '-- वर्ग छान्नुहोस् (Select Class) --',
    optClassA: 'वर्ग "क" (Class A)',
    optClassB: 'वर्ग "ख" (Class B)',
    optClassC: 'वर्ग "ग" (Class C)',
    optClassD: 'वर्ग "घ" (Class D)',
    optSelectDesignerType: '-- डिजाइनर प्रकार छान्नुहोस् --',
    optArchitect: 'आर्किटेक्ट (Architect)',
    optCivilEng: 'सिभिल इन्जिनियर (Civil Engineer)',
    optStructuralEng: 'स्ट्रक्चरल इन्जिनियर (Structural Engineer)',
    optElectricalEng: 'विद्युतीय इन्जिनियर (Electrical Engineer)',
    optUrbanPlanner: 'सहरी योजनाकार (Urban Planner)',
    optSubEng: 'सब-इन्जिनियर / ओभरसियर (Sub-Engineer)',
    lblCouncilNo: 'नेपाल इन्जिनियरिङ्ग परिषद् नं. (NEC No.) *',
    phCouncilNo: 'काउन्सिल दर्ता नम्बर लेख्नुहोस्...',
    lblFirmName: 'परामर्शदाता फर्मको नाम (Consultancy Firm Name)',
    phFirmName: 'कन्सल्टेन्सी संस्थाको आधिकारिक नाम...',
    secProprietorTitle: 'प्रोपराइटर / सञ्चालक विवरण (Proprietor Details)',
    lblPropName: 'प्रोपराइटरको नाम *',
    phPropName: 'प्रोपराइटरको पूरा नाम लेख्नुहोस्...',
    lblPropAddress: 'ठेगाना *',
    phPropAddress: 'स्थायी ठेगाना...',
    lblPropEmail: 'इमेल ठेगाना *',
    phPropEmail: 'example@domain.com',
    lblPropMobile: 'मोबाइल नम्बर *',
    phPropMobile: '९८XXXXXXXX',
    secPropDocsTitle: 'परामर्शदाता कम्पनीका कागजातहरू (Consultancy Firm Documents)',
    docUploadNote: 'नोट: कृपया .jpg, .jpeg, .png वा .pdf फाइल मात्र अपलोड गर्नुहोस्। फाइलको आकार ५०० KB भन्दा कम हुनुपर्दछ।',
    lblFirmPan: 'फर्मको प्यान/भ्याट नं. (Firm PAN/VAT ID) *',
    phFirmPan: 'फर्मको प्यान वा भ्याट नम्बर लेख्नुहोस्...',
    lblPanVatCert: 'पान / भ्याट दर्ता प्रमाणपत्र (PAN/VAT Certificate) *',
    lblCompanyRegCert: 'कम्पनी दर्ता प्रमाणपत्र (Company Registration Certificate) *',
    secDesignerTitle: 'डिजाइनर / प्राविधिकको व्यक्तिगत विवरण (Designer Details)',
    lblDesignerName: 'डिजाइनरको नाम *',
    phDesignerName: 'डिजाइनरको पूरा नाम लेख्नुहोस्...',
    lblDesignerImage: 'डिजाइनरको फोटो (Designer Image) *',
    lblCitizenshipNo: 'नागरिकता नम्बर *',
    phCitizenshipNo: 'नागरिकता प्रमाणपत्र नम्बर...',
    secPermAddress: 'स्थायी ठेगाना (Permanent Address)',
    secTempAddress: 'अस्थायी ठेगाना (Temporary Address)',
    lblDistrict: 'जिल्ला *',
    lblMunicipality: 'नगरपालिका / गाउँपालिका *',
    phMunicipality: 'कागेश्वरी मनोहरा...',
    lblWard: 'वडा नं. *',
    lblMobileNo: 'मोबाइल नम्बर *',
    phMobileNo: '९८XXXXXXXX',
    lblEmail: 'इमेल ठेगाना *',
    phEmail: 'designer@domain.com',
    lblPanNo: 'प्यान (PAN) नम्बर / PAN ID *',
    phPanNo: 'व्यक्तिगत प्यान नम्बर...',
    secDesignerDocsTitle: 'प्राविधिक शैक्षिक तथा कानूनी कागजातहरू (Designer Documents)',
    lblNecCert: 'नेपाल इन्जिनियरिङ्ग परिषद् प्रमाणपत्र *',
    lblBachelorTranscript: 'सिभिल/आर्किटेक्चर/स्ट्रक्चर स्नातक तह (BE/B.Arch) ट्रान्सक्रिप्ट *',
    lblMasterTranscript: 'सिभिल/आर्किटेक्चर/स्ट्रक्चर स्नातकोत्तर तह (ME/M.Sc) ट्रान्सक्रिप्ट',
    lblCitizenshipDoc: 'नागरिकता प्रमाणपत्र (Citizenship Certificate) *',
    lblDeclaration: 'मैले पेश गरेका सम्पूर्ण विवरण तथा कागजातहरू सत्य तथ्य छन्, यदि झुट्टा ठहरेमा प्रचलित कानुन बमोजिम कारबाही भोग्न मन्जुर छु।',
    lblCaptcha: 'क्याप्चा कोड प्रविष्ट गर्नुहोस् *',
    phCaptcha: 'क्याप्चा कोड लेख्नुहोस्...',
    btnSubmitReg: 'फारम दर्ता गर्नुहोस् (Submit Application)',
    btnResetReg: 'सबै रिसेट गर्नुहोस् (Reset)',
    regSuccessTitle: 'आवेदन सफलतापूर्वक दर्ता भयो!',
    regSuccessMsg: 'तपाईंको प्राविधिक दर्ता आवेदन कागेश्वरी मनोहरा नगरपालिका ई-विपिएस प्रणालीमा दर्ता भएको छ। प्रमाणीकरणपछि तपाईंलाई इमेल र एसएमएसमार्फत जानकारी पठाइनेछ।',

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
    footerCopyright: '© सर्वाधिकार सुरक्षित २०८१ / 2026 - कागेश्वरी मनोहरा नगरपालिका',

    // Ward Information Page
    wardPageHeading: 'वडा कार्यालय तथा ई-विपिएस सेवा विवरण',
    wardPageSubheading: 'कागेश्वरी मनोहरा नगरपालिकाका वडा नं. १ देखि ९ सम्मका कार्यालयहरू तथा नक्सा पास सर्जिमिन सेवा।',
    wardActiveBadge: 'सक्रिय E-BPS',
    wardCentralBadge: 'केन्द्रीय सर्भर',
    lblLocation: 'स्थान:',
    lblSarjaminDay: 'सर्जिमिन दिन:',
    lblEbpsTech: 'ई-विपिएस प्राविधिक:',
    lblContactPhone: 'सम्पर्क फोन:',
    wardPermitAvail: 'नक्सा दर्ता उपलब्ध',
    wardCentralDiv: 'केन्द्रीय महाशाखा',
    btnContactWard: 'सम्पर्क गर्नुहोस्',
    wardSubEng: 'वडा सब-इन्जिनियर',
    ward4Staff: 'इन्जिनियर तथा प्राविधिक अधिकृत',
    ward1Loc: 'गागलफेदी, काठमाडौं',
    ward1Days: 'आइतबार र मंगलबार',
    ward1Phone: '०१-४४५१२४२ (Ext: 101)',
    ward2Loc: 'आलापोट, काठमाडौं',
    ward2Days: 'सोमबार र बुधबार',
    ward2Phone: '०१-४४५१२४२ (Ext: 102)',
    ward3Loc: 'भद्रबास, काठमाडौं',
    ward3Days: 'आइतबार र बिहीबार',
    ward3Phone: '०१-४४५१२४२ (Ext: 103)',
    ward4Loc: 'डाँछी (नगरपालिका कार्यालय परिसर)',
    ward4Days: 'नियमित दैनिक',
    ward4Phone: '०१-४४५१२४२ (Ext: 104)',
    ward5Loc: 'थली, काठमाडौं',
    ward5Days: 'सोमबार र बुधबार',
    ward5Phone: '०१-४४५१२४२ (Ext: 105)',
    ward6Loc: 'मूलपानी, काठमाडौं',
    ward6Days: 'आइतबार र मंगलबार',
    ward6Phone: '०१-४४५१२४२ (Ext: 106)',
    ward7Loc: 'हरहर महादेव, काठमाडौं',
    ward7Days: 'मंगलबार र बिहीबार',
    ward7Phone: '०१-४४५१२४२ (Ext: 107)',
    ward8Loc: 'गोठाटार, काठमाडौं',
    ward8Days: 'सोमबार र बुधबार',
    ward8Phone: '०१-४४५१२४२ (Ext: 108)',
    ward9Loc: 'काँडाघारी, काठमाडौं',
    ward9Days: 'आइतबार र बिहीबार',
    ward9Phone: '०१-४४५१२४२ (Ext: 109)',

    // Building By-Laws Page
    bylawsPageHeading: 'भवन निर्माण मापदण्ड तथा राष्ट्रिय भवन संहिता',
    bylawsPageSubheading: 'कागेश्वरी मनोहरा नगरपालिका क्षेत्रभित्र सुरक्षित, भूकम्प प्रतिरोधी र व्यवस्थित सहरी विकासका लागि निर्धारित प्राविधिक मापदण्डहरू।',
    highlightRoadTitle: 'सडकको न्यूनतम चौडाइ',
    highlightRoadDesc: 'आवासीय क्षेत्रमा न्यूनतम १३ फिट (४ मिटर) तथा मुख्य व्यापारिक करिडोरमा न्यूनतम २० देखि ३० फिट बाटो कायम भएको हुनुपर्नेछ।',
    highlightSetbackTitle: 'सेटब्याक (Setback)',
    highlightSetbackDesc: 'सडकतर्फ न्यूनतम १.५ मिटर (५ फिट) तथा सँधियारतर्फ उज्यालो/भेन्टिलेसनको लागि नियमानुसार खुला जमिन छाड्नुपर्नेछ।',
    highlightNbcTitle: 'भूकम्प प्रतिरोधी संहिता (NBC 105)',
    highlightNbcDesc: 'सबै संरचनात्मक ड्रइङहरू नेपाल राष्ट्रिय भवन संहिता NBC 105:2020 अनुरूप स्ट्रक्चरल इन्जिनियरद्वारा डिजाइन हुनुपर्नेछ।',
    bylawsSectionTitle: 'प्रमुख प्राविधिक प्रावधानहरू (Key Technical Provisions)',
    prov1Title: '१. जमिन कभरेज (Ground Coverage) र FAR',
    prov1Desc: 'आवासीय भवनको लागि अधिकतम जमिन कभरेज (Ground Coverage) ६०% देखि ७०% सम्म तथा व्यावसायिक प्रयोजनका लागि क्षेत्रफल तथा बाटोको चौडाइ हेरी फ्लोर एरिया रेसियो (FAR) २.० देखि २.५ सम्म निर्धारण गरिएको छ।',
    prov2Title: '२. अधिकतम उचाइ र तला',
    prov2Desc: 'भवनको उचाइ बाटोको चौडाइको १.५ गुणा वा अधिकतम ४५ फिट (४ तला) सम्म सामान्य आवासीय क्षेत्रमा अनुमतियोग्य छ। विशेष व्यापारिक वा औद्योगिक क्षेत्रमा प्राविधिक मूल्याङ्कन पश्चात् थप उचाइको अनुमति दिन सकिनेछ।',
    prov3Title: '३. वातावरण संरक्षण तथा ढल निकास',
    prov3Desc: 'प्रत्येक भवनमा आकाशे पानी संकलन (Rainwater Harvesting) र रिचार्ज पिट (Recharge Pit) अनिवार्य गरिएको छ। ढल तथा फोहर पानी सीधै सार्वजनिक खोला वा सडकमा मिसाउन पाइने छैन।',
    prov4Title: '४. डिजिटल हस्ताक्षर तथा कागजात व्यवस्थापन',
    prov4Desc: 'कागेश्वरी मनोहरा नगरपालिकाको E-BPS प्रणालीमार्फत पेश हुने सम्पूर्ण नक्सा, डिजाइन तथा प्रतिवेदनहरूमा सूचीकृत इन्जिनियर/कन्सल्टेन्सीको डिजिटल हस्ताक्षर तथा नेपाल इन्जिनियरिङ्ग परिषद् (NEC) नम्बर अनिवार्य छ।',
    btnViewChecklist: 'आवश्यक कागजात चेकलिस्ट हेर्नुहोस्',
    btnFindDesigners: 'सूचीकृत प्राविधिकहरू खोज्नुहोस्',

    // Process Guide & Fee Structure Page
    guidePageHeading: 'भवन निर्माण इजाजत प्रक्रिया तथा कागजात चेकलिस्ट',
    guidePageSubheading: 'ई-विपिएस प्रणालीमार्फत अनलाइन नक्सा पासका ७ चरणहरू, आवश्यक कागजातहरूको पूर्ण विवरण तथा राजश्व दररेट।',
    workflowHeading: 'इजाजत प्रक्रियाका ७ चरणहरू (Step-by-Step Approval Workflow)',
    step1Title: 'चरण १: अनलाइन दर्ता',
    step1Desc: 'सूचीकृत डिजाइनरमार्फत घरधनीको विवरण, लालपुर्जा, नक्सा र डिजिटल AutoCAD ड्रइङ पेश गरिन्छ।',
    step2Title: 'चरण २: प्रारम्भिक प्राविधिक जाँच',
    step2Desc: 'नगरपालिका प्राविधिक शाखाले पेश गरिएका कागजात, सेटब्याक तथा NBC 105:2020 मापदण्ड रुजु गर्दछ।',
    step3Title: 'चरण ३: १५ दिने सार्वजनिक सूचना',
    step3Desc: 'सम्बन्धित वडा कार्यालय र कार्यपालिकाको वेबसाइटमा १५ दिने हकदाबी सूचना जारी हुन्छ।',
    step4Title: 'चरण ४: वडा स्तरीय स्थलगत सर्जिमिन',
    step4Desc: 'वडा प्राविधिक टोलीले निर्माण स्थलमा पुगी बाटोको चौडाइ र चारकिल्ला सर्जिमिन मुचुल्का उठाउँछ।',
    step5Title: 'चरण ५: प्लिन्थ लेवल इजाजत',
    step5Desc: 'राजश्व दस्तुर भुक्तानी पश्चात् डीपीसी (DPC) सम्म निर्माण गर्न अस्थायी इजाजत पत्र जारी गरिन्छ।',
    step6Title: 'चरण ६: सुपरस्ट्रक्चर इजाजत',
    step6Desc: 'प्लिन्थ निरीक्षण सम्पन्न भएपछि माथिल्लो तला (Superstructure) निर्माणका लागि स्थायी इजाजत दिइन्छ।',
    step7Title: 'चरण ७: अन्तिम निर्माण सम्पन्न प्रमाणपत्र (Completion Certificate)',
    step7Desc: 'भवन निर्माण सम्पन्न भएपछि नगरपालिकाको इन्जिनियर टोलीद्वारा अन्तिम निरीक्षण गरी डिजिटल निर्माण सम्पन्न प्रमाणपत्र जारी गरिन्छ।',
    checklistHeading: 'आवश्यक कागजातहरूको चेकलिस्ट (Required Document Checklist)',
    thDocSN: 'क्र.सं.',
    thDocName: 'कागजातको नाम',
    thDocAuthority: 'प्रमाणीकरण गर्ने निकाय',
    thDocStatus: 'स्थिति',
    badgeMandatory: 'अनिवार्य',
    doc1Title: 'जग्गाधनी प्रमाण पुर्जा (लालपुर्जा) को स्पष्ट प्रतिलिपि',
    doc1Auth: 'मालपोत कार्यालय',
    doc2Title: 'जग्गाधनीको नागरिकता प्रमाणपत्र प्रतिलिपि',
    doc2Auth: 'जिल्ला प्रशासन कार्यालय',
    doc3Title: 'नापी नक्सा (ट्रेस नक्सा) र फिल्डबुक उतार',
    doc3Auth: 'नापी कार्यालय',
    doc4Title: 'चालु आर्थिक वर्षको एकीकृत सम्पत्ति कर / मालपोत रसिद',
    doc4Auth: 'सम्बन्धित वडा कार्यालय',
    doc5Title: 'डिजिटल आर्किटेक्चरल, स्ट्रक्चरल, स्यानिटरी तथा विद्युतीय ड्रइङ',
    doc5Auth: 'सूचीकृत इन्जिनियर / कन्सल्टेन्सी',
    doc6Title: 'सडक पहुँच तथा चारकिल्ला वडा सिफारिस',
    doc6Auth: 'सम्बन्धित वडा कार्यालय',
    feesHeading: 'राजश्व तथा दस्तुर दररेट (E-BPS Revenue & Fee Structure)',
    feesSubheading: 'कागेश्वरी मनोहरा नगरपालिका आर्थिक ऐन अनुसार विद्युतीय भवन निर्माण इजाजत प्रणाली (E-BPS) मा लागू हुने अनुमोदित दररेटहरू निम्न बमोजिम रहेका छन्:',
    thFeeSN: 'क्र.सं.',
    thFeeService: 'सेवा / शीर्षक विवरण',
    thFeeRate: 'दस्तुर दररेट',
    thFeeRemarks: 'कैफियत',
    feeItem1: 'आवासीय भवन (Residential) इजाजत दस्तुर',
    feeRate1: 'रु. १५ प्रति वर्गफिट',
    feeNote1: 'कुल प्लिन्थ क्षेत्रफलको आधारमा',
    feeItem2: 'व्यापारिक तथा संस्थागत भवन (Commercial)',
    feeRate2: 'रु. २५ प्रति वर्गफिट',
    feeNote2: 'व्यावसायिक प्रयोजनका भवनहरू',
    feeItem3: 'स्थलगत सर्जिमिन मुचुल्का दस्तुर',
    feeRate3: 'रु. १,५००/-',
    feeNote3: 'वडा प्राविधिक टोली निरीक्षण',
    feeItem4: 'निर्माण सम्पन्न प्रमाणपत्र (Completion Certificate)',
    feeRate4: 'रु. २,०००/-',
    feeNote4: 'अन्तिम प्रमाणीकरण तथा डिजिटल जारी',
    feeItem5: 'म्याद थप (Myaad Thap) दस्तुर',
    feeRate5: 'कुल इजाजत दस्तुरको १०%',
    feeNote5: 'तोकिएको २ वर्ष पश्चात म्याद थप गर्दा',
    btnLoginSystem: 'अनलाइन नक्सा पास प्रणाली लगइन गर्नुहोस्',
    btnViewBylaws: 'भवन निर्माण मापदण्ड हेर्नुहोस्',
    ward1Title: 'वडा नं. १ (गागलफेदी)',
    ward2Title: 'वडा नं. २ (आलापोट)',
    ward3Title: 'वडा नं. ३ (भद्रबास)',
    ward4Title: 'वडा नं. ४ (डाँछी)',
    ward5Title: 'वडा नं. ५ (थली)',
    ward6Title: 'वडा नं. ६ (मूलपानी)',
    ward7Title: 'वडा नं. ७ (हरहर महादेव / काँडाघारी)',
    ward8Title: 'वडा नं. ८ (गोठाटार)',
    ward9Title: 'वडा नं. ९ (काँडाघारी)',
    footerNote247: '* ई-विपिएस अनलाइन आवेदन २४ सै घण्टा खुला रहनेछ।',
    sn1: '१',
    sn2: '२',
    sn3: '३',
    sn4: '४',
    sn5: '५',
    sn6: '६',
    sn7: '७'
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
    allWards: 'All Wards Directory (1–9)',
    ward1: 'Ward No. 1 (Gagalphedi)',
    ward2: 'Ward No. 2 (Alapot)',
    ward3: 'Ward No. 3 (Bhadrabas)',
    ward4: 'Ward No. 4 (Danchhi)',
    ward5: 'Ward No. 5 (Thali)',
    ward6: 'Ward No. 6 (Mulpani)',
    ward7: 'Ward No. 7 (Kandaghari)',
    ward8: 'Ward No. 8 (Gothatar)',
    ward9: 'Ward No. 9 (Gothatar South)',
    bylawsDoc: 'Building By-Laws 2080',
    nbcCode: 'National Building Code (NBC 105)',
    docChecklist: 'Required Documents Checklist',
    feeRates: 'Revenue & Fee Structure',
    digiSign: 'Digital Signature Guidelines',

    // Hero Section (Image 1)
    heroDeptPill: 'Office of the Municipal Executive, Danchhi, Kathmandu | Urban Development & Building Safety Division',
    heroDeptPillMain: 'Office of the Municipal Executive, Danchhi, Kathmandu',
    heroDeptPillSub: ' | Urban Development & Building Safety Division',
    heroMottoPart1: 'Building Tomorrow, ',
    heroMottoPart2: 'Safeguarding Today',
    heroMottoMain: 'Building Tomorrow, Safeguarding Today',
    heroMottoHighlight: 'Electronic Building Permit System',
    heroMottoAbbr: '(E‑BPS)',
    heroMainTitleText: 'Electronic Building Permit System',
    heroMainTitleAbbr: '(E-BPS)',
    heroDesc: 'Empowering planned, earthquake-resilient urban expansion in Kageshwori Manohara Municipality through an advanced paperless Electronic Building Permit System (E-BPS).',
    heroDescriptionText: 'Empowering planned, earthquake-resilient urban expansion in Kageshwori Manohara Municipality through an advanced paperless Electronic Building Permit System (E-BPS).',
    heroBtnBylawsText: 'Building By-Laws & NBC 105',
    heroBtnDesignersText: 'Registered Designers Directory',
    heroBtnApply: 'Apply for Permit Online →',
    heroBtnBylaws: 'Municipal By-Laws 2080 →',
    heroCapsule1: 'NBC 105:2020 Seismic Code Compliant',
    heroCapsule2: '100% Digital & Paperless Filing',
    heroCapsule3: 'Wards 1–9 Integrated Coverage',

    // Floating Quick-Action Dock
    dockPermitTitle: 'Permit Process',
    dockPermitDesc: 'Step-by-step guidance',
    dockDesignersTitle: 'Registered Designers',
    dockDesignersDesc: 'Verified civil engineers & architects',
    dockMasonsTitle: 'Certified Masons',
    dockMasonsDesc: 'DUDBC trained specialists',
    dockWardTitle: 'Ward Technical Desks',
    dockWardDesc: 'Wards 1 to 9 focal assistance',

    // About Section (Image 2)
    aboutPill: 'Digital Building Permit Platform | Digital Governance',
    aboutSectionHeading: 'About E-BPS — Digital Transformation in Municipal Construction',
    aboutSectionSubheading: 'Streamlining compliance, structural resilience, and citizen transparency across Kageshwori Manohara.',
    aboutGovTitle: 'Institutional Building Governance',
    aboutGovP1: 'E-BPS is an advanced application software system developed to modernize and streamline the municipal building permit process in Kageshwori Manohara Municipality. It guarantees strict compliance with the National Building Code (NBC 105:2020) and municipal building by-laws.',
    aboutGovP2: 'Through this digital portal, citizens and certified technical consultants can submit drawings online, track field verifications, monitor 15-day public notices, and receive digitally signed construction completion certificates without visiting municipal offices in person.',
    btnExploreGuidelines: 'Explore Operational Guidelines',
    govTagText: 'Paperless & Transparent',
    feat1Title: 'NBC 105:2020 Standard Compliance',
    feat1Desc: 'Rigorous seismic verification, structural criteria audits, and automated checklist validation according to National Building Codes.',
    feat2Title: '100% Paperless & Transparent',
    feat2Desc: 'End-to-end digital architectural drawings, automated municipal revenue calculation, and tamper-proof digital certificate issuance.',
    feat3Title: 'Integrated Municipal & Ward System',
    feat3Desc: 'Seamless digital coordination between all 9 Ward offices and Central Technical Division for site inspection reporting and approvals.',

    // About Stats Strip
    stat1Num: '9 Wards',
    stat1Label: 'Fully Connected',
    stat2Num: '100%',
    stat2Label: 'Paperless Workflow',
    stat3Num: 'NBC 105:2020',
    stat3Label: 'Code Verified',
    stat4Num: '0 Visits',
    stat4Label: 'Mandatory Office Queues',

    // Legacy / Extra about fields
    ebpsTitle: 'E-BPS',
    ebpsSubtitle: 'Electronic Building Permit System',
    aboutChip1: 'NBC 105:2020 Standard Compliance',
    aboutChip2: '100% Paperless & Transparent',
    aboutChip3: 'Integrated Municipal & Ward System',
    ebpsP1: 'E-BPS is an advanced application software system developed to modernize and streamline the municipal building permit process in Kageshwori Manohara Municipality.',
    ebpsP2: 'Through this digital portal, citizens and certified technical consultants can submit drawings online.',
    btnReadMore: 'Read More Details',
    btnReadLess: 'Show Less Details',

    // Building Permit Process Info Cards (Image 3)
    processPill: 'Guidelines & Reference Portals',
    sectionProcessTitle: 'BUILDING PERMIT PROCESS INFORMATION',
    card1Badge: 'Process Guide',
    card1Title: 'Municipal Building Permit Process',
    card1Desc: 'Step-by-step procedural guideline and documentation required for acquiring residential and commercial building construction permits in Kageshwori Manohara Municipality.',
    card1Link: 'Read More',
    card2Badge: 'Designers Directory',
    card2Title: 'Registered Designers',
    card2Desc: 'Official municipal directory of authorized Civil Engineers, Architects, and structural consultancy firms recognized for building drawing submissions.',
    card2Link: 'Read More',
    card3Badge: 'By-Laws & NBC Codes',
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

    // Designer Registration (Sign Up) Page
    regPageTitle: 'REGISTER DESIGNER / CONSULTANT',
    regPageSubtitle: 'Official municipal registration portal for architects, civil engineers, and consultancies under E-BPS in Kageshwori Manohara Municipality.',
    regBreadcrumb: 'Designer Registration',
    regOldAlertText: 'For updating existing registered designers, please go to Login and submit your update form. Thank you!',
    regOldAlertLink: 'Go to Login →',
    regNewAlertText: 'Please submit this registration form for registering new designers into the system. Thank you!',
    lblRegMethod: 'Registration Method *',
    optSelectMethod: '-- Select Registration Method --',
    optNec: 'Nepal Engineering Council (Individual Professional - NEC)',
    optConsultancy: 'Consultancy Firm',
    lblDesignerType: 'Designer Type *',
    lblDesignerClass: 'Registration Class *',
    optSelectClass: '-- Select Class --',
    optClassA: 'Class A',
    optClassB: 'Class B',
    optClassC: 'Class C',
    optClassD: 'Class D',
    optSelectDesignerType: '-- Select Designer Type --',
    optArchitect: 'Architect',
    optCivilEng: 'Civil Engineer',
    optStructuralEng: 'Structural Engineer',
    optElectricalEng: 'Electrical Engineer',
    optUrbanPlanner: 'Urban Planner',
    optSubEng: 'Sub-Engineer / Overseer',
    lblCouncilNo: 'Nepal Engineering Council No. *',
    phCouncilNo: 'Enter NEC Council Registration Number...',
    lblFirmName: "Consultancy Firm's Name",
    phFirmName: 'Official registered consultancy firm name...',
    secProprietorTitle: 'Proprietor Details',
    lblPropName: "Proprietor's Name *",
    phPropName: "Proprietor's Full Name...",
    lblPropAddress: 'Proprietor Address *',
    phPropAddress: 'Permanent address...',
    lblPropEmail: 'Proprietor Email *',
    phPropEmail: 'example@domain.com',
    lblPropMobile: 'Proprietor Mobile No. *',
    phPropMobile: '98XXXXXXXX',
    lblFirmPan: 'Firm PAN/VAT ID *',
    phFirmPan: 'Enter firm PAN or VAT number...',
    secPropDocsTitle: 'Consultancy Firm Documents',
    docUploadNote: 'Note: (*) Please upload .jpg, .jpeg, .png and .pdf file only. File must be less than 500 KB.',
    lblCompanyRegCert: 'Company Registration Certificate (*)',
    lblPanVatCert: 'PAN / VAT Registration Certificate (*)',
    secDesignerTitle: 'Designer Personal Details',
    lblDesignerName: "Designer's Name *",
    phDesignerName: "Designer's Full Name...",
    lblDesignerImage: "Designer Image *",
    lblCitizenshipNo: 'Citizenship Number *',
    phCitizenshipNo: 'Citizenship certificate number...',
    secPermAddress: 'Permanent Address',
    secTempAddress: 'Temporary Address',
    lblDistrict: 'District *',
    lblMunicipality: 'Municipality / Rural Municipality *',
    phMunicipality: 'Kageshwori Manohara...',
    lblWard: 'Ward No. *',
    lblMobileNo: 'Mobile Number *',
    phMobileNo: '98XXXXXXXX',
    lblEmail: 'Email Address *',
    phEmail: 'designer@domain.com',
    lblPanNo: 'PAN Number / ID *',
    phPanNo: 'Personal PAN number...',
    secDesignerDocsTitle: 'Designer Legal & Academic Documents',
    lblNecCert: 'Nepal Engineering Council Certificate (*)',
    lblBachelorTranscript: 'Transcript of Bachelor Degree in Civil/Architecture/Structure (*)',
    lblMasterTranscript: "Transcript of Master's Degree in Civil/Architecture/Structure",
    lblCitizenshipDoc: 'Citizenship Certificate (*)',
    lblDeclaration: 'I understand all and all submitted details and documents are true and if they are not true I will be liable for any legal consequences.',
    lblCaptcha: 'Enter Captcha Code *',
    phCaptcha: 'Enter captcha code above...',
    btnSubmitReg: 'Submit Application',
    btnResetReg: 'Reset Form',
    regSuccessTitle: 'Application Submitted Successfully!',
    regSuccessMsg: 'Your designer registration application has been submitted to Kageshwori Manohara Municipality E-BPS. You will be notified via email and SMS after verification.',

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
    footerCopyright: '© All Rights Reserved 2026 - Kageshwori Manohara Municipality',

    // Ward Information Page
    wardPageHeading: 'Ward Offices & E-BPS Service Directory',
    wardPageSubheading: 'Ward offices 1 through 9 of Kageshwori Manohara Municipality and building permit field inquiry services.',
    ward1Title: 'Ward No. 1 (Gagalphedi)',
    ward2Title: 'Ward No. 2 (Alapot)',
    ward3Title: 'Ward No. 3 (Bhadrabas)',
    ward4Title: 'Ward No. 4 (Danchhi)',
    ward5Title: 'Ward No. 5 (Thali)',
    ward6Title: 'Ward No. 6 (Mulpani)',
    ward7Title: 'Ward No. 7 (Harhar Mahadev / Kandaghari)',
    ward8Title: 'Ward No. 8 (Gothatar)',
    ward9Title: 'Ward No. 9 (Kandaghari)',
    wardActiveBadge: 'Active E-BPS',
    wardCentralBadge: 'Central Server',
    lblLocation: 'Location:',
    lblSarjaminDay: 'Field Verification Days:',
    lblEbpsTech: 'E-BPS Technician:',
    lblContactPhone: 'Contact Phone:',
    wardPermitAvail: 'Permit Registration Available',
    wardCentralDiv: 'Central Division',
    btnContactWard: 'Contact Office',
    wardSubEng: 'Ward Sub-Engineer',
    ward4Staff: 'Engineer & Technical Officer',
    ward1Loc: 'Gagalphedi, Kathmandu',
    ward1Days: 'Sunday & Tuesday',
    ward1Phone: '01-4451242 (Ext: 101)',
    ward2Loc: 'Alapot, Kathmandu',
    ward2Days: 'Monday & Wednesday',
    ward2Phone: '01-4451242 (Ext: 102)',
    ward3Loc: 'Bhadrabas, Kathmandu',
    ward3Days: 'Sunday & Thursday',
    ward3Phone: '01-4451242 (Ext: 103)',
    ward4Loc: 'Danchhi (Municipal Office Premises)',
    ward4Days: 'Regular Daily',
    ward4Phone: '01-4451242 (Ext: 104)',
    ward5Loc: 'Thali, Kathmandu',
    ward5Days: 'Monday & Wednesday',
    ward5Phone: '01-4451242 (Ext: 105)',
    ward6Loc: 'Mulpani, Kathmandu',
    ward6Days: 'Sunday & Tuesday',
    ward6Phone: '01-4451242 (Ext: 106)',
    ward7Loc: 'Harhar Mahadev, Kathmandu',
    ward7Days: 'Tuesday & Thursday',
    ward7Phone: '01-4451242 (Ext: 107)',
    ward8Loc: 'Gothatar, Kathmandu',
    ward8Days: 'Monday & Wednesday',
    ward8Phone: '01-4451242 (Ext: 108)',
    ward9Loc: 'Kandaghari, Kathmandu',
    ward9Days: 'Sunday & Thursday',
    ward9Phone: '01-4451242 (Ext: 109)',

    // Building By-Laws Page
    bylawsPageHeading: 'Building By-Laws & National Building Code',
    bylawsPageSubheading: 'Prescribed technical standards and provisions for safe, earthquake-resilient, and planned urban development in Kageshwori Manohara Municipality.',
    highlightRoadTitle: 'Minimum Road Width',
    highlightRoadDesc: 'Minimum 13 feet (4 meters) right of way in residential areas, and minimum 20 to 30 feet along primary commercial corridors.',
    highlightSetbackTitle: 'Setback Requirements',
    highlightSetbackDesc: 'Minimum 1.5 meters (5 feet) setback from public road edge, and mandatory open light/ventilation setbacks along adjacent land boundaries.',
    highlightNbcTitle: 'Seismic Building Code (NBC 105)',
    highlightNbcDesc: 'All structural engineering designs must comply with Nepal National Building Code NBC 105:2020 certified by licensed structural engineers.',
    bylawsSectionTitle: 'Key Technical Provisions',
    prov1Title: '1. Ground Coverage & Floor Area Ratio (FAR)',
    prov1Desc: 'Maximum allowable Ground Coverage for residential buildings is 60% to 70%, with Floor Area Ratio (FAR) between 2.0 and 2.5 depending on plot size and road access width.',
    prov2Title: '2. Maximum Building Height & Storeys',
    prov2Desc: 'Permissible building height is up to 1.5 times road width or maximum 45 feet (4 storeys) in standard residential zones. Additional height permitted in commercial zones following technical assessment.',
    prov3Title: '3. Environmental Safety & Drainage',
    prov3Desc: 'Mandatory rainwater harvesting systems and ground recharge pits for all proposed structures. Direct discharge of untreated domestic effluent into public rivers or roads is strictly prohibited.',
    prov4Title: '4. Digital Signatures & Submission Compliance',
    prov4Desc: 'All architectural drawings, structural calculations, and geotechnical reports submitted via E-BPS must feature authenticated digital signatures with registered NEC license numbers.',
    btnViewChecklist: 'View Required Documents Checklist',
    btnFindDesigners: 'Find Registered Designers',

    // Process Guide & Fee Structure Page
    guidePageHeading: 'Building Permit Process & Document Checklist',
    guidePageSubheading: 'Complete 7-step online permit workflow, comprehensive submission document checklist, and approved municipal fee schedules.',
    workflowHeading: '7-Step Building Permit Workflow',
    step1Title: 'Step 1: Online Application Submission',
    step1Desc: 'Certified designer registers land ownership deeds, trace map, architectural layouts, and digital AutoCAD drawings into the E-BPS portal.',
    step2Title: 'Step 2: Preliminary Technical Scrutiny',
    step2Desc: 'Municipal technical division verifies building setback limits, zoning regulations, and NBC 105:2020 compliance standards.',
    step3Title: 'Step 3: 15-Day Public Notice Period',
    step3Desc: 'A mandatory 15-day public objection / claim notice is published on the municipal website and at the respective Ward Office.',
    step4Title: 'Step 4: Ward-Level Field Verification (Sarjamin)',
    step4Desc: 'Ward technical sub-engineer conducts on-site boundary verification and prepares the field verification deed (Sarjamin Muchulka).',
    step5Title: 'Step 5: Plinth Level (DPC) Permit',
    step5Desc: 'Upon clearance of initial municipal revenue fees, provisional building permit is granted for construction up to Damp Proof Course (DPC) level.',
    step6Title: 'Step 6: Superstructure Permit',
    step6Desc: 'Post successful inspection and compliance verification of the plinth level, the permanent permit for superstructure construction is issued.',
    step7Title: 'Step 7: Final Building Completion Certificate',
    step7Desc: 'Upon structural completion, the municipal engineering division conducts a final inspection and issues the official digital Completion Certificate.',
    checklistHeading: 'Required Documents Checklist',
    thDocSN: 'S.N.',
    thDocName: 'Document Name',
    thDocAuthority: 'Issuing / Verifying Authority',
    thDocStatus: 'Status',
    badgeMandatory: 'Mandatory',
    doc1Title: 'Land Ownership Certificate (Lalpurja) Copy',
    doc1Auth: 'Land Revenue Office (Malpot)',
    doc2Title: "Landowner's Citizenship Certificate Copy",
    doc2Auth: 'District Administration Office (DAO)',
    doc3Title: 'Cadastral Survey Map (Trace) & Field Book Excerpt',
    doc3Auth: 'Cadastral Survey Office (Napi)',
    doc4Title: 'Current Fiscal Year Integrated Property Tax Receipt',
    doc4Auth: 'Concerned Ward Office',
    doc5Title: 'Digital Architectural, Structural, Electrical & Sanitary Drawings',
    doc5Auth: 'Registered Designer / Consultancy Firm',
    doc6Title: 'Road Access & Boundary Verification Ward Recommendation',
    doc6Auth: 'Concerned Ward Office',
    feesHeading: 'Approved E-BPS Fee Structure',
    feesSubheading: 'In accordance with Kageshwori Manohara Municipality Financial Act, the approved revenue and fee rates for the Electronic Building Permit System (E-BPS) are as follows:',
    thFeeSN: 'S.N.',
    thFeeService: 'Service / Description',
    thFeeRate: 'Approved Rate',
    thFeeRemarks: 'Remarks',
    feeItem1: 'Residential Building Permit Fee',
    feeRate1: 'Rs. 15 per sq. ft.',
    feeNote1: 'Calculated on total plinth area',
    feeItem2: 'Commercial & Institutional Building Permit Fee',
    feeRate2: 'Rs. 25 per sq. ft.',
    feeNote2: 'Commercial / Institutional structures',
    feeItem3: 'On-site Field Inspection (Sarjamin) Fee',
    feeRate3: 'Rs. 1,500/-',
    feeNote3: 'Ward technical team verification',
    feeItem4: 'Building Completion Certificate (Nirman Sampanna)',
    feeRate4: 'Rs. 2,000/-',
    feeNote4: 'Final inspection & digital issuance',
    feeItem5: 'Permit Extension (Myaad Thap) Fee',
    feeRate5: '10% of total permit fee',
    feeNote5: 'For renewals after standard 2-year validity',
    btnLoginSystem: 'Log In to Online E-BPS Portal',
    btnViewBylaws: 'View Building By-Laws',
    footerNote247: '* E-BPS online application portal is open 24/7.',
    sn1: '1',
    sn2: '2',
    sn3: '3',
    sn4: '4',
    sn5: '5',
    sn6: '6',
    sn7: '7'
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

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (data[key]) {
      el.innerHTML = data[key];
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
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('show');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close when tapping outside the mobile menu
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        if (navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
          const icon = toggleBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Handle mobile dropdown click/touch
    const dropdownLinks = navMenu.querySelectorAll('.nav-dropdown > .nav-link');
    dropdownLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          e.stopPropagation();
          const parent = link.closest('.nav-dropdown');
          if (parent) {
            // Close other open dropdowns
            navMenu.querySelectorAll('.nav-dropdown').forEach(d => {
              if (d !== parent) d.classList.remove('open');
            });
            parent.classList.toggle('open');
          }
        }
      });
    });

    // Close mobile nav when clicking any dropdown item or normal link
    navMenu.querySelectorAll('.dropdown-item, .nav-link:not(:has(+ .dropdown-menu))').forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navMenu.classList.remove('show');
          const icon = toggleBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      });
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

