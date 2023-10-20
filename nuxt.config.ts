// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    "~/assets/scss/main.scss"
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@privyid/nhp',
    '@privyid/nuapi',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  pinia     : { autoImports: ['defineStore', 'storeToRefs'] },
  googleFonts: {
    families: {
      'Open Sans': true,
      download: true,
      inject: true
    }
  },
  routeRules: {
    '/': { redirect: '/job' },
  },
})
