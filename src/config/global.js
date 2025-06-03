export default {
  global: {
    Name: 'Escribiendo',
    Description:
      'En este componente formativo se abordan la estructura y los tipos de texto, así como las normas que regulan la presentación de documentos, con el fin de facilitar la producción textual tanto en formato digital como en formato impreso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producción de textos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características del texto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de textos (análisis literario)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia y utilización de los signos de puntuación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Concepto de párrafo, tipos de párrafo y formas para estructurar párrafos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Técnicas de redacción',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Conociendo las normas APA de manera sencilla',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación digital actual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Utilización de aplicaciones digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Netiqueta',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Escribir',
      referencia: 'Sánchez, Lobato (2007). Saber escribir. Editorial Aguilar.',
      tipo: 'PDF',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Comunicacion_oral_y_escrita/CF4_Escribiendo/media/documentos/Saber_Escribir.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'proceso mediante el cual un emisor transmite un mensaje a un receptor a través de un canal y utilizando un código compartido, dentro de un contexto determinado. puede ser oral, escrita, gestual, visual, entre otras.',
    },
    {
      termino: 'Código',
      significado:
        'conjunto de signos y reglas que comparten el emisor y el receptor para que la comunicación sea posible. en el lenguaje humano, el código suele ser la lengua.',
    },
    {
      termino: 'Contexto',
      significado:
        'conjunto de circunstancias (lugar, tiempo, situación social o cultural) que rodean el acto comunicativo y que permiten interpretar adecuadamente el mensaje.',
    },
    {
      termino: 'Digital',
      significado:
        'relativo a los sistemas que procesan, almacenan o transmiten información mediante señales discretas, generalmente binarios (bits). también puede referirse a dispositivos tecnológicos que funcionan mediante esta lógica.',
    },
    {
      termino: 'Emisor',
      significado:
        'persona o entidad que produce y transmite un mensaje en un proceso comunicativo.',
    },
    {
      termino: 'Léxico',
      significado:
        'conjunto de palabras de una lengua o el vocabulario de un hablante, grupo o área específica. también se refiere al aspecto semántico del lenguaje, frente a su gramática.',
    },
    {
      termino: 'Mensaje',
      significado:
        'información o contenido que el emisor quiere transmitir al receptor. puede adoptar diversas formas: verbal, escrita, visual, gestual, entre otras.',
    },
    {
      termino: 'Norma',
      significado:
        'regla establecida que regula el uso correcto del lenguaje, la conducta, o cualquier sistema de organización social, técnica o lingüística.',
    },
    {
      termino: 'Oralidad',
      significado:
        'característica de los mensajes producidos mediante la voz humana. implica el uso de la lengua hablada en contextos formales o informales.',
    },
    {
      termino: 'Párrafo',
      significado:
        'unidad de sentido dentro de un texto escrito, compuesta por una o más oraciones que desarrollan una misma idea. se separa de otros párrafos por un punto y aparte.',
    },
    {
      termino: 'Receptor',
      significado:
        'persona o entidad que recibe e interpreta el mensaje enviado por el emisor.',
    },
    {
      termino: 'Texto',
      significado:
        'conjunto coherente de enunciados orales o escritos que comunican un mensaje. puede clasificarse por su forma, función o género discursivo.',
    },
    {
      termino: 'Texto escrito',
      significado:
        'forma de comunicación que utiliza el lenguaje gráfico para transmitir ideas de manera organizada, perdurable y revisable.',
    },
    {
      termino: 'Texto oral',
      significado:
        'forma de comunicación que se expresa mediante el habla. es inmediata y muchas veces espontánea, aunque puede seguir estructuras formales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Moreno de Alba, J. G. (2005). Unidad y diversidad del español: el léxico. SF.',
      link:
        'https://www.rae.es/sites/default/files/Clausura_IV_Curso_de_la_Escuela_de_Lexicografia_Jose_Moreno_de_Alba_2005.pdf',
    },
    {
      referencia:
        'Navas, M. (2019). Mauricio Navas libra la lucha contra la página en blanco.',
      link:
        'https://www.semana.com/cultura/articulo/mauricio-navas-contra-la-pagina-en-blanco/613992',
    },
    {
      referencia:
        'Pérez, T. (2014). Universidad Autónoma del Estado de Hidalgo. Tipos de textos.',
    },
    {
      referencia: 'RAE (2020). Léxico.',
      link: 'https://dle.rae.es/l%C3%A9xico',
    },
    {
      referencia: 'RAE (2020). Normal.',
      link: 'https://dle.rae.es/normal',
    },
    {
      referencia: 'RAE (2019). Párrafo.',
      link: 'https://dle.rae.es/p%C3%A1rrafo',
    },
    {
      referencia: 'RAE (2020). Texto.',
      link: 'https://dle.rae.es/texto',
    },
    {
      referencia: 'Sánchez, J. (2007). Saber escribir.',
      link: 'https://fhu.unse.edu.ar/cfp/sescribir.pdf',
    },
    {
      referencia: 'Serafini, M. (1994). Cómo se escribe.',
      link:
        'https://www.icesi.edu.co/blogs/lenguajevirtual/files/2008/08/EL-PARRAFO-Serafini.pdf',
    },
    {
      referencia: 'Universidad Nacional (2020). Cita Indirecta.',
      link:
        'https://minas.medellin.unal.edu.co/departamentos/geocienciasymedioambiente/unidaddocumentacion/2-institucional/29-cita-indirecta.html#:~:text=Cita%20indirecta%3A%20hace%20menci%C3%B3n%20de,antes%20de%20citar%20su%20idea',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elba Patricia Rodríguez',
          cargo: 'Experta temática',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
