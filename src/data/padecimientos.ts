// Contenido literal extraído de https://clinicacolorrectal.com/padecimientos/
// No modificar el copy: debe coincidir exactamente con la fuente original.

export interface Tarjeta {
  titulo:   string;
  extracto: string;
}

export interface Bloque {
  titulo:     string;
  /** Párrafos; admiten <strong> para las negritas del original. */
  parrafos:   string[];
  lista?:     string[];
}

export interface Padecimiento {
  slug:          string;
  /** <title> de la página original */
  seoTitle:      string;
  titulo:        string;
  imagen:        string;
  /** Tarjeta tal como aparece en el índice /padecimientos */
  indice:        Tarjeta;
  /** Tarjeta tal como aparece en "otros padecimientos" de las páginas de detalle */
  relacionada:   Tarjeta;
  bloques:       Bloque[];
  /** Slugs de las 4 tarjetas que muestra cada página en la fuente */
  relacionados:  string[];
}

const IMG = {
  hemorroides: '/images/padecimientos/padecimiento-hemorroides.jpeg',
  fisuras:     '/images/padecimientos/predecimiento-fisuras-anales.jpeg',
  fistula:     '/images/padecimientos/predecimiento-fistula-anal.jpeg',
  clinica:     '/images/clinica/clinica-interior.jpg',
  hero:        '/images/hero-bg.jpg',
};

export const CTA = {
  recordatorio: 'Recuerda agendar tu cita a la primera molestia o síntoma. Evitemos complicaciones y padecimientos más graves.',
  atencion:     'La atención es personalizada por la <strong>Dra. Flor Moreno. Especialista en Coloproctología</strong>',
  boton:        'Agenda tu cita',
  duda:         'Si tienes alguna duda escríbeme por:',
  whatsapp:     'WhatsApp',
  whatsappUrl:  'https://wa.link/ay1bpk',
};

export const OTROS = {
  titulo:    'Atención personalizada para otros padecimientos.',
  subtitulo: 'Conoce sus síntomas, causas y tratamiento.',
};

export const INDICE = {
  seoTitle: 'Padecimientos | Clínica Colorrectal',
  titulo:   'Los padecimientos que atiendo son los siguientes:',
  leerMas:  'Leer más',
};

