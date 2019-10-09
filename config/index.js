import en from '../lang/en-US.js'
import fr from '../lang/fr-FR.js'
// import de from '../lang/de-DE.js'

// export const API_ROOT = 'https://jsonplaceholder.typicode.com/'

export const I18N = {
  locales: [
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    // {
    //   code: 'de',
    //   iso: 'de-DE',
    //   name: 'Deutsch'
    // }
  ],
  defaultLocale: 'en',
  parsePages: false,
  pages: {
    // about: {
    //   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
    //   fr: '/a-propos', // -> accessible at /fr/a-propos
    //   de: '/uber-uns'     // -> accessible at /es/sobre
    // },
    index: {
      en: '/home',
      fr: '/accueil',
    },
    'tangible-assets': {
      en: '/tangible-assets',
      fr: '/biens-corporels',
    },
    'security-and-performance': {
      en: '/security-and-performance',
      fr: '/securite-et-performance',
    },
    'private-office': {
      en: '/private-office',
      fr: '/bureau-prive',
    },
    'contact-us': {
      en: '/contact-us',
      fr: '/contactez-nous',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, fr }
  }
}