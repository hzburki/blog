import React from "react"
import styled from "styled-components"

import { Header, Body, Footer } from "../components"

export default () => {
  return (
    <Container>
      <HeaderSection> 
        <Header />
      </HeaderSection>

      <BodySection>
        <Body />
      </BodySection>

      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header"
    "body"
    "footer";
`

const Header = styled.div`
  grid-area: "header";
  border: 1px solid green;
  height: 300px;
`

const Body = styled.div`
  grid-area: "body";
  border: 1px solid red;
`

const Footer = styled.div`
  grid-area: "footer";
  border: 1px solid blue;
  height: 100px;
`

const HeaderSection = styled.section`
  grid-area: header;
  padding: 2rem 0;
`

const BodySection = styled.section`
  grid-area: body;
`

const FooterSection = styled.section`
  grid-area: footer;
`