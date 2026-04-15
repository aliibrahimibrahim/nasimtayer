// ===== TRANSLATIONS =====
const translations = {
  ar: {
    dir: 'rtl', font: 'Tajawal, sans-serif',
    nav_home:'الرئيسية', nav_services:'خدماتنا', nav_gallery:'معرض الأزياء',
    nav_partners:'شركاؤنا', nav_why:'لماذا نحن', nav_contact:'تواصل معنا',
    hero_tag:'متخصصون في الأزياء المدرسية — شركاؤكم الموثوقون',
    hero_h1_1:'أزياء تعكس', hero_h1_acc:'هوية', hero_h1_2:'مدرستك',
    hero_h1_sub:'تصميم · توريد · تميّز',
    hero_p:'نصمم ونورد الأزياء المدرسية بأعلى معايير الجودة، مع الحفاظ على هوية مدرستك وتميّزها. من أول فكرة حتى آخر قطعة في يد الطالب.',
    hero_btn1:'احصل على عرض سعر', hero_btn2:'استعرض أعمالنا',
    hero_card_title:'تصميم خاص بمدرستك', hero_card_sub:'هوية بصرية فريدة من نوعها',
    hero_stat1_lbl:'مدرسة شريكة', hero_stat2_lbl:'سنوات خبرة',
    hero_stat3_lbl:'رضا العملاء', hero_stat4_lbl:'وقت الاستجابة',
    hero_footer_txt:'نرد على جميع الاستفسارات خلال 48 ساعة عمل. فريقنا متاح لخدمتكم.',
    svc_lbl:'خدماتنا', svc_title1:'ما نقدمه', svc_title_acc:'لمدرستك',
    svc_sub:'حلول متكاملة للأزياء المدرسية من الفكرة حتى التسليم',
    svc1_title:'تصميم الهوية البصرية', svc1_p:'نصمم زياً مدرسياً فريداً يعكس هوية مدرستك وقيمها، مع مراعاة الذوق العام والمعايير التعليمية.',
    svc2_title:'الخياطة والتفصيل', svc2_p:'خياطة احترافية بأقمشة عالية الجودة مختارة بعناية، تدوم طويلاً وتحافظ على مظهرها المتميز.',
    svc3_title:'التوريد والتسليم', svc3_p:'نضمن التسليم في الوقت المحدد لجميع الطلبيات، مع إدارة كاملة لسلسلة التوريد.',
    svc4_title:'المقاسات والتخصيص', svc4_p:'قياسات دقيقة لجميع المراحل الدراسية، مع إمكانية تخصيص كل تفصيلة حسب متطلباتكم.',
    svc5_title:'الشعارات والطباعة', svc5_p:'طباعة وتطريز شعار مدرستك بأعلى جودة تحافظ على الألوان وتتحمل الغسيل المتكرر لسنوات.',
    svc6_title:'الصيانة والتجديد', svc6_p:'خدمات ما بعد البيع والصيانة الدورية، مع إمكانية تجديد المخزون بنفس الجودة سنة بعد سنة.',
    gal_lbl:'أعمالنا', gal_title1:'معرض', gal_title_acc:'الأزياء',
    gal_sub:'لمحة من تصاميمنا المتميزة لمدارس مختلفة', gal_overlay:'عرض التفاصيل',
    gal1_title:'الزي الرسمي', gal1_sub:'تصميم كلاسيكي فاخر',
    gal2_title:'زي المرحلة الابتدائية', gal2_sub:'ألوان مبهجة ومريحة',
    gal3_title:'البدلة الرياضية', gal3_sub:'راحة وأداء عالي',
    gal4_title:'الإكسسوارات المدرسية', gal4_sub:'ربطة عنق · حزام · قبعة',
    gal5_title:'زي الفتيات', gal5_sub:'أناقة وعفّة في آنٍ واحد',
    gal_catalog_btn:'طلب كتالوج كامل',
    partners_lbl:'ثقتهم شرفنا', partners_title1:'مدارسنا', partners_title_acc:'الشريكة',
    why_lbl:'لماذا نحن', why_title1:'الجودة', why_title_acc:'ليست', why_title2:'مجرد كلمة',
    why_desc:'نؤمن أن الزي المدرسي المتميز يساهم في بناء الهوية المؤسسية للمدرسة ويعزز انتماء الطلاب. لذلك نضع الجودة في قلب كل قرار نتخذه.',
    why1_title:'أقمشة معتمدة دولياً', why1_p:'نستخدم أفضل الأقمشة التي تتحمل الاستخدام اليومي وتحافظ على مظهرها.',
    why2_title:'عقود واضحة وشفافة', why2_p:'التزام كامل بالمواعيد والمواصفات مع ضمان جودة موثّق على كل قطعة.',
    why3_title:'شراكة طويلة الأمد', why3_p:'لا نبحث عن صفقة واحدة، بل نبني علاقات مستدامة مع كل مدرسة نتعامل معها.',
    why_stat1_lbl:'مدرسة تثق بنا', why_stat2_lbl:'سنوات في السوق',
    why_stat3_lbl:'التزام بالمواعيد', why_stat4_lbl:'دعم العملاء',
    con_lbl:'نحن هنا', con_title1:'تواصل', con_title_acc:'معنا',
    con_sub:'أرسل لنا تفاصيل احتياجاتك وسنرد عليك خلال 24 ساعة عمل',
    con_info_title:'معلومات التواصل',
    con_info_sub:'يسعدنا استقبال استفساراتكم في أي وقت. فريقنا جاهز لمساعدتكم في كل خطوة.',
    con_phone_lbl:'الهاتف', con_wa_lbl:'واتساب', con_email_lbl:'البريد الإلكتروني',
    con_location_lbl:'الموقع', con_location_val:'تشاد/انجمينا',
    con_hours_title:'ساعات العمل',
    con_hours_p:'الأحد — الخميس: 8:00 ص — 6:00 م<br>الجمعة — السبت: مغلق',
    con_form_title:'نموذج الاستفسار',
    con_form_name:'الاسم الكامل', con_form_name_placeholder:'أدخل اسمك الكامل',
    con_form_email:'البريد الإلكتروني', con_form_email_placeholder:'your@email.com',
    con_form_phone:'رقم الهاتف', con_form_phone_placeholder:'+235 12 34 56',
    con_form_school:'اسم المدرسة', con_form_school_placeholder:'اسم المدرسة',
    con_form_subject:'موضوع الاستفسار', con_form_subject_select:'-- اختر موضوع الاستفسار --',
    con_form_subject_design:'تصميم جديد', con_form_subject_tailoring:'خياطة وتفصيل',
    con_form_subject_supply:'توريد وتسليم', con_form_subject_price:'عرض سعري',
    con_form_subject_maintenance:'صيانة وتجديد', con_form_subject_other:'أخرى',
    con_form_message:'رسالتك', con_form_message_placeholder:'اكتب تفاصيل استفسارك هنا...',
    con_form_submit:'إرسال الاستفسار', form_required:'يرجى ملء جميع الحقول المطلوبة',
    footer_desc:'نصمم ونورد الأزياء المدرسية بأعلى معايير الجودة. شركاؤكم الموثوقون في رحلة التميز المدرسي.',
    footer_links:'روابط سريعة', footer_services_col:'خدماتنا',
    footer_svc1:'تصميم الهوية البصرية', footer_svc2:'الخياطة والتفصيل',
    footer_svc3:'التوريد والتسليم', footer_svc4:'طباعة الشعارات', footer_svc5:'الصيانة والتجديد',
    footer_copy:`© ${new Date().getFullYear()} nasimtayer. جميع الحقوق محفوظة.`,
    toast_msg:'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.',
    back_to_main: 'العودة للرئيسية', coming_soon: 'قريباً', model_placeholder: 'موديل',
    cat_formal_title: 'كتالوج الزي الرسمي', cat_formal_desc: 'تشكيلة فاخرة من الأزياء الرسمية الكلاسيكية',
    cat_primary_title: 'كتالوج المرحلة الابتدائية', cat_primary_desc: 'ألوان وتصاميم مريحة ومبهجة لأطفالنا',
    cat_sports_title: 'كتالوج البدلة الرياضية', cat_sports_desc: 'أطقم رياضية عملية لأداء رياضي عالي الجودة',
    cat_accessories_title: 'كتالوج الإكسسوارات المدرسية', cat_accessories_desc: 'لمسات نهائية تكمل أناقة الطالب',
    cat_girls_title: 'كتالوج زي الفتيات', cat_girls_desc: 'تصاميم محتشمة وأنيقة تلائم طالباتنا',
  },
  fr: {
    dir: 'ltr', font: 'Poppins, sans-serif',
    nav_home:'Accueil', nav_services:'Services', nav_gallery:'Galerie',
    nav_partners:'Partenaires', nav_why:'Pourquoi nous', nav_contact:'Contact',
    hero_tag:'Spécialistes en uniformes scolaires — Votre partenaire de confiance',
    hero_h1_1:'Des uniformes qui reflètent', hero_h1_acc:"l'identité", hero_h1_2:'de votre école',
    hero_h1_sub:'Conception · Fourniture · Excellence',
    hero_p:"Nous concevons et fournissons des uniformes scolaires selon les plus hauts standards de qualité, en préservant l'identité de votre école. De la première idée jusqu'à la dernière pièce.",
    hero_btn1:'Obtenir un devis', hero_btn2:'Voir nos réalisations',
    hero_card_title:'Design personnalisé pour votre école', hero_card_sub:'Une identité visuelle unique',
    hero_stat1_lbl:'écoles partenaires', hero_stat2_lbl:"années d'expérience",
    hero_stat3_lbl:'satisfaction client', hero_stat4_lbl:'délai de réponse',
    hero_footer_txt:"Nous répondons à toutes les demandes dans les 48 heures ouvrables. Notre équipe est à votre service.",
    svc_lbl:'Nos services', svc_title1:'Ce que nous offrons', svc_title_acc:'à votre école',
    svc_sub:"Solutions complètes pour uniformes scolaires, de l'idée à la livraison",
    svc1_title:"Conception de l'identité visuelle", svc1_p:"Nous concevons un uniforme scolaire unique qui reflète l'identité et les valeurs de votre école, en tenant compte des normes éducatives.",
    svc2_title:'Couture et confection', svc2_p:'Couture professionnelle avec des tissus de haute qualité soigneusement sélectionnés, durables et impeccables.',
    svc3_title:'Fourniture et livraison', svc3_p:"Livraison garantie dans les délais pour toutes les commandes, avec une gestion complète de la chaîne d'approvisionnement.",
    svc4_title:'Tailles et personnalisation', svc4_p:'Mesures précises pour tous les niveaux scolaires, avec possibilité de personnaliser chaque détail selon vos exigences.',
    svc5_title:'Logos et impression', svc5_p:'Impression et broderie du logo de votre école avec la plus haute qualité, résistante aux lavages répétés pendant des années.',
    svc6_title:'Entretien et renouvellement', svc6_p:'Services après-vente et maintenance régulière, avec possibilité de renouveler le stock avec la même qualité chaque année.',
    gal_lbl:'Nos réalisations', gal_title1:'Galerie', gal_title_acc:'de tenues',
    gal_sub:'Un aperçu de nos créations distinctives pour différentes écoles', gal_overlay:'Voir les détails',
    gal1_title:'Tenue officielle', gal1_sub:'Design classique et élégant',
    gal2_title:'Uniforme primaire', gal2_sub:'Couleurs joyeuses et confortables',
    gal3_title:'Tenue sportive', gal3_sub:'Confort et haute performance',
    gal4_title:'Accessoires scolaires', gal4_sub:'Cravate · Ceinture · Chapeau',
    gal5_title:'Tenue filles', gal5_sub:'Élégance et modestie réunies',
    gal_catalog_btn:'Demander un catalogue complet',
    partners_lbl:'Leur confiance, notre fierté', partners_title1:'Nos écoles', partners_title_acc:'partenaires',
    why_lbl:'Pourquoi nous', why_title1:'La qualité', why_title_acc:"n'est pas", why_title2:'un simple mot',
    why_desc:"Nous croyons que des uniformes scolaires distinctifs contribuent à construire l'identité institutionnelle de l'école et renforcent le sentiment d'appartenance des élèves.",
    why1_title:'Tissus certifiés internationalement', why1_p:"Nous utilisons les meilleurs tissus qui résistent à l'usage quotidien et conservent leur apparence.",
    why2_title:'Contrats clairs et transparents', why2_p:'Respect total des délais et des spécifications avec une garantie de qualité documentée sur chaque pièce.',
    why3_title:'Partenariat à long terme', why3_p:"Nous ne cherchons pas une seule transaction, mais construisons des relations durables avec chaque école.",
    why_stat1_lbl:'écoles nous font confiance', why_stat2_lbl:'ans sur le marché',
    why_stat3_lbl:'respect des délais', why_stat4_lbl:'support client',
    con_lbl:'Nous sommes là', con_title1:'Contactez', con_title_acc:'nous',
    con_sub:'Envoyez-nous les détails de vos besoins et nous vous répondrons dans les 24 heures ouvrables',
    con_info_title:'Informations de contact',
    con_info_sub:"Nous sommes ravis de recevoir vos demandes à tout moment. Notre équipe est prête à vous accompagner à chaque étape.",
    con_phone_lbl:'Téléphone', con_wa_lbl:'WhatsApp', con_email_lbl:'E-mail',
    con_location_lbl:'Adresse', con_location_val:"Tchad / N'Djaména",
    con_hours_title:"Heures d'ouverture",
    con_hours_p:'Dimanche — Jeudi : 8h00 — 18h00<br>Vendredi — Samedi : Fermé',
    con_form_title:'Formulaire de demande',
    con_form_name:'Nom complet', con_form_name_placeholder:'Entrez votre nom complet',
    con_form_email:'Adresse e-mail', con_form_email_placeholder:'votre@email.com',
    con_form_phone:'Numéro de téléphone', con_form_phone_placeholder:'+235 12 34 56',
    con_form_school:"Nom de l'école", con_form_school_placeholder:"Nom de l'école",
    con_form_subject:'Sujet de la demande', con_form_subject_select:'-- Choisir le sujet de la demande --',
    con_form_subject_design:'Nouvelle conception', con_form_subject_tailoring:'Couture et confection',
    con_form_subject_supply:'Fourniture et livraison', con_form_subject_price:'Devis',
    con_form_subject_maintenance:'Entretien et renouvellement', con_form_subject_other:'Autre',
    con_form_message:'Votre message', con_form_message_placeholder:'Décrivez les détails de votre demande ici...',
    con_form_submit:'Envoyer la demande', form_required:'Veuillez remplir tous les champs obligatoires',
    footer_desc:"Nous concevons et fournissons des uniformes scolaires selon les plus hauts standards de qualité. Votre partenaire de confiance pour l'excellence scolaire.",
    footer_links:'Liens rapides', footer_services_col:'Nos services',
    footer_svc1:"Conception de l'identité visuelle", footer_svc2:'Couture et confection',
    footer_svc3:'Fourniture et livraison', footer_svc4:'Impression de logos', footer_svc5:'Entretien et renouvellement',
    footer_copy:`© ${new Date().getFullYear()} nasimtayer. Tous droits réservés.`,
    toast_msg:'Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.',
    back_to_main: "Retour à l'accueil", coming_soon: 'Bientôt', model_placeholder: 'Modèle',
    cat_formal_title: 'Catalogue Uniforme Officiel', cat_formal_desc: 'Collection luxueuse de tenues officielles classiques',
    cat_primary_title: 'Catalogue Primaire', cat_primary_desc: 'Couleurs et designs confortables pour nos enfants',
    cat_sports_title: 'Catalogue Tenue Sportive', cat_sports_desc: 'Ensembles pratiques pour de hautes performances sportives',
    cat_accessories_title: 'Catalogue Accessoires', cat_accessories_desc: "Touche finale pour l'élégance de l'étudiant",
    cat_girls_title: 'Catalogue Filles', cat_girls_desc: 'Designs modestes et élégants pour nos étudiantes',
  }
};

