<template>
  <section class="jobs container">
    <span class="jobs__title">{{ $t('components.jobs.title') }}</span>

    <div class="jobs__container">
      <div
        v-for="job in jobs"
        :key="job.company"
        class="jobs__container__job">
        <div class="jobs__container__job__inner">
          <div
            class="jobs__container__job__inner--front"
            :class="{
              'jobs__container__job__inner--sngular': job.id === 'sngular',
              'jobs__container__job__inner--ingeniova': job.id === 'ingeniova',
              'jobs__container__job__inner--wellness': job.id === 'wellness',
              'jobs__container__job__inner--sopra': job.id === 'sopra',
            }" />
          <div class="jobs__container__job__inner--back">
            <span class="jobs__container__job__inner--back--title">{{ job.company }}</span><br>
            <span class="jobs__container__job__inner--back--location">{{ job.location }}</span>
            <p class="jobs__container__job__inner--back--description">
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jobs',
  data () {
    return {
      jobs: [
        {
          company: 'S|ngular',
          id: 'sngular',
          location: this.$i18n.t('components.jobs.location_sngular'),
          description: this.$i18n.t('components.jobs.description_sngular')
        },
        {
          company: 'Ingeniova Systems',
          id: 'ingeniova',
          location: this.$i18n.t('components.jobs.location_ingeniova'),
          description: this.$i18n.t('components.jobs.description_ingeniova')
        },
        {
          company: 'Wellness Telecom',
          id: 'wellness',
          location: this.$i18n.t('components.jobs.location_wellness'),
          description: this.$i18n.t('components.jobs.description_wellness')
        },
        {
          company: 'Sopra Steria',
          id: 'sopra',
          location: this.$i18n.t('components.jobs.location_sopra'),
          description: this.$i18n.t('components.jobs.description_sopra')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.jobs {
  padding: 6rem 1.5rem;
  color: $secondFontColor;

  &__container {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;

    &__job {
      perspective: rem(1000);
      margin: 1%;
      width: rem(400);
      min-height: rem(350);

      &__inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 rem(4) rem(8) 0 rgba(0, 0, 0, 0.2);

        &--front,
        &--back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        &--front {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

        }

          &--sngular {
            background-image: url('https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/sngular-logo.jpg?alt=media&token=b78547f0-d108-4356-9706-9b989c9d69b3');
          }
          &--ingeniova {
            background-image: url('https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/ingeniova-logo.png?alt=media&token=52f5e05e-389d-47b9-86b9-139533068715');
          }
          &--wellness {
            background-image: url('https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/wellness-logo.jpg?alt=media&token=283671b1-209b-4a9b-8581-c0c7cd14f10d');
          }
          &--sopra {
            background-image: url('https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/sopra-logo.jpg?alt=media&token=ce009a34-d589-468c-ae66-8b5e1454306a');
          }
        &--back {
          background-color: $secondBgColor;
          color: #fff;
          transform: rotateY(180deg);

          &--title {
            font-family: Anton;
            font-size: 1.5rem;
            margin: 1rem 0 0;
            display: block;
          }
          &--location {
            font-style: italic;
          }
          &--description {
            font-size: rem(14);
            text-align: left;
            margin: 1rem;
            display: block;
          }
        }
      }

      &:hover {

        .jobs__container__job__inner {
        transform: rotateY(180deg);
        }
      }
    }

    @include mq('mtablet') {
      justify-content: center;
    }
  }
}

</style>
