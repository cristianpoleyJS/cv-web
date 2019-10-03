<template>
    <section class="jobs">
        <span class="jobs__title">Experiencia laboral</span>

        <div class="jobs__container">
          <div class="jobs__container__job" v-for="job in jobs" :key="job.company">
            <div class="jobs__container__job__inner">
              <div class="jobs__container__job__inner--front"
                :class="{
                  'jobs__container__job__inner--sngular': job.id === 'sngular',
                  'jobs__container__job__inner--ingeniova': job.id === 'ingeniova',
                  'jobs__container__job__inner--wellness': job.id === 'wellness',
                  'jobs__container__job__inner--sopra': job.id === 'sopra',
                }"/>
              <div class="jobs__container__job__inner--back">
                <span class="jobs__container__job__inner--back--title">{{ job.company }}</span><br>
                <span class="jobs__container__job__inner--back--location">{{ job.location }}</span>
                <p class="jobs__container__job__inner--back--description">{{ job.description }}</p>
              </div>
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
          id: 'sngular',
          location: 'May 2018 - Actualidad (Madrid)',
          description:
            'Desarrollador Frontend para un proyecto en BBVA utilizando como principal tecnología Vue.js y Firebase, utlizando como plataforma Google Cloud Platform.'
        },
        {
          company: 'Ingeniova Systems',
          id: 'ingeniova',
          location: 'Feb 2017 - May 2018 (Sevilla)',
          description:
            'Como principal desarrollador Frontend de la compañía, me encargué del diseño, accesibilidad y usabilidad de las aplicaciones web con el framework Angular 2/4, analizando y estudiando siempre los requisitos del cliente, aplicando clean code y buenas prácticas. También he trabajado puntualmente con la parte Backend en algunas aplicaciones, usando Node.js y Microservicios. Además, también he sido el responsable de la gestión de todas las páginas web corporativas del principal cliente, webs desarrolladas con Orchard, PHP y JavaScript Vanila.'
        },
        {
          company: 'Wellness Telecom',
          id: 'wellness',
          location: 'Oct 2016 - Dic 2016 (Sevilla)',
          description:
            'Mi papel en esta empresa IoT ha sido la de desarrollador productos y servicios de seguridad, especialmente de la etapa de recolección de información. He implementado colectores para comprobar la seguridad en redes siguiendo los controles definidos en la metodología de seguridad OWISAM con el lenguaje de programación Python y también he realizado una interfaz de usuario para una aplicación de iCirrus (un proyecto de EU Horizon 2020) con el framework de javascript Meteor.js.'
        },
        {
          company: 'Sopra Steria',
          id: 'sopra',
          location: 'Ene 2016 - Jul 2016 (Sevilla)',
          description:
            'He estado involucrado en tareas relacionadas con el Aseguramiento de la Calidad basado en la Metodología v3 y en procesos de testing desde los ciclos tempranos del desarrollo de aplicaciones, asegurando la calidad, homogeneidad y predictibilidad.'
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

    &__job {
      perspective: 1000px;
      margin: 1%;
      width: rem(400);
      min-height: rem(350);

      &__inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        &--front,
        &--back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        &--front {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

        }

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
        &--back {
          background-color: $secondBgColor;
          color: #fff;
          transform: rotateY(180deg);

          &--title {
            font-family: Anton;
            font-size: 1.5rem;
            margin: 1rem 0 0;
            display: block;
          }
          &--location {
            font-style: italic;
          }
          &--description {
            font-size: rem(14);
            text-align: left;
            margin: 1rem;
            display: block;
          }
        }
      }

      &:hover {

        .jobs__container__job__inner {
        transform: rotateY(180deg);
        }
      }
    }
  }
}

</style>
