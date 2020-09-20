import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { Header, Body, Footer } from "../components"

export default function Home({ data }) {
  return (
    <Container>
      <Header />

      <Body>
        <ul>
          {data.allMdx.edges.map(item => {
            const { slug, title } = item.node.frontmatter

            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </Body>

      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "body body body"
    "footer footer footer";
`

export const AllBlogsQuery = graphql`
  query AllBlogsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
