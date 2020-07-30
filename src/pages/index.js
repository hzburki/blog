import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
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
    </div>
  )
}

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
