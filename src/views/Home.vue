<template>
    <section class="home">

      <!-- Introducción -->
      <div class="home__intro">
        <Intro />
      </div>

      <!-- Sección 'Sobre mi' -->
      <div class="home__about-me">
        <AboutMe/>
      </div>

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

<style scoped lang="scss">
  .home {
    overflow: hidden;

    &__intro {
      background: url('../assets/images/background.png');
      background-size: cover;
      box-shadow: inset 30px -40px 20px 0px #25292c;
      background-color: #24292c;
    }

    &__about-me {
      background: rgb(37, 41, 44);
    }
  }

</style>
