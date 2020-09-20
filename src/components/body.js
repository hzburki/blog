import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogCard } from "./index"
import { Layout } from "../styled-components"

export const Body = () => {
  const data = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              excerpt
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allMdx.edges.map(blog => {
        return (
          <BlogCard
            key={blog.node.frontmatter.slug}
            {...blog.node.frontmatter}
          />
        )
      })}
    </Layout>
  )
}
