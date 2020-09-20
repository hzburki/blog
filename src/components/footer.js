import React from 'react';
import styled from "styled-components"

import { Layout } from "../styled-components";

export const Footer = () => {
  return (
    <Container>
      <Layout>
        FOOTER
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  grid-area: footer;
  background-color: lightgrey;
`