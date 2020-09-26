import React from "react"
import styled from "styled-components"

export const ImageWrapper = ({ children, caption }) => {
  return (
    <Wrapper>
      {children}
      <Caption>
        {caption}
      </Caption>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 0 !important;
  }
`

const Caption = styled.p`
  color: grey;
  font-style: oblique;
  padding-bottom: 2rem;
  font-weight: 400 !important;
  font-size: 16px !important;
`

