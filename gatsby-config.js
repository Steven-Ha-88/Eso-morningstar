/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.NODE_ENV, "LOOOK HERE")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Andrew Mead",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId:['UCoO9WEIu6UJLPp0Dmw0j3Yw'],
        apiKey: process.env.GATSBY_API_KEY, // Optional for public requests
        maxVideos: 10 // Defaults to 50
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
  ],
}
