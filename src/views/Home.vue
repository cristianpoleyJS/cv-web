<template>
    <section class="home">

      <!-- Introducción -->
      <Intro />

      <!-- Sección 'Trabajos' -->
      <AboutMe/>

    </section>
</template>

<script>
import AboutMe from '@/components/home/AboutMe'
import Intro from '@/components/home/Intro'

export default {
  name: 'Home',
  components: {
    AboutMe,
    Intro
  }
}
</script>
