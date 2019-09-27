<template>
  <div class="home">

    <!-- Progress bar -->
    <div class="progress-container">
        <div class="progress-bar"></div>
    </div>
    <!-- -->

    <Sidebar/>

    <!-- Todo el contenido -->
    <div class="resume">

        <!-- Sección 'Empecemos' -->
        <div class="start parallax-container">
            <div class="parallax">
                <img src="assets/img/background.jpg">
            </div>
            <div class="info-personal">
                <h2 tabindex="0"  class="name">¡Hola! Me llamo <strong>Cristian Poley</strong></h2>
                <h4 class="profession">Ingeniero Informático - Soñador y amante Front-end</h4>
                <h5><a target="_blank" href="http://www.cristianpoley.com/CristianPoleyCV.pdf">Descargar mi CV</a></h5>
            </div>
        </div>

        <div class="row">
            <!-- Toda la información -->
            <div class="col m12 s12 main-content">
                <!-- Sección 'Sobre mi' -->
                <about-me/>

                <!-- Sección 'Trabajos' -->
                <jobs/>

                <!-- Sección 'Projects' -->
                <projects/>

                <!-- Sección 'Hobbies' -->
                <hobbies/>

                <!-- Sección 'Contacta' -->
                <contact/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// import Technologies from '@/components/Technologies.vue'
import Projects from '@/components/Projects.vue'
import Sidebar from '@/components/Sidebar.vue'
import Contact from '@/components/Contact.vue'
import Hobbies from '@/components/Hobbies.vue'
import AboutMe from '@/components/AboutMe.vue'
// import Studies from '@/components/Studies.vue'
import Jobs from '@/components/Jobs.vue'

export default {
  name: 'home',
  components: {
    // Technologies,
    Projects,
    Sidebar,
    Contact,
    Hobbies,
    AboutMe,
    // Studies,
    Jobs
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/main.scss';

</style>
