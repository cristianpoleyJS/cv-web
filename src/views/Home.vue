<template>
  <div class="home">

    <!-- Barra de progreso -->
    <ProgressBar/>

    <!-- Sidebar flotante -->
    <Sidebar/>

    <!-- Todo el contenido -->
    <div class="resume">

        <!-- Sección 'Empecemos' -->
        <Intro/>

        <div class="row">
            <!-- Toda la información -->
            <div class="col m12 s12 main-content">
                <!-- Sección 'Sobre mi' -->
                <AboutMe/>

                <!-- Sección 'Trabajos' -->
                <Jobs/>

                <!-- Sección 'Projects' -->
                <Projects/>

                <!-- Sección 'Hobbies' -->
                <Hobbies/>

                <!-- Sección 'Contacta' -->
                <Contact/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// import Technologies from '@/components/Technologies.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Projects from '@/components/Projects.vue'
import Sidebar from '@/components/Sidebar.vue'
import Contact from '@/components/Contact.vue'
import Hobbies from '@/components/Hobbies.vue'
import AboutMe from '@/components/AboutMe.vue'
// import Studies from '@/components/Studies.vue'
import Intro from '@/components/Intro.vue'
import Jobs from '@/components/Jobs.vue'

export default {
  name: 'home',
  components: {
    // Technologies,
    ProgressBar,
    Projects,
    Sidebar,
    Contact,
    Hobbies,
    AboutMe,
    // Studies,
    Intro,
    Jobs
  }
}
</script>

<style scoped lang="scss">

    @import '../assets/scss/main.scss';

</style>
