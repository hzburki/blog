import React from "react"
import styled from "styled-components"

import { Container } from "../../styled-components"

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper>
          Built with Gatsby + Markdown
        </FlexWrapper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 3rem;
  background-color: white;
  -webkit-box-shadow: 0px -2px 5px 0px rgba(112, 112, 112, 0.5);
  -moz-box-shadow: 0px -2px 5px 0px rgba(112, 112, 112, 0.5);
  box-shadow: 0px -2px 5px 0px rgba(112, 112, 112, 0.5);
`

const FlexWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  font-weight: 700;
  justify-content: center;
`
