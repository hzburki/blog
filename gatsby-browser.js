import React from "react"
import Theme from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import { MDXProvider } from "@mdx-js/react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import { CodeBlock } from "./src/components"
import "./src/components/blog/code.css"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    height: 100%;
    font-size: 16px;
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.light1};
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    // Render code via Prism
    if(props) {
      return <CodeBlock {...props} />
    }

    // Rendering a simple 'pre' html element
    return <pre {...preProps} />
  } 
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        {element}
      </ThemeProvider>
    </MDXProvider>
  )
}
