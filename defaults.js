// ══════════════════════════════════════════════════════════════
// CONTENIDO POR DEFECTO — "Conozcamos la Biblia"
// ══════════════════════════════════════════════════════════════
// Esto es lo que se ve mientras no has editado nada desde el panel
// de administración. En cuanto guardes cambios ahí, Firestore
// manda y esto deja de usarse (excepto como respaldo si algún
// campo queda vacío).
// ══════════════════════════════════════════════════════════════

const DEFAULT_CONFIG = {
  // ── Apariencia ──
  colorRojo: "#8B1A1A",
  colorAzul: "#1A2D6B",
  colorOro: "#C9A84C",
  colorCrema: "#FDF8EE",
  fuenteEsquema: "manuscrito", // manuscrito | clasico | ligero | calido
  logoIcono: "✝",
  logoTitulo: "Conozcamos la Biblia",
  logoSubtitulo: "Diócesis de Socorro y San Gil",
  logoImagenURL: "",   // logo del curso (reemplaza el ícono ✝ si se sube uno)
  escudoImagenURL: "", // escudo de la Diócesis o de la Parroquia

  // ── Portada (hero) ──
  heroEtiqueta: "Diócesis de Socorro y San Gil · Colombia",
  heroTitulo: "Conozcamos la Biblia",
  heroTituloEnfasis: "Conozcamos",
  heroSubtitulo: "Curso bíblico católico basado en la obra del Padre Álvaro Santamaría Díaz",
  heroAutor: "† In memoriam · Formación gratuita por Google Meet",
  heroStat1Num: "2", heroStat1Label: "Libros del P. Álvaro",
  heroStat2Num: "12", heroStat2Label: "Capítulos",
  heroStat3Num: "∞", heroStat3Label: "Acceso gratuito",

  // ── Homenaje ──
  homenajeNombre: "Padre Álvaro Santamaría Díaz",
  homenajeCargo: "Sacerdote · Maestro de la Palabra · Diócesis de Socorro y San Gil",
  homenajeTexto: "El Padre Álvaro dedicó su ministerio sacerdotal a acercar la Biblia al pueblo de Dios con una claridad y una ternura que solo brotan del amor verdadero a la Palabra. Formó a cientos de personas en la Diócesis de Socorro y San Gil con sus cursos bíblicos, convencido de que la Escritura no es un libro cerrado, sino una carta de amor abierta para cada creyente.\n\nSus dos libros —«Conozcamos la Biblia»—, uno del Antiguo y otro del Nuevo Testamento, son el fruto de años de estudio, oración y generosidad pastoral. Esta plataforma es su prolongación: que su enseñanza siga formando comunidad, ahora desde cualquier rincón del mundo hispanohablante.",

  // ── Versículo separador ──
  versiculoTexto: "«La ignorancia de las Escrituras es ignorancia de Cristo.»",
  versiculoCita: "San Jerónimo · Doctor de la Iglesia",

  // ── Cómo funciona ──
  comoTitulo: "Así funciona la formación",
  comoSub: "Sin aplicaciones complicadas. Solo Google Meet, el libro del Padre Álvaro y ganas de conocer la Palabra.",
  pasos: [
    { titulo: "Te inscribes gratis", texto: "Un formulario sencillo con tu nombre, correo y módulo de interés. Sin costo, sin tarjeta, sin complicaciones." },
    { titulo: "Recibes el link de Meet", texto: "Antes de cada clase te enviamos el enlace por correo. Un clic y entras desde tu celular, tablet o computador." },
    { titulo: "Participas en vivo", texto: "Clases los miércoles a las 6:00 PM (hora Colombia). Puedes hacer preguntas y compartir con la comunidad." },
    { titulo: "Accedes a la grabación", texto: "Si no puedes en vivo, la grabación queda disponible aquí para verla cuando puedas." }
  ],
  meetFrecuencia: "Cada miércoles · 6:00 PM hora Colombia",
  meetDuracion: "90 minutos por clase",
  meetDispositivos: "Celular, tablet o computador",
  meetAcceso: "Cualquier lugar hispanohablante del mundo",
  meetContacto: "parroquia.vadoreal@gmail.com",
  meetLink: "https://meet.google.com",

  // ── Libro / descargas ──
  libroNTNombre: "Conozcamos la Biblia II",
  libroNTSub: "P. Álvaro Santamaría Díaz · Nuevo Testamento",
  libroNTPdf: "",
  libroATNombre: "Conozcamos la Biblia I",
  libroATSub: "P. Álvaro Santamaría Díaz · Antiguo Testamento",
  libroATPdf: "",

  // ── Contacto / footer ──
  footerDescripcion: "Curso bíblico católico basado en la obra del P. Álvaro Santamaría Díaz. Formación gratuita por Google Meet desde la Parroquia San Pedro Apóstol, Vado Real, Suaita, Santander.",
  footerEmail: "parroquia.vadoreal@gmail.com",
  footerCopyright: "© 2026 Diócesis de Socorro y San Gil · Parroquia San Pedro Apóstol, Vado Real, Suaita",
  footerVersiculo: "«Muchas veces y de muchos modos habló Dios… en estos últimos tiempos nos ha hablado por medio del Hijo.» — Hb 1, 1-2"
};

