import React from "react"
import Theme from "./src/themes/theme"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    height: 100%;
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.light1};
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      {element}
    </ThemeProvider>
  )
}
