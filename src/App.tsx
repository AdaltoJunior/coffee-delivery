import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.min.css'
import 'react-loading-skeleton/dist/skeleton.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>

      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
