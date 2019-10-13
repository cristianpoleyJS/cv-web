<template>
    <section class="jobs container">
        <span class="jobs__title">{{ $t('components.jobs.title') }}</span>

        <div class="jobs__container">
          <div class="jobs__container__job" v-for="job in jobs" :key="job.company">
            <div class="jobs__container__job__inner">
              <div class="jobs__container__job__inner--front"
                :class="{
                  'jobs__container__job__inner--sngular': job.id === 'sngular',
                  'jobs__container__job__inner--ingeniova': job.id === 'ingeniova',
                  'jobs__container__job__inner--wellness': job.id === 'wellness',
                  'jobs__container__job__inner--sopra': job.id === 'sopra',
                }"/>
              <div class="jobs__container__job__inner--back">
                <span class="jobs__container__job__inner--back--title">{{ job.company }}</span><br>
                <span class="jobs__container__job__inner--back--location">{{ job.location }}</span>
                <p class="jobs__container__job__inner--back--description">{{ job.description }}</p>
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
            background-image: url('../../assets/images/jobs/sngular-logo.jpg');
          }
          &--ingeniova {
            background-image: url('../../assets/images/jobs/ingeniova-logo.png');
          }
          &--wellness {
            background-image: url('../../assets/images/jobs/wellness-logo.jpg');
          }
          &--sopra {
            background-image: url('../../assets/images/jobs/sopra-logo.jpg');
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
  }
}

</style>
