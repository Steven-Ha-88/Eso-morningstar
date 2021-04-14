/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
console.log(process.env.CONTENTFUL_SPACE_ID)
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
        apiKey: process.env.API_KEY, // Optional for public requests
        maxVideos: 10 // Defaults to 50
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
  ],
}
