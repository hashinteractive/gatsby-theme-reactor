/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Subnav from '../components/subnav'
import Separator from '../components/separator'
import Portfolio from '../components/portfolio'

const Default = () => {
  const { allFile: { edges: [{ node: { publicURL } }] }, bio: { name, description, title, skills } } = useStaticQuery(graphql`
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
        skills
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
            flexDirection: 'column'
          }}>
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
                  boxShadow: '2xl',
                  borderRadius: 'lg',
                  mb: '50px'
                }}>
                <img 
                  sx={{
                    top: ['15px', '30px'],
                    right: ['-15px', '-35px'],
                    boxShadow: 'lg',
                    borderRadius: 'lg',
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
                <Box
                  sx={{
                    mt: 24,
                    display: 'flex',
                    alignItems: 'center',
                    width: 'full'
                  }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 28 28'
                    width='28'
                    height='28'
                    fill='currentcolor'>
                    <circle
                      r={12}
                      cx={13}
                      cy={13}
                      fill='none'
                      stroke='#dddddd'
                      strokeWidth={2}
                    />
                  </svg>
                  <span sx={{ bg: theme => theme.colors.gray[3], ml: '-14px', mr: 4, width: 10, height: '3px', display: 'inline-block', verticalAlign: 'middle' }}></span>
                  <Link
                    sx={{
                      color: 'grayDark',
                      textTransform: 'uppercase',
                      fontSize: 0,
                      fontWeight: 'extrabold',
                      textDecoration: 'none',
                      pb: 1,
                      border: 0,
                      borderBottom: '3px',
                      borderStyle: 'solid',
                      borderColor: theme => theme.colors.orange[3]
                    }}
                    to="/#"
                    replace>Get In Touch</Link> 
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Separator /> 
          <Flex
            sx={{
              flexWrap: 'wrap'
            }}>
            <Box
              sx={{
                width: ['full', '1/2']
              }}>
              <Flex
                sx={{
                  flexDirection: 'column',
                  height: 'full'
                }}>
                <Box
                  sx={{ width: 'full' }}>
                  <Styled.h6
                    sx={{
                      mb: 0,
                      color: theme => theme.colors.orange[4]
                    }}>
                    My Skills
                    <span sx={{ 
                      bg: theme => theme.colors.gray[3],
                      ml: 3,
                      width: 10,
                      height: 1,
                      display: 'inline-block',
                      verticalAlign: 'middle' }}>
                    </span>
                  </Styled.h6>
                  <Styled.h1
                    sx={{
                      mt: 0
                    }}>
                    What I Do
                  </Styled.h1>   
                </Box>
                <Box
                  sx={{ 
                    mt: 4,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: 'full'
                  }}>
                  { skills.map(skill => (
                    <span
                      sx={{
                        mx: 1,
                        mb: 3,
                        backgroundColor: theme => theme.colors.gray[3],
                        fontSize: 0,
                        border: 0,
                        borderRight: 5,
                        boxShadow: 'md',
                        borderColor: theme => theme.colors.gray[5],
                        borderStyle: 'solid',
                        p: 2,
                        px: 3,
                        '&:hover': {
                          backgroundColor: theme => theme.colors.blue[8],
                          color: 'white'
                        }
                      }}>{ skill }</span>
                  ))}
                </Box>
              </Flex>
            </Box>
            <Box
              sx={{
                width: ['full', '1/2']
              }}>
              <h1
                sx={{
                  color: theme => theme.colors.blue[8],
                  fontSize: '85px',
                  textAlign: 'right',
                  lineHeight: 1.15,
                  textShadow: '3px 3px 0 #dddddd'
                }}>
                <u
                 sx={{
                   textDecoration: 'none', 
                   border: 0,
                   borderBottom: 4,
                   borderStyle: 'solid',
                   borderColor: theme => theme.colors.orange[3],
                 }}
                  >{ title }
                </u>
              </h1>
            </Box>
          </Flex>
          <Separator />
          <Flex
            sx={{
              flexDirection: 'column',
              mb: 5
            }}>
            <Box
              sx={{
                width: 'full',
                mb: 4
              }}>
              <Styled.h6
                sx={{
                  mb: 0,
                  color: theme => theme.colors.orange[4]
                }}>
                My Projects 
                <span sx={{ 
                  bg: theme => theme.colors.gray[3],
                  ml: 3,
                  width: 10,
                  height: 1,
                  display: 'inline-block',
                  verticalAlign: 'middle' }}>
                </span>
              </Styled.h6>
              <Styled.h1
                sx={{
                  mt: 0
                }}>
                Portfolio of Work
              </Styled.h1>
            </Box>
            <Box
              sx={{
                width: 'full'
              }}>
              <Portfolio />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Default