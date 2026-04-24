import Aura from '@primeuix/themes/lara';

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@pinia/nuxt',
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    'nuxt3-notifications',
    'vue3-carousel-nuxt',
    'nuxt-marquee',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://e-laser.pro',
  },

  sitemap: {
    urls: [
      { loc: '/', priority: 1.0 },
      { loc: '/about', priority: 0.5 },
    ],
    sources: [
      '/api/__sitemap__/urls',
    ],
  },

  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/sass/style.sass',
    'primeicons/primeicons.css',
    '~/assets/styles/vars.css',
  ],

  ssr: false,

  primevue: {

    autoImport: true,
    components: {
      exclude: ['form', 'carousel','chart']
    },
    options: {

      theme: {
        preset: Aura
      }
    },
    importTheme: { from: '~/themes/theme.js' },
  },

  runtimeConfig: {
    public:{
      //apiUrl: 'http://127.0.0.1:8000',
      apiUrl: 'https://e-laser.pro',
    }
  },
  compatibilityDate: '2025-04-07',
})