<template>
  <transition name="fade">
    <section class="experience">

        <!-- Sección 'Trabajos' -->
        <Jobs/>

        <!-- Skills -->
        <Technologies/>

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
