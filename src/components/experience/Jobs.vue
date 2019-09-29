<template>
    <section class="information">
        <h6 class="font-weight">Experiencia laboral</h6>
            <div class="job" v-for="job in jobs" :key="job.company">
                <div class="row">
                    <div class="col l9 m12 s12">
                        <span class="font-weight">{{ job.company }}</span><br>
                        <span>{{ job.location }}</span>
                        <p class="content-job">{{ job.description }}</p>
                    </div>
                    <img class="col l3 image-company" v-if="job.company === 'S|ngular'" src="../../assets/images/jobs/sngular-logo.jpg">
                    <img class="col l3 image-company" v-else-if="job.company === 'Ingeniova Systems'" src="../../assets/images/jobs/ingeniova-logo.png">
                    <img class="col l3 image-company" v-else-if="job.company === 'Wellness Telecom'" src="../../assets/images/jobs/wellness-logo.jpg">
                    <img class="col l3 image-company" v-else-if="job.company === 'Sopra'" src="../../assets/images/jobs/sopra-logo.jpg">
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
  }
}
</script>

<style scoped lang="scss">
    .information {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: rgba(204, 204, 204, 0.13);
    }
    .content-job {
        text-align: justify;
    }

    /** --- Timeline -- */
    .timeline {
        white-space: nowrap;
        overflow-x: hidden;
    }

    .timeline ol {
        font-size: 0;
        padding: 150px 0px;
        transition: all 1s;
    }

    .timeline ol li {
        position: relative;
        display: inline-block;
        list-style-type: none;
        width: 160px;
        height: 5px;
        background: #2098d1;
    }

    .timeline ol li:last-child {
        width: 280px;
    }

    .timeline ol li:not(:first-child) {
        margin-left: 14px;
    }

    .timeline ol li:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(100% + 1px);
        bottom: 0;
        width: 12px;
        height: 12px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #2098d1;
    }

    .timeline ol li div {
        position: absolute;
        left: calc(100% + 7px);
        width: 280px;
        padding: 15px;
        font-size: 1rem;
        white-space: normal;
        color: white;
        background: #2098d1;
        height: 115px;
    }

    .timeline ol li div::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
    }

    .timeline ol li:nth-child(odd) div {
        top: -16px;
        transform: translateY(-100%);
    }

    .timeline ol li:nth-child(odd) div::before {
        top: 100%;
        border-width: 8px 8px 0 0;
        border-color: #2098d1 transparent transparent transparent;
    }

    .timeline ol li:nth-child(even) div {
        top: calc(100% + 16px);
    }

    .timeline ol li:nth-child(even) div::before {
        top: -8px;
        border-width: 8px 0 0 8px;
        border-color: transparent transparent transparent #2098d1;
    }

    .timeline time {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 8px;
    }
</style>
