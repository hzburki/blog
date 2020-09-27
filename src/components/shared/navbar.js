import React from "react"
import styled from "styled-components"

import { Container } from "../../styled-components"

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <H1>hzburki</H1>

        <div>
          
        </div>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 0.8rem 0;
  justify-content: space-between;
`

const H1 = styled.h1`

`