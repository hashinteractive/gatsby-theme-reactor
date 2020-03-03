/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'

const Footer = (props) => (
  <footer {...props}>
    <Container
      p={3}>
      <Styled.h6
        sx={{
          my: 0
        }}>
        Footer
      </Styled.h6>
    </Container>
  </footer>
)

export default Footer 