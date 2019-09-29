<template>
    <section class="technologies">
        <span class="technologies__title">Tecnologías</span>

      <div class="technologies__wrapper">
      <div class="technologies__wrapper__frontend">
        <template v-for="tech in technologies">
          <div class="skill" :key="tech.name">
            <span class="skill__name">{{ tech.name }}</span>
            <div class="skill__progress-bar-container" >
                <div class="skill__progress-bar-value" :style="`width: ${tech.level}%;`"></div>
            </div>
          </div>
        </template>
      </div>
          <div class="technologies__wrapper__others">
        <template v-for="other in othersTechs">
          <div class="skill" :key="other.name">
            <span class="skill__name">{{ other.name }}</span>
            <div class="skill__progress-bar-container" >
                <div class="skill__progress-bar-value" :style="`width: ${other.level}%;`"></div>
            </div>
          </div>
        </template>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Technologies',
  data () {
    return {
      technologies: [
        {
          name: 'JavaScript',
          level: 90
        },
        {
          name: 'Vue.js',
          level: 90
        },
        {
          name: 'Angular 4',
          level: 75
        },
        {
          name: 'React.js',
          level: 30
        },
        {
          name: 'Firebase',
          level: 80
        },
        {
          name: 'Vuex',
          level: 100
        },
        {
          name: 'Ngrx',
          level: 60
        },
        {
          name: 'HTML5 / CSS3',
          level: 100
        },
        {
          name: 'Sass',
          level: 80
        },
        {
          name: 'Cypress',
          level: 60
        },
        {
          name: 'Jest',
          level: 30
        },
        {
          name: 'Meteor.js',
          level: 50
        },
        {
          name: 'Typescript',
          level: 60
        },
        {
          name: 'JQuery',
          level: 85
        },
        {
          name: 'Node.js',
          level: 45
        },
        {
          name: 'Python',
          level: 40
        }
      ],
      othersTechs: [
        {
          name: 'GCP',
          level: 75
        },
        {
          name: 'Linux',
          level: 70
        },
        {
          name: 'Git',
          level: 70
        },
        {
          name: ' Git Flow',
          level: 100
        },
        {
          name: 'GitHub / GitLab',
          level: 70
        },
        {
          name: 'Docker',
          level: 40
        },
        {
          name: 'Redmine',
          level: 100
        },
        {
          name: 'Jira',
          level: 100
        },
        {
          name: 'Scrum',
          level: 100
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .technologies {
    padding: 2rem 4rem;

    &__wrapper {

      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &__frontend {
        flex: 0 0 45%;
      }
      &__others {
        flex: 0 0 45%;
      }
    }
  }

  .skill {

    margin-bottom: 0.5rem;

    &__name {
      font-weight: 400;
      color: $primaryFontColor;
    }

    &__progress-bar-container {
      border: 1px solid $bgGray;
      border-radius: rem(20);
    }

    &__progress-bar-value {
      background-color: $primaryColor;
      height: rem(8);
      border-radius: rem(20);
    }
  }
</style>
