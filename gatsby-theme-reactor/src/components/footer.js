/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = (props) => {
  const { site: { siteMetadata: { title }}} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
    }
  `)
  return ( 
    <footer {...props}>
      <Container
        p={3}>
        <Styled.h6
          sx={{
            my: 0,
            fontWeight: 'light',
            fontSize: 0
          }}>
          Copyright &copy; { new Date().getFullYear() } { title }
        </Styled.h6>
      </Container>
    </footer>
  )
}

export default Footer 