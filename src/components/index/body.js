import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogCard } from "../index"
import { Container } from "../../components"

export const Body = () => {
  const data = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "blog" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM, DD YYYY")
              excerpt
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {data.allMdx.edges.map(blog => {
        return (
          <BlogCard
            key={blog.node.frontmatter.slug}
            {...blog.node.frontmatter}
          />
        )
      })}
    </Container>
  )
}
