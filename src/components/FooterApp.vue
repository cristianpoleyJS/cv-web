<template>
  <footer class="footer">
    <span
      class="footer__design-for"
      :style="getColor()"
      v-html="$t('components.footer_app.design_for')" />
  </footer>
</template>

<script>
export default {
  name: 'FooterApp',
  methods: {

    /**
     * Devuelve un color para el texto del footer,
     * dependiendo de la ruta en la que se encuentra.
     * @returns {String}
     */
    getColor () {
      const color = this.$route.name === 'MoreMe' ? 'rgba(240, 231, 216, 1)' : 'rgba(14, 59, 67, 1)'
      return {
        '--textColor': color
      }
    }
  }
}
</script>

<style scoped lang="scss">

    .footer {
        padding: 1rem 0;
        font-size: 0.7rem;
        text-align: center;
        bottom: 0;
        position: absolute;
        width: 100%;
        display: block;
        margin-top: 3rem;
        color: var(--textColor);
    }
</style>