// ── Módulos (capítulos) — Antiguo y Nuevo Testamento ──
const DEFAULT_MODULOS = [
  // Antiguo Testamento
  { testamento:"AT", orden:1, icono:"📜", titulo:"Introducción al Antiguo Testamento", descripcion:"Qué es la Biblia, cómo nació, el canon de libros, la inspiración divina y los principios de lectura católica.", subtemas:["El pueblo de Israel y la Revelación","Canon del AT — libros deuterocanónicos","Cómo leer el AT a la luz de Cristo"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"AT", orden:2, icono:"🌅", titulo:"El Pentateuco", descripcion:"Los cinco primeros libros: Génesis, Éxodo, Levítico, Números y Deuteronomio. La Creación, la Alianza y la Ley.", subtemas:["Génesis: Creación, pecado, patriarcas","Éxodo: liberación y alianza en el Sinaí","La Ley como regalo de Dios al pueblo"], clases:5, horas:7, estado:"Próximamente" },
  { testamento:"AT", orden:3, icono:"⚔️", titulo:"Libros Históricos", descripcion:"De Josué a los Macabeos: la conquista, los jueces, la monarquía, el exilio y el retorno a la tierra prometida.", subtemas:["Josué, Jueces y Rut","Samuel, Reyes y Crónicas","Exilio, retorno y los Macabeos"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"AT", orden:4, icono:"🎵", titulo:"Libros Sapienciales y Salmos", descripcion:"Job, Salmos, Proverbios, Qohélet, Cantar de los Cantares, Sabiduría y Sirácide: la oración y el pensamiento de Israel.", subtemas:["Los Salmos: orar con el pueblo de Dios","Job: el misterio del sufrimiento","La sabiduría práctica de Proverbios y Sirácide"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"AT", orden:5, icono:"🔥", titulo:"Los Grandes Profetas", descripcion:"Isaías, Jeremías, Ezequiel y Daniel. Su mensaje, su valentía y su anuncio del Mesías que vendría.", subtemas:["Isaías: el gran profeta mesiánico","Jeremías y las Lamentaciones","Ezequiel y los oráculos del exilio"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"AT", orden:6, icono:"🕊️", titulo:"Los Doce Profetas Menores", descripcion:"Oseas, Joel, Amós, Abdías, Jonás, Miqueas, Nahúm, Habacuc, Sofonías, Ageo, Zacarías y Malaquías.", subtemas:["Profetas del siglo VIII: Amós, Oseas, Miqueas","Jonás: la misericordia sin fronteras","Malaquías: preparando el camino al NT"], clases:3, horas:5, estado:"Próximamente" },
  // Nuevo Testamento
  { testamento:"NT", orden:1, icono:"✝️", titulo:"Introducción al Nuevo Testamento", descripcion:"Importancia, finalidad y corazón del NT. Cuándo y dónde nació. Pistas para entender sus escritos desde la fe católica.", subtemas:["AT y NT: unidad de la Palabra de Dios","El griego koiné y la mentalidad hebrea","Géneros literarios del NT"], clases:3, horas:5, estado:"En curso" },
  { testamento:"NT", orden:2, icono:"🗺️", titulo:"Escenario histórico y geográfico", descripcion:"El mundo judío y pagano en tiempos de Cristo. Palestina, el Imperio Romano, grupos religiosos y sociales.", subtemas:["Fariseos, saduceos, esenios y zelotas","El Imperio Romano y sus provincias","Las religiones paganas y la filosofía griega"], clases:3, horas:5, estado:"En curso" },
  { testamento:"NT", orden:3, icono:"✍️", titulo:"Los escritos de San Pablo", descripcion:"El apóstol de las gentes. Sus cartas, su teología, sus comunidades y la vigencia de su mensaje hoy.", subtemas:["¿Por qué empezamos con San Pablo?","Romanos, Corintios, Gálatas, Efesios…","El kerigma paulino: muerte y resurrección"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"NT", orden:4, icono:"📜", titulo:"Otras Cartas: Hebreos y Católicas", descripcion:"Carta a los Hebreos, Santiago, Pedro, Juan y Judas. La fe apostólica en la vida de las primeras comunidades.", subtemas:["Hebreos: Cristo, sumo sacerdote eterno","Santiago: la fe que se hace obras","Las cartas de Pedro y Juan"], clases:3, horas:5, estado:"Próximamente" },
  { testamento:"NT", orden:5, icono:"✨", titulo:"Los Evangelios Sinópticos", descripcion:"Mateo, Marcos y Lucas. Sus semejanzas, diferencias y el misterio de la tradición oral que los une.", subtemas:["El problema sinóptico y la fuente Q","Mateo: el Evangelio de la Iglesia","Lucas: el Evangelio de la misericordia"], clases:4, horas:6, estado:"Próximamente" },
  { testamento:"NT", orden:6, icono:"🦁", titulo:"Evangelio según San Marcos", descripcion:"El evangelio más antiguo. Marcos y Pedro. El secreto mesiánico, la cristología en acción y la Pasión de Jesús.", subtemas:["Autor, fecha y destinatarios","Estructura: Galilea → Jerusalén","El secreto mesiánico en Marcos"], clases:4, horas:6, estado:"Próximamente" }
];

// ── Clases en vivo (tabla) ──
const DEFAULT_CLASES = [
  { estado:"Grabada", titulo:"Importancia del NT · Por qué estudiar la Biblia", descripcion:"Capítulo 1 del Padre Álvaro — introducción al Nuevo Testamento", capitulo:"NT · Cap. 1", fecha:"18 jun · pasada", link:"" },
  { estado:"Grabada", titulo:"El mundo judío de Palestina", descripcion:"Capítulo 2 — Condiciones sociales, grupos religiosos y políticos", capitulo:"NT · Cap. 2", fecha:"25 jun · pasada", link:"" },
  { estado:"Próxima", titulo:"El mundo pagano y las religiones del Imperio", descripcion:"Capítulo 2 — Filosofía griega, estoicos, epicúreos y cultos de misterios", capitulo:"NT · Cap. 2", fecha:"Por definir", link:"" },
  { estado:"Próxima", titulo:"¿Por qué empezamos con San Pablo?", descripcion:"Capítulo 3 — El apóstol más antiguo en la tradición escrita", capitulo:"NT · Cap. 3", fecha:"Por definir", link:"" }
];
