export default defineNuxtConfig({
  css: ['~/assets/css/index.scss'],
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
})
