module.exports = ({ dataPath = 'src/data' }) => ({
  siteMetadata: {
    title: `Reactor Theme`,
    siteUrl: `https://github.com/hashinteractive/gatsby-theme-reactor`,
    description: `Blazing fast modern site generator for React`,
    greeting: `Hello, I'm Tom Allen`,
    social: [
      {
        name: 'Github',
        url: 'https://github.com',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Medium',
        url: 'https://medium.com',
      },
      {
        name: 'StackOverflow',
        url: 'https://stackoverflow.com',
      }
    ] 
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
        typeName: ({ node }) => node.name 
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets/ 
        }
      }
    },
    'gatsby-plugin-theme-ui'
  ]
})
