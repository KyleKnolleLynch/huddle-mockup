import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import Card from './components/Card.jsx'
import Footer from './components/Footer'
import content from './content'

const theme = {
  colors: {
    header: 'hsl(160 72% 42%)',
    body: 'hsla(0, 0%, 90%, 0.1)',
    footer: 'hsl(160 72% 20%)',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          {content.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
