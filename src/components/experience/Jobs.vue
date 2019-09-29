<template>
    <section class="jobs">
        <span class="jobs__title">Experiencia laboral</span>
        <div class="jobs__container">
            <div class="jobs__job" v-for="job in jobs" :key="job.company" :style="retunImageBackground(job.company)">
            <!-- <img class="jobs__job--image-company" v-if="job.company === 'S|ngular'" src="../../assets/images/jobs/sngular-logo.jpg">
            <img class="jobs__job--image-company" v-else-if="job.company === 'Ingeniova Systems'" src="../../assets/images/jobs/ingeniova-logo.png">
            <img class="jobs__job--image-company" v-else-if="job.company === 'Wellness Telecom'" src="../../assets/images/jobs/wellness-logo.jpg">
            <img class="jobs__job--image-company" v-else-if="job.company === 'Sopra'" src="../../assets/images/jobs/sopra-logo.jpg"> -->

            <div class="jobs__job__container">
                <span class="jobs__job__container--title">{{ job.company }}</span><br>
                <span class="jobs__job__container--location">{{ job.location }}</span>
                <p class="jobs__job__container--description">{{ job.description }}</p>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Jobs',
  data () {
    return {
      jobs: [
        {
          company: 'S|ngular',
          location: 'May 2018 - Actualidad (Madrid)',
          description: 'Desarrollador Frontend para un proyecto en BBVA utilizando como principal tecnología Vue.js y utlizando como plataforma Google Cloud Platform.'
        },
        {
          company: 'Ingeniova Systems',
          location: 'Feb 2017 - May 2018 (Sevilla)',
          description: 'Como principal desarrollador Frontend de la compañía, me he encargado del diseño, accesibilidad y usabilidad de las aplicaciones web con una tecnología nueva y potente como es Angular 2 y versiones superiores, analizando y estudiando siempre los requisitos del cliente, aplicando siempre clean code y buenas prácticas. También he trabajado puntualmente con la parte Backend en algunas aplicaciones, usando Node.js y Microservicios. Además, también he sido el responsable de la gestión de todas las páginas web corporativas de nuestro principal cliente, webs desarrolladas con Orchard, PHP y Javascript.'
        },
        {
          company: 'Wellness Telecom',
          location: 'Oct 2016 - Dic 2016 (Sevilla)',
          description: 'Mi papel en esta empresa IoT ha sido la de desarrollador productos y servicios de seguridad, especialmente de la etapa de recolección de información. He implementado colectores para comprobar la seguridad en redes siguiendo los controles definidos en la metodología de seguridad OWISAM con el lenguaje de programación Python y también he realizado una interfaz de usuario para una aplicación de iCirrus (un proyecto de EU Horizon 2020) con el framework de javascript Meteor.js.'
        },
        {
          company: 'Sopra',
          location: 'Ene 2016 - Jul 2016 (Sevilla)',
          description: 'He estado involucrado en tareas relacionadas con el Aseguramiento de la Calidad basado en la Metodología v3 y en procesos de testing desde los ciclos tempranos del desarrollo de aplicaciones, asegurando la calidad, homogeneidad y predictibilidad.'
        }
      ]
    }
  },
  methods: {

    retunImageBackground (company) {
      let urlImage
      switch (company) {
        case 'Ingeniova Systems':
          urlImage = '../../assets/images/jobs/ingeniova-logo.png'
          break
        case 'Wellness Telecom':
          urlImage = '../../assets/images/jobs/wellness-logo.jpg'
          break
        case 'Sopra':
          urlImage = '../../assets/images/jobs/sopra-logo.jpg'
          break
        default:
          urlImage = '../../assets/images/jobs/sngular-logo.jpg'
          break
      }
      return `background-image: url(${urlImage})`
    }
  }
}
</script>

<style scoped lang="scss">

    .jobs {

        padding: 6rem 1.5rem;
        background-color: $bgBlack;
        max-width: rem(1440);
        color: $secondFontColor;

        &__container {

            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

        }

        &__job {
            flex: 0 0 35%;
            background-size: cover;
            width: 400px;
            height: 300px;
            position: relative;

            &--image-company {

                max-width: 300px;
            }
        }
    }

</style>
