/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const Subnav = () => {
  const { site: { siteMetadata: { social = {} } }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(social)
  const connect = Object.keys(social).map((key) => ({ name: key, url: social[key] }))
  return (
    <Container
      p={3}>
      <Flex
        sx={{
          mt: 44,
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            width: ['full', '1/2']
          }}>
          <Styled.h3
           sx={{
             fontWeight: 'normal'
           }}>
            <span
              sx={{
                pt: 16,
                border: 0,
                borderTop: 6,
                borderColor: theme => theme.colors.orange[3],
                borderStyle: 'solid'
              }}>Hello</span>, I'm Troy Henne
          </Styled.h3>
        </Box>
        <Box
          sx={{
            width: ['full', '1/2']
          }}>
          <Flex
            sx={{
              flexDirection: 'column'
            }}>
            <Box
              sx={{
                width: 'full',
                textAlign: 'right'
              }}>
              <Styled.h6
                sx={{
                  textTransform: 'uppercase',
                  color: theme => theme.colors.gray[6],
                  fontSize: 0 
                }}>
                <span sx={{ verticalAlign: 'middle' }}>Connect With Me</span>
                <span sx={{ bg: theme => theme.colors.gray[3], mx: 4, width: 12, height: 1, display: 'inline-block', verticalAlign: 'middle' }}></span>
              </Styled.h6>
            </Box> 
            <Box
              sx={{
                width: 'full'
              }}>
              {
                connect.length && (
                  <Flex as='ul'>
                    { connect.map((name, url) => <li key={name}>{name}</li>) }
                  </Flex>
                )
              }
            </Box> 
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default Subnav