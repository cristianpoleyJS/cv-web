<template>
  <header class="header container">
    <img
      class="header__icon"
      src="../assets/images/icons/ico-cp.svg">

    <ul class="header__navigation">
      <li>
        <router-link
          :to="'/home'"
          class="hover-to-right">
          <img src="@/assets/images/icons/home.svg"> <span>{{ $t('components.header_app.home') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/experience'"
          class="hover-to-right">
          <img src="@/assets/images/icons/experience.svg"> <span>{{ $t('components.header_app.experience') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/technologies'"
          class="hover-to-right">
          <img src="@/assets/images/icons/technologies.svg"> <span>{{ $t('components.header_app.technologies') }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/more-me'"
          class="hover-to-right">
          <img src="@/assets/images/icons/about-me.svg"> <span>{{ $t('components.header_app.more_me') }}</span>
        </router-link>
      </li>
      <li
        class="language"
        @click="changeLanguage()">
        <img src="@/assets/images/icons/translate.svg">
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  methods: {

    changeLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es'
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
        }

        &__navigation {
            display: inline-flex;
            list-style: none;
            margin: 0 0 0 1rem;
            background-color: $primaryFontColor;
            padding: 1rem;

            > li {

                a {
                    color: #fff;
                    text-decoration: none;
                    margin-right: 1rem;
                    padding: 1.1rem 0.5rem 1rem;

                    @include mq('tablet') {
                        > span {
                            display: none;
                        }
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
