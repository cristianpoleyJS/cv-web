<template>
  <section class="more-me">
    <!-- Hobbies -->
    <div class="hobbies">
      <Hobbies />
    </div>

    <!-- Contactar -->
    <div class="contact">
      <Contact />
    </div>
  </section>
</template>

<script>
import Hobbies from '@/components/more-me/Hobbies'
import Contact from '@/components/more-me/Contact'

export default {
  name: 'MoreMe',
  components: {
    Hobbies,
    Contact
  }
}
</script>

<style scoped lang="scss">

  .more-me {

    .hobbies {
      background-color: #fff;
    }
    .contact {
      background: $secondBgColor;
    }
  }
</style>
