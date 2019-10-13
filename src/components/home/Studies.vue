<template>
  <section class="studies container">
    <span class="studies__title">{{ $t('components.studies.title') }}</span>
    <div class="studies__list">
      <template v-for="(study, index) in studies">
        <div
          :key="study.title"
          class="study"
          :class="{'study--not-last': index < studies.length - 1}">
          <span class="study__year">{{ study.year }}</span>
          <span class="study__title">{{ study.title }}</span>
          <span class="study__university">{{ study.university }}</span>
          <span
            v-if="study.url"
            class="study__certification"
            @click="goTo(study.url)">Certificación</span>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Studies',
  data () {
    return {
      studies: [
        {
          year: 2010,
          title: 'Educación Secundaria Obligatoria',
          university: 'Instituto Santa Aurelia'
        },
        {
          year: 2012,
          title: 'Bachillerato de Ciencia y Tecnología',
          university: 'Instituto Santa Aurelia'
        },
        {
          year: 2013,
          title: 'Curso online de Android',
          university: 'Universidad Politécnica de Valencia',
          url: 'https://miriadax.net//files/10132/badge/96df1ae7-b508-41c0-aec7-9459bc4c79d2.pdf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BmpznbfCGS8e9X7wkuQ%2FrMg%3D%3D'
        },
        {
          year: 2016,
          title: 'Grado Ingeniería Informática del Software',
          university: 'Universidad de Sevilla'
        },
        {
          year: 2017,
          title: 'Curso Angular 2',
          university: 'Udemy',
          url: 'https://www.udemy.com/certificate/UC-EDL10RWT/'
        }
      ]
    }
  },
  methods: {

    goTo (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .studies {
    padding: 1rem 2rem 5rem;

    &__list {

      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;

      .study {
        color: $secondFontColor;
        padding: 1rem;
        margin: 1rem 1rem 0 0;
        background-color: $secondBgColor;
        border-radius: rem(3);
        position: relative;

        &__year {
          display: block;
          font-style: italic;
        }
        &__title {
          display: block;
          font-weight: 400;
        }
        &__certification {
          display: block;
          cursor: pointer;
          color: $primaryFontColor;
          font-weight: 400;

          &:hover {
            color: $secondFontColor;
          }
        }

        &--not-last {

          &:after {
            content: '';
            display: inline-block;
            border-top: 0.3rem solid $secondBgColor;
            width: 2rem;
            height: rem(2);
            top: 65%;
            right: -21px;
            position: absolute;
            -webkit-transform: translateY(-1rem);
            transform: translateY(-1rem);
            z-index: -1;
          }
        }
      }

      @include mq('tablet') {

        margin: 0;

        .study {
            margin: 1rem 0 0;
            width: 100%;

            &:after {
              content: none;
            }
        }

      }
    }
  }
</style>
