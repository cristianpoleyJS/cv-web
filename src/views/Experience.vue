<template>
  <section class="experience">
    <!-- Sección 'Trabajos' -->
    <div class="jobs">
      <Jobs />
    </div>

    <!-- Mis proyectos -->
    <div class="projects">
      <Projects />
    </div>
  </section>
</template>

<script>
import Projects from '@/components/experience/Projects'
import Jobs from '@/components/experience/Jobs'

export default {
  name: 'Experience',
  components: {
    Projects,
    Jobs
  }
}
</script>

<style scoped lang="scss">

  .experience {

    .jobs {
      background-color: $bgBlack;
    }
    .projects {
      background-color: $white;
    }
  }
</style>
