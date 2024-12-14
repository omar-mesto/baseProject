export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true
  }
})