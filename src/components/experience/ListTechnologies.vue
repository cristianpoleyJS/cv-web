<template>
  <section class="technologies container">
    <!-- Título de la sección -->
    <span class="technologies__title">{{ $t('components.technologies.title') }}</span>

    <!-- Listado de las tecnologías -->
    <div class="technologies__wrapper">
      <div class="technologies__wrapper__frontend">
        <template v-for="tech in technologies">
          <!-- Nombre de la tecnología y además el porcentaje de conocimiento -->
          <div
            :key="tech.name"
            class="skill">
            <span class="skill__name"><span
              class="skill__icon"
              :class="`${tech.id}`" /> {{ tech.name }}</span>
            <div class="skill__progress-bar-container">
              <div
                class="skill__progress-bar-value"
                :style="`width: ${tech.level}%;`" />
            </div>
          </div>
        </template>
      </div>

      <!-- Listado de tecnologías/metodologías/herramientas de NO desarrollo. -->
      <div class="technologies__wrapper__others">
        <template v-for="other in othersTechs">
          <div
            :key="other.name"
            class="skill">
            <span class="skill__name"><span
              class="skill__icon"
              :class="`${other.id}`" /> {{ other.name }}</span>
            <div class="skill__progress-bar-container">
              <div
                class="skill__progress-bar-value"
                :style="`width: ${other.level}%;`" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListTechnologies',
  data () {
    return {
      technologies: [
        {
          name: 'JavaScript',
          id: 'js',
          level: 90
        },
        {
          name: 'Vue.js',
          id: 'vue',
          level: 85
        },
        {
          name: 'Angular 4',
          id: 'angular',
          level: 75
        },
        {
          name: 'React.js',
          id: 'react',
          level: 30
        },
        {
          name: 'Firebase',
          id: 'firebase',
          level: 80
        },
        {
          name: 'Vuex',
          id: 'vuex',
          level: 100
        },
        {
          name: 'Ngrx',
          id: 'ngrx',
          level: 60
        },
        {
          name: 'HTML5 / CSS3',
          id: 'html',
          level: 100
        },
        {
          name: 'Sass',
          id: 'sass',
          level: 80
        },
        {
          name: 'Cypress',
          id: 'cypress',
          level: 60
        },
        {
          name: 'Jest',
          id: 'jest',
          level: 30
        },
        {
          name: 'Meteor.js',
          id: 'meteor',
          level: 50
        },
        {
          name: 'Typescript',
          id: 'typescript',
          level: 60
        },
        {
          name: 'JQuery',
          id: 'jquery',
          level: 85
        },
        {
          name: 'Node.js',
          id: 'node',
          level: 45
        },
        {
          name: 'Python',
          id: 'python',
          level: 40
        }
      ],
      othersTechs: [
        {
          name: 'GCP',
          id: 'gcp',
          level: 75
        },
        {
          name: 'Git',
          id: 'git',
          level: 70
        },
        {
          name: 'Git Flow',
          id: 'gitflow',
          level: 100
        },
        {
          name: 'GitHub / GitLab',
          id: 'github',
          level: 70
        },
        {
          name: 'Docker',
          id: 'docker',
          level: 40
        },
        {
          name: 'Redmine',
          id: 'redmine',
          level: 100
        },
        {
          name: 'Jira',
          id: 'jira',
          level: 100
        },
        {
          name: 'Scrum',
          id: 'scrum',
          level: 100
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .technologies {

    padding: 6rem 1.5rem;

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

    margin-bottom: 1rem;

    &__name {

      font-weight: 400;
      color: $primaryFontColor;
      display: block;
      margin-bottom: 0.4rem;
    }

    &__progress-bar-container {
      border: 1px solid #cdcdcd;
      border-radius: rem(20);
      transition: all 0.3s;
    }
    &__icon {
      display: inline-block;
      width: rem(20);
      height: rem(20);
      background-size: cover;
      vertical-align: middle;
      margin-right: 1rem;

      &.js {
        background-image: url('../../assets/images/technologies/js.svg');
      }
      &.vue {
        background-image: url('../../assets/images/technologies/vue.png');
      }
      &.angular {
        background-image: url('../../assets/images/technologies/angular.svg');
      }
      &.react {
        background-image: url('../../assets/images/technologies/react.svg');
      }
      &.firebase {
        background-image: url('../../assets/images/technologies/firebase.png');
      }
      &.ngrx {
        background-image: url('../../assets/images/technologies/ngrx.svg');
      }
      &.html {
        background-image: url('../../assets/images/technologies/html.jpg');
      }
      &.sass {
        background-image: url('../../assets/images/technologies/sass.svg');
      }
      &.cypress {
        background-image: url('../../assets/images/technologies/cypress.png');
      }
      &.jest {
        background-image: url('../../assets/images/technologies/jest.png');
      }
      &.meteor {
        background-image: url('../../assets/images/technologies/meteor.svg');
      }
      &.typescript {
        background-image: url('../../assets/images/technologies/typescript.svg');
      }
      &.jquery {
        background-image: url('../../assets/images/technologies/jquery.svg');
      }
      &.node {
        background-image: url('../../assets/images/technologies/node.jpg');
      }
      &.python {
        background-image: url('../../assets/images/technologies/python.png');
      }
      &.gcp {
        background-image: url('../../assets/images/technologies/gcp.png');
      }
      &.git {
        background-image: url('../../assets/images/technologies/git.png');
      }
      &.github {
        background-image: url('../../assets/images/technologies/github.svg');
      }
      &.docker {
        background-image: url('../../assets/images/technologies/docker.png');
      }
      &.redmine {
        background-image: url('../../assets/images/technologies/redmine.svg');
      }
      &.jira {
        background-image: url('../../assets/images/technologies/jira.svg');
      }
      &.scrum {
        background-image: url('../../assets/images/technologies/scrum.png');
      }
    }

    &__progress-bar-value {
      background-color: $primaryColor;
      height: rem(8);
      border-radius: rem(20);
      margin: -1px;
  -moz-transition: all 1s ease;
  -moz-transition-delay: 1s;
  -webkit-transition: all 1s ease;
  -webkit-transition-delay: 1s;
  transition: all 1s ease;
    }
  }
</style>
