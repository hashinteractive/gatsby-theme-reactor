/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data: { project = {} } }) => {
  const { name, start, end, description, technologies, image } = project
  return (
    <Layout>
      <Container
        p={3}>
        <Flex>
          <Box
            sx={{
              width: 'full',
              py: 5
            }}>
            <Flex
              sx={{
                flexDirection: 'column'
              }}>
              <Box
                sx={{
                  position: 'relative'
                }}>
                <div
                  sx={{
                    position: 'absolute',
                    boxShadow: 'xl',
                    top: -15,
                    left: [-15, -40],
                    borderRadius: 'full',
                    bg: theme => theme.colors.orange[4],
                    width: 100,
                    height: 100
                  }}
                />
                <div
                  sx={{
                    position: 'relative',
                    zIndex: 99,
                    display: 'inline-block',
                    textAlign: 'right'
                  }}>
                  <Styled.h1
                    sx={{
                      position: 'relative',
                      textShadow: '-3px 3px lightblue',
                      mb: 0,
                      zIndex: 99
                    }}>
                    { name }
                  </Styled.h1>
                  <Styled.h6
                    sx={{
                      color: theme => theme.colors.gray[4],
                      fontWeight: 'medium'
                    }}>
                    { start } - { end }
                  </Styled.h6>
                </div>
              </Box>
              <Box
                sx={{
                  my: 4
                }}>
                <Flex
                  sx={{
                    flexWrap: 'wrap'
                  }}>
                  <Box
                    sx={{
                      width: ['full', '1/2']
                    }}>
                    <p sx={{ mt: 0 }}>{ description }</p>
                  </Box>
                  <Box
                    sx={{
                      width: ['full', '1/2']
                    }}>
                    { image && (
                      <img
                        sx={{
                          width: ['full']
                        }}
                        src={image.publicURL}
                        alt={ name }
                        />
                    )} 
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  sx={{
                    flexWrap: 'wrap'
                  }}>
                  { technologies.map((tech, i) => (
                    <div
                      key={i}
                      sx={{
                        fontSize: '0.75rem',
                        border: 0,
                        borderLeft: 3,
                        borderStyle: 'solid',
                        borderColor: theme => theme.colors.blue[4],
                        px: 3,
                        py: 1,
                        mr: 3,
                        bg: theme => theme.colors.gray[2] 
                      }}>{ tech }</div>
                  ))}
                </Flex> 
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      description
      technologies
      url
      id
      image {
        publicURL
      }
      start(formatString: "MMM Do YYYY")
      end(formatString: "MMM Do YYYY")
    }
  } 
`
