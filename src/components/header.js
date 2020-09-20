import React from 'react';
import styled from "styled-components"

import { Layout } from "../styled-components";

export const Header = () => {
  return (
    <Container>
      <Layout>
        HEADER
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  background-color: lightblue;
`