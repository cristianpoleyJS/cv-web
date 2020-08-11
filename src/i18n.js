import { createI18n } from 'vue-i18n'

// Ficheros de idioma
const en = require('./locales/en.json')
const es = require('./locales/es.json')

export const i18n = createI18n({
  legacy: true,
  locale: 'es',
  messages: {
    'en': en,
    'es': es
  }
})
