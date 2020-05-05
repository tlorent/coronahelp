/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Local Corona Support",
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-162115873-1",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Local Corona Support`,
                short_name: `Local Corona Support`,
                start_url: `/`,
                icon: `src/static/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported languages
                languages: [`nl`, `en`],
                // language file path
                defaultLanguage: `nl`,
            },
        },
    ],
}
