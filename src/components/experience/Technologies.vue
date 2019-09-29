<template>
    <section class="technologies">
            <div class="row">
                <!-- Tecnologías -->
                <h6 class="title-technologies">Tecnologías</h6>
                <div class="col m6 s12">
                    <div class="technologies">
                        <div class="frontend">
                            <table class="table-technologies-frontend">
                                <tbody class="tbody">
                                    <tr v-for="tech in technologies" :key="tech.name">
                                        <td>
                                            <span>{{ tech.name }}</span>
                                        </td>
                                        <td>
                                            <div class="progress">
                                                <div class="determinate" :style="`width: ${tech.level}%`"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col m6 s12">
                    <div class="others">
                        <table class="table-technologies-others">
                            <tbody class="tbody">
                                <tr v-for="other in othersTechs" :key="other.name">
                                    <td>
                                        <span>{{ other.name }}</span>
                                    </td>
                                    <td>
                                        <div class="progress">
                                            <div class="determinate" :style="`width: ${other.level}%`"></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- -->
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

<style>

</style>
