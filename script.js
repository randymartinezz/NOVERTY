/* =====================================================
   NOVERTY — INTERACTIONS + I18N
   ===================================================== */

(function () {
  'use strict';

  /* ─── TRANSLATIONS ─── */
  var T = {
    en: {
      nav_tagline:    'Exclusively for CANA BAY owners.',
      hero_eyebrow:   'Cana Bay\u00a0\u00b7\u00a0Punta Cana',
      hero_headline:  'Cana Bay Is Premium.<br>Your Property Should Be Too.',
      hero_sub:       'Airbnb Management for Cana Bay.',
      hero_cta:       'CHECK IF YOUR PROPERTY QUALIFIES',
      wa_text:        'Hi, I\u2019m here to help.',
      footer_legal:   'NOVERTY operates independently and is not affiliated with the CANA BAY development or its administration. All content is presented by NOVERTY for informational and promotional purposes only. Any unauthorized use, reproduction, or distribution is strictly prohibited. NOVERTY &copy; 2026. All rights reserved.',
      intro_heading:  'Cana Bay Is Built for Lifestyle.<br>We Build It for Performance.',
      intro_sub:      'Most properties are listed.<br>Very few are optimized.',
      lifestyle_heading: 'Built on Top of Cana Bay',
      lifestyle_sub:  'Beach club. Golf. Private access.<br>We turn every advantage into higher revenue.',
      exp_heading:    'What to Experience in Cana Bay',
      exp_intro:      'Cana Bay is not just a location.<br>It\u2019s a complete lifestyle experience built around the Caribbean.',
      exp_explore:    'Explore',
      exp_b1_title:   'Private Beach Club',
      exp_b1_text:    'An exclusive beachfront space with infinity pool, panoramic terrace and private beach access.',
      exp_b1_modal_title: 'Private Beach Club',
      exp_b1_modal_text:  'The social heart of Cana Bay.\n\nA refined beachfront setting with infinity pool, panoramic views, private beach access and a more elevated way to spend the day.',
      exp_b2_title:   'Championship Golf',
      exp_b2_text:    'An 18-hole championship golf course designed for world-class play.',
      exp_b2_modal_title: 'Championship Golf',
      exp_b2_modal_text:  'Home to the Hard Rock Golf Club at Cana Bay, this 18-hole championship course was designed by Nicklaus Golf and built into the landscape of the community.',
      exp_b3_title:   'Hard Rock Lifestyle',
      exp_b3_text:    'Dining, entertainment, casino and nightlife just minutes away.',
      exp_b3_modal_title: 'Hard Rock Lifestyle',
      exp_b3_modal_text:  'From restaurants and entertainment to casino and nightlife, the Hard Rock experience adds another layer of energy to the Cana Bay environment.',
      exp_b4_title:   'Wellness & Racquet Club',
      exp_b4_text:    'Fitness, racquet sports and active living integrated into the resort lifestyle.',
      exp_b4_modal_title: 'Wellness & Racquet Club',
      exp_b4_modal_text:  'An active side of Cana Bay shaped by movement, wellness and private-club energy, with racquet facilities and a more balanced everyday rhythm.',
      exp_final:      'And that\u2019s exactly what we optimize.',
      excl_heading:   'We Don\u2019t Manage Everywhere.<br>We Dominate Where It Matters.',
      excl_sub:       'Focused exclusively on Cana Bay.',
      emo_heading:    'You Own in Cana Bay.<br>We Make It Perform Like It Should.',
      emo_sub:        'No stress. No operational noise. Just performance inside Cana Bay.',
      lead_notice:    'This is exclusively for Cana Bay property owners.',

      sf_intro_q:     'Let\u2019s explore your<br><em>property\u2019s potential.</em>',
      sf_intro_sub:   'We\u2019ll ask a few questions to understand your goals and show you what\u2019s possible with professional management.',
      sf_q1:          'What\u2019s your full name?',
      sf_q2:          'What\u2019s your email?',
      sf_q3:          'Your phone number?',
      sf_q4:          'What type of property do you own?',
      sf_q5:          'Is your property currently listed?',
      sf_q6:          'When would you like to get started?',
      sf_q7:          'We will reach out to continue the process.',
      sf_consent_sub: 'Do you agree?',
      sf_thanks:      'We\u2019ll be in touch.',
      sf_thanks_sub:  'Thank you for sharing your goals with us. A member of our team will reach out shortly to discuss your property\u2019s potential.',
      sf_hint_choice: 'Select the option that best fits',
      sf_apartment:   'Apartment / Condo',
      sf_house:       'House / Villa',
      sf_multiple:    'Multiple Properties',
      sf_underperform:'Yes, but underperforming',
      sf_want_more:   'Yes, doing well but want more',
      sf_not_listed:  'Not yet listed',
      sf_exploring:   'Just exploring options',
      sf_asap:        'As soon as possible',
      sf_1m:          'Within a month',
      sf_3m:          'Within 3 months',
      sf_explore:     'Just exploring',

      sf_begin:       'BEGIN',
      sf_continue:    'CONTINUE',
      sf_accept:      'ACCEPT',
      sf_consent_yes: 'YES, I AGREE',
      sf_close_btn:   'CLOSE',
      how_label:      '02 \u2014 How It Works',
      how_heading:    'How It Works',
      how_s1_title:   'Review & Strategy',
      how_s1_text:    'We analyze your Cana Bay property and define a revenue plan tailored to its dynamics.',
      how_s2_title:   'Setup & Launch',
      how_s2_text:    'We optimize and list your property for maximum visibility and premium positioning.',
      how_s3_title:   'Manage & Optimize',
      how_s3_text:    'We handle operations and improve performance continuously.',
      metrics_heading:'Not Every Property in Cana Bay<br>Performs the Same.',
      metrics_intro:  'That difference is not the property.<br>It\u2019s the system behind it.',
      metrics_m1:     'Occupancy Optimization',
      metrics_m2:     'Revenue Performance',
      metrics_m3:     'Guest Experience',
      metrics_v3:     '03',
      perf_lead:      'This is where most properties fall short.',
      perf_b1_title:  'Occupancy Optimization',
      perf_b1_text:   'Maximized bookings through pricing and timing.',
      perf_b2_title:  'Revenue Performance',
      perf_b2_text:   'Higher nightly rates through positioning.',
      perf_b3_title:  'Guest Experience',
      perf_b3_text:   'Consistent stays that sustain performance.',
      why_heading:    'The Cana Bay Performance System',
      why_b1_title:   'Positioning',
      why_b1_text:    'We transform your Cana Bay property into a premium-performing asset.',
      why_b2_title:   'Revenue Engineering',
      why_b2_text:    'Dynamic pricing and demand control tailored to Cana Bay occupancy behavior.',
      why_b3_title:   'Operational Control',
      why_b3_text:    'End-to-end execution inside a high-demand environment.',
      cta_heading:    'Your Property in Cana Bay<br>Should Be Performing.',
      cta_sub:        'Let\u2019s turn it into a real income stream.',
      cta_btn:        'Get Your Projection',
      lead_label:     '06 \u2014 Leadership',
      lead_name:      'Amarantha Gomez',
      lead_role:      'Founder & CEO \u2014 NOVERTY',
      lead_heading:   'Behind the Brand',
      lead_bio:       '<p>With over 8 years of experience in the short-term rental and luxury property space in Punta Cana, Amarantha Gomez has built a reputation for delivering consistent, high-performance results.</p><p>Her background includes working with recognized names such as Luxury Homes and Grupo Punta Cana, developing a deep understanding of both the operational and strategic side of property management.</p><p>Today, through Noverty, her focus goes beyond simply managing properties. The objective is clear: to turn every asset into a high-performing investment through intelligent strategy, refined positioning, and a results-driven approach.</p><p>Because this is not about having someone take care of your property.</p><p>It\u2019s about performance.<br>It\u2019s about results.<br>It\u2019s about real income \u2014 money in your bank account.</p>',
      lead_form_title:   'Let\u2019s explore your property\u2019s potential.',
      lead_form_sub:     'Tell us about your property and goals. We\u2019ll get back to you within 24 hours.',
      lead_form_name:    'Full Name',
      lead_form_phone:   'Phone / WhatsApp',
      lead_form_email:   'Email',
      lead_form_type:    'Property Type',
      lead_form_select:  'Select',
      lead_form_opt_apt: 'Apartment / Condo',
      lead_form_opt_villa:'Villa / House',
      lead_form_opt_ph:  'Penthouse',
      lead_form_opt_multi:'Multiple Units',
      lead_form_bedrooms:'Bedrooms',
      lead_form_location:'Property Location',
      lead_form_status:  'Current Status',
      lead_form_opt_listed:'Already listed on Airbnb',
      lead_form_opt_notlisted:'Not yet listed',
      lead_form_opt_other:'Listed elsewhere',
      lead_form_readiness:'Is your property ready for short-term rental?',
      lead_form_r_listed: 'Already listed',
      lead_form_r_ready:  'Ready but not listed',
      lead_form_r_prep:   'Still preparing',
      lead_form_r_explore:'Just exploring',
      lead_form_timeline: 'When would you like to start?',
      lead_form_t_asap:   'ASAP',
      lead_form_t_30d:    'Within 30 days',
      lead_form_t_3m:     '1\u20133 months',
      lead_form_t_explore:'Just exploring',
      lead_form_schedule: 'Select a preferred day and time for us to contact you.',
      lead_form_morning:  'Morning (9am\u201312pm)',
      lead_form_afternoon:'Afternoon (12pm\u20134pm)',
      lead_form_evening:  'Evening (4pm\u20137pm)',
      lead_form_submit:   'START MY JOURNEY',
      lead_form_thanks:  'We will contact you via WhatsApp within your selected time.',
      lead_form_thanks_sub:'A member of our team will reach out to discuss your property\u2019s potential.',
    },

    es: {
      nav_tagline:    'Exclusivo para propietarios de CANA BAY.',
      hero_eyebrow:   'Cana Bay\u00a0\u00b7\u00a0Punta Cana',
      hero_headline:  'Cana Bay Es Premium.<br>Tu Propiedad Tambi\u00e9n Deber\u00eda Serlo.',
      hero_sub:       'Gesti\u00f3n Airbnb para Cana Bay.',
      hero_cta:       'VERIFICA SI TU PROPIEDAD CALIFICA',
      wa_text:        'Hola, estoy aquí para asistirte.',
      footer_legal:   'NOVERTY opera de forma independiente y no est\u00e1 afiliado al desarrollo Cana Bay ni a su administraci\u00f3n. Todo el contenido es presentado por NOVERTY con fines informativos y promocionales \u00fanicamente. Cualquier uso, reproducci\u00f3n o distribuci\u00f3n no autorizada est\u00e1 estrictamente prohibida. NOVERTY &copy; 2026. Todos los derechos reservados.',
      intro_heading:  'Cana Bay Est\u00e1 Construido para el Lifestyle.<br>Nosotros lo Construimos para el Rendimiento.',
      intro_sub:      'La mayor\u00eda de las propiedades est\u00e1n listadas.<br>Muy pocas est\u00e1n optimizadas.',
      lifestyle_heading: 'Construido Sobre Cana Bay',
      lifestyle_sub:  'Beach club. Golf. Acceso privado.<br>Convertimos cada ventaja en mayores ingresos.',
      exp_heading:    'Qu\u00e9 Hacer en Cana Bay',
      exp_intro:      'Cana Bay no es solo una ubicaci\u00f3n.<br>Es una experiencia completa de lifestyle construida alrededor del Caribe.',
      exp_explore:    'Explorar',
      exp_b1_title:   'Beach Club Privado',
      exp_b1_text:    'Un espacio exclusivo frente al mar con piscina infinita, terraza panor\u00e1mica y acceso privado a la playa.',
      exp_b1_modal_title: 'Beach Club Privado',
      exp_b1_modal_text:  'El coraz\u00f3n social de CANA BAY.\n\nUn entorno refinado frente al mar con piscina infinita, vistas panor\u00e1micas, acceso privado a la playa y una forma m\u00e1s elevada de pasar el d\u00eda.',
      exp_b2_title:   'Golf de Campeonato',
      exp_b2_text:    'Un campo de golf de 18 hoyos de campeonato dise\u00f1ado para juego de clase mundial.',
      exp_b2_modal_title: 'Golf de Campeonato',
      exp_b2_modal_text:  'Sede del Hard Rock Golf Club at Cana Bay, este campo de campeonato de 18 hoyos fue dise\u00f1ado por Nicklaus Golf y construido dentro del paisaje de la comunidad.',
      exp_b3_title:   'Hard Rock Lifestyle',
      exp_b3_text:    'Gastronom\u00eda, entretenimiento, casino y vida nocturna a minutos.',
      exp_b3_modal_title: 'Hard Rock Lifestyle',
      exp_b3_modal_text:  'Desde restaurantes y entretenimiento hasta casino y vida nocturna, la experiencia Hard Rock a\u00f1ade otra capa de energ\u00eda al entorno de Cana Bay.',
      exp_b4_title:   'Wellness & Racquet Club',
      exp_b4_text:    'Fitness, deportes de raqueta y vida activa integrados al estilo del resort.',
      exp_b4_modal_title: 'Wellness & Racquet Club',
      exp_b4_modal_text:  'Un lado activo de Cana Bay marcado por el movimiento, el bienestar y la energ\u00eda de club privado, con instalaciones de raqueta y un ritmo diario m\u00e1s equilibrado.',
      exp_final:      'Y eso es exactamente lo que optimizamos.',
      excl_heading:   'No Gestionamos en Todas Partes.<br>Dominamos Donde Importa.',
      excl_sub:       'Enfocados exclusivamente en Cana Bay.',
      emo_heading:    'Eres Propietario en Cana Bay.<br>Hacemos Que Rinda Como Debe.',
      emo_sub:        'Sin estr\u00e9s. Sin ruido operativo. Solo rendimiento dentro de Cana Bay.',
      lead_notice:    'Esto es exclusivo para propietarios de Cana Bay.',

      sf_intro_q:     'Exploremos el<br><em>potencial de tu propiedad.</em>',
      sf_intro_sub:   'Te haremos algunas preguntas para entender tus objetivos y mostrarte lo que es posible con gesti\u00f3n profesional.',
      sf_q1:          '\u00bfC\u00f3mo te llamas?',
      sf_q2:          '\u00bfCu\u00e1l es tu email?',
      sf_q3:          '\u00bfTu n\u00famero de tel\u00e9fono?',
      sf_q4:          '\u00bfQu\u00e9 tipo de propiedad tienes?',
      sf_q5:          '\u00bfTu propiedad est\u00e1 listada actualmente?',
      sf_q6:          '\u00bfCu\u00e1ndo te gustar\u00eda comenzar?',
      sf_q7:          'Nos pondremos en contacto para continuar el proceso.',
      sf_consent_sub: '\u00bfEst\u00e1s de acuerdo?',
      sf_thanks:      'Nos pondremos en contacto.',
      sf_thanks_sub:  'Gracias por compartir tus objetivos. Un miembro de nuestro equipo se comunicar\u00e1 contigo pronto para hablar sobre el potencial de tu propiedad.',
      sf_hint_choice: 'Selecciona la opci\u00f3n que mejor encaje',
      sf_apartment:   'Apartamento / Condo',
      sf_house:       'Casa / Villa',
      sf_multiple:    'M\u00faltiples Propiedades',
      sf_underperform:'S\u00ed, pero con bajo rendimiento',
      sf_want_more:   'S\u00ed, va bien pero quiero m\u00e1s',
      sf_not_listed:  'A\u00fan no est\u00e1 listada',
      sf_exploring:   'Solo explorando opciones',
      sf_asap:        'Lo antes posible',
      sf_1m:          'En un mes',
      sf_3m:          'En 3 meses',
      sf_explore:     'Solo explorando',

      sf_begin:       'COMENZAR',
      sf_continue:    'CONTINUAR',
      sf_accept:      'ACEPTAR',
      sf_consent_yes: 'S\u00cd, ACEPTO',
      sf_close_btn:   'CERRAR',
      how_label:      '02 \u2014 C\u00f3mo Funciona',
      how_heading:    'C\u00f3mo Funciona',
      how_s1_title:   'An\u00e1lisis y Estrategia',
      how_s1_text:    'Analizamos tu propiedad en Cana Bay y definimos un plan de ingresos adaptado a su din\u00e1mica.',
      how_s2_title:   'Configuraci\u00f3n y Lanzamiento',
      how_s2_text:    'Optimizamos y listamos tu propiedad para m\u00e1xima visibilidad y posicionamiento premium.',
      how_s3_title:   'Gesti\u00f3n y Optimizaci\u00f3n',
      how_s3_text:    'Nos encargamos de las operaciones y mejoramos el rendimiento continuamente.',
      metrics_heading:'No Todas las Propiedades en Cana Bay<br>Rinden Igual.',
      metrics_intro:  'Esa diferencia no es la propiedad.<br>Es el sistema detr\u00e1s de ella.',
      metrics_m1:     'Optimizaci\u00f3n de Ocupaci\u00f3n',
      metrics_m2:     'Rendimiento de Ingresos',
      metrics_m3:     'Experiencia del Hu\u00e9sped',
      metrics_v3:     '03',
      perf_lead:      'Aqu\u00ed es donde la mayor\u00eda de las propiedades se quedan cortas.',
      perf_b1_title:  'Optimizaci\u00f3n de Ocupaci\u00f3n',
      perf_b1_text:   'Reservas maximizadas mediante precios y timing.',
      perf_b2_title:  'Rendimiento de Ingresos',
      perf_b2_text:   'Tarifas por noche m\u00e1s altas mediante posicionamiento.',
      perf_b3_title:  'Experiencia del Hu\u00e9sped',
      perf_b3_text:   'Estancias consistentes que sostienen el rendimiento.',
      why_heading:    'El Sistema de Rendimiento Cana Bay',
      why_b1_title:   'Posicionamiento',
      why_b1_text:    'Transformamos tu propiedad en Cana Bay en un activo de alto rendimiento.',
      why_b2_title:   'Ingenier\u00eda de Ingresos',
      why_b2_text:    'Precios din\u00e1micos y control de demanda adaptados al comportamiento de ocupaci\u00f3n de Cana Bay.',
      why_b3_title:   'Control Operativo',
      why_b3_text:    'Ejecuci\u00f3n integral dentro de un entorno de alta demanda.',
      cta_heading:    'Tu Propiedad en Cana Bay<br>Deber\u00eda Estar Rindiendo.',
      cta_sub:        'Convi\u00e9rtela en una fuente real de ingresos.',
      cta_btn:        'Obt\u00e9n Tu Proyecci\u00f3n',
      lead_label:     '06 \u2014 Liderazgo',
      lead_name:      'Amarantha Gomez',
      lead_role:      'Fundadora & CEO \u2014 NOVERTY',
      lead_heading:   'Detr\u00e1s de la Marca',
      lead_bio:       '<p>Con m\u00e1s de 8 a\u00f1os de experiencia en el espacio de alquiler a corto plazo y propiedades de lujo en Punta Cana, Amarantha Gomez ha construido una reputaci\u00f3n por entregar resultados consistentes y de alto rendimiento.</p><p>Su trayectoria incluye trabajo con nombres reconocidos como Luxury Homes y Grupo Punta Cana, desarrollando un profundo entendimiento tanto del lado operativo como estrat\u00e9gico de la gesti\u00f3n de propiedades.</p><p>Hoy, a trav\u00e9s de Noverty, su enfoque va m\u00e1s all\u00e1 de simplemente gestionar propiedades. El objetivo es claro: convertir cada activo en una inversi\u00f3n de alto rendimiento mediante estrategia inteligente, posicionamiento refinado y un enfoque orientado a resultados.</p><p>Porque esto no se trata de que alguien cuide tu propiedad.</p><p>Se trata de rendimiento.<br>Se trata de resultados.<br>Se trata de ingresos reales \u2014 dinero en tu cuenta bancaria.</p>',
      lead_form_title:   'Exploremos el potencial de tu propiedad.',
      lead_form_sub:     'Cu\u00e9ntanos sobre tu propiedad y objetivos. Te responderemos en menos de 24 horas.',
      lead_form_name:    'Nombre Completo',
      lead_form_phone:   'Tel\u00e9fono / WhatsApp',
      lead_form_email:   'Email',
      lead_form_type:    'Tipo de Propiedad',
      lead_form_select:  'Seleccionar',
      lead_form_opt_apt: 'Apartamento / Condo',
      lead_form_opt_villa:'Villa / Casa',
      lead_form_opt_ph:  'Penthouse',
      lead_form_opt_multi:'M\u00faltiples Unidades',
      lead_form_bedrooms:'Habitaciones',
      lead_form_location:'Ubicaci\u00f3n de la Propiedad',
      lead_form_status:  'Estado Actual',
      lead_form_opt_listed:'Ya listada en Airbnb',
      lead_form_opt_notlisted:'A\u00fan no listada',
      lead_form_opt_other:'Listada en otra plataforma',
      lead_form_readiness:'\u00bfTu propiedad est\u00e1 lista para alquiler a corto plazo?',
      lead_form_r_listed: 'Ya est\u00e1 listada',
      lead_form_r_ready:  'Lista pero no listada',
      lead_form_r_prep:   'A\u00fan prepar\u00e1ndola',
      lead_form_r_explore:'Solo explorando',
      lead_form_timeline: '\u00bfCu\u00e1ndo te gustar\u00eda comenzar?',
      lead_form_t_asap:   'Lo antes posible',
      lead_form_t_30d:    'En 30 d\u00edas',
      lead_form_t_3m:     '1\u20133 meses',
      lead_form_t_explore:'Solo explorando',
      lead_form_schedule: 'Selecciona un d\u00eda y horario preferido para contactarte.',
      lead_form_morning:  'Ma\u00f1ana (9am\u201312pm)',
      lead_form_afternoon:'Tarde (12pm\u20134pm)',
      lead_form_evening:  'Noche (4pm\u20137pm)',
      lead_form_submit:   'COMENZAR MI PROCESO',
      lead_form_thanks:  'Te contactaremos por WhatsApp en el horario seleccionado.',
      lead_form_thanks_sub:'Un miembro de nuestro equipo se comunicar\u00e1 contigo para hablar sobre el potencial de tu propiedad.',
    }
  };

  var currentLang = 'en';

  function applyLang(lang) {
    currentLang = T[lang] ? lang : 'en';
    var t = T[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('data-lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
  }

  function t(key) {
    return (T[currentLang] && T[currentLang][key]) || key;
  }


  /* ─── ENTRY: LANGUAGE SELECT → SITE ─── */
  (function () {
    var langScreen = document.getElementById('entryLang');
    if (!langScreen) return;

    document.body.classList.add('no-scroll');

    function enterSite(lang) {
      applyLang(lang);
      langScreen.classList.add('entry--exiting');
      document.body.classList.remove('no-scroll');
      langScreen.addEventListener('transitionend', function () { langScreen.remove(); }, { once: true });
    }

    langScreen.querySelectorAll('.entry__lang').forEach(function (btn) {
      btn.addEventListener('click', function () {
        enterSite(btn.getAttribute('data-lang'));
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === 'Escape') enterSite('en');
    }, { once: true });
  })();


  /* ─── NAV ─── */
  var nav = document.getElementById('nav');


  /* ─── SCROLL REVEAL ─── */
  var revealSelectors = [
    '.problem__item',
    '.solution__step',
    '.property__card',
    '.curated__layout',
    '.curated__text',
    '.curated__visual',
    '.properties__header',
    '.why__header',
    '.why__block',
    '.how__step',
    '.cta__heading',
    '.cta__sub',
    '.cta__actions',
  ];

  var revealEls = document.querySelectorAll(revealSelectors.join(', '));

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    var siblings = Array.from(el.parentNode.children).filter(function (c) {
      return c.classList.contains(el.classList[0]);
    });
    var idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 4) {
      el.classList.add('reveal-delay-' + idx);
    }
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { observer.observe(el); });


  /* ─── SMOOTH ANCHOR SCROLL ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var navH = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* ─── EXPERIENCE MODAL ─── */
  (function () {
    var modal    = document.getElementById('expModal');
    var backdrop = document.getElementById('expBackdrop');
    var closeBtn = document.getElementById('expClose');
    var titleEl  = document.getElementById('expTitle');
    var textEl   = document.getElementById('expText');
    var imageEl  = document.getElementById('expImage');
    var cards    = document.querySelectorAll('.exp-card[data-exp]');
    if (!modal || !cards.length) return;

    var map = {
      beach:    { title: 'exp_b1_modal_title', text: 'exp_b1_modal_text' },
      golf:     { title: 'exp_b2_modal_title', text: 'exp_b2_modal_text' },
      hardrock: { title: 'exp_b3_modal_title', text: 'exp_b3_modal_text' },
      wellness: { title: 'exp_b4_modal_title', text: 'exp_b4_modal_text' }
    };

    function openModal(key) {
      var cfg = map[key];
      if (!cfg) return;
      titleEl.textContent = t(cfg.title);
      textEl.textContent  = t(cfg.text);
      imageEl.setAttribute('data-theme', key);
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('is-active');
      document.body.classList.add('no-scroll');
    }

    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    }

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        openModal(card.getAttribute('data-exp'));
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
    });
  })();


  /* ─── MULTI-STEP LEAD FORM ─── */
  (function () {
    var modal     = document.getElementById('leadModal');
    var backdrop  = document.getElementById('leadBackdrop');
    var closeBtn  = document.getElementById('leadClose');
    var backBtn   = document.getElementById('leadBack');
    var actionBtn = document.getElementById('leadAction');
    var progress  = document.getElementById('leadProgress');
    var ctaBtn    = document.querySelector('.hero__cta-btn');

    if (!modal || !ctaBtn) return;

    var TOTAL   = 9;
    var current = 1;
    var formData = {};

    function updateUI() {
      var done = current > TOTAL;
      progress.style.width = done ? '100%' : ((current - 1) / TOTAL * 100) + '%';
      backBtn.hidden = current <= 1 || done;

      if (done) {
        actionBtn.textContent = t('sf_close_btn');
      } else if (current === TOTAL) {
        actionBtn.textContent = t('lead_form_submit');
      } else {
        actionBtn.textContent = t('sf_continue');
      }
    }

    function goToStep(n) {
      var active = modal.querySelector('.lead-step.is-active');
      var delay  = active ? 300 : 0;

      if (active) {
        active.classList.add('is-exiting');
        active.classList.remove('is-active');
        setTimeout(function () { active.classList.remove('is-exiting'); }, 300);
      }

      setTimeout(function () {
        current = n;
        var selector = n > TOTAL ? '[data-step="done"]' : '[data-step="' + n + '"]';
        var next = modal.querySelector(selector);
        if (next) {
          next.classList.add('is-active');
          var inp = next.querySelector('.lead-step__input');
          if (inp) setTimeout(function () { inp.focus(); }, 60);
        }
        updateUI();
      }, delay);
    }

    function advance() {
      if (current > TOTAL) { closeModal(); return; }

      var active = modal.querySelector('.lead-step.is-active');
      if (!active) return;

      var inp = active.querySelector('.lead-step__input');
      if (inp) {
        // Required fields: steps 1-3
        if (current <= 3 && !inp.value.trim()) {
          inp.classList.add('is-error');
          setTimeout(function () { inp.classList.remove('is-error'); }, 700);
          return;
        }
        if (inp.value.trim()) formData[inp.name] = inp.value.trim();
      }

      goToStep(current + 1);
    }

    function openModal() {
      // Reset
      modal.querySelectorAll('.lead-step').forEach(function (s) { s.classList.remove('is-active', 'is-exiting'); });
      modal.querySelectorAll('.lead-step__input').forEach(function (i) {
        if (i.tagName === 'SELECT') { i.selectedIndex = 0; }
        else { i.value = ''; }
      });
      current = 1;
      formData = {};

      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      goToStep(1);
    }

    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    if (backBtn) backBtn.addEventListener('click', function () { if (current > 1) goToStep(current - 1); });
    if (actionBtn) actionBtn.addEventListener('click', advance);

    // Option buttons (readiness, timeline) — select + auto-advance
    modal.querySelectorAll('.lead-step__opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var step = btn.closest('.lead-step');
        var name = btn.dataset.name;
        formData[name] = btn.dataset.value;
        step.querySelectorAll('.lead-step__opt').forEach(function (b) { b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        setTimeout(function () { goToStep(current + 1); }, 340);
      });
    });

    // Inline calendar (step 9)
    (function () {
      var calGrid     = document.getElementById('calGrid');
      var calMonth    = document.getElementById('calMonth');
      var calWeekdays = document.getElementById('calWeekdays');
      var calPrev     = document.getElementById('calPrev');
      var calNext     = document.getElementById('calNext');
      var calInput    = document.getElementById('calDateInput');
      if (!calGrid) return;

      var today    = new Date();
      var viewYear = today.getFullYear();
      var viewMonth = today.getMonth();
      var selectedDate = null;

      var dayNames = { en: ['Su','Mo','Tu','We','Th','Fr','Sa'], es: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'] };
      var monthNames = {
        en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        es: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
      };

      function renderWeekdays() {
        var lang = currentLang || 'en';
        var names = dayNames[lang] || dayNames.en;
        calWeekdays.innerHTML = names.map(function (d) { return '<span class="cal__weekday">' + d + '</span>'; }).join('');
      }

      function renderMonth() {
        var lang = currentLang || 'en';
        var names = monthNames[lang] || monthNames.en;
        calMonth.textContent = names[viewMonth] + ' ' + viewYear;

        var firstDay = new Date(viewYear, viewMonth, 1).getDay();
        var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        var html = '';

        // Empty cells before first day
        for (var e = 0; e < firstDay; e++) {
          html += '<span class="cal__day is-empty"></span>';
        }

        for (var d = 1; d <= daysInMonth; d++) {
          var date = new Date(viewYear, viewMonth, d);
          var iso = viewYear + '-' + String(viewMonth + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
          var isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          var isToday = date.toDateString() === today.toDateString();
          var isSel = selectedDate === iso;
          var cls = 'cal__day';
          if (isPast) cls += ' is-past';
          if (isToday) cls += ' is-today';
          if (isSel) cls += ' is-selected';
          html += '<button class="' + cls + '" type="button" data-date="' + iso + '">' + d + '</button>';
        }

        calGrid.innerHTML = html;
      }

      function render() { renderWeekdays(); renderMonth(); }

      calGrid.addEventListener('click', function (e) {
        var btn = e.target.closest('.cal__day');
        if (!btn || btn.classList.contains('is-past') || btn.classList.contains('is-empty')) return;
        selectedDate = btn.dataset.date;
        if (calInput) { calInput.value = selectedDate; formData.preferred_date = selectedDate; }
        renderMonth();
      });

      if (calPrev) calPrev.addEventListener('click', function () {
        viewMonth--;
        if (viewMonth < 0) { viewMonth = 11; viewYear--; }
        render();
      });

      if (calNext) calNext.addEventListener('click', function () {
        viewMonth++;
        if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        render();
      });

      render();
    })();

    // Time slot selection (step 9)
    modal.querySelectorAll('.lead-step__time').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var step = btn.closest('.lead-step');
        var hidden = step.querySelector('input[type="hidden"][name="preferred_time"]');
        if (hidden) {
          hidden.value = btn.dataset.value;
          formData.preferred_time = btn.dataset.value;
        }
        step.querySelectorAll('.lead-step__time').forEach(function (b) { b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
      });
    });

    // Enter key advances
    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); advance(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
    });
  })();


})();
