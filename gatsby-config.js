module.exports = {
  siteMetadata: {
    title: `Kevin Oliveira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
  
        // WebApp Manifest Configuration
        appName: "Kevin Oliveira",
        appDescription: "Personal website",
        developerName: "kevin oliveira",
        developerURL: "kevinoliveira.github.io",
        dir: 'auto',
        lang: 'en-150',
        background: '#000530',
        theme_color: '#000530',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
