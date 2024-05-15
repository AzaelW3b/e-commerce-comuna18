import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { AuthProvider } from './context/AuthProvider'
import LoginForm from './views/login/LoginForm'
import MainLayout from './layout/MainLayout'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196F3",
      },
      colors: {
        azulClaro: "#E5EEF5",
        gray: "#F4F7F9",
        azulOscuro: "#1976D2",
        iconGris: "#777777",
        titleColorBlack: "#3F3F3F",
        celeste: "#0D99FF",
        white: "#fff"
      },
    },
  })


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/inicio" element={<MainLayout />}>
              {/* <Route index element={<DashBoard />} /> 
           <Route path="alta-compania" element={<Registro />} /> */}

            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
