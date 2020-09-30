import React from "react"
import styled from "styled-components"

import { Container } from "../../components"

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
`

const FlexWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  color: grey;
  justify-content: center;
`
