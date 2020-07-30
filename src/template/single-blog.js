import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SingleBlog = ({ data }) => {
  return (
    <>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  )
}

export default SingleBlog

export const SingleBlogQuery = graphql`
  query SingleBlogQuery($id: String!) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date
        excerpt
        slug
        featureImage {
          childImageSharp {
            fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
        title
      }
    }
  }
`