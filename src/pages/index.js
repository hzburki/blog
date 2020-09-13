import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

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

export const AllBlogsQuery = graphql`
  query AllBlogsQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
