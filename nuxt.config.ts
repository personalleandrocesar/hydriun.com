// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Philosopher&display=swap' },
        { rel: 'stylesheet', href: 'https://kit.fontawesome.com/da2962ce7f.js' }
     ],
      meta: [
        { name: 'theme-color', content: '#fff' },
        { name: 'theme-color', content: '#fff' },
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
