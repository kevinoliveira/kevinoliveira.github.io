module.exports = {
  siteMetadata: {
    title: `Kevin Oliveira`,
    description: 'Kevin Oliveira blog',
    siteUrl: 'https://kevinoliveira.github.io/',
    author: 'Kevin Oliveira'
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl +  pathTourlResolver(edge.node.fileAbsolutePath) ,
                  guid: site.siteMetadata.siteUrl +  edge.node.id ,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      id
                      fileAbsolutePath
                      excerpt
                    	html
                      frontmatter {
                        title
                        date
                        description                        
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ],
}


const pathTourlResolver = path =>
    `/blog${path.split("src/md")[1]}`.replace(".md", "");