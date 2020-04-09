<template>
  <section class="contact container">
    <!-- Título de la sección -->
    <span class="contact__title">{{ $t('components.contact.title') }}</span>

    <!-- Mapa -->
    <div class="contact__container">
      <p>{{ $t('components.contact.message1') }}</p>
      <p>{{ $t('components.contact.message2') }}</p>
      <p>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=cripolgon@gmail.com&tf=1"
          target="_blank">cripolgon@gmail.com</a>
      </p>
    </div>
    <iframe
      width="100%"
      height="600"
      frameborder="0"
      style="border:0"
      title="Google maps location me"
      :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAaI7KZ4pQg0REHaV2J6lXbg&key=${API_KEY_MAPS}`"
      allowfullscreen />
  </section>
</template>

<script>
import { API_KEY_MAPS } from '@/utils/mapKey'

export default {
  name: 'Contact',
  data () {
    return {
      API_KEY_MAPS: API_KEY_MAPS
    }
  }
}
</script>
<style lang="scss">

    .contact__container a {
        color: #fff !important;
        font-weight: bold;
        text-decoration: none;
    }
</style>
<style scoped lang="scss">

    .contact {

        padding: 1rem 1.5rem;
        color: $secondFontColor;

        &__title {
            margin-bottom: 2rem;
        }

        &__container {
            position: absolute;
            margin: rem(130) 0 0 rem(10);
            background-color: #33373d;
            padding: rem(10);
            color: $secondFontColor;
            margin-right: 3rem;

            > a {
                color: $white !important;
            }
        }
    }
</style>
