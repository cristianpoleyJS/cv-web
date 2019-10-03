<template>
    <section class="jobs">
        <span class="jobs__title">Experiencia laboral</span>
        <div class="jobs__container">
            <div
              class="jobs__job"
              v-for="job in jobs"
              :key="job.company"
              :class="{
                'jobs__job--sngular': job.company === 'S|ngular',
                'jobs__job--ingeniova': job.company === 'Ingeniova Systems',
                'jobs__job--wellness': job.company === 'Wellness Telecom',
                'jobs__job--sopra': job.company === 'Sopra',
              }">

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
          description: 'Desarrollador Frontend para un proyecto en BBVA utilizando como principal tecnología Vue.js y Firebase, utlizando como plataforma Google Cloud Platform.'
        },
        {
          company: 'Ingeniova Systems',
          location: 'Feb 2017 - May 2018 (Sevilla)',
          description: 'Como principal desarrollador Frontend de la compañía, me encargué del diseño, accesibilidad y usabilidad de las aplicaciones web con el framework Angular 2/4, analizando y estudiando siempre los requisitos del cliente, aplicando clean code y buenas prácticas. También he trabajado puntualmente con la parte Backend en algunas aplicaciones, usando Node.js y Microservicios. Además, también he sido el responsable de la gestión de todas las páginas web corporativas del principal cliente, webs desarrolladas con Orchard, PHP y JavaScript Vanila.'
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
  }
}
</script>

<style scoped lang="scss">

    .jobs {

        margin: 0 auto;
        padding: 6rem 1.5rem;
        max-width: rem(1440);
        color: $secondFontColor;

        &__container {

            margin-top: 3rem;
            display: flex;
            flex-wrap: wrap;

        }

        &__job {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: rem(400);
            position: relative;
            margin: 1%;
            min-height: rem(300);

            &--sngular {
              background-image: url('../../assets/images/jobs/sngular-logo.jpg');
            }
            &--ingeniova {
              background-image: url('../../assets/images/jobs/ingeniova-logo.png');
            }
            &--wellness {
              background-image: url('../../assets/images/jobs/wellness-logo.jpg');
            }
            &--sopra {
              background-image: url('../../assets/images/jobs/sopra-logo.jpg');
            }
            &--image-company {

                max-width: 300px;
            }

            &__container {
              display: none;
            }

            &:hover {
            opacity: 0.1;

              &__container {
                display: block;
              }
            }
        }
    }

</style>
