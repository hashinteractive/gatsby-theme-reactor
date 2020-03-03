module.exports = ({ dataPath = 'src/data' }) => ({
  siteMetadata: {
    title: `Reactor Theme`,
    siteUrl: `https://github.com/hashinteractive/gatsby-theme-reactor`,
    description: `Blazing fast modern site generator for React`,
    social: [{
       'Github': 'https://github.com',
    }, {
       'LinkedIn': 'https://linkedin.com' ,
    }] 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: dataPath,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'Project' 
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium', 'Droid Serif']
        }
      }
    },
    'gatsby-plugin-theme-ui'
  ]
})
