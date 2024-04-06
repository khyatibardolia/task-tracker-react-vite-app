import {Container, ThemeProvider} from '@mui/material'
import {theme} from './theme'
import {AppRoutes} from "@routes/index";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'sm'} disableGutters={true}>
                <AppRoutes />
            </Container>
        </ThemeProvider>
    )
}
