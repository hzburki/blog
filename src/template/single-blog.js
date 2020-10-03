import React from "react"
import { graphql } from "gatsby"

import { BlogTitleSection, BlogBody, Layout } from "../components"

const SingleBlog = ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <Layout body={<BlogBody body={body} />} header={<BlogTitleSection data={frontmatter} />} />
  )
}

export default SingleBlog

export const SingleBlogQuery = graphql`
  query SingleBlogQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM, DD YYYY")
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
