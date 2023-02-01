import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
