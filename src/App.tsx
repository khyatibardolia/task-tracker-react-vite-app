import {Container, ThemeProvider} from '@mui/material'
import {theme} from './theme'
import {Home} from "./pages/Home";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={'sm'} disableGutters={true}>
          <Home/>
        </Container>
      </ThemeProvider>
  )
}
