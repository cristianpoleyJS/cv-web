<template>
  <section class="projects container">
    <!-- Título de la sección -->
    <span class="projects__title">{{ $t('components.projects.title') }}</span>
    <!-- Listado de los proyectos -->
    <div class="projects__wrapper">
      <div
        v-for="project in projects"
        :key="project.name"
        class="projects__wrapper__project">
        <span
          class="projects__wrapper__project--image"
          :style="{
            'background-image': `url('${project.image}')`
          }" />
        <span class="projects__wrapper__project--name">{{ project.name }}</span>
        <p class="projects__wrapper__project--description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  computed: {

    projects () {
      return [
        {
          name: 'Nexlu',
          description: this.$i18n.t('components.projects.nexlu'),
          image: 'https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/nexlu.png?alt=media&token=ef5e8d78-d1df-4c7f-8d7d-bb890577d8cc'
        },
        {
          name: 'Brisbox',
          description: this.$i18n.t('components.projects.brisbox'),
          image: 'https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/brisbox.png?alt=media&token=f3b71c60-8af2-452b-a18a-dcbdd9776803'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .projects {

        padding: 2rem 1.5rem;

        &__title {
            margin-bottom: 3rem;
        }

        &__wrapper {

          display: flex;

          &__project {
              display: block;
              overflow: hidden;
              max-width: rem(440);
              margin: 1%;
              border: 1px solid $bgGray;
              border-radius: 3px;

              &--image {
                  width: rem(500);
                  height: rem(210);
                  background-size: cover;
                  display: block;
                  background-repeat: no-repeat;
                  background-position: center;
                  margin-bottom: 1rem;
              }

              &--name {
                  font-size: 2rem;
                  font-weight: bold;
                  padding: 1rem;
              }
              &--description {
                  font-size: 1rem;
                  padding: 0 1rem;
              }

              &:hover {
                transition: box-shadow 0.5s;
                box-shadow: rem(3) rem(3) rem(5) $bgGray;
              }
          }
        }
    }
</style>
