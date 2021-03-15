/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    }
  },
  {
    resolve: 'gatsby-source-mongodb',
    options: {
      dbName: 'Portfolio',
      collection: 'Projects',
      server: {
        address: 'portfolio-shard-00-02.hx9mo.mongodb.net',
        port: 27017
      },
      auth: {
        user: "admin",
        password: "princessmanju"
      },
      extraParams: {
        replicaSet: 'portfolio-shard-00-00.hx9mo.mongodb.net',
        ssl: true,
        authSource: 'admin',
        retryWrites: true
      }
    }
  }],
}