// ===== CURRENT LANGUAGE =====
let currentLang = 'ar';

// ===== SET LANGUAGE =====
function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = t.dir;
  document.body.style.fontFamily = t.font;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // RTL/LTR: mobile menu side
  const mobMenu = document.getElementById('mob');
  if (mobMenu) {
    if (lang === 'fr') {
      mobMenu.style.right = 'auto'; mobMenu.style.left = '0';
      mobMenu.style.borderLeft = '1px solid var(--border)'; mobMenu.style.borderRight = 'none';
    } else {
      mobMenu.style.right = '0'; mobMenu.style.left = 'auto';
      mobMenu.style.borderRight = 'none'; mobMenu.style.borderLeft = '1px solid var(--border)';
    }
  }

  try { localStorage.setItem('nasim_lang', lang); } catch(e) {}
}

// ===== MOBILE MENU TOGGLE =====
function tog() {
  const mob = document.getElementById('mob');
  const burger = document.querySelector('.hburg');
  mob.classList.toggle('show');
  burger.classList.toggle('active');
}

// ===== SPAM GUARD =====
const spamGuard = {
  formLoadTime: null,
  lastSubmitTime: null,
  MIN_FILL_TIME: 4,        // seconds a human needs minimum
  RATE_LIMIT_SECONDS: 120, // 2 minutes between submissions

  init() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    // Start timer on first field interaction
    form.addEventListener('focusin', () => {
      if (!this.formLoadTime) this.formLoadTime = Date.now();
    }, { once: true });
  },

  // Layer 1: Honeypot — _gotcha must be empty
  checkHoneypot() {
    const trap = document.getElementById('_gotcha');
    return !trap || trap.value.trim() === '';
  },

  // Layer 2: Time check — bots submit instantly
  checkTime() {
    if (!this.formLoadTime) return false;
    return (Date.now() - this.formLoadTime) / 1000 >= this.MIN_FILL_TIME;
  },

  // Layer 3: Rate limiting — one submission per 2 minutes
  checkRateLimit() {
    if (!this.lastSubmitTime) return true;
    return (Date.now() - this.lastSubmitTime) / 1000 >= this.RATE_LIMIT_SECONDS;
  },

  // Layer 4: Content spam patterns
  checkContent(name, message) {
    if (/https?:\/\//.test(name)) return false;                       // URL in name
    if (/<[a-z][\s\S]*>/i.test(name + message)) return false;        // HTML tags
    if (/\b(viagra|cialis|casino|crypto|bitcoin|lottery|prize|SEO|backlink|free money|earn \$|click here)\b/i.test(message)) return false;
    if (message.replace(/\s/g, '').length < 10) return false;        // too short
    return true;
  },

  recordSubmission() { this.lastSubmitTime = Date.now(); },
  resetTimer()       { this.formLoadTime = null; }
};

