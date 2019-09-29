<template>
    <section class="more-me">

        <!-- Hobbies -->
        <Hobbies />

        <!-- Contactar -->
        <Contact/>

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
