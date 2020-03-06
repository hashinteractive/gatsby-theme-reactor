# Gatsby Reactor Theme 

The Reactor Theme is a theme for Gatsby JS sites. [Gatsby themes](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) are plugins (npm packages) that add pre-configured functionality and UI to a basic Gatsby sites. This theme is a portfolio theme for software engineers, developers and UI designers to use as a personal *Curriculum Vitae*. It is open source with MIT license and can be used for both personal and commercial use.

![Gatsby Theme Reactor](https://raw.githubusercontent.com/hashinteractive/gatsby-theme-reactor/master/gatsby-theme-reactor/static/images/gatsby-reactor-theme.jpg)

### Theme Requirements & Setup

We will walk through the setup and installation for the theme and requirements for deployment. Since this is a Gatsby theme we will need to create a basic Gatsby site. First, create your project folder: `mkdir my-porfolio` and cd into your new directory `cd my-portfolio`. We can run a yarn init to create a package.json for our module dependencies: `yarn init -y`.

We need to add some dependencies to our project:
```
yarn add react react-dom gatsby @hashinteractive/gatsby-theme-reactor
```

We also need to add some `scripts` to our package.json for gatsby develop and build commands. In our package.json we can add
```
{
  "name": "my-portfolio",
  ...
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build"
  },
  ...
}
```
We will use these script for development and for our build command for deployment.

You will need to create a file in the root of your project called `gatsby-config.js` and define the `@hashinteractive/gatsby-theme-reactor` as a plugin dependency:
```
module.exports = {
  plugins: [
    '@hashinteractive/gatsby-theme-reactor'
  ]
}
```
You can also change the name of the site (found in the header) in this file by defining the `siteMetadata` property in the `gatsby-config.js` file:
```
module.exports = {
  plugins: [
    '@hashinteractive/gatsby-theme-reactor'
  ],
  siteMetadata: {
    title: `My Site Name`
  }
}
```

![Gatsby Theme Reactor Sitename](https://raw.githubusercontent.com/hashinteractive/gatsby-theme-reactor/master/gatsby-theme-reactor/static/images/gatsby-reactor-theme-sitename.jpg)

The theme has some data dependencies and sources the data for the website from JSON files in `src/data` folder. The two files the need to be created in this folder are `Bio.json` and `Project.json`. The `Bio.json` file contains all of the information about __you the developer/designer__ and looks like:
```
{
  "name": "Mark Twain",
  "greeting": "Hello, I'm Mark Twain",
  "title": "Software Engineer and UI/UX Designer",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "social": [
    {
      "name": "Github",
      "url": "https://github.com"
    },
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com"
    },
    {
      "name": "Twitter",
      "url": "https://twitter.com"
    },
    {
      "name": "Medium",
      "url": "https://medium.com"
    },
    {
      "name": "StackOverflow",
      "url": "https://stackoverflow.com"
    }
  ],
  "skills": [
    "vue.js", "react.js", "tailwind css", "theme-ui", "gatsby.js", "nuxt.js", "graphQL", "javascript", "koa.js", "strapi.io", "firebase", "mongo", "postgres", "adobe illustrator", "adobe photoshop", "adobe xd", "sass", "postcss", "mysql", "php", "eslint", "jest", "react-native", "vue-nativescript", "mobile", "web", "SQL", "docker", "linux", "ubuntu", "bash", "python"
  ],
  "location": "Boulder CO",
  "email": "john@example.com",
  "phone": "(987) 654-3210" 
}
```
Most of the fields in this file are self explanatory but you can fill in your required information.  The `Project.json` file contains information about projects you've worked on which represent your portfolio/work. There will be a page on your website created for each of your projects located at: `/project/my-project-name` and the `Project.json` field will look like:
```
[
  {
    "name": "Project One",
    "url": "https://example.com",
    "technologies": ["Nuxt.js", "Bootstrap CSS", "GSAP"],
    "start": "2018-10-15",
    "end": "2020-01-15",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Project Two",
    "url": "https://example.com",
    "technologies": ["Nuxt.js", "Firebase", "Bulma CSS"],
    "start": "2018-10-15",
    "end": "2020-01-15",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "name": "Project Three",
    "url": "https://example.com",
    "technologies": ["Nuxt.js", "Strapi.io", "Tailwind CSS"],
    "start": "2018-10-15",
    "end": "2020-01-15",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
```
You can find and example of the `Bio.json` file in this project repository here: [github.com/hashinteractive/gatsby-theme-reactor](https://github.com/hashinteractive/gatsby-theme-reactor/tree/master/gatsby-theme-reactor/src/data)

Project images can be created in your `src/data/images` directory and will need need to be "slugified" versions of the project name. For example, if you have a project named: "My Special Project" you can add an image for the project to `src/data/images` named `my-special-project.jpg` or `my-special-project.png` and the Reactor theme will resolve to find the image and attach it to the project to be displayed on the project's individual page.