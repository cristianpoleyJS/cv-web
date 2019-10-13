import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Ficheros de idioma
const en = require('./locales/en.json')
const es = require('./locales/es.json')

export const i18n = new VueI18n({
  locale: 'es',
  messages: {
    'en': en,
    'es': es
  }
})
