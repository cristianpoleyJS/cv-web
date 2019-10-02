<template>
  <transition name="fade">
    <section class="experience">

        <!-- Sección 'Trabajos' -->
        <div class="jobs">
          <Jobs/>
        </div>

        <!-- Skills -->
        <div class="skills">
          <Technologies/>
        </div>

    </section>
  </transition>
</template>

<script>
import Technologies from '@/components/experience/Technologies'
import Jobs from '@/components/experience/Jobs'

export default {
  name: 'Experience',
  components: {
    Technologies,
    Jobs
  }
}
</script>

<style scoped lang="scss">

  .experience {

    .jobs {
      background-color: $bgBlack;
    }
    .skills {
      background-color: #fff;
    }
  }
</style>
