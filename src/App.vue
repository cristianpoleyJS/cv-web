<template>
  <div id="app" class="content">
    <strong style="text-align:center; font-size: 2rem;display:block;">WORKING PAGE IN PROGRESS</strong>

    <!-- Cabecera -->
    <HeaderApp/>

    <transition>
      <router-view/>
    </transition>

    <!-- Footer -->
    <FooterApp/>
  </div>
</template>
<script>

import HeaderApp from '@/components/HeaderApp'
import FooterApp from '@/components/FooterApp'

export default {
  name: 'home',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style lang="scss">

    * {
      font-family: "Open Sans", sans-serif;
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
