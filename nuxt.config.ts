// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#20a9b2' },
        { name: 'theme-color', content: '#20a9b2' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '~/assets/main.css'
  ],
  modules: [
  '@nuxt/content',
  'nuxt-icon',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
