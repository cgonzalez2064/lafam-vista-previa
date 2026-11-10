(function(){
  "use strict";
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches || root.classList.contains('a11y-motion');

  /* ============================================================
     I18N — Spanish (default) / English dictionary + toggle.
     Every key that appears in cms/content/schema.php is editable in the
     Content Manager (/admin); values edited there are published into
     index.html as an inert JSON block (#siteContent) and merged below.
     tools/extract-defaults.mjs regenerates cms/content/defaults.php from
     this object, so this is the single source of the approved copy.
     ============================================================ */
  var I18N = {
    es: {
      "meta.title": "Clínica LaFam | Ultrasonidos 4D y 5D en Ciudad de Guatemala",
      "meta.description": "Ultrasonidos 4D y 5D desde Q299, control prenatal y atención ginecológica en Ciudad de Guatemala. Abierto todos los días de 9:00 a 17:00.",
      "og.locale": "es_GT",
      "brand.aria": "Clínica LaFam, ir al inicio",
      "lang.toggle_aria": "Cambiar idioma a inglés",
      "lang.switch_to": "English",
      "menu.open_aria": "Abrir menú",
      "menu.close_aria": "Cerrar menú",
      "mobilenav.aria": "Menú principal",
      "skip": "Saltar al contenido",
      "backtotop.aria": "Volver arriba",
      "a11y.new_tab": " (se abre en una pestaña nueva)",
      "a11y.open_aria": "Opciones de accesibilidad",
      "a11y.close": "Listo",
      "a11y.size_small": "Texto normal",
      "a11y.size_medium": "Texto grande",
      "a11y.size_large": "Texto muy grande",
      "actions.call": "Llamar",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Cómo llegar",
      "actions.aria": "Acciones rápidas",
      "whatsapp.aria": "Escríbenos por WhatsApp (se abre en una pestaña nueva)",
      "contact.map_aria": "Abrir la ubicación de la clínica en Google Maps (se abre en una pestaña nueva)",
      "nav.services": "Servicios",
      "nav.maternity": "Ultrasonidos",
      "nav.facilities": "Galería",
      "nav.patients": "Citas",
      "nav.insurance": "Nosotros",
      "nav.contact": "Contacto",
      "nav.emergency": "Haz una cita",
      "hero.eyebrow": "Clínica LaFam · Ciudad de Guatemala",
      "hero.title": "Ultrasonidos <em>4D y 5D</em>",
      "hero.desc": "Brindamos la mejor atención médica a precios accesibles para cuidar de tu salud y la de tu bebé.",
      "hero.cta1": "Llamar a la clínica",
      "hero.cta2": "Agenda tu cita por WhatsApp",
      "hero.status": "¡Atendemos todos los días!",
      "hero.badge1": "Ultrasonidos 4D y 5D",
      "hero.badge2": "Control prenatal",
      "hero.badge3": "Atención ginecológica",
      "quick.emergency": "Llámanos",
      "quick.whatsapp": "WhatsApp",
      "quick.visits": "Horario",
      "quick.directions": "Cómo llegar",
      "quick.aria": "Información rápida",
      "stat1.value": "",
      "stat1.label": "",
      "stat2.value": "",
      "stat2.label": "",
      "stat3.value": "",
      "stat3.label": "",
      "stat4.value": "",
      "stat4.label": "",
      "services.eyebrow": "Servicios",
      "services.title": "Nuestros servicios",
      "services.desc": "Ultrasonidos 4D y 5D, control prenatal y atención integral en salud femenina.",
      "services.cta": "Agendar por WhatsApp",
      "services.more": "Ver detalle",
      "services.more_aria": "Ver detalle de {name}",
      "services.call": "Llamar",
      "services.close": "Cerrar",
      "service1.title": "Ultrasonidos",
      "service1.desc": "Ultrasonidos ginecológicos, obstétricos, 4D, 5D y de silueta para chequear tu salud y la de tu bebé.",
      "service1.more": "",
      "service2.title": "Control prenatal",
      "service2.desc": "Te brindamos control prenatal, ultrasonido y monitoreo fetal durante todo el embarazo.",
      "service2.more": "",
      "service3.title": "Atención ginecológica",
      "service3.desc": "Brindamos atención ginecológica, Papanicolaou, colposcopia y orientación en planificación familiar.",
      "service3.more": "",
      "service4.title": "Cirugía obstétrica y ginecológica",
      "service4.desc": "Atendemos partos, cesáreas, histerectomías y otros procedimientos médicos para cuidar de tu salud.",
      "service4.more": "",
      "maternity.eyebrow": "Ultrasonidos",
      "maternity.title": "Ven a conocer al <em>amor de tu vida</em>",
      "maternity.desc": "Atendemos todos los días, de 9:00 a 17:00.",
      "maternity.cta": "Agenda tu ultrasonido",
      "maternity.prices": "Precios de ultrasonidos",
      "projects.cta": "Descargar información",
      "projects.cta_aria": "Descargar información en PDF",
      "mfeat1.title": "Ultrasonido 4D",
      "mfeat1.desc": "Q299.00",
      "mfeat2.title": "Ultrasonido 5D",
      "mfeat2.desc": "Q499.00",
      "mfeat3.title": "Ultrasonido normal y consulta",
      "mfeat3.desc": "Q299.00",
      "mfeat4.title": "Ultrasonido normal con confirmación del sexo del bebé",
      "mfeat4.desc": "Q199.00",
      "bag.title": "",
      "bag.desc": "",
      "bag1": "",
      "bag2": "",
      "bag3": "",
      "bag4": "",
      "bag5": "",
      "bag6": "",
      "bag7": "",
      "bag8": "",
      "bag9": "",
      "bag10": "",
      "bag.note": "",
      "bag.progress": "{n} de {total} listos",
      "about.eyebrow": "Clínica LaFam",
      "about.title": "Sobre nosotros",
      "about.desc": "En Clínica LaFam estamos comprometidos en brindar la mejor atención médica a precios accesibles para cuidar de tu salud y la de tu bebé.",
      "about.art_caption": "¡Atendemos todos los días!",
      "about.mission_title": "Ubicación",
      "about.mission_desc": "Nuestra clínica está ubicada en el Edificio Tikal Futura, Torre Luna, Nivel 16, Oficina 16A, Calzada Roosevelt 22-43, Ciudad de Guatemala.",
      "about.vision_title": "Horario",
      "about.vision_desc": "Atendemos todos los días (incluyendo sábados y domingos) de 9:00 a. m. a 5:00 p. m.",
      "why.title": "",
      "why1": "",
      "why2": "",
      "why3": "",
      "why4": "",
      "why5": "",
      "why6": "",
      "projects.eyebrow": "Galería",
      "projects.title": "Conoce a <em>tu bebé</em>",
      "projects.desc": "Fotos y videos reales, tomados en nuestra clínica.",
      "gallery.more": "Ver toda la galería",
      "gallery.filter_all": "Todas",
      "gallery.filter_aria": "Filtrar las fotos",
      "gallery.filter_face": "Rostro y gestos",
      "gallery.filter_body": "Cuerpo completo",
      "gallery.viewer_aria": "Visor de la galería",
      "gallery.play": "Reproducir video",
      "gallery.less": "Ver menos",
      "projects.view_details": "Ver fotos",
      "proj1.tag": "Ultrasonido",
      "proj1.title": "Ultrasonido 4D",
      "proj1.desc": "",
      "proj2.tag": "Ultrasonido",
      "proj2.title": "Ultrasonido 5D",
      "proj2.desc": "",
      "proj3.tag": "Ultrasonido",
      "proj3.title": "Ultrasonido 5D de luz",
      "proj3.desc": "",
      "proj4.tag": "Ultrasonido",
      "proj4.title": "Ultrasonido de silueta",
      "proj4.desc": "",
      "proj5.tag": "Galería",
      "proj5.title": "Fotos y videos",
      "proj5.desc": "",
      "proj6.tag": "",
      "proj6.title": "",
      "proj6.desc": "",
      "amen.title": "",
      "amen1.title": "",
      "amen1.desc": "",
      "amen2.title": "",
      "amen2.desc": "",
      "amen3.title": "",
      "amen3.desc": "",
      "amen4.title": "",
      "amen4.desc": "",
      "amen5.title": "",
      "amen5.desc": "",
      "amen6.title": "",
      "amen6.desc": "",
      "amen7.title": "",
      "amen7.desc": "",
      "amen8.title": "",
      "amen8.desc": "",
      "amen9.title": "",
      "amen9.desc": "",
      "amen10.title": "",
      "amen10.desc": "",
      "amen11.title": "",
      "amen11.desc": "",
      "amen12.title": "",
      "amen12.desc": "",
      "projects.modal_close": "Cerrar",
      "projects.modal_prev": "Foto anterior",
      "projects.modal_next": "Foto siguiente",
      "projects.modal_dots_aria": "Elegir foto",
      "projects.modal_goto_slide": "Ir a la foto {n}",
      "projects.modal_image_of": "Foto {n} de {total}",
      "projects.modal_photo_alt": "Foto {n} de {title}",
      "projects.modal_placeholder_note": "Pronto publicaremos las fotos.",
      "process.eyebrow": "",
      "process.title": "",
      "process1.title": "",
      "process1.desc": "",
      "process2.title": "",
      "process2.desc": "",
      "process3.title": "",
      "process3.desc": "",
      "process4.title": "",
      "process4.desc": "",
      "patients.eyebrow": "Citas",
      "patients.title": "Atendemos todos los días",
      "patients.desc": "Puedes agendar tu cita de las siguientes maneras:",
      "patients.tab1": "Agenda tu cita",
      "patients.tab2": "",
      "patients.tab3": "",
      "patients.tabs_aria": "Cómo agendar tu cita",
      "patients.fb": "Escribir en Facebook",
      "visits.title": "Horario",
      "visits.hours_text": "Todos los días, 9:00 – 17:00",
      "visits.open": "Abierto ahora",
      "visits.closed": "Cerrado en este momento",
      "visits.next": "Abrimos a las {time}",
      "visits.until": "Hasta las {time}",
      "guide1": "",
      "guide2": "",
      "guide3": "",
      "guide4": "",
      "guide5": "",
      "guide6": "",
      "guide7": "",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "",
      "visit2": "",
      "visit3": "",
      "visit4": "",
      "visit5": "",
      "visit6": "",
      "visit7": "",
      "visit8": "",
      "mat1": "",
      "mat2": "",
      "mat3": "",
      "mat4": "",
      "mat5": "",
      "mat6": "",
      "ext.title": "",
      "ext1.label": "",
      "ext2.label": "",
      "ext3.label": "",
      "ext4.label": "",
      "insurance.eyebrow": "",
      "insurance.title": "",
      "insurance.desc": "",
      "insurance.insurers_title": "",
      "insurance.insurers_desc": "",
      "insurance.missing": "",
      "banks.title": "",
      "pay.title": "",
      "pay1": "",
      "pay2": "",
      "pay3": "",
      "pay4": "",
      "pay5": "",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "¡Ven a conocer al amor de tu vida!",
      "ctabanner.desc": "Atendemos todos los días, incluyendo sábados y domingos, de 9:00 a. m. a 5:00 p. m.",
      "ctabanner.cta": "Haz tu cita",
      "contact.eyebrow": "Contacto",
      "contact.title": "Contáctanos",
      "contact.desc": "Agenda tu cita por teléfono o WhatsApp.",
      "contact.label_address": "Dirección",
      "contact.label_phone": "Teléfono",
      "contact.label_email": "Correo",
      "contact.label_hours": "Horario",
      "contact.label_social": "Redes sociales",
      "contact.hours_value": "Todos los días, de 9:00 a. m. a 5:00 p. m.",
      "contact.map_open": "Abrir en Google Maps",
      "contact.vcard": "Guardar contacto",
      "contact.vcard_aria": "Guardar el contacto de la clínica en tu teléfono (archivo vCard)",
      "contact.waze": "Abrir en Waze",
      "contact.map_load": "Ver mapa aquí",
      "contact.map_note": "Al mostrar el mapa, Google recibe tu dirección IP.",
      "contact.map_frame": "Mapa de la ubicación de la clínica",
      "contact.phone_main": "Teléfono y WhatsApp",
      "contact.phone_direct": "Teléfono",
      "form.title": "Envíanos un mensaje",
      "form.privacy_hint": "Por tu privacidad, no incluyas diagnósticos, resultados ni otros datos clínicos en este formulario.",
      "form.name_label": "Nombre completo",
      "form.name_err": "Ingresa tu nombre completo.",
      "form.phone_label": "Teléfono",
      "form.phone_err": "Ingresa un número de teléfono válido.",
      "form.email_label": "Correo electrónico",
      "form.email_err": "Ingresa un correo electrónico válido.",
      "form.service_label": "¿En qué podemos ayudarte?",
      "form.opt_placeholder": "Selecciona una opción",
      "form.opt_ultrasound": "Ultrasonidos",
      "form.opt_prenatal": "Control prenatal",
      "form.opt_gyn": "Atención ginecológica",
      "form.opt_surgery": "Cirugía obstétrica y ginecológica",
      "form.opt_other": "Otro",
      "form.service_err": "Selecciona una opción.",
      "form.message_label": "Tu mensaje",
      "form.message_err": "Escribe un poco más (mínimo 10 caracteres).",
      "form.optional": "(opcional)",
      "form.choose": "Selecciona una opción",
      "form.err_required": "Completa este campo.",
      "form.err_choose": "Elige una opción.",
      "form.err_number": "Ingresa un número válido.",
      "form.err_date": "Elige una fecha válida.",
      "form.consent_label": "Acepto que usen mis datos solo para responder a mi solicitud, según el Aviso de Privacidad.",
      "form.consent_err": "Necesitamos tu autorización para responderte.",
      "form.hp_label": "No completar este campo",
      "form.submit": "Enviar mensaje",
      "form.note": "Usaremos tus datos únicamente para responder a tu solicitud. Consulta nuestro <a href=\"privacy-notice.html\">Aviso de Privacidad</a>.",
      "form.fallback": "¿Prefieres no usar el formulario? Escríbenos por <a href=\"tel:+50230290609\">teléfono</a> o <a href=\"https://wa.me/50230290609\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Enviando…",
      "form.status_ok": "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
      "form.status_invalid": "Revisa los campos marcados antes de enviar.",
      "form.status_error": "Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.",
      "form.status_rate_limited": "Has enviado varias solicitudes en poco tiempo. Espera unos minutos e intenta de nuevo.",
      "form.status_offline": "Parece que no tienes conexión a internet. Revisa tu conexión e intenta de nuevo.",
      "form.status_timeout": "El envío tardó demasiado. Revisa tu conexión e intenta de nuevo.",
      "form.status_verifying": "Verificando que no es un robot…",
      "form.status_captcha": "No pudimos completar la verificación anti-spam. Recarga la página e intenta de nuevo, o escríbenos por WhatsApp.",
      "form.status_turnstile": "Completa la verificación de seguridad y vuelve a enviar.",
      "form.captcha_idle": "Protegido contra spam con verificación automática.",
      "form.captcha_pending": "Verificación anti-spam en curso…",
      "form.captcha_ok": "Verificación anti-spam completa.",
      "form.captcha_error": "No se pudo cargar la verificación anti-spam. Recarga la página.",
      "faq.eyebrow": "Preguntas frecuentes",
      "faq.title": "Resolvemos tus dudas",
      "faq.q1": "¿Cuánto cuesta un ultrasonido 4D o 5D en Clínica LaFam?",
      "faq.a1": "El ultrasonido 4D cuesta {precio1} y el ultrasonido 5D, {precio2}. Puedes agendar tu cita por teléfono o WhatsApp al {telefono}.",
      "faq.q2": "¿Cuánto cuesta un ultrasonido para saber el sexo del bebé?",
      "faq.a2": "El ultrasonido normal con confirmación del sexo del bebé cuesta {precio4}. El ultrasonido normal con consulta cuesta {precio3}.",
      "faq.q3": "¿Dónde está ubicada Clínica LaFam?",
      "faq.a3": "Estamos en {direccion}.",
      "faq.q4": "¿Qué horario de atención tienen?",
      "faq.a4": "Atendemos todos los días, de lunes a domingo, de 9:00 a 17:00.",
      "faq.q5": "¿Cómo agendo una cita?",
      "faq.a5": "Escríbenos por WhatsApp o llámanos al {telefono}, o llama al {telefono2}. También puedes enviarnos un mensaje desde el formulario de esta página.",
      "faq.q6": "¿Qué tipos de ultrasonido realizan?",
      "faq.a6": "Realizamos ultrasonidos ginecológicos, obstétricos, 4D, 5D y de silueta.",
      "faq.q7": "¿Qué otros servicios ofrecen?",
      "faq.a7": "Control prenatal con ultrasonido y monitoreo fetal durante todo el embarazo; atención ginecológica con Papanicolaou, colposcopia y orientación en planificación familiar; y cirugía obstétrica y ginecológica: partos, cesáreas e histerectomías.",
      "faq.q8": "",
      "faq.a8": "",
      "a11y.title": "Accesibilidad",
      "a11y.desc": "Ajusta el sitio a tu comodidad. Tus preferencias se guardan en este dispositivo.",
      "a11y.text_size": "Tamaño del texto",
      "a11y.contrast": "Alto contraste",
      "a11y.motion": "Reducir animaciones",
      "a11y.links": "Subrayar enlaces",
      "a11y.spacing": "Texto más espaciado",
      "a11y.reset": "Restablecer",
      "footer.about_desc": "Ultrasonidos 4D y 5D, control prenatal y atención ginecológica en Ciudad de Guatemala.",
      "footer.links_heading": "Navegación",
      "footer.services_heading": "Servicios",
      "footer.contact_heading": "Contacto",
      "footer.privacy_link": "Aviso de Privacidad",
      "footer.rights": "Todos los derechos reservados.",
      "footer.made_by": "Sitio administrado por TeraDevs",
      "whatsapp.message": "Hola, quisiera agendar una cita en Clínica LaFam."
    },
    en: {
      "meta.title": "Clínica LaFam | 4D and 5D ultrasounds in Guatemala City",
      "meta.description": "4D and 5D ultrasounds from Q299, prenatal care and gynecological care in Guatemala City. Open every day from 9:00 to 17:00.",
      "og.locale": "en_US",
      "brand.aria": "Clínica LaFam, go to home",
      "lang.toggle_aria": "Switch language to Spanish",
      "lang.switch_to": "Español",
      "menu.open_aria": "Open menu",
      "menu.close_aria": "Close menu",
      "mobilenav.aria": "Main menu",
      "skip": "Skip to content",
      "backtotop.aria": "Back to top",
      "a11y.new_tab": " (opens in a new tab)",
      "a11y.open_aria": "Accessibility options",
      "a11y.close": "Done",
      "a11y.size_small": "Normal text",
      "a11y.size_medium": "Large text",
      "a11y.size_large": "Extra large text",
      "actions.call": "Call",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Directions",
      "actions.aria": "Quick actions",
      "whatsapp.aria": "Message us on WhatsApp (opens in a new tab)",
      "contact.map_aria": "Open the clinic's location in Google Maps (opens in a new tab)",
      "nav.services": "Services",
      "nav.maternity": "Ultrasounds",
      "nav.facilities": "Gallery",
      "nav.patients": "Appointments",
      "nav.insurance": "About us",
      "nav.contact": "Contact",
      "nav.emergency": "Book now",
      "hero.eyebrow": "Clínica LaFam · Guatemala City",
      "hero.title": "<em>4D and 5D</em> ultrasounds",
      "hero.desc": "We provide the best medical care at affordable prices to look after your health and your baby's.",
      "hero.cta1": "Call the clinic",
      "hero.cta2": "Book on WhatsApp",
      "hero.status": "Open every day!",
      "hero.badge1": "4D and 5D ultrasounds",
      "hero.badge2": "Prenatal care",
      "hero.badge3": "Gynecological care",
      "quick.emergency": "Call us",
      "quick.whatsapp": "WhatsApp",
      "quick.visits": "Opening hours",
      "quick.directions": "Directions",
      "quick.aria": "Quick information",
      "stat1.value": "",
      "stat1.label": "",
      "stat2.value": "",
      "stat2.label": "",
      "stat3.value": "",
      "stat3.label": "",
      "stat4.value": "",
      "stat4.label": "",
      "services.eyebrow": "Services",
      "services.title": "Our services",
      "services.desc": "4D and 5D ultrasounds, prenatal care and comprehensive women's health care.",
      "services.cta": "Book on WhatsApp",
      "services.more": "See details",
      "services.more_aria": "See details of {name}",
      "services.call": "Call",
      "services.close": "Close",
      "service1.title": "Ultrasounds",
      "service1.desc": "Gynecological, obstetric, 4D, 5D and silhouette ultrasounds to check on your health and your baby's.",
      "service1.more": "",
      "service2.title": "Prenatal care",
      "service2.desc": "We provide prenatal check-ups, ultrasounds and fetal monitoring throughout your pregnancy.",
      "service2.more": "",
      "service3.title": "Gynecological care",
      "service3.desc": "We offer gynecological care, Pap smears, colposcopy and family planning guidance.",
      "service3.more": "",
      "service4.title": "Obstetric and gynecological surgery",
      "service4.desc": "We attend births, C-sections, hysterectomies and other medical procedures to look after your health.",
      "service4.more": "",
      "maternity.eyebrow": "Ultrasounds",
      "maternity.title": "Come meet the <em>love of your life</em>",
      "maternity.desc": "Open every day, 9:00 to 17:00.",
      "maternity.cta": "Book your ultrasound",
      "maternity.prices": "Ultrasound prices",
      "projects.cta": "Download information",
      "projects.cta_aria": "Download information (PDF)",
      "mfeat1.title": "4D ultrasound",
      "mfeat1.desc": "Q299.00",
      "mfeat2.title": "5D ultrasound",
      "mfeat2.desc": "Q499.00",
      "mfeat3.title": "Standard ultrasound and consultation",
      "mfeat3.desc": "Q299.00",
      "mfeat4.title": "Standard ultrasound with baby's sex confirmation",
      "mfeat4.desc": "Q199.00",
      "bag.title": "",
      "bag.desc": "",
      "bag1": "",
      "bag2": "",
      "bag3": "",
      "bag4": "",
      "bag5": "",
      "bag6": "",
      "bag7": "",
      "bag8": "",
      "bag9": "",
      "bag10": "",
      "bag.note": "",
      "bag.progress": "{n} of {total} ready",
      "about.eyebrow": "Clínica LaFam",
      "about.title": "About us",
      "about.desc": "At Clínica LaFam we are committed to providing the best medical care at affordable prices to look after your health and your baby's.",
      "about.art_caption": "Open every day!",
      "about.mission_title": "Location",
      "about.mission_desc": "Our clinic is in the Tikal Futura building, Luna Tower, 16th floor, Office 16A, Calzada Roosevelt 22-43, Guatemala City.",
      "about.vision_title": "Opening hours",
      "about.vision_desc": "We are open every day (including Saturdays and Sundays) from 9:00 AM to 5:00 PM.",
      "why.title": "",
      "why1": "",
      "why2": "",
      "why3": "",
      "why4": "",
      "why5": "",
      "why6": "",
      "projects.eyebrow": "Gallery",
      "projects.title": "Meet <em>your baby</em>",
      "projects.desc": "Real photos and videos, taken at our clinic.",
      "gallery.more": "View the full gallery",
      "gallery.filter_all": "All",
      "gallery.filter_aria": "Filter the photos",
      "gallery.filter_face": "Face & gestures",
      "gallery.filter_body": "Whole body",
      "gallery.viewer_aria": "Gallery viewer",
      "gallery.play": "Play video",
      "gallery.less": "Show less",
      "projects.view_details": "See photos",
      "proj1.tag": "Ultrasound",
      "proj1.title": "4D ultrasound",
      "proj1.desc": "",
      "proj2.tag": "Ultrasound",
      "proj2.title": "5D ultrasound",
      "proj2.desc": "",
      "proj3.tag": "Ultrasound",
      "proj3.title": "5D light ultrasound",
      "proj3.desc": "",
      "proj4.tag": "Ultrasound",
      "proj4.title": "Silhouette ultrasound",
      "proj4.desc": "",
      "proj5.tag": "Gallery",
      "proj5.title": "Photos and videos",
      "proj5.desc": "",
      "proj6.tag": "",
      "proj6.title": "",
      "proj6.desc": "",
      "amen.title": "",
      "amen1.title": "",
      "amen1.desc": "",
      "amen2.title": "",
      "amen2.desc": "",
      "amen3.title": "",
      "amen3.desc": "",
      "amen4.title": "",
      "amen4.desc": "",
      "amen5.title": "",
      "amen5.desc": "",
      "amen6.title": "",
      "amen6.desc": "",
      "amen7.title": "",
      "amen7.desc": "",
      "amen8.title": "",
      "amen8.desc": "",
      "amen9.title": "",
      "amen9.desc": "",
      "amen10.title": "",
      "amen10.desc": "",
      "amen11.title": "",
      "amen11.desc": "",
      "amen12.title": "",
      "amen12.desc": "",
      "projects.modal_close": "Close",
      "projects.modal_prev": "Previous photo",
      "projects.modal_next": "Next photo",
      "projects.modal_dots_aria": "Choose photo",
      "projects.modal_goto_slide": "Go to photo {n}",
      "projects.modal_image_of": "Photo {n} of {total}",
      "projects.modal_photo_alt": "Photo {n} of {title}",
      "projects.modal_placeholder_note": "Photos coming soon.",
      "process.eyebrow": "",
      "process.title": "",
      "process1.title": "",
      "process1.desc": "",
      "process2.title": "",
      "process2.desc": "",
      "process3.title": "",
      "process3.desc": "",
      "process4.title": "",
      "process4.desc": "",
      "patients.eyebrow": "Appointments",
      "patients.title": "Open every day",
      "patients.desc": "You can book your appointment in any of these ways:",
      "patients.tab1": "Book your appointment",
      "patients.tab2": "",
      "patients.tab3": "",
      "patients.tabs_aria": "How to book your appointment",
      "patients.fb": "Message us on Facebook",
      "visits.title": "Opening hours",
      "visits.hours_text": "Every day, 9:00 AM – 5:00 PM",
      "visits.open": "Open now",
      "visits.closed": "Closed right now",
      "visits.next": "We open at {time}",
      "visits.until": "Until {time}",
      "guide1": "",
      "guide2": "",
      "guide3": "",
      "guide4": "",
      "guide5": "",
      "guide6": "",
      "guide7": "",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "",
      "visit2": "",
      "visit3": "",
      "visit4": "",
      "visit5": "",
      "visit6": "",
      "visit7": "",
      "visit8": "",
      "mat1": "",
      "mat2": "",
      "mat3": "",
      "mat4": "",
      "mat5": "",
      "mat6": "",
      "ext.title": "",
      "ext1.label": "",
      "ext2.label": "",
      "ext3.label": "",
      "ext4.label": "",
      "insurance.eyebrow": "",
      "insurance.title": "",
      "insurance.desc": "",
      "insurance.insurers_title": "",
      "insurance.insurers_desc": "",
      "insurance.missing": "",
      "banks.title": "",
      "pay.title": "",
      "pay1": "",
      "pay2": "",
      "pay3": "",
      "pay4": "",
      "pay5": "",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "Come meet the love of your life!",
      "ctabanner.desc": "We are open every day, including Saturdays and Sundays, from 9:00 AM to 5:00 PM.",
      "ctabanner.cta": "Book an appointment",
      "contact.eyebrow": "Contact",
      "contact.title": "Contact us",
      "contact.desc": "Book your appointment by phone or WhatsApp.",
      "contact.label_address": "Address",
      "contact.label_phone": "Phone",
      "contact.label_email": "Email",
      "contact.label_hours": "Hours",
      "contact.label_social": "Social media",
      "contact.hours_value": "Every day, 9:00 AM to 5:00 PM",
      "contact.map_open": "Open in Google Maps",
      "contact.vcard": "Save contact",
      "contact.vcard_aria": "Save the clinic's contact to your phone (vCard file)",
      "contact.waze": "Open in Waze",
      "contact.map_load": "Show map here",
      "contact.map_note": "Showing the map sends your IP address to Google.",
      "contact.map_frame": "Map of the clinic's location",
      "contact.phone_main": "Phone and WhatsApp",
      "contact.phone_direct": "Phone",
      "form.title": "Send us a message",
      "form.privacy_hint": "For your privacy, please don't include diagnoses, test results or other clinical details in this form.",
      "form.name_label": "Full name",
      "form.name_err": "Enter your full name.",
      "form.phone_label": "Phone",
      "form.phone_err": "Enter a valid phone number.",
      "form.email_label": "Email address",
      "form.email_err": "Enter a valid email address.",
      "form.service_label": "How can we help?",
      "form.opt_placeholder": "Choose an option",
      "form.opt_ultrasound": "Ultrasounds",
      "form.opt_prenatal": "Prenatal care",
      "form.opt_gyn": "Gynecological care",
      "form.opt_surgery": "Obstetric and gynecological surgery",
      "form.opt_other": "Other",
      "form.service_err": "Choose an option.",
      "form.message_label": "Your message",
      "form.message_err": "Please write a little more (at least 10 characters).",
      "form.optional": "(optional)",
      "form.choose": "Choose an option",
      "form.err_required": "Complete this field.",
      "form.err_choose": "Choose an option.",
      "form.err_number": "Enter a valid number.",
      "form.err_date": "Choose a valid date.",
      "form.consent_label": "I agree that my details are used only to answer my request, as described in the Privacy Notice.",
      "form.consent_err": "We need your permission to reply.",
      "form.hp_label": "Leave this field empty",
      "form.submit": "Send message",
      "form.note": "We'll only use your details to answer your request. See our <a href=\"privacy-notice.html\">Privacy Notice</a>.",
      "form.fallback": "Prefer not to use the form? Reach us by <a href=\"tel:+50230290609\">phone</a> or <a href=\"https://wa.me/50230290609\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Sending…",
      "form.status_ok": "Thank you! We received your message and will contact you soon.",
      "form.status_invalid": "Please check the highlighted fields before sending.",
      "form.status_error": "There was a problem sending your message. Try again or message us on WhatsApp.",
      "form.status_rate_limited": "You've sent several requests in a short time. Please wait a few minutes and try again.",
      "form.status_offline": "You seem to be offline. Check your connection and try again.",
      "form.status_timeout": "Sending took too long. Check your connection and try again.",
      "form.status_verifying": "Checking that you're not a robot…",
      "form.status_captcha": "We couldn't complete the anti-spam check. Reload the page and try again, or message us on WhatsApp.",
      "form.status_turnstile": "Complete the security check and send again.",
      "form.captcha_idle": "Protected against spam with an automatic check.",
      "form.captcha_pending": "Anti-spam check in progress…",
      "form.captcha_ok": "Anti-spam check complete.",
      "form.captcha_error": "The anti-spam check couldn't load. Reload the page.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Your questions, answered",
      "faq.q1": "How much is a 4D or 5D ultrasound at Clínica LaFam?",
      "faq.a1": "A 4D ultrasound is {precio1} and a 5D ultrasound is {precio2}. You can book by phone or WhatsApp at {telefono}.",
      "faq.q2": "How much is an ultrasound to find out the baby's sex?",
      "faq.a2": "A standard ultrasound with confirmation of the baby's sex is {precio4}. A standard ultrasound with consultation is {precio3}.",
      "faq.q3": "Where is Clínica LaFam?",
      "faq.a3": "We are at {direccion}.",
      "faq.q4": "What are your opening hours?",
      "faq.a4": "We are open every day, Monday to Sunday, from 9:00 to 17:00.",
      "faq.q5": "How do I book an appointment?",
      "faq.a5": "Message us on WhatsApp or call {telefono}, or call {telefono2}. You can also send us a message with the form on this page.",
      "faq.q6": "What types of ultrasound do you offer?",
      "faq.a6": "Gynecological, obstetric, 4D, 5D and silhouette ultrasounds.",
      "faq.q7": "What other services do you offer?",
      "faq.a7": "Prenatal care with ultrasound and fetal monitoring throughout pregnancy; gynecological care with Pap smears, colposcopy and family planning advice; and obstetric and gynecological surgery: births, C-sections and hysterectomies.",
      "faq.q8": "",
      "faq.a8": "",
      "a11y.title": "Accessibility",
      "a11y.desc": "Adjust the site to suit you. Your preferences are saved on this device.",
      "a11y.text_size": "Text size",
      "a11y.contrast": "High contrast",
      "a11y.motion": "Reduce motion",
      "a11y.links": "Underline links",
      "a11y.spacing": "More text spacing",
      "a11y.reset": "Reset",
      "footer.about_desc": "4D and 5D ultrasounds, prenatal care and gynecological care in Guatemala City.",
      "footer.links_heading": "Navigation",
      "footer.services_heading": "Services",
      "footer.contact_heading": "Contact",
      "footer.privacy_link": "Privacy Notice",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Site managed by TeraDevs",
      "whatsapp.message": "Hello, I'd like to book an appointment at Clínica LaFam."
    }
  };

  /* ============================================================
     CONTENT MANAGER OVERRIDES — text, contact details and photo alt
     text edited in /admin arrive as an inert JSON block (#siteContent).
     ============================================================ */
  var SITE_CONTENT = (function(){
    var el = document.getElementById('siteContent');
    if (!el) return {};
    try {
      var data = JSON.parse(el.textContent);
      return (data && typeof data === 'object') ? data : {};
    } catch (e) { return {}; }
  })();
  /* Only these keys may carry markup (built and escaped server-side). */
  var HTML_OVERRIDE_KEYS = { 'hero.title': true, 'maternity.title': true, 'form.fallback': true };
  if (SITE_CONTENT.i18n && typeof SITE_CONTENT.i18n === 'object'){
    ['es', 'en'].forEach(function(lang){
      var overrides = SITE_CONTENT.i18n[lang];
      if (!overrides || typeof overrides !== 'object') return;
      Object.keys(overrides).forEach(function(key){
        var val = overrides[key];
        if (typeof val !== 'string') return;
        if (val.indexOf('<') !== -1 && !HTML_OVERRIDE_KEYS[key]) return;
        I18N[lang][key] = val;
      });
    });
  }
  var SITE_IMAGES = (SITE_CONTENT.images && typeof SITE_CONTENT.images === 'object') ? SITE_CONTENT.images : {};

  function store(key, val){ try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; } return null; }

  var LANG_KEY = 'renacer_lang';
  var currentLang = (function(){
    var saved = store(LANG_KEY);
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  })();
  var WHATSAPP_NUMBER = (typeof SITE_CONTENT.whatsapp === 'string' && /^\d{8,15}$/.test(SITE_CONTENT.whatsapp))
    ? SITE_CONTENT.whatsapp : (root.getAttribute('data-wa') || '50256302274');

  function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }
  function fmt(s, vars){ return String(s).replace(/\{(\w+)\}/g, function(m, k){ return vars[k] !== undefined ? vars[k] : m; }); }
  function waUrl(text){ return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text); }

  var langToggle = document.getElementById('langToggle');
  var langListeners = [];

  function applyLang(lang){
    var dict = I18N[lang] || I18N.es;
    currentLang = lang;
    root.lang = (lang === 'es') ? 'es-GT' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n')];
      if (val === undefined) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = dict[parts[1].trim()];
        if (val !== undefined) el.setAttribute(parts[0].trim(), val);
      });
    });
    if (dict['meta.title']) document.title = dict['meta.title'];
    [['metaDescription', 'meta.description'], ['ogTitle', 'meta.title'], ['ogDescription', 'meta.description'], ['twTitle', 'meta.title'], ['twDescription', 'meta.description'], ['ogLocale', 'og.locale']].forEach(function(p){
      var el = document.getElementById(p[0]);
      if (el && dict[p[1]]) el.setAttribute('content', dict[p[1]]);
    });
    if (langToggle){
      langToggle.querySelector('span').textContent = (lang === 'es') ? 'EN' : 'ES';
    }
    /* WhatsApp links: the general message, or one per service. */
    document.querySelectorAll('[data-wa]').forEach(function(a){
      var key = a.getAttribute('data-wa');
      var text = dict['whatsapp.message'];
      if (key){
        var name = dict[key] || '';
        text = (lang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + name.toLowerCase() + (lang === 'es' ? ' en Clínica LaFam.' : ' at Clínica LaFam.');
      }
      a.setAttribute('href', waUrl(text));
    });
    store(LANG_KEY, lang);
    langListeners.forEach(function(fn){ fn(lang); });
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function(b){
    b.addEventListener('click', function(){
      var next = currentLang === 'es' ? 'en' : 'es';
      // A soft cross-fade between languages where the browser supports it.
      if (document.startViewTransition && !root.classList.contains('a11y-motion') && !mqReduce.matches) document.startViewTransition(function(){ applyLang(next); });
      else applyLang(next);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header: translucent material once content scrolls under it ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;
  function onScroll(){
    ticking = false;
    var sy = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', sy > 8);
    if (backToTop) backToTop.classList.toggle('show', sy > 900);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Sheets (native <dialog>): menu, accessibility, gallery ----------
     A <dialog> opened with showModal() already traps focus, makes the page
     behind it inert and closes with Escape. Each sheet enters and leaves
     along the same path (spatial consistency); closing waits for the exit
     transition, but a new open interrupts it immediately. */
  function sheet(dialog, opener){
    if (!dialog || typeof dialog.showModal !== 'function') return null;
    var closingTimer = null;
    var returnFocus = null;
    function open(from){
      returnFocus = from || opener || document.activeElement;
      clearTimeout(closingTimer);
      dialog.classList.remove('is-closing');
      if (!dialog.open) dialog.showModal();
      if (opener) opener.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function(){ dialog.classList.add('is-open'); });
      root.classList.add('has-sheet');
    }
    function close(){
      if (!dialog.open) return;
      dialog.classList.remove('is-open');
      dialog.classList.add('is-closing');
      if (opener) opener.setAttribute('aria-expanded', 'false');
      var done = function(){ dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); root.classList.remove('has-sheet'); if (returnFocus && returnFocus.focus) returnFocus.focus(); };
      if (reduceMotion) done(); else closingTimer = setTimeout(done, 260);
    }
    dialog.addEventListener('cancel', function(e){ e.preventDefault(); close(); });
    /* A tap on the dimmed backdrop (the <dialog> box itself) closes it. */
    dialog.addEventListener('click', function(e){ if (e.target === dialog) close(); });
    dialog.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', close); });
    if (opener) opener.addEventListener('click', function(){ dialog.open && !dialog.classList.contains('is-closing') ? close() : open(opener); });
    return { open: open, close: close, el: dialog };
  }

  var menu = sheet(document.getElementById('mobileNav'), document.getElementById('menuToggle'));
  if (menu){
    menu.el.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
    window.matchMedia('(min-width: 1080px)').addEventListener('change', function(e){ if (e.matches) menu.close(); });
  }

  /* ---------- Accessibility preferences ---------- */
  var A11Y_KEY = 'renacer_a11y';
  var a11y = (function(){ try { return JSON.parse(store(A11Y_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  var a11ySheet = sheet(document.getElementById('a11yPanel'), document.getElementById('a11yToggle'));
  function applyA11y(){
    root.setAttribute('data-text', a11y.size || '0');
    ['contrast', 'motion', 'links', 'spacing'].forEach(function(k){ root.classList.toggle('a11y-' + k, !!a11y[k]); });
    reduceMotion = mqReduce.matches || !!a11y.motion;
    root.classList.toggle('js-motion', !reduceMotion);
    document.querySelectorAll('[data-a11y]').forEach(function(sw){ sw.setAttribute('aria-checked', a11y[sw.getAttribute('data-a11y')] ? 'true' : 'false'); });
    document.querySelectorAll('[data-text-size]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-text-size') === String(a11y.size || '0'))); });
    store(A11Y_KEY, JSON.stringify(a11y));
  }
  document.querySelectorAll('[data-a11y]').forEach(function(sw){
    sw.addEventListener('click', function(){ var k = sw.getAttribute('data-a11y'); a11y[k] = !a11y[k]; applyA11y(); });
  });
  document.querySelectorAll('[data-text-size]').forEach(function(b){
    b.addEventListener('click', function(){ a11y.size = b.getAttribute('data-text-size'); applyA11y(); });
  });
  var a11yReset = document.getElementById('a11yReset');
  if (a11yReset) a11yReset.addEventListener('click', function(){ a11y = {}; applyA11y(); });
  applyA11y();
  mqReduce.addEventListener && mqReduce.addEventListener('change', applyA11y);

  /* ---------- Reveal on scroll (content is visible without JS) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Stats: count up once, from 0 to the published number ---------- */
  var statEls = document.querySelectorAll('[data-count]');
  function countUp(el){
    var text = el.textContent;
    var m = text.match(/^(\D*)(\d+)(.*)$/);
    if (!m || reduceMotion || m[2] === '24') return;
    var target = parseInt(m[2], 10), start = null, dur = 900;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && statEls.length){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); sio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    statEls.forEach(function(el){ sio.observe(el); });
  }

  /* ---------- Active section in the desktop navigation ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length){
    var byId = {};
    navLinks.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        navLinks.forEach(function(a){ a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  /* ---------- Visiting hours: live status in Guatemala time (UTC−6, no DST) ---------- */
  var visitEls = Array.prototype.slice.call(document.querySelectorAll('#visitStatus, [data-visit-status]'));
  function visitStatus(){
    visitEls.forEach(function(visitEl){
      var windows = (visitEl.getAttribute('data-windows') || '').split(',').map(function(w){
        var m = w.trim().match(/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
        return m ? [(+m[1]) * 60 + (+m[2]), (+m[3]) * 60 + (+m[4]), m[1] + ':' + m[2], m[3] + ':' + m[4]] : null;
      }).filter(Boolean);
      if (!windows.length){ visitEl.hidden = true; return; }
      var now = new Date(Date.now() - 6 * 3600 * 1000);
      var mins = now.getUTCHours() * 60 + now.getUTCMinutes();
      var open = null, next = null;
      windows.forEach(function(w){
        if (mins >= w[0] && mins < w[1]) open = w;
        if (mins < w[0] && (!next || w[0] < next[0])) next = w;
      });
      if (!open && !next) next = windows.slice().sort(function(a, b){ return a[0] - b[0]; })[0];
      visitEl.setAttribute('data-state', open ? 'open' : 'closed');
      var label = visitEl.querySelector('[data-role="label"]');
      var detail = visitEl.querySelector('[data-role="detail"]');
      var detailText = open ? fmt(t('visits.until'), { time: open[3] }) : fmt(t('visits.next'), { time: next[2] });
      if (detail){ label.textContent = t(open ? 'visits.open' : 'visits.closed'); detail.textContent = detailText; }
      else if (label) label.textContent = open ? t('visits.open') : detailText;
    });
  }
  visitStatus();
  setInterval(visitStatus, 60000);
  langListeners.push(visitStatus);

  /* ---------- Patients: tabs (WAI-ARIA pattern) with a sliding indicator ---------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist){
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var indicator = tablist.querySelector('.tab-indicator');
    var moveIndicator = function(tab){
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    };
    var select = function(tab, focus){
      tabs.forEach(function(tb){
        var on = tb === tab;
        tb.setAttribute('aria-selected', String(on));
        tb.tabIndex = on ? 0 : -1;
        document.getElementById(tb.getAttribute('aria-controls')).hidden = !on;
      });
      moveIndicator(tab);
      if (focus) tab.focus();
    };
    tabs.forEach(function(tab, i){
      /* Feedback on press, not on release. */
      tab.addEventListener('pointerdown', function(){ select(tab, false); });
      tab.addEventListener('click', function(){ select(tab, false); });
      tab.addEventListener('keydown', function(e){
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n){ e.preventDefault(); select(n, true); }
      });
    });
    var current = function(){ return tabs.filter(function(tb){ return tb.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]; };
    window.addEventListener('resize', function(){ moveIndicator(current()); });
    langListeners.push(function(){ requestAnimationFrame(function(){ moveIndicator(current()); }); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ moveIndicator(current()); });
    moveIndicator(current());
  }

  /* ---------- Checklist, saved only on this device ---------- */
  var BAG_KEY = 'renacer_bag';
  var bag = document.getElementById('bagList');
  if (bag){
    var saved = (function(){ try { return JSON.parse(store(BAG_KEY) || '[]') || []; } catch (e) { return []; } })();
    var boxes = Array.prototype.slice.call(bag.querySelectorAll('input[type="checkbox"]'));
    var progress = document.getElementById('bagProgress');
    var ring = document.getElementById('bagRing');
    var update = function(){
      var done = boxes.filter(function(b){ return b.checked; });
      if (progress) progress.textContent = fmt(t('bag.progress'), { n: done.length, total: boxes.length });
      if (ring){ ring.style.setProperty('--p', boxes.length ? done.length / boxes.length : 0); ring.toggleAttribute('data-empty', done.length === 0); }
      store(BAG_KEY, JSON.stringify(done.map(function(b){ return b.value; })));
    };
    boxes.forEach(function(b){ b.checked = saved.indexOf(b.value) !== -1; b.addEventListener('change', update); });
    update();
    langListeners.push(update);
  }

  /* ---------- "Get a quote" buttons pick the matching form option ---------- */
  document.querySelectorAll('[data-preselect]').forEach(function(a){
    a.addEventListener('click', function(){
      var sel = document.getElementById('service');
      var val = a.getAttribute('data-preselect');
      if (sel && sel.querySelector('option[value="' + val + '"]')) sel.value = val;
    });
  });

  /* ---------- Facilities gallery: native scroll-snap carousel in a sheet ----------
     Native scrolling gives 1:1 tracking, momentum projection and rubber-band
     edges for free; the buttons and dots only ask it to scroll. */
  var gallery = sheet(document.getElementById('galleryModal'));
  if (gallery){
    var slidesEl = document.getElementById('gallerySlides');
    var dotsEl = document.getElementById('galleryDots');
    var titleEl = document.getElementById('galleryTitle');
    var tagEl = document.getElementById('galleryTag');
    var descEl = document.getElementById('galleryDesc');
    var noteEl = document.getElementById('galleryNote');
    var liveEl = document.getElementById('galleryLive');
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    var index = 0, count = 0;
    var modalEl = document.getElementById('galleryModal');
    var go = function(i){
      i = Math.max(0, Math.min(count - 1, i));
      var w = slidesEl.clientWidth;
      slidesEl.scrollTo({ left: i * w, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var sync = function(){
      var i = Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth));
      if (i === index && dotsEl.childNodes.length) return;
      index = i;
      Array.prototype.forEach.call(dotsEl.children, function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i <= 0;
      next.disabled = i >= count - 1;
      liveEl.textContent = count > 1 ? fmt(t('projects.modal_image_of'), { n: i + 1, total: count }) : '';
      // Ultrasound gallery: the caption is the photo itself (its description) and its place.
      if (modalEl.classList.contains('is-ultra')){
        var cur = slidesEl.children[i] && slidesEl.children[i].querySelector('img');
        titleEl.textContent = (cur && cur.alt) || t('projects.title').replace(/<[^>]+>/g, '');
        tagEl.textContent = (i + 1) + ' / ' + count;
      }
    };
    slidesEl.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', function(){ go(index - 1); });
    next.addEventListener('click', function(){ go(index + 1); });
    slidesEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(index + 1); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(index - 1); }
    });
    document.querySelectorAll('.area-card[data-project]').forEach(function(card){
      var btn = card.querySelector('.area-open');
      if (!btn) return;
      btn.addEventListener('click', function(){
        document.getElementById('galleryModal').classList.remove('is-ultra');
        var pid = card.getAttribute('data-project');
        var title = t(pid + '.title');
        var paths = (card.getAttribute('data-images') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        tagEl.textContent = t(pid + '.tag');
        titleEl.textContent = title;
        descEl.textContent = t(pid + '.desc');
        slidesEl.innerHTML = '';
        dotsEl.innerHTML = '';
        if (!paths.length){
          var ph = document.createElement('div');
          var art = card.querySelector('.area-art');
          ph.className = 'gallery-slide is-placeholder ' + (art ? art.className : '');
          ph.innerHTML = art ? art.innerHTML : '';
          slidesEl.appendChild(ph);
        }
        paths.forEach(function(p, k){
          var meta = SITE_IMAGES[p] || {};
          var alt = (meta.alt && (meta.alt[currentLang] || meta.alt.es)) || fmt(t('projects.modal_photo_alt'), { n: k + 1, title: title });
          var slide = document.createElement('div');
          slide.className = 'gallery-slide';
          var img = document.createElement('img');
          img.src = p;
          if (meta.srcset){ img.srcset = meta.srcset; img.sizes = '(max-width: 760px) 100vw, 760px'; }
          img.alt = alt;
          img.decoding = 'async';
          if (k > 0) img.loading = 'lazy';
          slide.appendChild(img);
          slidesEl.appendChild(slide);
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', fmt(t('projects.modal_goto_slide'), { n: k + 1 }));
          dot.addEventListener('click', function(){ go(k); });
          dotsEl.appendChild(dot);
        });
        count = Math.max(1, paths.length);
        noteEl.hidden = paths.length > 0;
        dotsEl.hidden = prev.hidden = next.hidden = paths.length < 2;
        index = -1;
        gallery.open(btn);
        slidesEl.scrollLeft = 0;
        sync();
      });
    });
  }

  /* ---------- Gallery "see more" and the ultrasound clips ----------
     Clips are muted loops. The hero clip starts at once; gallery clips load
     nothing until they scroll into view and pause when they leave it. With
     reduced motion or Save-Data on, only the poster frame shows. */
  var galMore = document.getElementById('galMore');
  if (galMore){
    galMore.addEventListener('click', function(){
      var grid = document.getElementById('galGrid');
      var open = grid.classList.toggle('is-open');
      galMore.setAttribute('aria-expanded', open ? 'true' : 'false');
      galMore.querySelector('span').textContent = t(open ? 'gallery.less' : 'gallery.more');
      galMore.querySelector('span').setAttribute('data-i18n', open ? 'gallery.less' : 'gallery.more');
      if (!open) grid.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
  if (galMore){
    var galFit = function(){
      var grid = document.getElementById('galGrid');
      if (!grid || grid.classList.contains('is-open') || grid.classList.contains('is-filtered')) return;
      var folded = [].some.call(grid.children, function(c){ return getComputedStyle(c).display === 'none'; });
      galMore.parentNode.hidden = !folded;
    };
    galFit();
    window.addEventListener('resize', galFit, { passive: true });
  }
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var stillOnly = function(){ return reduceMotion || saveData || document.documentElement.classList.contains('a11y-motion'); };
  var tryPlay = function(v){ if (stillOnly()) return; var p = v.play(); if (p && p.catch) p.catch(function(){}); };
  document.querySelectorAll('video[data-autoplay]').forEach(function(v){
    if (stillOnly()) { v.preload = 'none'; return; }
    v.autoplay = true; tryPlay(v);
  });
  var inview = document.querySelectorAll('video[data-inview]');
  if (inview.length && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        var v = en.target;
        if (en.isIntersecting){ if (v.preload === 'none') v.preload = 'auto'; tryPlay(v); }
        else if (!v.paused) v.pause();
      });
    }, { rootMargin: '200px 0px', threshold: 0.25 });
    inview.forEach(function(v){ io.observe(v); });
  }
  langListeners.push(function(){
    document.querySelectorAll('video[data-i18n-aria-es]').forEach(function(v){
      v.setAttribute('aria-label', v.getAttribute(currentLang === 'en' ? 'data-i18n-aria-en' : 'data-i18n-aria-es'));
    });
    document.querySelectorAll('.gal-chip[data-es]').forEach(function(c){ c.textContent = c.getAttribute(currentLang === 'en' ? 'data-en' : 'data-es'); });
    if (galMore){
      var g = document.getElementById('galGrid');
      galMore.querySelector('span').textContent = t(g && g.classList.contains('is-open') ? 'gallery.less' : 'gallery.more');
    }
  });

  /* ---------- Ultrasound gallery: filters (Todas / Rostro y gestos / Cuerpo completo) ----------
     "Todas" keeps the folded layout with feature tiles; a type shows all of its
     tiles as a centred grid (the last row sits in the middle, never with holes). */
  var galGridEl = document.getElementById('galGrid');
  var galTabs = document.querySelectorAll('.gal-tab[data-filter]');
  if (galGridEl && galTabs.length){
    galTabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        var f = tab.getAttribute('data-filter');
        galTabs.forEach(function(b){ b.setAttribute('aria-pressed', b === tab ? 'true' : 'false'); });
        var on = f !== 'all';
        galGridEl.classList.toggle('is-filtered', on);
        [].forEach.call(galGridEl.children, function(c){ c.classList.toggle('is-out', on && c.getAttribute('data-cat') !== f); });
        if (galMore) galMore.parentNode.hidden = on ? true : false;
        if (!on && typeof galFit === 'function') galFit();
      });
    });
  }

  /* ---------- Gallery clips as animated images ----------
     Clips always play on a loop (animated WebP, so no browser draws a control
     over them). Only the site's own "less motion" switch shows the still frame. */
  var syncAnims = function(){
    var still = root.classList.contains('a11y-motion');
    document.querySelectorAll('img[data-anim]').forEach(function(im){
      var want = im.getAttribute(still && im.hasAttribute('data-still') ? 'data-still' : 'data-anim');
      if (im.getAttribute('src') !== want) im.setAttribute('src', want);
    });
  };
  syncAnims();
  if ('MutationObserver' in window) new MutationObserver(syncAnims).observe(root, { attributes: true, attributeFilter: ['class'] });
  langListeners.push(function(){
    document.querySelectorAll('img[data-i18n-alt-es]').forEach(function(im){ im.alt = im.getAttribute(currentLang === 'en' ? 'data-i18n-alt-en' : 'data-i18n-alt-es'); });
  });

  /* ---------- Ultrasound gallery viewer ----------
     A floating card over the dimmed, blurred page (not a full-screen black
     screen): the picture sits on a dark stage inside it, with its caption
     below. It pages through the visible tiles (photos and clips, in
     grid order, respecting the filter). Each photo grows from its tile and
     goes back to it on close, at most 1.5× its own pixels so it stays sharp.
     Swipe or arrow keys move; Esc, the X, a tap outside the picture or a
     downward swipe (phones) close. Clips play like GIFs while they are the
     current slide; with reduced motion or Save-Data they wait for a tap. */
  var uvEl = document.getElementById('ultraViewer');
  var uv = (uvEl && typeof uvEl.showModal === 'function') ? (function(){
    var back = null;
    return {
      open: function(from){ back = from || document.activeElement; if (!uvEl.open) uvEl.showModal(); root.classList.add('has-sheet'); },
      close: function(){ if (uvEl.open) uvEl.close(); root.classList.remove('has-sheet'); if (back && back.focus) back.focus({ preventScroll: true }); }
    };
  })() : null;
  if (uv && galGridEl){
    var uvTrack = document.getElementById('uvTrack');
    var uvPrev = document.getElementById('uvPrev'), uvNext = document.getElementById('uvNext');
    var uvCount = document.getElementById('uvCount'), uvTitle = document.getElementById('uvTitle'), uvLive = document.getElementById('uvLive');
    var uvItems = [], uvIndex = -1, uvSource = null;
    var containRect = function(box, w, h){
      var s = Math.min(box.width / w, box.height / h), cw = w * s, ch = h * s;
      return { left: box.left + (box.width - cw) / 2, top: box.top + (box.height - ch) / 2, width: cw, height: ch };
    };
    var mediaRect = function(i){
      var it = uvItems[i]; if (!it || !it.el) return null;
      return containRect(it.el.getBoundingClientRect(), it.w, it.h);
    };
    var flyFrom = function(i, reverse, done){
      var it = uvItems[i], to = mediaRect(i);
      var from = it && it.tile ? it.tile.getBoundingClientRect() : null;
      var visible = from && from.bottom > 0 && from.top < innerHeight && from.width > 0;
      if (reduceMotion || !to || !visible || !it.el.animate){
        var f = uvEl.animate ? uvEl.animate([{ opacity: reverse ? 1 : 0 }, { opacity: reverse ? 0 : 1 }], { duration: reduceMotion ? 1 : 200, easing: 'ease-out' }) : null;
        if (done){ if (f) f.onfinish = done; else done(); }
        return;
      }
      var s = Math.max(from.width / to.width, from.height / to.height);
      var dx = (from.left + from.width / 2) - (to.left + to.width / 2), dy = (from.top + from.height / 2) - (to.top + to.height / 2);
      var a = 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')', b = 'translate(0,0) scale(1)';
      var anim = it.el.animate([{ transform: reverse ? b : a }, { transform: reverse ? a : b }], { duration: reverse ? 260 : 340, easing: 'cubic-bezier(.2,.8,.2,1)' });
      uvEl.animate([{ opacity: reverse ? 1 : 0 }, { opacity: reverse ? 0 : 1 }], { duration: reverse ? 240 : 220, easing: 'ease-out' });
      if (done) anim.onfinish = done;
    };
    var load = function(i){
      var it = uvItems[i]; if (!it || it.loaded) return;
      it.loaded = true;
      if (it.type === 'img'){ it.el.src = it.src; }
      else { it.el.preload = 'auto'; it.el.src = it.src; }
    };
    var setPlaying = function(){
      uvItems.forEach(function(it, k){
        if (it.type !== 'video') return;
        if (k === uvIndex && uvEl.open && !stillOnly()){ var p = it.el.play(); if (p && p.catch) p.catch(function(){}); }
        else if (!it.el.paused) it.el.pause();
        if (it.playBtn) it.playBtn.hidden = !(k === uvIndex && stillOnly() && it.el.paused);
      });
    };
    var uvSync = function(){
      var i = Math.round(uvTrack.scrollLeft / Math.max(1, uvTrack.clientWidth));
      i = Math.max(0, Math.min(uvItems.length - 1, i));
      if (i === uvIndex) return;
      uvIndex = i;
      [i - 1, i, i + 1, i + 2].forEach(load);
      var it = uvItems[i];
      uvTitle.textContent = it.alt;
      uvCount.textContent = (i + 1) + ' / ' + uvItems.length;
      uvLive.textContent = it.alt + ' — ' + (i + 1) + ' / ' + uvItems.length;
      uvPrev.disabled = i <= 0; uvNext.disabled = i >= uvItems.length - 1;
      setPlaying();
    };
    var uvGo = function(i){
      i = Math.max(0, Math.min(uvItems.length - 1, i));
      uvTrack.scrollTo({ left: i * uvTrack.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var build = function(){
      uvTrack.innerHTML = '';
      uvItems = [].filter.call(galGridEl.children, function(c){ return !c.classList.contains('is-out') && (c.classList.contains('gal-photo') || c.classList.contains('gal-video') || c.classList.contains('gal-anim')); }).map(function(tile){
        var slide = document.createElement('div');
        slide.className = 'uv-slide';
        var it = { tile: tile, slide: slide };
        if (tile.classList.contains('gal-photo') || tile.classList.contains('gal-anim')){
          var im = tile.querySelector('img');
          it.type = 'img';
          it.src = tile.classList.contains('gal-anim')
            ? im.getAttribute('src')
            : (tile.getAttribute('data-path') || im.currentSrc || im.src);
          it.alt = im.alt; it.w = +im.getAttribute('width') || 4; it.h = +im.getAttribute('height') || 5;
          it.el = document.createElement('img'); it.el.alt = it.alt; it.el.decoding = 'async';
        } else {
          var tv = tile.querySelector('video'), srcEl = tv.querySelector('source');
          it.type = 'video'; it.src = srcEl ? srcEl.getAttribute('src') : tv.currentSrc;
          it.alt = tv.getAttribute('aria-label') || ''; it.w = +tv.getAttribute('width') || 4; it.h = +tv.getAttribute('height') || 5;
          var v = document.createElement('video');
          v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
          v.disablePictureInPicture = true; v.preload = 'none'; v.poster = tv.getAttribute('poster') || '';
          v.setAttribute('aria-label', it.alt);
          it.el = v;
          var pb = document.createElement('button');
          pb.type = 'button'; pb.className = 'uv-play'; pb.hidden = true;
          pb.setAttribute('aria-label', t('gallery.play'));
          pb.addEventListener('click', function(e){ e.stopPropagation(); var p = v.play(); if (p && p.catch) p.catch(function(){}); pb.hidden = true; });
          it.playBtn = pb;
        }
        it.el.className = 'uv-media';
        // At most 1.5x the picture's own pixels: sharp, and never a blurry blow-up.
        it.el.style.setProperty('--mw', Math.round(it.w * 1.5) + 'px');
        it.el.style.setProperty('--mh', Math.round(it.h * 1.5) + 'px');
        slide.appendChild(it.el);
        if (it.playBtn) slide.appendChild(it.playBtn);
        uvTrack.appendChild(slide);
        return it;
      });
    };
    galGridEl.addEventListener('click', function(e){
      var tile = e.target.closest('.gal-photo, .gal-video, .gal-anim');
      if (!tile || !galGridEl.contains(tile)) return;
      uvSource = tile;
      build();
      var start = Math.max(0, uvItems.findIndex(function(it){ return it.tile === tile; }));
      uvIndex = -1;
      uv.open(tile);
      uvTrack.scrollLeft = start * uvTrack.clientWidth;
      load(start);
      uvSync();
      requestAnimationFrame(function(){ flyFrom(start, false); uvTrack.focus({ preventScroll: true }); });
    });
    var closing = false;
    var uvClose = function(){
      if (closing || !uvEl.open) return;
      closing = true;
      var i = uvIndex;
      uvItems.forEach(function(it){ if (it.type === 'video' && !it.el.paused) it.el.pause(); });
      flyFrom(i, true, function(){
        uv.close();
        closing = false;
        uvItems.forEach(function(it){ if (it.el) it.el.style.transform = ''; });
      });
    };
    document.getElementById('uvClose').addEventListener('click', uvClose);
    uvEl.addEventListener('cancel', function(e){ e.preventDefault(); uvClose(); });
    // A tap beside the picture, or on the dimmed page around the card, closes.
    uvEl.addEventListener('click', function(e){
      if (e.target !== uvEl) return;
      var r = uvEl.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) uvClose();
    });
    uvTrack.addEventListener('click', function(e){ if (e.target.classList.contains('uv-slide')) uvClose(); });
    uvTrack.addEventListener('scroll', function(){ requestAnimationFrame(uvSync); }, { passive: true });
    uvPrev.addEventListener('click', function(){ uvGo(uvIndex - 1); });
    uvNext.addEventListener('click', function(){ uvGo(uvIndex + 1); });
    uvEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); uvGo(uvIndex + 1); }
      else if (e.key === 'ArrowLeft'){ e.preventDefault(); uvGo(uvIndex - 1); }
    });
    // Phones: drag the picture down to close; a short drag springs back.
    var drag = null;
    uvTrack.addEventListener('pointerdown', function(e){ if (e.pointerType === 'mouse') return; drag = { x: e.clientX, y: e.clientY, dy: 0, on: false }; });
    uvTrack.addEventListener('pointermove', function(e){
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.on){ if (dy > 12 && dy > Math.abs(dx) * 1.3) drag.on = true; else if (Math.abs(dx) > 12) { drag = null; return; } else return; }
      drag.dy = Math.max(0, dy);
      var it = uvItems[uvIndex];
      if (it && it.el){ it.el.style.transform = 'translate(0,' + drag.dy + 'px) scale(' + Math.max(.8, 1 - drag.dy / 1200) + ')'; }
      uvEl.style.opacity = Math.max(.35, 1 - drag.dy / 500).toFixed(3);
    });
    var endDrag = function(){
      if (!drag) return;
      var d = drag; drag = null;
      uvEl.style.opacity = '';
      var it = uvItems[uvIndex];
      if (d.on && d.dy > 90){ if (it && it.el) it.el.style.transform = ''; uvClose(); }
      else if (it && it.el){
        if (it.el.animate && d.on) it.el.animate([{ transform: it.el.style.transform }, { transform: 'translate(0,0) scale(1)' }], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' });
        it.el.style.transform = '';
      }
    };
    uvTrack.addEventListener('pointerup', endDrag);
    uvTrack.addEventListener('pointercancel', endDrag);
    uvEl.addEventListener('close', function(){ uvItems.forEach(function(it){ if (it.type === 'video' && !it.el.paused) it.el.pause(); }); });
    langListeners.push(function(){
      document.querySelectorAll('.uv-play').forEach(function(b){ b.setAttribute('aria-label', t('gallery.play')); });
    });
  }

  /* ---------- Service details: a sheet anchored to the card that opened it ---------- */
  var serviceSheet = sheet(document.getElementById('serviceModal'));
  if (serviceSheet){
    var sHero = document.getElementById('serviceHero');
    var sIcon = document.getElementById('serviceIcon');
    var sTitle = document.getElementById('serviceTitle');
    var sText = document.getElementById('serviceText');
    var sWa = document.getElementById('serviceWa');
    var openService = function(card, btn){
      var key = card.getAttribute('data-service');
      var photo = card.querySelector('.service-photo');
      var icon = card.querySelector('.service-icon');
      sHero.innerHTML = '';
      if (photo){
        var img = photo.cloneNode(false);
        img.removeAttribute('loading');
        img.className = '';
        img.sizes = '(max-width: 760px) 100vw, 640px';
        sHero.appendChild(img);
      }
      sIcon.innerHTML = icon ? icon.innerHTML : '';
      sIcon.className = 'service-icon' + (key === 'service1' ? ' is-emergency' : '');
      sTitle.textContent = t(key + '.title');
      sText.innerHTML = '';
      [t(key + '.desc')].concat(String(t(key + '.more') || '').split(/\n\s*\n/)).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        sText.appendChild(p);
      });
      sWa.setAttribute('data-wa', key + '.title');
      sWa.setAttribute('href', waUrl((currentLang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + t(key + '.title').toLowerCase() + (currentLang === 'es' ? ' en Clínica LaFam.' : ' at Clínica LaFam.')));
      serviceSheet.open(btn);
      sText.scrollTop = 0;
    };
    var labelServices = function(){
      document.querySelectorAll('.service-card[data-service]').forEach(function(card){
        var btn = card.querySelector('.service-open');
        if (btn) btn.setAttribute('aria-label', fmt(t('services.more_aria'), { name: t(card.getAttribute('data-service') + '.title') }));
      });
    };
    document.querySelectorAll('.service-card[data-service]').forEach(function(card){
      var btn = card.querySelector('.service-open');
      if (btn) btn.addEventListener('click', function(){ openService(card, btn); });
    });
    langListeners.push(labelServices);
  }

  /* ---------- Map: loaded only when the visitor asks (no Google request before) ---------- */
  var mapBox = document.getElementById('mapBox');
  var mapLoad = document.getElementById('mapLoad');
  if (mapBox && mapLoad){
    mapLoad.addEventListener('click', function(){
      if (mapBox.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = mapBox.getAttribute('data-src');
      f.title = t('contact.map_frame');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function(){ mapBox.classList.add('is-loaded'); f.focus(); });
      mapBox.appendChild(f);
    });
  }

  /* ---------- Save contact: a correct vCard built on the device ---------- */
  var vcardBtn = document.getElementById('vcardBtn');
  if (vcardBtn){
    vcardBtn.addEventListener('click', function(){
      var d = {};
      try { d = JSON.parse(vcardBtn.getAttribute('data-vcard') || '{}'); } catch (e) { return; }
      var esc = function(v){ return String(v || '').replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n'); };
      var lines = ['BEGIN:VCARD', 'VERSION:3.0', 'KIND:org', 'FN:' + esc(d.name), 'ORG:' + esc(d.name)];
      (d.tel || []).forEach(function(n, i){ lines.push('TEL;TYPE=' + (i === 0 ? 'WORK,VOICE' : 'CELL,VOICE') + ':' + n); });
      if (d.email) lines.push('EMAIL;TYPE=WORK:' + d.email);
      lines.push('ADR;TYPE=WORK:;;' + esc(d.street) + ';' + esc(d.city) + ';;;Guatemala');
      if (d.url) lines.push('URL:' + d.url);
      lines.push('END:VCARD');
      var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Clinica-LaFam.vcf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }

  /* ---------- Photos fade in once loaded (no pop-in on slow connections) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.service-photo, .area-photo, .about-photo, .maternity-img, .hero-photo img'), function(img){
    if (img.complete && img.naturalWidth) return;
    img.classList.add('is-loading');
    function done(){ img.classList.remove('is-loading'); }
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---------- Gentle parallax on the large photos (transform only, rAF-batched) ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var mqWide = window.matchMedia('(min-width: 900px)');
  var plxTicking = false;
  function parallax(){
    plxTicking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function(el){
      if (reduceMotion || !mqWide.matches){ el.style.transform = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var offset = (r.top + r.height / 2 - vh / 2) * -0.06;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  if (parallaxEls.length){
    window.addEventListener('scroll', function(){ if (!plxTicking){ plxTicking = true; requestAnimationFrame(parallax); } }, { passive: true });
    window.addEventListener('resize', parallax);
    parallax();
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.getElementById('inicio');
      if (skip) skip.focus({ preventScroll: true });
    });
  }

  applyLang(currentLang);
  onScroll();

  /* ============================================================
     Contact form — client-side validation (a UX convenience only;
     assets/contact-handler.php re-validates everything server-side),
     honeypot + minimum-completion-time anti-spam signals, and a
     defensive fetch() that handles non-JSON responses, HTTP status
     categories, timeouts, duplicate submits, offline errors, and
     field-specific errors returned by the server. Field values are
     preserved on any failure and cleared only after a confirmed
     success.
     ============================================================ */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var summary = document.getElementById('formSummary');

  /* Minimum-completion-time signal: stamped once, invisible, never an
     expectation placed on the visitor — purely a server-side anti-spam
     input alongside the honeypot. */
  var loadedAtField = document.getElementById('formLoadedAt');
  if (loadedAtField) loadedAtField.value = String(Date.now());

  /* ------------------------------------------------------------
     Captcha, two layers (verified again in assets/contact-handler.php):
     1. Built-in, always on: the handler issues a signed, single-use
        challenge and the browser finds the matching number with the
        Web Crypto API (SHA-256) in the background while the visitor
        types. Invisible: the visitor never has to do anything.
     2. Optional Cloudflare Turnstile, only when the page carries a
        site key (the owner enables it in the Content Manager). It
        stays hidden unless Cloudflare needs the visitor to click.
     ------------------------------------------------------------ */
  var captchaInput = document.getElementById('formCaptchaAnswer');
  var captchaText = document.getElementById('formCaptchaText');
  var captchaNote = document.getElementById('formCaptcha');
  var captchaJob = null;      /* Promise of the current answer */
  var captchaIssued = 0;      /* when the current challenge was requested */
  var CAPTCHA_FRESH_MS = 25 * 60 * 1000; /* the server accepts 30 min */

  function setCaptchaState(state){
    if (captchaNote) captchaNote.setAttribute('data-state', state);
    if (captchaText){
      captchaText.setAttribute('data-i18n', 'form.captcha_' + state);
      captchaText.textContent = t('form.captcha_' + state);
    }
  }

  function hexToBytes(hex){
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameBytes(buf, target){
    var a = new Uint8Array(buf);
    for (var i = 0; i < target.length; i++) if (a[i] !== target[i]) return false;
    return true;
  }

  function solveCaptcha(){
    if (!captchaInput) return Promise.resolve();
    if (!window.crypto || !window.crypto.subtle || typeof TextEncoder === 'undefined' || typeof fetch === 'undefined'){
      setCaptchaState('error');
      return Promise.reject(new Error('captcha_unsupported'));
    }
    captchaInput.value = '';
    captchaIssued = Date.now();
    setCaptchaState('pending');
    return fetch('assets/contact-handler.php?challenge=1', { headers: { 'Accept': 'application/json' }, cache: 'no-store', credentials: 'same-origin' })
      .then(function(res){
        if (!res.ok) throw new Error('captcha_challenge_' + res.status);
        return res.json();
      })
      .then(function(c){
        if (!c || c.algorithm !== 'SHA-256' || typeof c.salt !== 'string' || typeof c.challenge !== 'string') throw new Error('captcha_bad_challenge');
        var enc = new TextEncoder();
        var target = hexToBytes(c.challenge);
        var BATCH = 1000;
        var search = function(start){
          if (start > c.maxnumber) throw new Error('captcha_unsolved');
          var end = Math.min(start + BATCH, c.maxnumber + 1);
          var jobs = [];
          for (var n = start; n < end; n++) jobs.push(window.crypto.subtle.digest('SHA-256', enc.encode(c.salt + n)));
          return Promise.all(jobs).then(function(hashes){
            for (var i = 0; i < hashes.length; i++) if (sameBytes(hashes[i], target)) return start + i;
            return search(end);
          });
        };
        return search(0).then(function(number){
          captchaInput.value = btoa(JSON.stringify({ algorithm: c.algorithm, challenge: c.challenge, number: number, salt: c.salt, signature: c.signature }));
          setCaptchaState('ok');
        });
      })
      .catch(function(err){
        setCaptchaState('error');
        captchaJob = null;
        throw err;
      });
  }

  /* The current answer, or a new one when there is none or it is getting old. */
  function ensureCaptcha(){
    if (!captchaJob || Date.now() - captchaIssued > CAPTCHA_FRESH_MS) captchaJob = solveCaptcha();
    return captchaJob;
  }

  function startCaptcha(){
    ensureCaptcha().catch(function(){ /* shown in the note; retried on submit */ });
    loadTurnstile();
  }

  /* Optional Cloudflare Turnstile. */
  var tsBox = document.getElementById('formTurnstile');
  var tsSiteKey = tsBox ? (tsBox.getAttribute('data-sitekey') || '') : '';
  var tsWidget = null;
  var tsToken = '';
  var tsWaiters = [];
  var tsLoading = false;

  function tsSettle(){
    var w = tsWaiters; tsWaiters = [];
    w.forEach(function(fn){ fn(); });
  }

  function loadTurnstile(){
    if (!tsSiteKey || tsLoading) return;
    tsLoading = true;
    window.renacerTurnstileReady = function(){
      if (!window.turnstile) return;
      tsWidget = window.turnstile.render(tsBox, {
        sitekey: tsSiteKey,
        action: 'contact',
        appearance: 'interaction-only',
        language: currentLang === 'en' ? 'en' : 'es',
        callback: function(token){ tsToken = token; tsSettle(); },
        'expired-callback': function(){ tsToken = ''; },
        'error-callback': function(){ tsToken = ''; tsSettle(); }
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=renacerTurnstileReady';
    sc.async = true;
    sc.defer = true;
    document.head.appendChild(sc);
  }

  /* Resolves with true when Turnstile is off or has a token; false after waiting. */
  function turnstileReady(){
    if (!tsSiteKey) return Promise.resolve(true);
    loadTurnstile();
    if (tsToken) return Promise.resolve(true);
    return new Promise(function(resolve){
      var timer = setTimeout(function(){ resolve(!!tsToken); }, 20000);
      tsWaiters.push(function(){ clearTimeout(timer); resolve(!!tsToken); });
    });
  }

  function resetTurnstile(){
    tsToken = '';
    if (tsWidget !== null && window.turnstile) {
      try { window.turnstile.reset(tsWidget); } catch (e) { /* widget gone */ }
    }
  }

  /* Start as soon as the visitor shows interest in the form (or it scrolls into view). */
  var contactFormEl = document.getElementById('contactForm');
  if (contactFormEl && captchaInput){
    var started = false;
    var kick = function(){ if (!started){ started = true; startCaptcha(); } };
    contactFormEl.addEventListener('focusin', kick);
    contactFormEl.addEventListener('pointerdown', kick);
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        if (entries.some(function(e){ return e.isIntersecting; })){ io.disconnect(); kick(); }
      }, { rootMargin: '300px' });
      io.observe(contactFormEl);
    }
  }

  if (form){
    /* The questions come from the Content Manager (Sitio web → Formulario de
       contacto): each .field holds one question — an input, select or
       textarea, or a group of radio buttons / checkboxes. */
    var questionFields = function(){
      return Array.prototype.filter.call(form.querySelectorAll('.field'), function(f){
        return !f.classList.contains('hp-field') && f.querySelector('input[name],select[name],textarea[name]');
      });
    };
    var fieldName = function(field){
      return field.querySelector('input[name],select[name],textarea[name]').name.replace(/\[\]$/, '');
    };
    var controlsOf = function(field){ return field.querySelectorAll('input[name],select[name],textarea[name]'); };
    var fieldValid = function(field){
      var controls = controlsOf(field);
      if (controls[0].type === 'checkbox'){
        if (!field.hasAttribute('data-required')) return true;
        return Array.prototype.some.call(controls, function(c){ return c.checked; });
      }
      return controls[0].checkValidity(); /* a radio's validity covers its whole group */
    };
    var markField = function(field, ok){
      field.classList.toggle('invalid', !ok);
      Array.prototype.forEach.call(controlsOf(field), function(c){ c.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    };
    var fieldByName = function(name){
      var found = null;
      questionFields().forEach(function(f){ if (!found && fieldName(f) === name) found = f; });
      return found;
    };
    /* Dates that must be from today on (the page is static: today is set here). */
    var today = new Date();
    var todayIso = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    Array.prototype.forEach.call(form.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayIso; });

    var submitBtn = form.querySelector('button[type="submit"]');
    var submitting = false;

    var validateAll = function(){
      var valid = true;
      var firstInvalid = null;
      questionFields().forEach(function(field){
        var ok = fieldValid(field);
        markField(field, ok);
        if (!ok){
          valid = false;
          if (!firstInvalid) firstInvalid = controlsOf(field)[0];
        }
      });
      return { valid: valid, firstInvalid: firstInvalid };
    }

    var showSummary = function(message){
      if (!summary) return;
      summary.textContent = message;
      summary.hidden = false;
    }
    var hideSummary = function(){
      if (!summary) return;
      summary.hidden = true;
      summary.textContent = '';
    }

    var setStatus = function(message, kind){
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show' + (kind ? ' ' + kind : '');
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (submitting) return; /* duplicate-submission guard */

      hideSummary();

      var result = validateAll();

      /* Honeypot check — if this hidden field has a value, silently drop
         as bot spam without hitting the network or alarming the (bot)
         "user" that anything was detected. */
      var hp = document.getElementById('website');
      if (hp && hp.value){
        setStatus(t('form.status_ok'), 'ok');
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      if (!result.valid){
        showSummary(t('form.status_invalid'));
        setStatus(t('form.status_invalid'), 'error');
        if (result.firstInvalid) result.firstInvalid.focus();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.onLine === false){
        setStatus(t('form.status_offline'), 'error');
        return;
      }

      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      var done = function(){
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
      };
      if (captchaInput && !captchaInput.value) setStatus(t('form.status_verifying'), '');

      ensureCaptcha()
        .then(function(){ return turnstileReady(); })
        .then(function(ok){
          if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
          send(false);
        }, function(){
          setStatus(t('form.status_captcha'), 'error');
          done();
        });

      function send(retried){
      setStatus(t('form.status_sending'), '');
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function(){ controller.abort(); }, 15000) : null;

      var formData = new FormData(form);
      formData.append('lang', currentLang === 'en' ? 'en' : 'es'); /* reply in the visitor's language */
      fetch('assets/contact-handler.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
        .then(function(res){
          if (timeoutId) clearTimeout(timeoutId);
          var contentType = res.headers.get('Content-Type') || '';
          var parse = contentType.indexOf('application/json') !== -1
            ? res.json().catch(function(){ return null; })
            : Promise.resolve(null);
          return parse.then(function(data){ return { res: res, data: data }; });
        })
        .then(function(result){
          var res = result.res, data = result.data;

          if (res.ok && data && data.ok){
            setStatus(t('form.status_ok'), 'ok');
            hideSummary();
            form.reset();
            questionFields().forEach(function(f){ markField(f, true); });
            if (loadedAtField) loadedAtField.value = String(Date.now());
            /* Each captcha answer works once: prepare the next one. */
            captchaJob = null;
            resetTurnstile();
            ensureCaptcha().catch(function(){});
            return;
          }

          if (res.status === 400 && data && data.error === 'captcha_failed'){
            /* Expired or already used answer (e.g. the page was open for
               hours): solve a fresh one and try once more on our own. */
            captchaJob = null;
            resetTurnstile();
            if (!retried){
              ensureCaptcha()
                .then(function(){ return turnstileReady(); })
                .then(function(ok){
                  if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
                  send(true);
                }, function(){ setStatus(t('form.status_captcha'), 'error'); done(); });
              return 'pending';
            }
            setStatus(t('form.status_captcha'), 'error');
            return;
          }

          if (res.status === 429){
            setStatus(t('form.status_rate_limited'), 'error');
            return;
          }

          if (res.status === 422 && data && Array.isArray(data.fields) && data.fields.length){
            var firstBad = null;
            data.fields.forEach(function(name){
              var bad = fieldByName(String(name));
              if (!bad) return;
              markField(bad, false);
              if (!firstBad) firstBad = controlsOf(bad)[0];
            });
            showSummary(t('form.status_invalid'));
            setStatus(t('form.status_invalid'), 'error');
            if (firstBad) firstBad.focus();
            return;
          }

          if (res.status >= 500){
            setStatus(t('form.status_error'), 'error');
            return;
          }

          /* Any other non-success status (403 origin check, unexpected
             field rejected, malformed/non-JSON response, etc.) — generic,
             non-revealing error message. Values are preserved either way. */
          setStatus(t('form.status_error'), 'error');
        })
        .catch(function(err){
          if (timeoutId) clearTimeout(timeoutId);
          if (err && err.name === 'AbortError'){
            setStatus(t('form.status_timeout'), 'error');
          } else if (typeof navigator !== 'undefined' && navigator.onLine === false){
            setStatus(t('form.status_offline'), 'error');
          } else {
            setStatus(t('form.status_error'), 'error');
          }
        })
        .then(function(outcome){
          if (outcome !== 'pending') done();
        });
      }
    });

    questionFields().forEach(function(field){
      Array.prototype.forEach.call(controlsOf(field), function(input){
        var check = function(){ markField(field, fieldValid(field)); };
        input.addEventListener('blur', check);
        /* choices: re-check as soon as one is picked */
        if (input.type === 'radio' || input.type === 'checkbox') input.addEventListener('change', check);
      });
    });
  }
})();
