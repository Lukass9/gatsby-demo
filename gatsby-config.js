module.exports = {
  pathPrefix: "/StudioFiguraWithGatsby",
  siteMetadata: {
    title: "Studio Figura Trzebnicka",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `b4d8b5005236381583b7b43b9cde42`,
        preview: false,
        disableLiveReload: false,
      },
    },

    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        display: 1000
      }
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,400i,500,600`,
          `DotGothic16`,
          `Newsreader\:200,400,400i`,
          `Alegreya`,
          `Caveat`,
          `Italianno`
        ],
        display: 'swap'
      }
    },
    
  ],
  
  pathPrefix: "/gatsby-demo",
  
};
