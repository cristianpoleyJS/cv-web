<template>
  <section class="intro container">
    <!-- Nombre, puesto y CV -->
    <div class="intro__info-personal">
      <span
        class="intro__info-personal--name"
        v-html="$t('components.intro.hi')" />
      <span class="intro__info-personal--profession">
        {{ $t('components.intro.profession') }}
      </span>
      <span class="intro__info-personal--cv">
        <a
          target="_blank"
          href="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/CristianPoleyCV.pdf?alt=media&token=a480866c-5e6c-4338-bbb4-884e0f8da9a4">
          {{ $t('components.intro.download_pdf') }}
        </a>
      </span>
    </div>

    <!-- Foto y enlaces a las redes sociales -->
    <div class="intro__cristian">
      <div class="intro__cristian__content">
        <div class="intro__cristian__content__bottom">
          <img
            src="@/assets/images/icons/linkedin.svg"
            @click="goTo('linkedin')">
          <img
            src="@/assets/images/icons/medium.svg"
            @click="goTo('medium')">
          <img
            src="@/assets/images/icons/twitter.svg"
            @click="goTo('twitter')">
          <img
            src="@/assets/images/icons/github.svg"
            @click="goTo('github')">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  methods: {

    /**
     * Abre una nueva pestaña a la red social clicada.
     * @param {String} app Nombre de la aplicación clicada
     */
    goTo (app) {
      let url
      switch (app) {
        case 'linkedin':
          url = 'https://www.linkedin.com/in/cristian-poley/'
          break
        case 'medium':
          url = 'https://medium.com/@cripolgon'
          break
        case 'twitter':
          url = 'https://twitter.com/cristianpoley'
          break
        case 'github':
          url = 'https://github.com/cripolgon'
          break
      }
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

    .intro {
        display: block;
        height: 95vh;
        position: relative;

        &__info-personal {
            color: $primaryColor;
            max-width: rem(1440);
            margin: 0 auto;
            position: absolute;
            top: 30%;
            width: 100%;
            margin-left: 1.5rem;

            &--name {
                margin: 0;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 1;
                font-size: 5rem;

                @include mq('tablet') {
                    font-size: 9vw;
                }
            }

            &--profession {
                color: $secondFontColor;
                font-weight: 700;
                text-transform: uppercase;
                line-height: 1;
                font-size: 4rem;
                display: block;

                @include mq('tablet') {
                    font-size: 6vw;
                }
            }

            &--cv {
                display: block;
                background-color: $primaryColor;
                min-width: rem(120);
                max-width: rem(130);
                padding: 0.5rem;
                border-radius: rem(3);
                margin-top: 1rem;
                cursor: pointer;
                transition: background 0.3s;
                text-align: center;

                &:hover {
                    background-color: $primaryBgColor;
                }

                > a {
                    color: $secondFontColor;
                    text-decoration: none;
                }
            }
        }

        &__cristian {
            float: right;
            height: rem(400);
            width: rem(330);
            top: 15%;
            position: absolute;
            right: 1.5rem;
            border-radius: rem(3);
            border: 2px solid $secondFontColor;

            &__content {
                position: relative;
                background-repeat: no-repeat;
                background-image: url(https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/avatar.jpg?alt=media&token=d547502c-7cfc-4d62-8b16-69e963e9e23e);
                background-size: cover;
                background-position-y: -25px;
                overflow: hidden;
                height: 100%;

                &__bottom {
                    display: flex;
                    justify-content: space-around;
                    background-color: $secondFontColor;
                    position: absolute;
                    bottom: 0;
                    height: rem(56);
                    width: 100%;

                    > img {
                        max-width: rem(30);
                        cursor: pointer;
                    }
                }
            }
            @include mq('tablet') {
                display: none;
            }
        }
    }
</style>
