export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  css: [
    '~/assets/css/theme.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    '~/assets/css/index.css',
  ],
  modules: [
    // '@nuxt/devtools',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
          type: 'module',
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['ion-icon'].includes(tag),
    },
  },
  pinia: {
    autoImports: ['defineStore'],
  },
  build: {
    transpile: ['primevue'],
  },
})
