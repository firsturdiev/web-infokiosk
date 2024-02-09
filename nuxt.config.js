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
  },
  runtimeConfig: {
    public: {
      strapiURL: "https://admin.tourinfo.uzbektourism.uz",
      strapiToken: "b6d595457a3df325d5d64b96f646042e10a1cf64a314b88124a275e4378477e919753c64d4930406c4a62755be6a43d1c265e3b5ebc7ab095cace06f6caf925e170bc24600b09d85a74da84e6fddd68ea37584ca6ec10e80d65126281e75e34e67226302421dbc8a303099a61eba37a99a6433720578d1d5c3bbd573d7f0d757"
    }
  }
});
