/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const Portfolio = () => {
  const { allProject: { nodes: projects} } = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          technologies
          start(formatString: "MMM Do, YYYY")
          url
          slug
          name
          end(formatString: "MMM Do, YYYY")
        }
      }
    }
  `) 
  return (
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}>
      { projects.map(project => (
        <Box
          sx={{
            mr: 5,
            mb: 5,
            boxShadow: 'md',
            borderRadius: 3,
            bg: theme => theme.colors.blue[2],
            width: ['full', '5/12']
          }}>
          <Box
            sx={{
              bg: 'white',
              height: 'full',
              boxShadow: '2xl',
              borderColor: 'light',
              borderStyle: 'solid',
              borderWidth: 7,
              borderRadius: 3,
              p: 3,
              top: ['5px', '10px'],
              right: ['-5px', '-10px'],
              position: 'relative'
            }}>
            { JSON.stringify(project, null, 4) }
          </Box>
        </Box>
      ))}
    </Flex>
  )
}

export default Portfolio