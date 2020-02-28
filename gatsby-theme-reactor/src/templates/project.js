import React from "react"
export default ({ data: { projectsJson: project = {} } }) => {
  return (
    <div>{ JSON.stringify(project, null, 2) }</div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    projectsJson(fields: {slug: {eq: $slug}}) {
      name
      technologies
      url
      id
      start(formatString: "MMM Do YYYY")
      end(formatString: "MMM Do YYYY")
    }
  } 
`
