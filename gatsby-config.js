const urljoin = require("url-join").default || require("url-join")
const configs = require("./site-config")

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(configs.app_url, configs.path_prefix),
    title: configs.app_name,
    description: configs.app_description,
    author: configs.github_username,
    keywords: configs.app_keywords.join(', '),
    language: 'it',
    locale: 'it_IT',
    twitterUsername: configs.twitter_username,
    facebookUsername: configs.facebook_username,
    linkedinUsername: configs.linkedin_username,
    githubUsername: configs.github_username,
    email: configs.email_address,
    city: configs.your_city,
    country: 'Italia',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `none`,
          quality: 95,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.app_name,
        short_name: configs.app_name,
        start_url: configs.path_prefix,
        background_color: configs.body_background_color,
        theme_color: configs.app_title_color,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [configs.google_analytics_ID],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
