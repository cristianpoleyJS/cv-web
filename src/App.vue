<template>
  <div
    id="app"
    class="content">
    <!-- Cabecera -->
    <HeaderApp />

    <transition
      name="page"
      mode="out-in">
      <router-view />
    </transition>

    <!-- Footer -->
    <FooterApp />
  </div>
</template>
<script>

import HeaderApp from '@/components/HeaderApp'
import FooterApp from '@/components/FooterApp'

export default {
  name: 'Home',
  components: {
    HeaderApp,
    FooterApp
  },
  watch: {

    /**
     * Watch para que cada vez que cambie de ruta, se
     * haga un efecto de scroll dinámico hacia la parte superior de la web.
     */
    '$route' () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">

    * {
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
    }

    body {
      margin: 0;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content {
      position: relative;
    }
</style>
