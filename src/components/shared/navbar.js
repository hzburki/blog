import React from "react"
import styled from "styled-components"

import { Socials } from "../index"
import { Container } from "../../components"

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <H1>hzburki</H1>

        <Socials />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 0.8rem 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`

const H1 = styled.h1`
  flex: 1;
`