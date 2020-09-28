import React from "react"
import styled from "styled-components"

import { Footer, Navbar } from "../../components"

export const Layout = ({ body, header }) => {
  return (
    <Wrapper>
      <NavbarSection>
        <Navbar />
      </NavbarSection>

      <HeaderSection>
        {header}
      </HeaderSection>

      <BodySection>
        {body}
      </BodySection>

      <FooterSection>
        <Footer />
      </FooterSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "navbar"
    "header"
    "body"
    "footer";
`

const NavbarSection = styled.section`
  grid-area: navbar;
`

const HeaderSection = styled.section`
  grid-area: header;
  padding: 2rem 0;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2rem 0 0 0;
  }
`

const BodySection = styled.section`
  grid-area: body;
`

const FooterSection = styled.section`
  grid-area: footer;
`
