<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-full-width.bg-fondo-2.mb-0
      .p-full-width
        .row.justify-content-center.mb-5.align-items-center
          .col-sm-12.col-lg-10
              p.mb-0 La comunicación es una herramienta esencial en la vida humana, pues permite la interacción, el intercambio de ideas y la construcción de relaciones. Entre sus formas más importantes se encuentran la comunicación oral y escrita, cada una con características, alcances y propósitos específicos. En particular, la escritura ha sido clave en el desarrollo del pensamiento crítico, la transmisión del conocimiento y la construcción de la memoria colectiva. Este recurso no solo fortalece la expresión, sino que estructura el lenguaje, refuerza la organización de ideas y permite una reflexión más profunda sobre lo que se desea comunicar. Comprender la importancia de la escritura y los elementos que componen un acto comunicativo es fundamental para mejorar nuestras habilidades comunicativas tanto en contextos personales como profesionales.
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img.wc-75.m-auto(src='@/assets/curso/temas/intro/1.svg', alt='')

        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/nfoLPdlizJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Introducción

</template>

<script>
export default {
  name: 'Introduccion',
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
