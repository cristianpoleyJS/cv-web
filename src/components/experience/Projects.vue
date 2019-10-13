<template>
  <section class="projects container">
    <span class="projects__title">{{ $t('components.projects.title') }}</span>
    <div
      v-for="project in projects"
      :key="project.name"
      class="projects__project">
      <img
        v-if="project.name === 'Nexlu'"
        src="../../assets/images/projects/nexlu.png"
        class="img-card">
      <img
        v-else-if="project.name === 'Brisbox'"
        src="../../assets/images/projects/brisbox.png"
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
