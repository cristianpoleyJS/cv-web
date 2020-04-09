<template>
  <header class="header container">
    <!-- Icono de la web -->
    <img
      tabindex="0"
      alt="Header icon web"
      class="header__icon"
      src="../assets/images/icons/ico-cp.svg"
      @click="goHome()">

    <!-- Listado de enlaces a otras secciones -->
    <ul class="header__navigation">
      <li>
        <router-link
          :to="'/home'"
          class="hover-to-right">
          <img
            alt="Icon home view"
            src="@/assets/images/icons/home.svg"> <span>{{ $t('components.header_app.home') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/experience'"
          class="hover-to-right">
          <img
            alt="Icon experience view"
            src="@/assets/images/icons/experience.svg"> <span>{{ $t('components.header_app.experience') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/technologies'"
          class="hover-to-right">
          <img
            alt="Icon technologies view"
            src="@/assets/images/icons/technologies.svg"> <span>{{ $t('components.header_app.technologies') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/more-me'"
          class="hover-to-right">
          <img
            alt="Icon about me view"
            src="@/assets/images/icons/about-me.svg"> <span>{{ $t('components.header_app.more_me') }}</span>
        </router-link>
      </li>
      <li
        class="language"
        tabindex="0"
        @click="changeLanguage()">
        <img
          alt="Icon change language"
          src="@/assets/images/icons/translate.svg">
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  methods: {

    /**
     * Cambia el idioma de la aplicación por el que no está seleccionado.
     * Solo están disponibles los idiomas Ingles (en) y Español (es).
     */
    changeLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es'
    },

    /**
     * Redigire a la home de la aplicación.
     */
    goHome () {
      this.$router.push('/', () => {})
    }
  }
}
</script>

<style scoped lang="scss">

    .header {
        position: sticky;
        z-index: 999;
        background-color: transparent;
        top: 0;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        height: rem(56);
        padding-left: 1.5rem;

        &__icon {
          width: 3.5rem;
          height: 3.5rem;
          cursor: pointer;
        }

        &__navigation {
            display: inline-flex;
            list-style: none;
            margin: 0 0 0 1rem;
            background-color: $primaryFontColor;
            padding: 1rem;

            > li {

                a {
                    color: $white;
                    text-decoration: none;
                    margin-right: 1rem;
                    padding: 1.1rem 0.5rem 1rem;

                    @include mq('tablet') {
                        > span {
                            display: none;
                        }
                    }
                    @include mq('phablet') {
                        padding: 0;
                    }
                }

                &.language {

                    border-left: 1px solid $secondFontColor;
                    padding-left: 1rem;
                    cursor: pointer;
                }
            }
            img {
                width: 1rem;
                vertical-align: middle;
                margin-right: 0.5rem;

                @include mq('tablet') {
                    margin: 0;
                    padding: 0 0.2rem;
                }
            }

        }
    }
</style>