// ===== FORM SUBMISSION =====
function sendForm(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  const t = translations[currentLang];
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) { isValid = false; input.focus(); }
  });

  if (!isValid) { alert(t.form_required); return; }

  // --- Spam checks ---
  // Layer 1: Honeypot (silent — bots get no feedback)
  if (!spamGuard.checkHoneypot()) return;

  // Layer 2: Time check (silent)
  if (!spamGuard.checkTime()) return;

  // Layer 3: Rate limit
  if (!spamGuard.checkRateLimit()) {
    alert(currentLang === 'fr'
      ? 'Veuillez attendre 2 minutes avant de renvoyer le formulaire.'
      : 'يرجى الانتظار دقيقتين قبل إعادة الإرسال.');
    return;
  }

  // Layer 4: Content check
  const nameVal    = (document.getElementById('name')    || {}).value || '';
  const messageVal = (document.getElementById('message') || {}).value || '';
  if (!spamGuard.checkContent(nameVal, messageVal)) {
    alert(currentLang === 'fr'
      ? 'Votre message contient du contenu non autorisé. Veuillez le corriger.'
      : 'تم رصد محتوى غير مسموح به في رسالتك. يرجى المراجعة والمحاولة مجدداً.');
    return;
  }

  // --- All checks passed: send to Formspree ---
  const submitBtn = form.querySelector('.fbtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    submitBtn.style.cursor = 'not-allowed';
  }

  const formData = new FormData(form);
  fetch('https://formspree.io/f/maqaqpav', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    // Treat all responses as success - formspree sends emails regardless
    spamGuard.recordSubmission();
    spamGuard.resetTimer();
    form.reset();
    window.location.href = 'thank-you.html';
  })
  .catch(() => {
    alert(currentLang === 'fr'
      ? "Erreur de connexion. Vérifiez votre connexion internet."
      : 'تأكد من اتصالك بالإنترنت ثم حاول مرة أخرى.');
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      submitBtn.style.cursor = '';
    }
  });
}

// ===== TOAST NOTIFICATION =====
function showToast() {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toastMsg) toastMsg.textContent = translations[currentLang].toast_msg;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 4000);
}

// ===== REVEAL ANIMATION ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'revealAnim 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'ar';
  try { savedLang = localStorage.getItem('nasim_lang') || 'ar'; } catch(e) {}
  setLang(savedLang);

  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Attach form submit handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    spamGuard.init(); // Initialize spam protection
    contactForm.addEventListener('submit', sendForm);
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const burger = document.querySelector('.hburg');
        if (burger && burger.classList.contains('active')) tog();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== CLOSE MOBILE MENU ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
  const mob = document.getElementById('mob');
  const nav = document.querySelector('nav');
  if (nav && !nav.contains(e.target) && mob && mob.classList.contains('show')) tog();
});

// ===== WHATSAPP FAB SCROLL =====
const waFab = document.getElementById('waFab');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (!waFab) return;
  const currentScrollY = window.scrollY;
  // Show when scrolling down, hide when scrolling up
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    waFab.classList.add('show');
  } else if (currentScrollY < lastScrollY) {
    waFab.classList.remove('show');
  }
  lastScrollY = currentScrollY;
});