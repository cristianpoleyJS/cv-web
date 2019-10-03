<template>
    <section class="projects container">
        <span class="projects__title">Mis proyectos</span>
        <div class="projects__project" v-for="project in projects" :key="project.name">
            <img src="../../assets/images/projects/nexlu.png" v-if="project.name === 'Nexlu'" class="img-card">
            <img src="../../assets/images/projects/brisbox.png" v-else-if="project.name === 'Brisbox'" class="img-card">
            <span class="projects__project--name">{{ project.name }}</span>
            <p class="projects__project--description">{{ project.description }}</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'Nexlu',
          description: 'Red Social basada en videojuegos. Fue desarrollada bajo el framework Meteor.js y presentada como Trabajo Fin de Grado.'
        },
        {
          name: 'Brisbox',
          description: 'Plataforma donde la gente puede encontrar a otras personas para ayudarles en sus mudanzas. Aplicación web desarrollada para una asignatura del grado donde se simulaba la creación y venta de un software, recreando así el comienzo de una StartUp. Realizada com el framework Meteor.js.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .projects {

        padding: 6rem 1.5rem;

        &__title {
            margin-bottom: 3rem;
        }

        &__project {
            display: block;
            height: rem(300);
            margin-bottom: 3rem;

            img {
                float: left;
                margin-right: 2rem;
                max-width: rem(500);
            }

            &--name {
                font-size: 2rem;
                font-weight: bold;
            }
            &--description {
                font-size: 1rem;
            }
        }
    }
</style>
