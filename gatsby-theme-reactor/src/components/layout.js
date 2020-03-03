/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      // set this to `minHeight: '100vh'` for full viewport height
      minHeight: '100vh',
    }}>
    <Header
      sx={{
        borderBottom: 4,
        borderColor: 'light',
        borderStyle: 'solid',
        width: '100%',
      }} />
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}>
      {children}
    </main>
    <Footer
      sx={{
        bg: 'grayDark',
        color: 'white',
        width: '100%',
      }} />
  </div>
)
export default Layout