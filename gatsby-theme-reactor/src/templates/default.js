/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui'
import Layout from '../components/layout'
import Subnav from '../components/subnav'

const Default = () => (
  <Layout>
    <Subnav />
    <Container
      p={3}>
      <div>Default temp page</div>
    </Container>
  </Layout>
)

export default Default