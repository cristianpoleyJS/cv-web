<template>
  <footer class="footer">
    <span
      class="footer__design-for"
      v-html="$t('components.footer_app.design_for')" />
  </footer>
</template>

<script>
export default {
  name: 'FooterApp'
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
        color: #fff;
        margin-top: 3rem;
    }
</style>
