import React from 'react';
import styled from "styled-components"

import { Layout } from "../styled-components";

export const Body = ({ children }) => {
  return (
    <Container>
      <Layout>
        {children}
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  grid-area: body;
  border: 1px solid black;
  background-color: pink;
`