<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Comunicación digital actual
      .row.justify-content-center.mb-5.align-content-center(data-aos='fade-right')
        .col-sm-12.col-lg-4
            p.mb-0.mt-5 La potencia de las redes digitales no requiere presentación ya que, en la actual sociedad de la información, se cuenta con todas las ayudas tecnológicas que hacen posible comunicarse con todas las personas de manera sincrónica, a continuación, se hace el enunciado de algunas formas comunes de trabajo actual.
        .col-sm-12.col-lg-8.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')
      
      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Utilización de aplicaciones digitales
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          .row.justify-content-center.mb-3.d-flex
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/3.svg', alt='') 
            .col-sm-12.col-lg-10
                p.mb-0 La tecnología ha propiciado cambios en la forma de comunicación entre personas de todas las edades, teniendo a disposición un abanico de posibilidades en cuanto a herramientas tecnológicas se refiere, aspecto que ha acelerado la velocidad de los mensajes siendo además asequibles en todos los ámbitos de la vida humana.
          p.mb-0 Para el caso que ocupa este curso, se enfocará la utilización de herramientas tecnológicas en contextos profesionales, ya sea desde la formación o el desempeño profesional, de manera que la asertividad caracterice la forma de emitir comunicados por medios tecnológicos.
        

      .bg-full-width.bg-fondo-3.mb-5
        .px-4.px-md-5.py-3
          .tarjeta.bg-color-white.py-4.px-5
            LineaTiempoC.color-primario(data-aos='fade-right')
              .row.justify-content-center.align-content-center.mb-0(titulo="MSM")
                .col-sm-12.col-lg-8.pc-2
                  h4 El MSM o mensaje de texto
                  p.mb-0 Se debe limitar a ciento sesenta (160) caracteres que reflejen información básica de aquello que se quiere decir, por lo cual debe ser claro y conciso.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/5.png', alt='') 

              .row.justify-content-center.align-content-center.mb-0.pc-2(titulo="Chat")
                .col-sm-12.col-lg-6
                  h4 El chat
                  p.mb-0 Es un diálogo en tiempo real entre dos o más interlocutores en forma de habla.
                  p.mb-3 Estos dos medios se ven caracterizados por la inmediatez de la comunicación, por nuevos códigos y el estilo informal que se refleja en los escritos. Pese a ello, vale decir que dichas características no eximen los textos de cordialidad, respeto, objetividad y precisión al momento de enviar cualquier tipo de mensaje, dadas estas caracte rísticas el chat es ideal para:
                  ul.lista-ul--color.mb-0.mb-cus
                    li.d-flex.mb-0
                      i.fas.fa-leaf.icon-list
                      p.mb-0 Acordar o cancelar encuentros.
                    li.d-flex.mb-0
                      i.fas.fa-leaf.icon-list
                      p.mb-0 Recordar reuniones.
                    li.d-flex.mb-0
                      i.fas.fa-leaf.icon-list
                      p.mb-0 Enviar links.
                    li.d-flex.mb-0.mb-0
                      i.fas.fa-leaf.icon-list
                      p.mb-0 Enviar documentos derivados del actuar profesional.
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img.wc-75.m-auto(src='@/assets/curso/temas/t2/4.svg', alt='') 

                .col-sm-12.col-lg-3
                  p.mb-0 Es decir, se debe manejar información de interés general para los participantes del chat en el caso de un grupo. Lo que indica que se debe procurar dejar intereses personales a un lado, característica que se le dará dependiendo de los lineamientos acordados por el grupo, las normas impartidas son necesarias para el buen funcionamiento del grupo de chat y su objetivo.

              .row.justify-content-center.align-items-end.mb-0(titulo="Pág. Web")
                .col-sm-12.col-lg-5
                  h4 Página web
                  p.mb-2 Una página web es un documento digital elaborado en formato HTML (lenguaje hipertextual de etiquetado de documentos) en el que se utilizan: imágenes, texto escrito, videos, animaciones, links, etc.
                  p.mb-4 #[b Redacción:] Sánchez (2007) refiere elementos importantes en la redacción los siguientes:
                  ul.lista-ul--color.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Títulos y subtítulos simples, claros y concisos.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Párrafos ajustados a una misma idea.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Uso de resúmenes y tablas de contenidos.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Frases cortas.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Resaltar lo importante.
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/6.svg', alt='') 

                .col-sm-12.col-lg-4
                  ul.lista-ul--color.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Iniciar el texto con la conclusión y cerrar con los detalles.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Evitar la redundancia, omitir palabras innecesarias o poco pertinentes.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 El lenguaje informal es más adecuado.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Usar listas numeradas.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Jerarquizar la información sin perder el foco de la misma.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Combinar textos y colores de fondo que contrasten.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Evitar textos parpadeantes, dado que dificultan su lectura y pueden ser distractores.


              .row.justify-content-center.align-content-center.mb-0(titulo="Correo")
                .col-sm-12.col-lg-8
                  h4 Correo electrónico
                  p.mb-3 Siguiendo a Sánchez (2007), “el correo electrónico se ha convertido en un medio de comunicación vital, y una de las aplicaciones con más alcance y éxito de internet”.
                  p.mb-4 Parafraseando a Sánchez (2007) el correo electrónico cuenta con las siguientes características:
                  ul.lista-ul--color.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0  Velocidad en la transmisión de los mensajes.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0  Coste no excesivamente alto.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0  Espacio de intercambio de fotografías, música, link textos, además de mensajes escritos.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0  Comunicación en corto tiempo.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0  Posibilita enviar mensajes a varias personas o a un grupo, creando listas de distribución.
                      li.d-flex.mb-0
                        i.fas.fa-leaf.icon-list
                        p.mb-0 Permite reenviar un mensaje a otro receptor o responder rápidamente.
                
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/7.png', alt='') 



              .row.justify-content-center.align-content-center.mb-0(titulo="Adicional")
                .col-sm-12.col-lg-8
                    h4 Adicional
                    ul.lista-ul--color.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-leaf.icon-list
                          p.mb-0 Se puede enviar con copia oculta a aquellos receptores que se desee no sean visibles.


                        li.d-flex.mb-0
                          i.fas.fa-leaf.icon-list
                          p.mb-0 Con el tiempo se ha convertido en un medio de comunicación formal, que evidencia gestión administrativa, cumplimiento de deberes, transmisión de comunicados institucionales, etc. Lo que indica que debe contestarse a la mayor brevedad aportando la información requerida, con copia a los implicados en el proceso si se considera pertinente.

                        li.d-flex.mb-0
                          i.fas.fa-leaf.icon-list
                          p.mb-0 Puede ser personal o institucional, para el segundo caso, los mensajes se deben ajustar exclusivamente a labores propias de lo académico o lo laboral.
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/8.png', alt='') 

              .row.justify-content-center.align-content-center.mb-0(titulo="Redacción")
                .row.justify-content-center.align-items-center.mb-4
                  .col-sm-12.col-lg-8
                      h4 Redacción del correo electrónico
                      p.mb-3 Dadas las características anteriores, el correo electrónico debe tener mínimos para su adecuado uso:
                      ul.lista-ul--color.mb-0
                          li.d-flex.mb-0
                            i.fas.fa-leaf.icon-list
                            .flex-column
                              p.mb-0 #[b Asunto:] debe referir clara y concretamente la intención del correo.
                              p.mb-0 #[b Nombre completo del destinatario:] cargo, empresa y ciudad.
                          li.d-flex.mb-0
                            i.fas.fa-leaf.icon-list
                            .flex-column
                              p.mb-0 #[b Asunto:] un saludo cordial.
                          li.d-flex.mb-0
                            i.fas.fa-leaf.icon-list
                            .flex-column
                                p.mb-0 #[b Contenido:] concreto y claro, si se requiere mayor organización del texto, se sugiere discriminar la información en puntos, de manera que cada uno mencione los temas relacionados al asunto, sin salirse del tema objeto del mensaje.
                          li.d-flex.mb-0
                            i.fas.fa-leaf.icon-list
                            p.mb-0 #[b Despedida:] con un atentamente o cordialmente.
                          li.d-flex.mb-0
                            i.fas.fa-leaf.icon-list
                            p.mb-0 #[b Remitente:] nombre, cargo, empresa y número de contacto de ser necesario.

                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/9.png', alt='') 
                
                p.mb-0 Se recomienda que la fuente (letra) tenga el mismo tamaño, color y tipo, evitando mayúscula fija, de resaltar alguna parte del texto es pertinente cursiva, subrayado o negrilla. La corrección ortográfica es importante y necesaria, toda vez que cada correo es carta de presentación del profesional escribiente.









      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Netiqueta
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
          .col-auto.titulo-icono-img
            img(src='@/assets/curso/temas/bg/2.svg', alt='')
          .col
            h3.mb-0.titulo-icono-text.px-0.py-2   El término netiqueta viene de la palabra etiqueta, definida:
      .row.justify-content-center.mb-3(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-f.color-acento-contenido.pt-4.pc-2.mb-0
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              .bloque-texto-f__autor.text-left.mb-3.pc-2
                p.text-regular.bloque-texto-f__texto.mb-0 Ceremonial de los estilos, usos y costumbres que se debe guardar en actos públicos solemnes” …
                p.text-regular.bloque-texto-f__texto.mb-0 “ceremonia en la manera de tratarse las personas particulares o en actos de la vida privada, a diferencia de los usos de confianza.
                .text-center.h5.mb-0.mt-4 - RAE


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-3 Por tanto, netiqueta hace referencia a todo lo relacionado con el buen actuar en las redes sociales utilizadas en diversos contextos, actuar que debe estar cualificado por la comunicación asertiva a partir de la cual se transmite información de manera clara, pertinente, concreta y consciente, de manera que el buen trato hacia el interlocutor se enmarque en límites de respeto y cordialidad.
          p.mb-0 A fin de regular el buen actuar en las redes, se sugieren las siguientes normas objeto de implementación, complementariedad y actualización:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Norma 1")
              .col-12
                p.mb-0 Leer y releer el mensaje antes de enviarlo, pensando en la claridad, coherencia y pertinencia del mismo.
          
            .row(numero="2" titulo="Norma 2")
              .col-12
                p.mb-0 No escribir mensajes bajo emociones de enfado o ira, esto conllevará al inadecuado manejo de un conflicto laboral o personal.
          
            .row(numero="3" titulo="Norma 3")
              .col-12
                p.mb-0 Si se trata de responder un comunicado, contestar expresamente lo que se solicita.
          
            .row(numero="4" titulo="Norma 4")
              .col-12
                p.mb-0 Antes de enviar el mensaje es importante que se verifique que el destinatario es la persona a quien va dirigido.
          
            .row(numero="5" titulo="Norma 5")
              .col-12
                p.mb-0 Utilizar términos adecuados y formales, sin perder de vista que es un comunicado entre seres humanos. Lo que indica que por más que el canal sea la red, la forma de tratar a la otra persona es la misma que se utilizaría si fuera personal, es decir, se deben tener en cuenta las mismas normas de un trato en contexto laboral o académico.
          
            .row(numero="6" titulo="Norma 6")
              .col-12
                p.mb-0 Tener presente el tipo de red a utilizar, procurando ajustarse a la cantidad de texto requerido con claridad y precisión, esto implica que se debe pensar y estructurar muy bien el mensaje antes de escribirlo, sin dejar información para que el destinatario descifre o suponga.
          
            .row(numero="7" titulo="Norma 7")
              .col-12
                p.mb-0 Si estima identificar su red con una foto, se recomienda formalidad en esta, en donde el rostro se vea con claridad, recordando que le identifican en contextos académicos y laborales.
                .div.normas-comunicacion
  
            .row(numero=" 8" titulo="Norma 8")
              .col-12
                p.mb-0 Si el objeto del mensaje es un reclamo o una queja, debe hacerse en los mejores términos, expresando los hechos (lista numerada en orden cronológico, por ejemplo), los perjuicios ocasionados, y por último la petición amable y respetuosa.
  
            .row(numero=" 9" titulo="Norma 9")
              .col-12
                p.mb-0 Siguiendo con el punto anterior, cuando se conteste una petición debe ser en el mismo historial si se trata de correo electrónico, lo que permitirá un seguimiento al caso. Si el caso es que no se recibe respuesta del correo enviado, reenviar el correo haciendo énfasis en la petición.
  
            .row(numero="10" titulo="Norma 10")
              .col-12
                p.mb-0 Cualquier comunicado exige veracidad y envío de soportes que se estimen pertinentes, evitando caer en supuestos que motiven conflictos innecesarios. En esto vale recordar que lo escrito, escrito queda y que asegurar una información implica investigarla antes de enviarla.
  
            .row(numero="11" titulo="Norma 11")
              .col-12
                p.mb-0 En el caso de foros de discusión o comentarios a alguna publicación, es necesario mantener el respeto por la opinión opuesta, lo que implica escribir el punto de vista propio, dar aportes a modo de complemento, sin caer en el ataque hacia el otro.
  
            .row(numero="12" titulo="Norma 12")
              .col-12
                p.mb-0 “Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre…” Art 15 de la Constitución Política de Colombia (1991). En las redes sociales no hay excepción a esta norma, lo que implica que no se debe publicar información personal o familiar de otros y si se estima publicar información propia, esta debe ser objeto de análisis antes de publicar, evitando caer en arrepentimientos.
            .row(numero="13" titulo="Norma 13")
              .col-12
                p.mb-0  Evite caer en el humor colectivo, por medio del cual se generan burlas hacia personas que tienen una condición física determinada, fuera de lo que se estima como “normal”. Los llamados memes, en algunos casos son generadores de indignación y maltrato colectivo hacia algunas poblaciones con características físicas o culturales, que no deberían ser objeto de burla. Aquí la netiqueta debe ser, no transmitir este tipo de comunicados, partiendo de la dignidad y el respeto por el otro cualquiera que este sea, así esta cultura virtual empieza a cambiar desde estos contextos pedagógicos.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/10.png', alt='')
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
