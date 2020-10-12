require('dotenv').config();
const { BLOCKS } = require('@contentful/rich-text-types');

module.exports = {
    plugins: [
        // `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },

    ]
}