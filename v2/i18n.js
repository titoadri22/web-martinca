// ===== i18n - Español / English =====
const translations = {
    es: {
        // Nav
        "nav.inicio": "Inicio",
        "nav.quienes": "Quiénes somos",
        "nav.proyectos": "Proyectos",
        "nav.outdoor": "Outdoor",
        "nav.blog": "Blog",
        "nav.contacto": "Contacto",
        "nav.presupuesto": "Presupuesto",

        // Hero
        "hero.label": "Cerrajería · Metalistería · Carpintería Metálica",
        "hero.title1": "Más de 60 años",
        "hero.title2": "TRANSFORMANDO EL METAL EN DISEÑO",
        "hero.subtitle": "Puedes escribirnos sin compromiso. Escuchamos con atención y respondemos con claridad. Si hay proyecto, lo desarrollamos contigo desde el inicio.",
        "hero.cta1": "Solicitar presupuesto",
        "hero.cta2": "Ver proyectos",

        // Valores
        "valores.label": "Nuestros valores",
        "valores.title": "Lo que nos <em>define</em>",
        "valores.desc": "Desde 1954 estamos al servicio de nuestros clientes con los mismos principios.",
        "valores.innovacion": "Innovación",
        "valores.innovacion.desc": "Referentes en el sector, con formación continua y anticipación a las necesidades del cliente.",
        "valores.compromiso": "Compromiso",
        "valores.compromiso.desc": "Al servicio del cliente aportando soluciones funcionales, diseño y originalidad.",
        "valores.excelencia": "Excelencia",
        "valores.excelencia.desc": "Orgullo por el oficio, combinando visión técnica y estética en cada proyecto.",
        "valores.confianza": "Confianza",
        "valores.confianza.desc": "Generamos relaciones abiertas y creativas con los clientes como colaboradores.",

        // Servicios
        "servicios.label": "Lo que hacemos",
        "servicios.title": "Nuestros <em>Servicios</em>",
        "servicios.desc": "Soluciones integrales en cerrajería, metalistería y carpintería metálica.",
        "servicios.escaleras": "Escaleras",
        "servicios.escaleras.desc": "Las escaleras son nuestra pasión; transformar el metal en diseño creando soluciones que no solo cubran su función, sino que también logren emocionar a través de su belleza estética.",
        "servicios.vallados": "Vallados",
        "servicios.vallados.desc": "Los vallados son obras de arte y piezas integradas en la vida cotidiana que perduran en el tiempo. El conjunto final se forma gracias a un minucioso trabajo con acabados de alta calidad.",
        "servicios.barandillas": "Barandillas",
        "servicios.barandillas.desc": "Las barandillas son un fiel reflejo de que adoramos lo que hacemos, creemos en nosotros y en nuestra capacidad de trabajo. Escuchamos, entendemos y analizamos para diseñar y crear.",
        "servicios.puertas": "Puertas",
        "servicios.puertas.desc": "Al igual que las puertas, tenemos una clientela diversificada y atomizada, desde arquitectos, interioristas a particulares. Todo aquel que busca soluciones a medida, puede verla realizada.",
        "servicios.carpinteria": "Carpintería de Aluminio",
        "servicios.carpinteria.desc": "La carpintería de aluminio ha ido evolucionando durante todos estos años. La ductilidad de este material y su gran impermeabilidad permite realizar ventanales de grandes dimensiones, donde el perfil de aluminio es casi imperceptible.",
        "servicios.pergolas": "Techos y Pérgolas",
        "servicios.pergolas.desc": "Techos y Pérgolas son otro de los protagonistas de nuestro día a día. El aluminio ofrece un sinfín de opciones y colores. Esto nos permite poder salir al exterior sin perder ni un ápice de la calidez del interior de nuestro hogar.",

        // Footer
        "footer.about": "Especialistas en cerrajería, metalistería y carpintería metálica. Más de 60 años de experiencia transformando espacios con innovación y artesanía desde 1954.",
        "footer.links": "Enlaces rápidos",
        "footer.follow": "Síguenos",
        "footer.contacto": "Contacto",
        "footer.copy": "© 2026 Metálicas Martinca. Todos los derechos reservados.",

        // Blog - Escalera Infinita
        "blog.escalera.title": "La Escalera Infinita de Olafur Eliasson en Múnich",
        "blog.escalera.p1": "La <strong>Escalera Infinita</strong> de Múnich es una de las atracciones más fascinantes de la ciudad. Situada en el patio de las oficinas de la firma KPMG, esta escultura arquitectónica, creada por el artista danés-islandés <strong>Olafur Eliasson</strong> en 2004, es una obra maestra que combina arte, arquitectura y matemáticas en una estructura que parece no tener fin.",
        "blog.escalera.h2_1": "¿Qué es la Escalera Infinita?",
        "blog.escalera.p2": "Conocida oficialmente como <em>Umschreibung</em> (que en alemán significa 'circunscripción' o 'reescritura'), esta escalera de doble hélice tiene una altura de 9 metros y está construida en acero. A diferencia de las escaleras convencionales, no lleva a ninguna parte: es un bucle continuo que permite al visitante subir y bajar indefinidamente sin llegar a un destino concreto.",
        "blog.escalera.quote": "\"El movimiento es intrínseco a la obra. La escalera no es un objeto estático, sino una experiencia de tiempo y espacio.\"",
        "blog.escalera.h2_2": "Diseño y Construcción",
        "blog.escalera.p3": "La estructura está formada por dos espirales entrelazadas que se encuentran en la parte superior e inferior, creando un ciclo continuo. Los escalones están hechos de acero galvanizado, y la barandilla sigue la curvatura perfecta de la hélice, lo que le da una apariencia fluida y orgánica a pesar de ser un material industrial.",
        "blog.escalera.p4": "Para nosotros, como especialistas en escaleras metálicas, esta obra es un referente de cómo el metal puede transformarse en algo más que un elemento funcional. La precisión en el curvado de los tubos y la soldadura invisible son detalles que demuestran la maestría técnica necesaria para ejecutar un diseño tan complejo.",
        "blog.escalera.h2_3": "¿Se puede visitar?",
        "blog.escalera.p5": "Aunque la escultura se encuentra en un recinto privado (el patio de KPMG), es accesible al público durante el día. Es un lugar popular para fotógrafos y amantes de la arquitectura que buscan capturar la geometría hipnótica de la estructura.",
        "blog.escalera.h2_3": "¿Se puede visitar?",
        "blog.escalera.p5": "Aunque la escultura se encuentra en un recinto privado (el patio de KPMG), es accesible al público durante el día. Es un lugar popular para fotógrafos y amantes de la arquitectura que buscan capturar la geometría hipnótica de la estructura.",
        "blog.escalera.p6": "Si alguna vez estás en Múnich, acércate al número 29 de la calle Ganghoferstraße. No solo verás una escalera, sino una reflexión sobre el movimiento eterno.",

        // Blog - Iluminación Hogar
        "blog.iluminacion.title": "Cómo iluminar las estancias de una casa",
        "blog.iluminacion.p1": "La <strong>iluminación</strong> juega un papel crucial en la decoración y funcionalidad de un hogar. Una casa bien iluminada no solo mejora la estética de los espacios, sino que también influye en nuestro estado de ánimo y bienestar. ",
        "blog.iluminacion.h2_salon": "Salón: El Corazón de la Casa",
        "blog.iluminacion.p_salon": "El salón es un espacio multifuncional donde nos relajamos, socializamos y a veces trabajamos. Por ello, la iluminación debe ser versátil.",
        "blog.iluminacion.li_salon_1": "<strong>Luz General:</strong> Una lámpara de techo o focos empotrados que distribuyan la luz de manera uniforme.",
        "blog.iluminacion.li_salon_2": "<strong>Luz Ambiental:</strong> Lámparas de pie o de mesa con luz cálida para momentos de relax.",
        "blog.iluminacion.li_salon_3": "<strong>Luz de Acento:</strong> Para destacar cuadros, estanterías o elementos arquitectónicos, como una escalera metálica.",
        "blog.iluminacion.h2_kitchen": "Cocina: Funcionalidad ante todo",
        "blog.iluminacion.p_kitchen": "En la cocina, la visibilidad es fundamental. Necesitamos ver claramente lo que estamos cocinando.",
        "blog.iluminacion.li_kitchen_1": "<strong>Luz de Trabajo:</strong> Tiras de LED bajo los armarios superiores para iluminar la encimera sin sombras.",
        "blog.iluminacion.li_kitchen_2": "<strong>Luz General:</strong> Downlights o plafones potentes con luz neutra (4000K).",
        "blog.iluminacion.h2_bedroom": "Dormitorio: Relax y Descanso",
        "blog.iluminacion.p_bedroom": "Aquí buscamos crear un ambiente acogedor que invite al descanso.",
        "blog.iluminacion.li_bedroom_1": "Luz cálida (2700K-3000K).",
        "blog.iluminacion.li_bedroom_2": "Lámparas de lectura en las mesitas de noche, preferiblemente regulables.",
        "blog.iluminacion.li_bedroom_3": "Evitar luces directas sobre la cama que puedan deslumbrar.",
        "blog.iluminacion.h2_natural": "La Importancia de la Luz Natural",
        "blog.iluminacion.h2_natural": "La Importancia de la Luz Natural",
        "blog.iluminacion.p_natural": "No podemos olvidar la mejor fuente de luz: el sol. Maximizar la entrada de luz natural mediante grandes ventanales, cerramientos acristalados (como los que fabricamos en Martinca) y cortinas ligeras es la mejor manera de iluminar durante el día.",

        // Blog - Maria Pergay
        "blog.pergay.title": "Maria Pergay, Icono del Diseño Moderno en el Mundo del Metal",
        "blog.pergay.p1": "María Pergay, nacida en 1930 en Moldavia y radicada en Francia, es una de las diseñadoras más icónicas del siglo XX, conocida principalmente por su trabajo innovador con el acero inoxidable. A lo largo de su carrera, desafió las convenciones del diseño de muebles, transformando un material industrial frío en piezas de lujo, sensuales y elegantes.",
        "blog.pergay.h2_1": "El Acero Inoxidable como Lienzo",
        "blog.pergay.p2": "En la década de 1960, mientras muchos diseñadores se centraban en el plástico y la madera, Pergay vio el potencial del acero inoxidable. Su primera colección, presentada en 1968, incluía piezas como la famosa <em>Flying Carpet Daybed</em> (Cama de día Alfombra Voladora) y la <em>Ring Chair</em> (Silla Anillo). Estas obras no solo eran funcionales, sino que también eran esculturas que exploraban la fluidez y la resistencia del material.",
        "blog.pergay.p3": "Pergay describió el acero inoxidable como «tan precioso como la más preciosa de las maderas», y su habilidad para manipularlo le valió reconocimiento internacional. Sus diseños a menudo incorporaban formas orgánicas, curvas suaves y detalles intrincados que contrastaban con la dureza del metal.",
        "blog.pergay.h2_2": "Legado y Reconocimiento",
        "blog.pergay.p4": "A pesar de su éxito inicial, Pergay pasó por períodos de olvido, pero su trabajo fue redescubierto en los años 2000, consolidando su estatus como una visionaria. Sus piezas se encuentran hoy en museos de renombre y colecciones privadas de todo el mundo.",
        "blog.pergay.p5": "María Pergay no solo fue una pionera en el uso del acero inoxidable, sino que también abrió el camino para que las mujeres diseñadoras se destacaran en un campo dominado por hombres. Su legado perdura como un testimonio de la creatividad sin límites y la capacidad de transformar lo ordinario en extraordinario.",
        "blog.pergay.p5": "María Pergay no solo fue una pionera en el uso del acero inoxidable, sino que también abrió el camino para que las mujeres diseñadoras se destacaran en un campo dominado por hombres. Su legado perdura como un testimonio de la creatividad sin límites y la capacidad de transformar lo ordinario en extraordinario.",
        "blog.pergay.p6": "Para aquellos interesados en el diseño moderno y la historia del mueble, la obra de María Pergay es una fuente inagotable de inspiración y admiración.",

        // Blog - Metal Hecho Diseño
        "blog.metal.title": "El Metal hecho Diseño: Funcionalidad y Estética en Metálicas Martinca",
        "blog.metal.p1": "En <strong>Metálicas Martinca</strong>, somos especialistas en trabajos de cerrajería y carpintería metálica, ofreciendo soluciones personalizadas y de alta calidad para cada proyecto. Nuestra experiencia y dedicación nos permiten transformar el metal en elementos funcionales y decorativos que embellecen cualquier espacio.",
        "blog.metal.h2_1": "Escaleras Metálicas: Elegancia y Robustez",
        "blog.metal.p2": "Diseñamos y fabricamos escaleras metálicas que se adaptan a cualquier estilo arquitectónico. Ya sea una escalera de caracol, helicoidal o recta, utilizamos materiales de primera calidad para garantizar la seguridad y durabilidad. Nuestros diseños combinan la robustez del metal con la elegancia de formas modernas, creando piezas únicas que destacan en cualquier ambiente.",
        "blog.metal.h2_2": "Barandillas: Seguridad con Estilo",
        "blog.metal.p3": "Las barandillas son esenciales para la seguridad, pero también juegan un papel crucial en la estética de una escalera o balcón. Ofrecemos una amplia gama de diseños, desde los más clásicos hasta los más vanguardistas, utilizando acero inoxidable, hierro forjado y vidrio. Cada barandilla se fabrica a medida, asegurando un ajuste perfecto y un acabado impecable.",
        "blog.metal.h2_3": "Carpintería Metálica: Versatilidad y Funcionalidad",
        "blog.metal.p4": "Además de escaleras y barandillas, realizamos todo tipo de trabajos de carpintería metálica. Desde puertas y ventanas hasta estructuras complejas, nuestro equipo de profesionales está capacitado para llevar a cabo proyectos de cualquier envergadura. Nos enorgullece ofrecer soluciones que no solo cumplen con los requisitos técnicos, sino que también aportan un valor estético añadido.",
        "blog.metal.p5": "En <strong>Metálicas Martinca</strong>, cada proyecto es una oportunidad para demostrar nuestra pasión por el metal y el diseño. Contáctanos y descubre cómo podemos hacer realidad tus ideas.",

        // Blog - Torre Blackpool
        "blog.blackpool.title": "La Torre de Blackpool: Un Icono de la Ingeniería Victoriana",
        "blog.blackpool.p1": "Si estás interesado en conocer una de las estructuras más emblemáticas de Inglaterra, ¡la Torre de Blackpool es una visita obligada! Situada en la famosa ciudad costera de Blackpool, en Lancashire, esta torre ha sido un símbolo de entretenimiento y arquitectura desde su inauguración en 1894.",
        "blog.blackpool.h2_1": "Historia de la Torre de Blackpool",
        "blog.blackpool.p2": "Inspirada en la Torre Eiffel de París, la Torre de Blackpool fue idea del alcalde de la ciudad, John Bickerstaffe, quien quedó impresionado por la estructura francesa durante la Exposición Universal de 1889. Con una altura de 158 metros, la torre se convirtió rápidamente en una atracción turística de primer orden.",
        "blog.blackpool.p3": "A lo largo de los años, ha sobrevivido a incendios y renovaciones, manteniéndose como un testimonio de la ingeniería victoriana. Hoy en día, es un edificio de Grado I, lo que significa que es de excepcional interés nacional.",
        "blog.blackpool.h2_2": "Atracciones en la Torre",
        "blog.blackpool.p_intro_list": "La Torre de Blackpool no es solo una estructura para admirar desde lejos; ¡hay mucho que hacer dentro!",
        "blog.blackpool.li_1": "<strong>El Blackpool Tower Eye:</strong> Situado en la cima, ofrece vistas panorámicas impresionantes del Mar de Irlanda y, en días despejados, hasta el Distrito de los Lagos y el norte de Gales. Además, cuenta con un suelo de cristal SkyWalk para los más valientes.",
        "blog.blackpool.li_2": "<strong>El Salón de Baile:</strong> Conocido mundialmente, este salón de baile es una maravilla de la decoración opulenta y la elegancia. Es famoso por su órgano Wurlitzer y por ser escenario del programa de televisión «Strictly Come Dancing».",
        "blog.blackpool.li_3": "<strong>El Circo de la Torre:</strong> Situado en la base de la torre, es el circo permanente más antiguo del mundo, ofreciendo espectáculos que han deleitado a generaciones.",
        "blog.blackpool.h2_3": "Curiosidades",
        "blog.blackpool.li_curiosidad_1": "La torre tarda siete años en pintarse por completo, y una vez que terminan, ¡tienen que empezar de nuevo!",
        "blog.blackpool.li_curiosidad_2": "Durante la Segunda Guerra Mundial, la torre fue utilizada como estación de radar por la RAF.",
        "blog.blackpool.li_curiosidad_3": "Hay un buzón de correos en la cima, que es el más alto de Gran Bretaña.",
        "blog.blackpool.li_curiosidad_3": "Hay un buzón de correos en la cima, que es el más alto de Gran Bretaña.",
        "blog.blackpool.p_outro": "Visitar la Torre de Blackpool es sumergirse en la historia y la diversión. ¡No te lo pierdas en tu próximo viaje al Reino Unido!",

        // Blog - Vidrios Eficiencia
        "blog.vidrios.title": "Vidrios de alta eficiencia: Claves para el ahorro energético",
        "blog.vidrios.p1": "En la búsqueda constante de mejorar la eficiencia energética en nuestros hogares, el tipo de vidrio que elegimos para nuestras ventanas juega un papel crucial.",
        "blog.vidrios.caption": "Ventanas realizadas por Martinca",
        "blog.vidrios.p2": "Una ventana eficiente no solo ayuda a mantener una temperatura agradable en el interior, reduciendo la necesidad de calefacción o aire acondicionado, sino que también contribuye al aislamiento acústico y a la seguridad.",
        "blog.vidrios.h2_1": "Valor de transmitancia térmica",
        "blog.vidrios.p3": "Uno de los indicadores más importantes a tener en cuenta al seleccionar un vidrio es el valor U, o transmitancia térmica. Este valor mide la cantidad de calor que se transfiere a través del vidrio. Cuanto más bajo sea el valor U, mejor será el aislamiento térmico. Y, por tanto, mayor la eficiencia energética.",
        "blog.vidrios.p4": "El valor U se mide en watios por metro cuadrado y grado Kelvin (W/m²K). Por ejemplo, un vidrio simple antiguo puede tener un valor U de alrededor de 5.8 W/m²K, mientras que un vidrio doble moderno con capa bajo emisiva y gas argón puede alcanzar valores inferiores a 1.0 W/m²K.",
        "blog.vidrios.h2_2": "Factor solar",
        "blog.vidrios.p5": "Otro aspecto fundamental es el factor solar (g), que indica el porcentaje de energía solar que atraviesa el vidrio. En climas cálidos, o en ventanas orientadas al sur o al oeste, es recomendable un vidrio con un factor solar bajo para evitar el sobrecalentamiento en verano.",
        "blog.vidrios.p6": "Por el contrario, en climas fríos o en orientaciones norte, un factor solar más alto puede ser beneficioso para aprovechar el calor del sol en invierno (ganancia solar pasiva).",
        "blog.vidrios.h2_3": "Tipos de vidrios eficientes",
        "blog.vidrios.li_1": "<strong>Doble acristalamiento (o triple):</strong> Consiste en dos o tres láminas de vidrio separadas por una cámara de aire o gas (generalmente argón), que actúa como aislante. El triple acristalamiento ofrece un rendimiento superior, especialmente en climas extremos.",
        "blog.vidrios.li_2": "<strong>Vidrios bajo emisivos (Low-E):</strong> Estos vidrios tienen un recubrimiento microscópico y transparente que refleja el calor hacia el interior en invierno y hacia el exterior en verano, mejorando el aislamiento sin comprometer la entrada de luz natural.",
        "blog.vidrios.li_3": "<strong>Vidrios de control solar:</strong> Diseñados para reducir la entrada de calor solar, son ideales para zonas con mucha radiación solar. A menudo se combinan con propiedades bajo emisivas para ofrecer un rendimiento equilibrado durante todo el año.",
        "blog.vidrios.p7": "En <strong>Metálicas Martinca</strong> trabajamos con los mejores proveedores de vidrio para ofrecer a nuestros clientes soluciones personalizadas que maximicen el confort y el ahorro energético en sus proyectos. Asesoramos en la elección del vidrio más adecuado según la orientación, el clima y las necesidades específicas de cada vivienda, garantizando siempre la máxima calidad en la fabricación e instalación de nuestras ventanas y cerramientos.",
        "blog.vidrios.p8": "Invertir en vidrios de alta eficiencia es una decisión inteligente que se traduce en un mayor bienestar, un menor impacto ambiental y un ahorro económico a largo plazo.",
        "blog.vidrios.p9": "No dudes en consultarnos para tu próximo proyecto.",

        // Proyectos page
        "proyectos.breadcrumb": "Proyectos",
        "proyectos.title": "Nuestros Proyectos",
        "proyectos.desc": "Trabajos que hablan por sí mismos.",
        "filtro.todos": "Todos",
        "filtro.escaleras": "Escaleras",
        "filtro.cerramientos": "Cerramientos",
        "filtro.fachadas": "Fachadas",
        "filtro.exterior": "Exterior",
        "filtro.interiorismo": "Interiorismo",
        "galeria.vermas": "Ver más proyectos",
        "galeria.vermenos": "Ver menos",

        // Outdoor page
        "outdoor.breadcrumb": "Outdoor",
        "outdoor.title": "Outdoor Living",
        "outdoor.desc": "Diseñamos elementos que facilitan la vida en el exterior: cocinar, comer, estar y disfrutar de la naturaleza.",
        "outdoor.dreamfoc": "Dreamfoc",
        "outdoor.dreamfoc.desc": "Cocinas de leña integradas con diseño y comodidad para espacios en el exterior. Combinan tradición y modernidad.",
        "outdoor.barbacoas": "Barbacoas",
        "outdoor.barbacoas.desc": "Totalmente personalizables para cualquier espacio: jardines, terrazas y áticos. Diseño único para cada cliente.",
        "outdoor.lavaderos": "Lavaderos",
        "outdoor.lavaderos.desc": "Zonas de lavado exterior con un diseño innovador y sistema móvil para colocar donde el cliente lo desee.",
        "outdoor.mesas": "Mesas",
        "outdoor.mesas.desc": "Mesas circulares de exterior con materiales sostenibles, diseñadas para compartir buenos momentos con familia y amigos.",
        "outdoor.minicasas": "Minicasas",
        "outdoor.minicasas.desc": "Tanto para los que no necesitan espacio demás y buscan algo que les mantenga en contacto con la naturaleza, como para los peques de la casa que siempre han soñado con una casa en los árboles.",

        // Blog page
        "blog.breadcrumb": "Blog",
        "blog.title": "Nuestro Blog",
        "blog.desc": "Últimas noticias, proyectos y consejos del mundo de la metalistería y carpintería metálica.",
        "blog.leermas": "Leer más",

        // Quiénes somos page
        "empresa.breadcrumb": "Quiénes somos",
        "empresa.title": "Empresa",
        "empresa.nosotros.label": "Nosotros",
        "empresa.nosotros.title": "Uniendo <em>fuerzas</em>",
        "empresa.nosotros.desc": "Nuestro principal pilar es generar confianza con los clientes, creando así una relación abierta, creativa y nutritiva.",
        "empresa.nosotros.quote": "\"Los clientes nos ven como colaboradores y validan la solución como parte a integrar en un proyecto más amplio.\"",
        "empresa.elegir.label": "Por qué elegirnos",
        "empresa.elegir.title": "Trabajos <em>singulares.</em>",
        "empresa.elegir.desc": "Nuestro trabajo es muy simple, si se hace bien.",
        "empresa.elegir.1": "Planificación exhaustiva",
        "empresa.elegir.2": "Formación continuada",
        "empresa.elegir.3": "Acabados certificados",
        "empresa.elegir.4": "Garantías de satisfacción",
        "empresa.contacto": "Contacto",
        "empresa.exp.title": "Dos generaciones aportan mucha experiencia",
        "empresa.exp.desc": "Tenemos una amplia experiencia en el sector. Día a día hemos ido acumulando conocimiento, podemos estar orgullosos de nuestra tradición.",
        "empresa.exp.years": "Años de experiencia",
        "empresa.excelencia.title": "Trabajos <em>excelentes.</em>",
        "empresa.excelencia.desc": "Nuestra metodología nos lleva a la creación de una nueva forma de afrontar los trabajos en el que utilizamos la experiencia acumulada en beneficio de la optimización de costes sin bajar la calidad.",
        "empresa.vision": "Visión 360",
        "empresa.vision.desc": "Estudiamos cada aspecto de los proyectos para ser eficientes y dar la respuesta adecuada.",
        "empresa.excelencia2": "Excelencia",
        "empresa.excelencia2.desc": "Cada proyecto es un nuevo reto. La experiencia nos sirve para buscar la excelencia en cada uno de ellos.",
        "empresa.cta.quote": "\"Invertimos en últimas tecnologías. Disponemos de maquinaria para desarrollar todo tipo de trabajos\"",
        "empresa.cta.title": "¿Trabajamos juntos?",
        "empresa.cta.desc": "El gusto por un trabajo bien realizado y unos acabados de calidad nos ayuda a diferenciarnos. El punto de inflexión llega al buscar un equilibrio entre presupuestos ajustados y un trabajo que requiere unos acabados de calidad. Disfrutando del proceso llegamos a un mejor final.",

        // Common
        "common.leermas": "Leer más",
        "blog.next": "Siguiente",
        "blog.prev": "Anterior",

        // Contacto page
        "contacto.breadcrumb": "Contacto",
        "contacto.title": "Contacto",
        "contacto.label": "Hablemos",
        "contacto.heading": "¿Tienes un <em>proyecto</em>?",
        "contacto.desc": "Cuéntanos tu idea y te respondemos sin compromiso. Escuchamos con atención y te asesoramos desde el primer momento.",
        "contacto.direccion": "Dirección",
        "contacto.telefono": "Teléfono",
        "contacto.email": "Email",
        "contacto.horario": "Horario",
        "contacto.horario.desc": "Lunes a Viernes: 7:00 - 15:00",
        "contacto.form.title": "Envíanos un mensaje",
        "contacto.form.desc": "Rellena el formulario y te contactaremos lo antes posible.",
        "contacto.form.nombre": "Nombre <span class='required'>*</span>",
        "contacto.form.apellido": "Apellido",
        "contacto.form.email": "Email <span class='required'>*</span>",
        "contacto.form.telefono": "Teléfono",
        "contacto.form.servicio": "Servicio de interés",
        "contacto.form.seleccionar": "Selecciona un servicio",
        "contacto.form.opt.escaleras": "Escaleras",
        "contacto.form.opt.barandillas": "Barandillas",
        "contacto.form.opt.vallados": "Vallados",
        "contacto.form.opt.puertas": "Puertas",
        "contacto.form.opt.carpinteria": "Carpintería Metálica",
        "contacto.form.opt.pergolas": "Pérgolas y Techos",
        "contacto.form.opt.outdoor": "Outdoor Living",
        "contacto.form.opt.otro": "Otro",
        "contacto.form.mensaje": "Mensaje <span class='required'>*</span>",
        "contacto.form.enviar": "Enviar mensaje",
        "contacto.success.title": "¡Mensaje enviado!",
        "contacto.success.desc": "Gracias por contactar con nosotros. Te responderemos lo antes posible.",

        // Blog Grid Items & Dates
        "blog.date.dec16": "16 Diciembre 2025",
        "blog.date.aug16": "16 Agosto 2025",
        "blog.date.jul17": "17 Julio 2025",
        "blog.date.jun04": "4 Junio 2025",
        "blog.date.may27": "27 Mayo 2025",

        "blog.post1.title": "Los vidrios. Cómo optimizar la eficiencia en tu hogar",
        "blog.post1.desc": "En la búsqueda constante de mejorar la eficiencia energética en nuestros hogares, el tipo de vidrio que elegimos para nuestras ventanas juega un papel crucial...",
        "blog.post2.title": "Cómo iluminar las estancias de una casa para lograr un ambiente perfecto",
        "blog.post2.desc": "La iluminación juega un papel crucial en la decoración y funcionalidad de un hogar. Una casa bien iluminada no solo mejora la estética de los espacios...",
        "blog.post3.title": "La Escalera Infinita de Olafur Eliasson en Múnich",
        "blog.post3.desc": "La Escalera Infinita de Múnich es una de las atracciones más fascinantes de la ciudad. Situada en el patio de las oficinas de la firma KPMG...",
        "blog.post4.title": "Metálicas Martinca. El Metal hecho diseño",
        "blog.post4.desc": "En Metálicas Martinca, somos especialistas en trabajos de cerrajería y carpintería metálica, ofreciendo soluciones personalizadas y de alta calidad...",
        "blog.post5.title": "La Torre de Blackpool: Historia, Curiosidades y Todo lo que Necesitas Saber",
        "blog.post5.desc": "Si estás interesado en conocer una de las estructuras más emblemáticas de Inglaterra, ¡la Torre de Blackpool es una visita obligada!...",
        "blog.post6.title": "Maria Pergay, Icono del Diseño Moderno en el Mundo del Metal",
        "blog.post6.desc": "María Pergay, nacida en 1930 en Moldavia y radicada en Francia, es una de las diseñadoras más icónicas del siglo XX...",

        // Gallery Overlays
        "gallery.helical": "Escalera Helicoidal",
        "gallery.floating": "Escalera Flotante",
        "gallery.enclosure": "Cerramiento Integrado",
        "gallery.outdoor": "Zona Exterior",
        "gallery.facade1": "Fachada Moderna",
        "gallery.minimalist": "Diseño Minimalista",
        "gallery.dining": "Salón Comedor",
        "gallery.views": "Salón con Vistas",
        "gallery.shower": "Mampara de Baño",
        "gallery.urban": "Fachada Urbana",
        "gallery.sliding": "Ventanales Correderos",
        "gallery.industrial": "Escalera Industrial",
        "gallery.facade2": "Fachada Moderna",
        "gallery.pool": "Piscina Exterior",
    },
    en: {
        // Nav
        "nav.inicio": "Home",
        "nav.quienes": "About us",
        "nav.proyectos": "Projects",
        "nav.outdoor": "Outdoor",
        "nav.blog": "Blog",
        "nav.contacto": "Contact",
        "nav.presupuesto": "Get a Quote",

        // Hero
        "hero.label": "Locksmithing · Metalwork · Metal Carpentry",
        "hero.title1": "Over 60 years",
        "hero.title2": "TRANSFORMING METAL INTO DESIGN",
        "hero.subtitle": "Feel free to contact us. We listen carefully and respond clearly. If there's a project, we develop it with you from the start.",
        "hero.cta1": "Request a quote",
        "hero.cta2": "View projects",

        // Valores
        "valores.label": "Our values",
        "valores.title": "What <em>defines</em> us",
        "valores.desc": "Since 1954 we have been at the service of our clients with the same principles.",
        "valores.innovacion": "Innovation",
        "valores.innovacion.desc": "Leaders in the sector, with continuous training and anticipation of client needs.",
        "valores.compromiso": "Commitment",
        "valores.compromiso.desc": "At the client's service, providing functional solutions, design and originality.",
        "valores.excelencia": "Excellence",
        "valores.excelencia.desc": "Pride in the craft, combining technical vision and aesthetics in every project.",
        "valores.confianza": "Trust",
        "valores.confianza.desc": "We build open and creative relationships with clients as collaborators.",

        // Servicios
        "servicios.label": "What we do",
        "servicios.title": "Our <em>Services</em>",
        "servicios.desc": "Comprehensive solutions in locksmithing, metalwork and metal carpentry.",
        "servicios.escaleras": "Staircases",
        "servicios.escaleras.desc": "Staircases are our passion; transforming metal into design by creating solutions that not only fulfil their function, but also inspire emotion through their aesthetic beauty.",
        "servicios.vallados": "Fencing",
        "servicios.vallados.desc": "Fences are works of art and pieces integrated into everyday life that stand the test of time. The final result is shaped by meticulous work with high-quality finishes.",
        "servicios.barandillas": "Railings",
        "servicios.barandillas.desc": "Railings are a true reflection of our love for what we do, our belief in ourselves and our capacity for work. We listen, understand and analyse in order to design and create.",
        "servicios.puertas": "Doors",
        "servicios.puertas.desc": "Like doors, we have a diverse and varied clientele, from architects and interior designers to private individuals. Anyone seeking bespoke solutions can see them brought to life.",
        "servicios.carpinteria": "Aluminium Carpentry",
        "servicios.carpinteria.desc": "Aluminium carpentry has evolved throughout the years. The ductility of this material and its excellent impermeability allows the creation of large windows where the aluminium profile is almost imperceptible.",
        "servicios.pergolas": "Roofs & Pergolas",
        "servicios.pergolas.desc": "Roofs and Pergolas are another staple of our day-to-day work. Aluminium offers endless options and colours, allowing us to enjoy the outdoors without losing any of the warmth of the interior of our home.",

        // Footer
        "footer.about": "Specialists in locksmithing, metalwork and metal carpentry. Over 60 years of experience transforming spaces with innovation and craftsmanship since 1954.",
        "footer.links": "Quick links",
        "footer.follow": "Follow us",
        "footer.contacto": "Contact",
        "footer.copy": "© 2026 Metálicas Martinca. All rights reserved.",

        // Blog - Escalera Infinita
        "blog.escalera.title": "Olafur Eliasson's Infinite Staircase in Munich",
        "blog.escalera.p1": "The <strong>Infinite Staircase</strong> in Munich is one of the city's most fascinating attractions. Located in the courtyard of the KPMG offices, this architectural sculpture, created by Danish-Icelandic artist <strong>Olafur Eliasson</strong> in 2004, is a masterpiece that combines art, architecture, and mathematics in a structure that seems to have no end.",
        "blog.escalera.h2_1": "What is the Infinite Staircase?",
        "blog.escalera.p2": "Officially known as <em>Umschreibung</em> (which in German means 'circumscription' or 'rewriting'), this double-helix staircase stands 9 meters tall and is built of steel. Unlike conventional staircases, it leads nowhere: it is a continuous loop that allows visitors to climb up and down indefinitely without reaching a concrete destination.",
        "blog.escalera.quote": "\"Movement is intrinsic to the work. The staircase is not a static object, but an experience of time and space.\"",
        "blog.escalera.h2_2": "Design and Construction",
        "blog.escalera.p3": "The structure is formed by two intertwined spirals that meet at the top and bottom, creating a continuous cycle. The steps are made of galvanized steel, and the handrail follows the perfect curvature of the helix, giving it a fluid and organic appearance despite being an industrial material.",
        "blog.escalera.p4": "For us, as specialists in metal staircases, this work is a benchmark of how metal can be transformed into something more than a functional element. The precision in the bending of the tubes and the invisible welding are details that demonstrate the technical mastery required to execute such a complex design.",
        "blog.escalera.h2_3": "Can it be visited?",
        "blog.escalera.p5": "Although the sculpture is located on private grounds (the KPMG courtyard), it is accessible to the public during the day. It is a popular spot for photographers and architecture lovers looking to capture the hypnotic geometry of the structure.",
        "blog.escalera.h2_3": "Can it be visited?",
        "blog.escalera.p5": "Although the sculpture is located on private grounds (the KPMG courtyard), it is accessible to the public during the day. It is a popular spot for photographers and architecture lovers looking to capture the hypnotic geometry of the structure.",
        "blog.escalera.p6": "If you are ever in Munich, head to Ganghoferstraße 29. You won't just see a staircase, but a reflection on eternal movement.",

        // Blog - Iluminación Hogar
        "blog.iluminacion.title": "How to light the rooms of a house",
        "blog.iluminacion.p1": "<strong>Lighting</strong> plays a crucial role in home decoration and functionality. A well-lit house not only enhances the aesthetics of the spaces but also influences our mood and well-being.",
        "blog.iluminacion.h2_salon": "Living Room: The Heart of the House",
        "blog.iluminacion.p_salon": "The living room is a multifunctional space where we relax, socialize, and sometimes work. Therefore, lighting must be versatile.",
        "blog.iluminacion.li_salon_1": "<strong>General Lighting:</strong> A ceiling lamp or recessed spotlights that distribute light evenly.",
        "blog.iluminacion.li_salon_2": "<strong>Ambient Lighting:</strong> Floor or table lamps with warm light for relaxing moments.",
        "blog.iluminacion.li_salon_3": "<strong>Accent Lighting:</strong> To highlight paintings, shelves, or architectural elements, such as a metal staircase.",
        "blog.iluminacion.h2_kitchen": "Kitchen: Functionality above all",
        "blog.iluminacion.p_kitchen": "In the kitchen, visibility is fundamental. We need to clearly see what we are cooking.",
        "blog.iluminacion.li_kitchen_1": "<strong>Task Lighting:</strong> LED strips under the upper cabinets to illuminate the countertop without shadows.",
        "blog.iluminacion.li_kitchen_2": "<strong>General Lighting:</strong> Powerful downlights or ceiling lights with neutral light (4000K).",
        "blog.iluminacion.h2_bedroom": "Bedroom: Relax and Rest",
        "blog.iluminacion.p_bedroom": "Here we seek to create a cozy atmosphere that invites rest.",
        "blog.iluminacion.li_bedroom_1": "Warm light (2700K-3000K).",
        "blog.iluminacion.li_bedroom_2": "Reading lamps on the bedside tables, preferably dimmable.",
        "blog.iluminacion.li_bedroom_3": "Avoid direct lights over the bed that can dazzle.",
        "blog.iluminacion.h2_natural": "The Importance of Natural Light",
        "blog.iluminacion.h2_natural": "The Importance of Natural Light",
        "blog.iluminacion.p_natural": "We cannot forget the best source of light: the sun. Maximizing natural light entry through large windows, glazed enclosures (like those we manufacture at Martinca), and light curtains is the best way to light up during the day.",

        // Blog - Maria Pergay
        "blog.pergay.title": "Maria Pergay, Icon of Modern Design in the World of Metal",
        "blog.pergay.p1": "Maria Pergay, born in 1930 in Moldova and based in France, is one of the most iconic designers of the 20th century, known primarily for her innovative work with stainless steel. Throughout her career, she defied furniture design conventions, transforming a cold industrial material into luxurious, sensual, and elegant pieces.",
        "blog.pergay.h2_1": "Stainless Steel as a Canvas",
        "blog.pergay.p2": "In the 1960s, while many designers focused on plastic and wood, Pergay saw the potential of stainless steel. Her first collection, presented in 1968, included pieces like the famous <em>Flying Carpet Daybed</em> and the <em>Ring Chair</em>. These works were not only functional but also sculptures that explored the fluidity and resistance of the material.",
        "blog.pergay.p3": "Pergay described stainless steel as \"as precious as the most precious of woods,\" and her ability to manipulate it earned her international recognition. Her designs often incorporated organic shapes, soft curves, and intricate details that contrasted with the hardness of the metal.",
        "blog.pergay.h2_2": "Legacy and Recognition",
        "blog.pergay.p4": "Despite her initial success, Pergay went through periods of obscurity, but her work was rediscovered in the 2000s, solidifying her status as a visionary. Her pieces are now found in renowned museums and private collections around the world.",
        "blog.pergay.p5": "Maria Pergay was not only a pioneer in the use of stainless steel but also paved the way for female designers to stand out in a male-dominated field. Her legacy endures as a testament to boundless creativity and the ability to transform the ordinary into the extraordinary.",
        "blog.pergay.p5": "Maria Pergay was not only a pioneer in the use of stainless steel but also paved the way for female designers to stand out in a male-dominated field. Her legacy endures as a testament to boundless creativity and the ability to transform the ordinary into the extraordinary.",
        "blog.pergay.p6": "For those interested in modern design and furniture history, Maria Pergay's work is an endless source of inspiration and admiration.",

        // Blog - Metal Hecho Diseño
        "blog.metal.title": "Metal made Design: Functionality and Aesthetics at Metálicas Martinca",
        "blog.metal.p1": "At <strong>Metálicas Martinca</strong>, we specialize in locksmith and metal carpentry work, offering personalized and high-quality solutions for every project. Our experience and dedication allow us to transform metal into functional and decorative elements that beautify any space.",
        "blog.metal.h2_1": "Metal Staircases: Elegance and Sturdiness",
        "blog.metal.p2": "We design and manufacture metal staircases that adapt to any architectural style. Whether it's a spiral, helical, or straight staircase, we use top-quality materials to ensure safety and durability. Our designs combine the sturdiness of metal with the elegance of modern shapes, creating unique pieces that stand out in any environment.",
        "blog.metal.h2_2": "Railings: Safety with Style",
        "blog.metal.p3": "Railings are essential for safety, but they also play a crucial role in the aesthetics of a staircase or balcony. We offer a wide range of designs, from the most classic to the most avant-garde, using stainless steel, wrought iron, and glass. Each railing is custom-made, ensuring a perfect fit and an impeccable finish.",
        "blog.metal.h2_3": "Metal Carpentry: Versatility and Functionality",
        "blog.metal.p4": "In addition to staircases and railings, we perform all kinds of metal carpentry work. From doors and windows to complex structures, our team of professionals is trained to carry out projects of any scale. We are proud to offer solutions that not only meet technical requirements but also add aesthetic value.",
        "blog.metal.p5": "At <strong>Metálicas Martinca</strong>, every project is an opportunity to demonstrate our passion for metal and design. Contact us and discover how we can make your ideas a reality.",

        // Blog - Torre Blackpool
        "blog.blackpool.title": "The Blackpool Tower: An Icon of Victorian Engineering",
        "blog.blackpool.p1": "If you are interested in visiting one of England's most iconic structures, Blackpool Tower is a must-see! Located in the famous seaside town of Blackpool, Lancashire, this tower has been a symbol of entertainment and architecture since its opening in 1894.",
        "blog.blackpool.h2_1": "History of Blackpool Tower",
        "blog.blackpool.p2": "Inspired by the Eiffel Tower in Paris, Blackpool Tower was the brainchild of the town's mayor, John Bickerstaffe, who was impressed by the French structure during the Universal Exhibition of 1889. Standing 158 meters tall, the tower quickly became a top tourist attraction.",
        "blog.blackpool.p3": "Over the years, it has survived fires and renovations, standing as a testament to Victorian engineering. Today, it is a Grade I listed building, meaning it is of exceptional national interest.",
        "blog.blackpool.h2_2": "Attractions at the Tower",
        "blog.blackpool.p_intro_list": "Blackpool Tower is not just a structure to admire from afar; there is plenty to do inside!",
        "blog.blackpool.li_1": "<strong>The Blackpool Tower Eye:</strong> Located at the top, it offers stunning panoramic views of the Irish Sea and, on clear days, as far as the Lake District and North Wales. It also features a glass SkyWalk floor for the brave.",
        "blog.blackpool.li_2": "<strong>The Ballroom:</strong> World-renowned, this ballroom is a marvel of opulent decoration and elegance. It is famous for its Wurlitzer organ and for being the venue for the TV show \"Strictly Come Dancing\".",
        "blog.blackpool.li_3": "<strong>The Tower Circus:</strong> Located at the base of the tower, it is the world's oldest permanent circus, offering shows that have delighted generations.",
        "blog.blackpool.h2_3": "Curiosities",
        "blog.blackpool.li_curiosidad_1": "It takes seven years to paint the tower completely, and once they finish, they have to start all over again!",
        "blog.blackpool.li_curiosidad_2": "During World War II, the tower was used as a radar station by the RAF.",
        "blog.blackpool.li_curiosidad_3": "There is a post box at the top, which is the highest in Great Britain.",
        "blog.blackpool.li_curiosidad_3": "There is a post box at the top, which is the highest in Great Britain.",
        "blog.blackpool.p_outro": "Visiting Blackpool Tower is immersing yourself in history and fun. Don't miss it on your next trip to the UK!",

        // Blog - Vidrios Eficiencia
        "blog.vidrios.title": "High Efficiency Glass: Keys to Energy Saving",
        "blog.vidrios.p1": "In the constant search to improve energy efficiency in our homes, the type of glass we choose for our windows plays a crucial role.",
        "blog.vidrios.caption": "Windows made by Martinca",
        "blog.vidrios.p2": "An efficient window not only helps maintain a pleasant temperature inside, reducing the need for heating or air conditioning, but also contributes to sound insulation and security.",
        "blog.vidrios.h2_1": "Thermal Transmittance Value",
        "blog.vidrios.p3": "One of the most important indicators to consider when selecting glass is the U-value, or thermal transmittance. This value measures the amount of heat transferred through the glass. The lower the U-value, the better the thermal insulation. And, therefore, the greater the energy efficiency.",
        "blog.vidrios.p4": "The U-value is measured in watts per square meter per Kelvin (W/m²K). For example, old single glazing can have a U-value of around 5.8 W/m²K, while modern double glazing with a low-emissivity coating and argon gas can achieve values below 1.0 W/m²K.",
        "blog.vidrios.h2_2": "Solar Factor",
        "blog.vidrios.p5": "Another fundamental aspect is the solar factor (g), which indicates the percentage of solar energy that passes through the glass. In hot climates, or on south or west-facing windows, a glass with a low solar factor is recommended to avoid overheating in summer.",
        "blog.vidrios.p6": "Conversely, in cold climates or on north-facing orientations, a higher solar factor can be beneficial to take advantage of the sun's heat in winter (passive solar gain).",
        "blog.vidrios.h2_3": "Types of Efficient Glass",
        "blog.vidrios.li_1": "<strong>Double glazing (or triple):</strong> Consists of two or three sheets of glass separated by an air or gas chamber (usually argon), which acts as an insulator. Triple glazing offers superior performance, especially in extreme climates.",
        "blog.vidrios.li_2": "<strong>Low-emissivity (Low-E) glass:</strong> This glass has a microscopic, transparent coating that reflects heat inwards in winter and outwards in summer, improving insulation without compromising natural light entry.",
        "blog.vidrios.li_3": "<strong>Solar control glass:</strong> Designed to reduce solar heat gain, these are ideal for areas with high solar radiation. They are often combined with low-emissivity properties to offer balanced performance throughout the year.",
        "blog.vidrios.p7": "At <strong>Metálicas Martinca</strong>, we work with the best glass suppliers to offer our clients personalized solutions that maximize comfort and energy savings in their projects. We advise on the choice of the most suitable glass according to orientation, climate, and the specific needs of each home, always guaranteeing maximum quality in the manufacture and installation of our windows and enclosures.",
        "blog.vidrios.p8": "Investing in high-efficiency glass is a smart decision that translates into greater well-being, lower environmental impact, and long-term economic savings.",
        "blog.vidrios.p9": "Do not hesitate to consult us for your next project.",

        // Proyectos page
        "proyectos.breadcrumb": "Projects",
        "proyectos.title": "Our Projects",
        "proyectos.desc": "Work that speaks for itself.",
        "filtro.todos": "All",
        "filtro.escaleras": "Staircases",
        "filtro.cerramientos": "Enclosures",
        "filtro.fachadas": "Facades",
        "filtro.exterior": "Exterior",
        "filtro.interiorismo": "Interior Design",
        "galeria.vermas": "View more projects",
        "galeria.vermenos": "View less",

        // Outdoor page
        "outdoor.breadcrumb": "Outdoor",
        "outdoor.title": "Outdoor Living",
        "outdoor.desc": "We design elements that make outdoor living easier: cooking, dining, relaxing and enjoying nature.",
        "outdoor.dreamfoc": "Dreamfoc",
        "outdoor.dreamfoc.desc": "Integrated wood-burning kitchens with design and comfort for outdoor spaces. Combining tradition and modernity.",
        "outdoor.barbacoas": "Barbecues",
        "outdoor.barbacoas.desc": "Fully customizable for any space: gardens, terraces and attics. Unique design for each client.",
        "outdoor.lavaderos": "Washing Areas",
        "outdoor.lavaderos.desc": "Outdoor washing areas with an innovative design and mobile system to place wherever the client wishes.",
        "outdoor.mesas": "Tables",
        "outdoor.mesas.desc": "Circular outdoor tables with sustainable materials, designed for sharing great moments with family and friends.",
        "outdoor.minicasas": "Tiny Houses",
        "outdoor.minicasas.desc": "For those who don't need much space and seek to stay connected with nature, as well as for the little ones who have always dreamed of a treehouse.",

        // Blog page
        "blog.breadcrumb": "Blog",
        "blog.title": "Our Blog",
        "blog.desc": "Latest news, projects and tips from the world of metalwork and metal carpentry.",
        "blog.leermas": "Read more",

        // Quiénes somos page
        "empresa.breadcrumb": "About us",
        "empresa.title": "Company",
        "empresa.nosotros.label": "About us",
        "empresa.nosotros.title": "Joining <em>forces</em>",
        "empresa.nosotros.desc": "Our main pillar is to build trust with clients, creating an open, creative and nurturing relationship.",
        "empresa.nosotros.quote": "\"Clients see us as collaborators and validate the solution as part of a broader project.\"",
        "empresa.elegir.label": "Why choose us",
        "empresa.elegir.title": "Unique <em>work.</em>",
        "empresa.elegir.desc": "Our work is very simple, when done right.",
        "empresa.elegir.1": "Thorough planning",
        "empresa.elegir.2": "Continuous training",
        "empresa.elegir.3": "Certified finishes",
        "empresa.elegir.4": "Satisfaction guarantees",
        "empresa.contacto": "Contact",
        "empresa.exp.title": "Two generations bring a wealth of experience",
        "empresa.exp.desc": "We have extensive experience in the sector. Day by day we have accumulated knowledge, and we can be proud of our tradition.",
        "empresa.exp.years": "Years of experience",
        "empresa.excelencia.title": "Excellent <em>work.</em>",
        "empresa.excelencia.desc": "Our methodology leads us to create a new way of approaching work, using accumulated experience to optimize costs without lowering quality.",
        "empresa.vision": "360 Vision",
        "empresa.vision.desc": "We study every aspect of projects to be efficient and provide the right response.",
        "empresa.excelencia2": "Excellence",
        "empresa.excelencia2.desc": "Every project is a new challenge. Experience helps us pursue excellence in each one.",
        "empresa.cta.quote": "\"We invest in the latest technologies. We have machinery to develop all types of work\"",
        "empresa.cta.title": "Shall we work together?",
        "empresa.cta.desc": "The passion for a job well done and quality finishes helps us stand out. The turning point comes when finding a balance between tight budgets and work that requires quality finishes. Enjoying the process leads to a better outcome.",

        // Common
        "common.leermas": "Read more",
        "blog.next": "Next",
        "blog.prev": "Previous",

        // Contacto page
        "contacto.breadcrumb": "Contact",
        "contacto.title": "Contact",
        "contacto.label": "Let's talk",
        "contacto.heading": "Do you have a <em>project</em>?",
        "contacto.desc": "Tell us your idea and we'll respond with no obligation. We listen carefully and advise you from the very first moment.",
        "contacto.direccion": "Address",
        "contacto.telefono": "Phone",
        "contacto.email": "Email",
        "contacto.horario": "Opening hours",
        "contacto.horario.desc": "Monday to Friday: 7:00 AM - 3:00 PM",
        "contacto.form.title": "Send us a message",
        "contacto.form.desc": "Fill in the form and we'll get back to you as soon as possible.",
        "contacto.form.nombre": "Name <span class='required'>*</span>",
        "contacto.form.apellido": "Last name",
        "contacto.form.email": "Email <span class='required'>*</span>",
        "contacto.form.telefono": "Phone",
        "contacto.form.servicio": "Service of interest",
        "contacto.form.seleccionar": "Select a service",
        "contacto.form.opt.escaleras": "Staircases",
        "contacto.form.opt.barandillas": "Railings",
        "contacto.form.opt.vallados": "Fencing",
        "contacto.form.opt.puertas": "Doors",
        "contacto.form.opt.carpinteria": "Metal Carpentry",
        "contacto.form.opt.pergolas": "Pergolas & Roofs",
        "contacto.form.opt.outdoor": "Outdoor Living",
        "contacto.form.opt.otro": "Other",
        "contacto.form.mensaje": "Message <span class='required'>*</span>",
        "contacto.form.enviar": "Send message",
        "contacto.success.title": "Message sent!",
        "contacto.success.desc": "Thank you for contacting us. We'll get back to you as soon as possible.",

        // Blog Grid Items & Dates
        "blog.date.dec16": "December 16, 2025",
        "blog.date.aug16": "August 16, 2025",
        "blog.date.jul17": "July 17, 2025",
        "blog.date.jun04": "June 4, 2025",
        "blog.date.may27": "May 27, 2025",

        "blog.post1.title": "Glass Types. How to optimize efficiency in your home",
        "blog.post1.desc": "In the constant search to improve energy efficiency in our homes, the type of glass we choose for our windows plays a crucial role...",
        "blog.post2.title": "How to light rooms in a house to achieve a perfect atmosphere",
        "blog.post2.desc": "Lighting plays a crucial role in the decoration and functionality of a home. A well-lit house not only improves the aesthetics of the spaces...",
        "blog.post3.title": "Olafur Eliasson's Infinite Staircase in Munich",
        "blog.post3.desc": "The Infinite Staircase in Munich is one of the most fascinating attractions in the city. Located in the courtyard of the KPMG offices...",
        "blog.post4.title": "Metálicas Martinca. Metal made design",
        "blog.post4.desc": "At Metálicas Martinca, we specialize in locksmithing and metal carpentry work, offering personalized and high-quality solutions...",
        "blog.post5.title": "The Blackpool Tower: History, Curiosities and Everything You Need to Know",
        "blog.post5.desc": "If you are interested in visiting one of England's most emblematic structures, the Blackpool Tower is a must-see!...",
        "blog.post6.title": "Maria Pergay, Icon of Modern Design in the World of Metal",
        "blog.post6.desc": "Maria Pergay, born in 1930 in Moldova and based in France, is one of the most iconic designers of the 20th century...",

        // Gallery Overlays
        "gallery.helical": "Helical Staircase",
        "gallery.floating": "Floating Staircase",
        "gallery.enclosure": "Integrated Enclosure",
        "gallery.outdoor": "Outdoor Area",
        "gallery.facade1": "Modern Facade",
        "gallery.minimalist": "Minimalist Design",
        "gallery.dining": "Dining Room",
        "gallery.views": "Lounge with Views",
        "gallery.shower": "Bath Screen",
        "gallery.urban": "Urban Facade",
        "gallery.sliding": "Sliding Windows",
        "gallery.industrial": "Industrial Staircase",
        "gallery.facade2": "Modern Facade",
        "gallery.pool": "Outdoor Pool",
    },
};

// ===== i18n Engine =====
(function () {
    let currentLang = localStorage.getItem('martinca-lang') || 'es';

    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem('martinca-lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update lang toggle button text
        const langLabel = document.querySelector('.lang-label');
        if (langLabel) {
            langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        // Update "ver más" button text if exists
        const verMasBtn = document.getElementById('galeria-ver-mas');
        if (verMasBtn) {
            const grid = document.getElementById('galeria-grid');
            if (grid && grid.classList.contains('expanded')) {
                verMasBtn.textContent = translations[lang]['galeria.vermenos'];
            } else {
                verMasBtn.textContent = translations[lang]['galeria.vermas'];
            }
        }
    }

    // Toggle button
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-toggle');
        if (btn) {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            applyTranslations(newLang);
        }
    });

    // Apply on load
    if (currentLang !== 'es') {
        document.addEventListener('DOMContentLoaded', () => applyTranslations(currentLang));
    }
})();
