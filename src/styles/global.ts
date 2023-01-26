import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --container-padding: 1rem;
    --container-width: 1120px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%;

    @media (min-width: ${({ theme }) => theme.screens.sm}) {
      font-size: 100%;
    }
  }

  body, input, textarea, button {
    font: 400 1rem/1.6 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: ${({ theme }) => theme.colors.gray600};
    background-color: ${({ theme }) => theme.colors.background};
  }

  input {
    min-width: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`
