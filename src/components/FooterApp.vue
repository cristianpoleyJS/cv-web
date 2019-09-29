<template>
    <footer class="footer">
        <span class="footer__design-for" v-html="$t('components.footer_app.design_for')"/>
    </footer>
</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style scoped lang="scss">

    .footer {
        padding-top: 0px !important;
        background-color: #1976d2 !important;
    }
</style>
