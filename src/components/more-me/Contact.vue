<template>
    <section class="contact">
        <span class="contact__title">Contacta conmigo</span>

        <!-- Mapa -->
        <div class="contact__container">
            <p>¡No dudes en contactar conmigo!</p>
            <p>Puedes mandarme un correo a la siguiente dirección</p>
            <p><a href="mailto:cripolgon@gmail.com" target="_top">cripolgon@gmail.com</a></p>
        </div>
        <iframe width="100%" height="600" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAaI7KZ4pQg0REHaV2J6lXbg&key=${API_KEY_MAPS}`" allowfullscreen></iframe>
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
        color: rgb(3, 155, 229) !important;
        text-decoration: none;
    }
</style>
<style scoped lang="scss">

    .contact {

        margin: 0 auto;
        padding: 1rem 1.5rem;
        max-width: rem(1440);
        color: $secondFontColor;

        &__container {
            position: absolute;
            margin: 130px 0px 0px 10px;
            background-color: #33373d;
            padding: 10px;
            color: #fff;

            > a {
                color: #fff !important;
            }
        }
    }
</style>
