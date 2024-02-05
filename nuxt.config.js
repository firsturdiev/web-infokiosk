export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/main.css"
  ],
  ssr: false,
  app: {
    rootTag: "body",
    head: {
      title: "Infokiosk - Andijon",
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css"
        }
      ]
    },

  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
});
