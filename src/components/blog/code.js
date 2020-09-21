import React from "react"
import styled from "styled-components"
import Hightlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

export const CodeBlock = ({ codeString, language, ...props }) => {
  return (
    <Hightlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, getLineProps, getTokenProps, style, tokens }) => {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )
      }}
    </Hightlight>
  )
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  border-radius: 10px;
  overflow: scroll;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`
