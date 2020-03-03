/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Subnav from '../components/subnav'

const Default = () => {
  const { allFile: { edges: [{ node: { publicURL } }] }, bio: { name, description } } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: {eq: "profile"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      bio {
        description
        title
        name
      }
    }
  `)
  return (
    <Layout>
      <Subnav />
      <Container
        p={3}>
        <Flex
          sx={{
            flexWrap: 'wrap'
          }}>
          <Box
            sx={{
              width: ['full', '1/2']
            }}>
            <div
              sx={{
                bg: theme => theme.colors.blue[2],
                mb: '50px'
              }}>
              <img 
                sx={{
                  top: ['15px', '30px'],
                  right: ['-15px', '-35px'],
                  boxShadow: 'lg',
                  position: 'relative',
                  maxWidth: 'full'
                }}
                src={publicURL}
                alt="Profile" />
            </div>
          </Box>
          <Box
            sx={{
              width: ['full', '5/12'],
              ml: [0, '8.29999%']
            }}>
            <Flex
              sx={{
                height: 'full',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <Box>
                <Styled.h6
                  sx={{
                    mb: 0,
                    color: theme => theme.colors.orange[4]
                  }}>
                  { name }
                  <span sx={{ bg: theme => theme.colors.gray[3], ml: 3, width: 10, height: 1, display: 'inline-block', verticalAlign: 'middle' }}></span>
                </Styled.h6>
                <Styled.h1
                  sx={{
                    mt: 0
                  }}>
                  About Me
                </Styled.h1>
              </Box>
              <Box>
                <p sx={{ color: 'grayDark' }}>{ description }</p>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Default