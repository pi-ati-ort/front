export const normativas = [
  {
    id: "FOS",
    name: "Factor de Ocupación de Suelo (FOS)",
    description:
      "El porcentaje de la superficie de un terreno que esté ocupado por una construcción no puede exceder el Factor de Ocupación del Suelo (FOS) definido para ese terreno.",
    valor: "100",
    unidad: "%",
    norma: ["Artículo D.223.202", "Artículo D.223.288"],
    texto_normativo:
      "Artículo D.223.288. Factor de ocupación del suelo (FOS). Se entiende por Factor de Ocupación del Suelo, (FOS), el porcentaje de la superficie total del predio que se puede ocupar con edificaciones por sobre el nivel del terreno. El Factor de Ocupación del Suelo (FOS) se determina en cada caso según el área caracterizada, el tamaño del predio y el destino, y se encuentra graficado en la cartografía correspondiente. A los efectos de determinar la superficie de ocupación del suelo se computará como tal toda proyección de superficie cubierta y/o semicubierta, cualquiera sea su uso, sobre el nivel del terreno a excepción de: »las proyecciones de techos, terrazas, aleros, etc. que no superen los 0.50 metros. Las superficies destinadas a invernaderos, cría de animales en confinamiento, construcciones relacionadas con la infraestructura de servicios de electricidad, abastecimiento de agua y saneamiento, tales como tanques de agua, instalaciones de captación de agua y torres de sostén de equipamientos. A efectos del Desafío se ha definido un sector al sur de 18 de Julio y al oeste de Bv. Gral. Artigas donde se mantendrá la normativa vigente, esto es, altura 27 mts. y FOS 100 %. Artículo D.223.202. Respecto a alturas, retiros y FOS rige lo establecido en los planos correspondientes , excepto para las situaciones especialmente previstas.",
  },

  {
    id: "AlturaMax",
    name: "Altura Máxima",
    description:
      "La altura de cualquier construcción no puede exceder la altura máxima previamente definida para el terreno en el que se planea edificar. Existen diversos artículos que regulan la la altura máxima de las construcciones en distintos barrios de Montevideo y padrones con características especiales. Para nuestro proyecto consideramos las alturas permitidas en el Centro de Montevideo.",
    valor: "27",
    unidad: "m",
    norma: ["Articulo-D.223.201", "...", "Articulo-D.223.205"],
    texto_normativo:
      "CENTRO: Respecto a alturas, retiros y FOS rige lo establecido en los planos correspondientes, excepto para las situaciones especialmente previstas a continuación: Alturas: En todos los predios frentistas a vías públicas con ancho menor o igual a 16 metros donde rige una altura máxima de 27 metros. (...) Para los predios frentistas a la calle Brandzen (acera sur) entre las calles Arenal Grande y Pablo de María, y para los frentistas a la calle Arenal Grande (acera este), entre la calle Brandzen y la Avenida Rivera, la altura máxima admitida de 27 metros se tomará sobre la línea de edificación, no rigiendo basamento.",
  },
  {
    id: "Basamento",
    name: "Construcción Basamento",
    description:
      "Si el proyecto se encuentra dentro de una zona con una altura máxima definida de 27 metros, debe cumplir con la normativa sobre el basamento. La misma obliga a un basamento de altura 7 metros, para luego poder completar la altura total con un retiro frontal de 4 metros. En el caso de que la construcción completa se retire 4 metros de la línea de propiedad, no sería necesario el basamento, permitiendo que todo el edificio alcance la altura máxima permitida en esa ubicación.",
    valor: "7",
    unidad: "m",
    norma: ["Articulo-D.223.202"],
    texto_normativo:
      "Los edificios que se proyecten deberán construir en la línea de edificación un basamento calado o cerrado de 7 metros de altura obligatoria. Sobre este volumen y retirado 4 metros del plano de fachada el edificio podrá completar la altura máxima establecida.",
  },
  {
    id: "ConstViv",
    name: "Constitución Vivienda",
    description:
      "Los componentes esenciales mínimos para la conformación de una vivienda son: sala de estar, cocina, dormitorio y baño. Es requisito que el dormitorio y el baño sean locales independientes entre sí. Los mismos deben ser espacios separados y distinguibles, permitiendo el aislamiento a traves de un cerramiento.",
    valor: "No aplica",
    unidad: "",
    norma: ["Artículo 2 Higiene de la Vivienda"],
    texto_normativo:
      "Vivienda es la unidad habitacional constituida por locales, ventilados e iluminados directa o indirectamente a espacios abiertos, necesarios para ser habitados por personas. Estos locales principales mínimos para conformar una vivienda son: estar, cocina, dormitorio y baño; debiendo estos dos últimos constituir locales independientes.",
  },
  {
    id: "galibo",
    name: "Construcción Gálibo",
    description:
      "El gálibo no computa dentro de la altura maxima especificada. Con respecto a ésta, se permite la construcción de un piso habitable adicional con una altura exterior máxima de 3,50 m. Esta planta debe retirarse al menos 3 m del plano frontal o de la fachada principal del edificio, excluyendo los salientes. Se prohíbe terminantemente que la fachada de este piso coincida con la fachada general o principal del edificio.",
    valor: "No aplica",
    unidad: "",
    norma: ["Articulo-D.223.202, Artículo D.223.163"],
    texto_normativo:
      "Para todos los edificios cuya altura sea igual o mayor a 27 metros se admitirá por encima de ésta la construcción de un gálibo en las condiciones previstas por las disposiciones generales. Sobre las alturas máximas u obligatorias admitidas para cada zona y cuando la normativa especialmente lo establezca, se admitirá construir otro piso habitable de altura máxima exterior tres con cincuenta (3,50) metros, cuya fachada deberá retirarse como mínimo tres (3) metros del plano frontal o de fachada principal de la edificación, excluido los salientes, no admitiéndose en ningún caso que su fachada coincida con la fachada general o principal del edificio. En la zona de retiro del gálibo no se admitirá ningún tipo de construcciones, a excepción de las obras de coronamiento previstas en el literal a) del numeral 4 del artículo D.223.163 del Volumen IV “Ordenamiento Territorial, Desarrollo Sostenible y Urbanismo” del Digesto Departamental. Si en el gálibo se proyectan construcciones con techo inclinado o curvo, la altura máxima admitida de tres con cincuenta (3,50) metros se tomará en el punto medio de la cubierta (...)",
  },
  {
    id: "median",
    name: "Medianeras Vistas",
    description:
      "Para evitar la exposición de medianeras, en el caso de edificaciones de más de 9 metros de altura, el plano de la fachada debe alinearse con la línea de construcción, especialmente en las áreas adyacentes a las medianeras. Esto se aplica sin menoscabo de las disposiciones vigentes relacionadas con proyecciones o salientes.",
    valor: "No aplica",
    unidad: "",
    norma: ["Articulo-D.223.202, Artículo D.223.164"],
    texto_normativo:
      "A los efectos de no generar medianeras vistas, cuando se trate de edificios en altura de más de 9 metros (nueve metros), el plano de fachada deberá coincidir con la línea de edificación por lo menos junto a las medianeras, sin perjuicio de la aplicación de las disposiciones vigentes en materia de salientes. No será de aplicación la presente disposición cuando disposiciones especiales dispongan otras resoluciones al respecto (por ejemplo, basamento, acordamiento en planta, etcétera).",
  },
  {
    id: "supMin",
    name: "Superficie Mínima",
    description:
      "La vivienda debe tener una superficie mínima que varía según el número de dormitorios: 32m² para una habitación, 44m² para dos habitaciones, 56m² para tres habitaciones y 68m² para cuatro habitaciones. Para viviendas de mayor tamaño no hay una norma establecida, se evaluará cada caso.",
    valor: "No aplica",
    unidad: "",
    norma: ["Artículo 3 Higiene de la Vivienda"],
    texto_normativo:
      "La superficie total de una vivienda no será inferior a 32m2 para viviendas de un dormitorio. Dicha área mínima se incrementará en función del número de dormitorios, según el siguiente detalle: i) 2 dormitorios - 44m2 ii) 3 dormitorios - 56m2 iii) 4 dormitorios - 68 m2. En todos los casos las áreas mínimas totales de una vivienda, se contabilizarán incluyendo el espesor de los muros exteriores que la envuelven hasta su cara exterior o hasta el eje del muro divisorio o medianero si corresponde, medido el conjunto perimetralmente de forma continua, sin desmembramientos.»",
  },
];


