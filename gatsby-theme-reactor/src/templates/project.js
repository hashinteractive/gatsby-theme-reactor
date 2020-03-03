import React from "react"
import { graphql } from 'gatsby'

export default ({ data: { project = {} } }) => {
  return (
    <div>{ JSON.stringify(project, null, 2) }</div>
  )
}

export const query = graphql`
  query ($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      technologies
      url
      id
      start(formatString: "MMM Do YYYY")
      end(formatString: "MMM Do YYYY")
    }
  } 
`
