module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "WebDev Portfolio",
    description:
      "Awesome webdev portfolio project build with Gatsby and Strapi",
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://gracious-brattain-e882f4.netlify.app`,
    twitterUsername: `@johnSnow_doe`,
    image: `mainImg.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
};