export const padecimientos: Padecimiento[] = [
  {
    slug: 'hemorroides',
    seoTitle: 'Hemorroides | Clínica Colorrectal',
    titulo: 'Hemorroides',
    imagen: IMG.hemorroides,
    indice:      { titulo: 'Hemorroides', extracto: 'Las hemorroides, también conocidas como almorranas…' },
    relacionada: { titulo: 'Hemorroides', extracto: 'Las hemorroides, también conocidas como almorranas…' },
    bloques: [
      {
        titulo: '¿Qué son?',
        parrafos: [
          'Las hemorroides, también conocidas como almorranas, son venas inflamadas en el ano y la parte inferior del recto. Pueden aparecer dentro del recto (hemorroides internas) o debajo de la piel en el contorno del ano (hemorroides externas).',
          'Es uno de los padecimientos más comunes debido a la alimentación y la vida sedentaria que tenemos hoy día. Hasta el 50% de la población puede presentar.',
        ],
      },
      { titulo: 'Causas', parrafos: ['Inflamatorio, mas comúnmente por diarrea o estreñimiento.'] },
      {
        titulo: 'Síntomas',
        parrafos: [
          'Los síntomas pueden variar de acuerdo al tipo de hemorroides que se presente, por lo que es importante tener un tratamiento oportuno para así evitar complicaciones.',
          '<strong>Hemorroides Externas:</strong> Comezón o irritación en la zona anal, dolor, inflamación alrededor del ano y sangrado.',
          '<strong>Hemorroides Internas:</strong> Sangrado sin dolor durante la evacuación que se puede notar durante la limpieza o en el inodoro, también se puede presentar dolor e irritación.',
          '<strong>Hemorroides Trombosadas:</strong> Dolor intenso, inflamación y la sensación de un bulto cerca del ano.',
        ],
      },
      {
        titulo: '¿Cómo prevenirlas?',
        parrafos: [
          'La prevención de las hemorroides es muy sencilla y está al alcance de actividades cotidianas como el cambio de hábitos alimenticios, que eventualmente facilitará el proceso de evacuación y evitará el riesgo a desarrollarlas.',
          'Asimismo, es importante no hacer esfuerzos innecesarios durante la evacuación, evitar la vida sedentaria, hacer ejercicio al menos 20 minutos al día y no aguantar las ganas de ir al baño.',
        ],
      },
    ],
    relacionados: ['fisuras', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'fisuras',
    seoTitle: 'Fisuras | Clínica Colorrectal',
    titulo: 'Fisuras',
    imagen: IMG.fisuras,
    indice:      { titulo: 'Fisuras', extracto: 'Es una herida en la piel perianal por trauma anal…' },
    relacionada: { titulo: 'Fisuras', extracto: 'Es una herida en la piel perianal por trauma anal…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Es una herida en la piel perianal por trauma anal, principalmente estreñimiento o diarrea.'] },
      { titulo: 'Causas', parrafos: ['Traumático, por lo general diarrea, o estreñimiento.'] },
      { titulo: 'Síntomas', parrafos: ['Ardor, comezón o picazon perianal, dolor desde leve a incapacitante sobre todo al defecar y en ocasiones sangrado.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['Depende de el tiempo de evolución, en etapas iniciales manejo medico y medidas higienicodieteticas, pero un mal diagnostico con tratamiento inadecuado puede llevar al paciente a una cirugía para poder curarse.'] },
    ],
    relacionados: ['hemorroides', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'fistula-anal',
    seoTitle: 'Fistula Anal | Clínica Colorrectal',
    titulo: 'Fistula anal',
    imagen: IMG.fistula,
    indice:      { titulo: 'Fistula Anal', extracto: 'Comunicación anormal entre la piel perianal y el ano…' },
    relacionada: { titulo: 'Fistula Anal', extracto: 'Comunicación anormal entre la piel perianal y el ano…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Comunicación anormal entre la piel perianal y el ano, con infección interna localizada.'] },
      { titulo: 'Causas', parrafos: ['Infeccion de una glandula anal que se cronifico.'] },
      { titulo: 'Síntomas', parrafos: ['Ardor o picor perianal, comezón y en ocasiones dolor, puede haber un mínimo manchado amarillo en la ropa interior.'] },
      { titulo: 'Tratamiento', parrafos: ['El tratamiento es siempre quirúrgico.'] },
    ],
    relacionados: ['hemorroides', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'diverticulos',
    seoTitle: 'Divertículos | Clínica Colorrectal',
    titulo: 'Divertículos',
    imagen: IMG.clinica,
    indice:      { titulo: 'Diverticulos', extracto: 'Los divertículos son saculaciones en la pared del colon…' },
    relacionada: { titulo: 'Divertículos', extracto: 'Los divertículos son saculaciones en la pared del colon…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Los divertículos son saculaciones en la pared del colon, la inflamación de estas se denomina diverticulitis.'] },
      { titulo: 'Causas', parrafos: ['Degeneratico, por lo general secundario a estreñimiento crónico.'] },
      {
        titulo: 'Síntomas',
        parrafos: [
          'Dolor abdominal intermitente de moderado a severo',
          'Distensión o inflamación de predominio en parte inferior del abdomen,',
          'Puede llegar a ocurrir estreñimiento con pujo intenso e incluso evacuaciones con moco o sangre.',
          'En pacientes complicados puede llegar a presentarse fiebre.',
        ],
      },
      { titulo: 'Tratamiento', parrafos: ['Depende de la severidad de la enfermedad, puede darse reposo intestinal, apoyo dietético y medicamento, o en cuadros severos de agudización llevar al paciente a cirugía de urgencia.'] },
    ],
    relacionados: ['hemorroides', 'abceso-anal', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'cancer-colonorrectal',
    seoTitle: 'Cancer colonorrectal | Clínica Colorrectal',
    titulo: 'Cáncer colorrectal',
    imagen: IMG.hero,
    indice:      { titulo: 'Cancer Colonorrectal', extracto: 'Tumor maligno de colon o recto…' },
    relacionada: { titulo: 'Cancer Colonorrectal', extracto: 'Tumor maligno de colon o recto…' },
    bloques: [
      {
        titulo: '¿Qué son?',
        parrafos: ['Tumor maligno de colon o recto.'],
        lista: [
          '4to Cáncer más frecuente en México en el 2020.',
          '7.6% de todos los tumores malignos a nivel nacional.',
          'Un poco más frecuente en hombres',
        ],
      },
      { titulo: 'Causas', parrafos: ['Multifactorial (antecedentes genéticos, alimentos procesados, tabaquismo, alcoholismo)'] },
      { titulo: 'Síntomas', parrafos: ['Los síntomas pueden variar dependiendo si la localización es derecha o izquierda, así como por el tamaño del tumor. Pueden ir desde casación y palidez hasta dificultad para la evacuación, con pujo intenso y heces delgadas, o sangrado a través del ano.'] },
      {
        titulo: 'Tratamiento',
        parrafos: [
          'Depende de la severidad de la enfermedad, si hay metástasis a otros órganos o no, y la localización del mismo.',
          'Puede recibir Quimioterapia y Radioterapia previa a la resección en pacientes con tumores bajos o resección en tumores de colon.',
          'Cada paciente necesita una valoración individualizada a sus necesidades específicas.',
        ],
      },
    ],
    relacionados: ['fisuras', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'abceso-anal',
    seoTitle: 'Abceso Perianal | Clínica Colorrectal',
    titulo: 'Abceso Perianal',
    imagen: IMG.fistula,
    indice:      { titulo: 'Abceso Perianal', extracto: 'Colección de pus en uno de los espcios perianales…' },
    relacionada: { titulo: 'Abceso Perianal', extracto: 'Colección de pus en uno de los espcios perianales…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Colección de pus en uno de los espcios perianales a causa de infeccion de una de las glandulas del ano.'] },
      { titulo: 'Causas', parrafos: ['Infección de una glandula anal'] },
      { titulo: 'Síntomas', parrafos: ['Ardor, comezón y dolor que van en aumento con el paso del tiempo, si es superficial se palpa tumoración dolorosa, roja y caliente al rededor del ano. En abscesos profundos puede presentarse solo dolor anal, acompañado de malestar general o fiebre sin evidencia perianal de enfermedad.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['El manejo inicial es SIEMPRE drenaje, posteriormente puedes dejar manejo antibiotico y analgesico.'] },
    ],
    relacionados: ['fisuras', 'diverticulos', 'fistulas-anovaginal', 'condilomas-anales'],
  },
  {
    slug: 'condilomas-anales',
    seoTitle: 'Condilomas | Clínica Colorrectal',
    titulo: 'Condilomas',
    imagen: IMG.fisuras,
    indice:      { titulo: 'Condilomas', extracto: 'Los divertículos son saculaciones en la pared del colon…' },
    relacionada: { titulo: 'Condilomas Anales', extracto: 'Presencia de verrugas en region genital, por fuera o por dentro…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Presencia de verrugas en region genital, por fuera o por dentro del canal anal, o ambas.'] },
      { titulo: 'Causas', parrafos: ['Infección por VPH.'] },
      { titulo: 'Síntomas', parrafos: ['Ardor, comezón anal, picazón y en ocasiones sangrado de leve, cuando las lesiones son mayores de 2 cm o circunferenciales por lo general suele haber dolor a la manipulación.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['Depende de la severidad de la enfermedad, puede ir desde manejo higienico dietetico hasta procedimientos de consultorio o diferentes tipos de cirugía.'] },
    ],
    relacionados: ['hemorroides', 'abceso-anal', 'incontinencia-fecal', 'fistulas-colovesical'],
  },
  {
    slug: 'cancer-anal',
    seoTitle: 'Cancer anal | Clínica Colorrectal',
    titulo: 'Cancer Anal',
    imagen: IMG.hemorroides,
    indice:      { titulo: 'Cancer Anal', extracto: 'Tumor maligno de colon o recto…' },
    relacionada: { titulo: 'Cancer Anal', extracto: 'Tumor maligno de colon o recto…' },
    bloques: [
      {
        titulo: '¿Qué es?',
        parrafos: [
          'Tumor maligno del canal anal o la piel perianal.',
          'Representa un 2.2% de todos los Cánceres Gastrointestinales.',
        ],
      },
      { titulo: 'Causas', parrafos: ['Multifactorial, pero se relaciona fuertemente con el VPH.'] },
      { titulo: 'Síntomas', parrafos: ['Ardor, comezón anal, picazón y en ocasiones sangrado de leve, cuando las lesiones son grandes puede general dificultad para la evacuación, Es muy importante la exploración proctológica completa porque frecuentemente es diagnosticado como enfermedad hemorroidal de larga evolución.'] },
      { titulo: 'Tratamiento', parrafos: ['Depende de la localización y la histologia del tumor, puede ir desde resección quirugica o Quimio y radioterapia con vigilancia posterior.'] },
    ],
    relacionados: ['fisuras', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'estrenimiento',
    seoTitle: 'Estreñimiento | Clínica Colorrectal',
    titulo: 'Estreñimiento',
    imagen: IMG.clinica,
    indice:      { titulo: 'Estreñimiento', extracto: 'Colección de pus en uno de los espcios perianales…' },
    relacionada: { titulo: 'Estreñimiento', extracto: 'Colección de pus en uno de los espcios perianales…' },
    bloques: [
      {
        titulo: '¿Qué son?',
        parrafos: [
          'Es una enfermedad supra diagnosticada y muy mal tratada, ya que la mayoria de los pacientes tienen un idea erronea de lo que es el padecimiento.',
          'Presencia de hecesa duras, con una frecuencia menor de 3 veces por semana, pujo intenso o sensacion de bloqueo.',
        ],
      },
      { titulo: 'Causas', parrafos: ['Tránsito lento u Obstrucción de salida.'] },
      { titulo: 'Síntomas', parrafos: ['Evacuacion dificultosa o frecuencia disminuida, pero debe de ser diferenciado en dos grandes grupos, los pacientes con problemas colonicos y los de oclusion de salida ya que el tratmiernto es distintpo en ambos casos.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['Depende del numero y localización de las lesiones, si son externas y pequeñas se pueden retirar con anestesia local en consultorio, de lo contrario ameritan resección en quirofano.'] },
    ],
    relacionados: ['hemorroides', 'abceso-anal', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'incontinencia-fecal',
    seoTitle: 'Incontinencia fecal | Clínica Colorrectal',
    titulo: 'Incontinencia Fecal',
    imagen: IMG.hero,
    indice:      { titulo: 'Incontinencia Fecal', extracto: 'Los divertículos son saculaciones en la pared del colon…' },
    relacionada: { titulo: 'Incontinencia Fecal', extracto: 'Enfermedad muy frecuente, que se considera subdiagnosticada…' },
    bloques: [
      {
        titulo: '¿Qué es?',
        parrafos: [
          'Enfermedad muy frecuente, que se considera subdiagnosticada debido a vergüenza del paciente a ir con el especialista.',
          'Es la Perdidad involuntaria de materia fecal atraves del ano.',
        ],
      },
      { titulo: 'Causas', parrafos: ['Traumatico (trauma obstetrico durante el parto), no traumatico.'] },
      { titulo: 'Síntomas', parrafos: ['Perdidad involuntaria de materia fecal de leve a severo, ardor y comezón anal, dolor y en ocasiones sangrado de leve.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['Depende de la severidad de la enfermedad, puede ir desde manejo higienico dietetico y medicamentos, hasta procedimietos quirurgico, dependiendo de la causa. Hoy en dia el panorama es mucho mas alentador, con resultados muy favorables.'] },
    ],
    relacionados: ['hemorroides', 'abceso-anal', 'cancer-anal', 'fistulas-colovesical'],
  },
  {
    slug: 'fistulas-colovesical',
    seoTitle: 'Fistulas colovesical | Clínica Colorrectal',
    titulo: 'Fistula colovesical',
    imagen: IMG.fistula,
    indice:      { titulo: 'Fistula Colovesical', extracto: 'Comunicación anormal entre el colon y la vejiga…' },
    relacionada: { titulo: 'Fistula Colovesical', extracto: 'Comunicación anormal entre el colon y la vejiga…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Comunicación anormal entre el colon y la vejiga, la principal causa es por enfermedad diverticular crónica.'] },
      { titulo: 'Causas', parrafos: ['Inflamación crónica, muy comúnmente, Diverticulitis de repetición, Enfermedad de Crohn.'] },
      { titulo: 'Síntomas', parrafos: ['Infecciones urinarias de repericiaon (ardor, urgencia, sensación de micción incompleta), salida de gas o materia fecal por uretra al orinar.'] },
      { titulo: '¿Cómo prevenirlas?', parrafos: ['El tratamiento es quirúrgico.'] },
    ],
    relacionados: ['fisuras', 'diverticulos', 'incontinencia-fecal', 'condilomas-anales'],
  },
  {
    slug: 'fistulas-anovaginal',
    seoTitle: 'Fistulas Anovaginal | Clínica Colorrectal',
    titulo: 'Fistula anovaginal',
    imagen: IMG.fisuras,
    indice:      { titulo: 'Fistulas Anovaginal', extracto: 'Colección de pus en uno de los espcios perianales…' },
    relacionada: { titulo: 'Fistula Anovaginal', extracto: 'Colección de pus en uno de los espcios perianales…' },
    bloques: [
      { titulo: '¿Qué son?', parrafos: ['Comunicación anormal entre el ano y la vagina, la principal causa es por trauma obstétrico (partos de bebes grandes, epistomas o desgarros).'] },
      { titulo: 'Causas', parrafos: ['Comúnmente secundario a desgarro obsterico, al momento del parto (bebes grandes, uso de Forceps)'] },
      { titulo: 'Síntomas', parrafos: ['Infecciones vaginales o de vía urinaria, de repetición, con salida de gas a través de la vagina o incluso de materia fecal, ardor, comezón vaginal o al orinar.'] },
      { titulo: 'Tratamiento', parrafos: ['El tratamiento es quirúrgico para establecer la anatomía normal'] },
    ],
    relacionados: ['hemorroides', 'abceso-anal', 'incontinencia-fecal', 'condilomas-anales'],
  },
];

export const getPadecimiento = (slug: string) =>
  padecimientos.find((p) => p.slug === slug);
