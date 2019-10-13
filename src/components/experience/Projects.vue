<template>
  <section class="projects container">
    <span class="projects__title">{{ $t('components.projects.title') }}</span>
    <div
      v-for="project in projects"
      :key="project.name"
      class="projects__project">
      <img
        v-if="project.name === 'Nexlu'"
        src="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/nexlu.png?alt=media&token=ef5e8d78-d1df-4c7f-8d7d-bb890577d8cc"
        class="img-card">
      <img
        v-else-if="project.name === 'Brisbox'"
        src="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/brisbox.png?alt=media&token=f3b71c60-8af2-452b-a18a-dcbdd9776803"
        class="img-card">
      <span class="projects__project--name">{{ project.name }}</span>
      <p class="projects__project--description">
        {{ project.description }}
      </p>
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
          description: this.$i18n.t('components.projects.nexlu')
        },
        {
          name: 'Brisbox',
          description: this.$i18n.t('components.projects.brisbox')
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
