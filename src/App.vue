<template>
  <div
    id="app"
    class="content">
    <!-- Cabecera -->
    <HeaderApp />

    <router-view v-slot="{ Component }">
      <transition
        name="page"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>

import HeaderApp from '@/components/HeaderApp.vue'

export default {
  name: 'Home',
  components: {
    HeaderApp
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
