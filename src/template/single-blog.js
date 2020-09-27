import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { BlogTitleSection, BlogBody, Footer } from "../components"

const SingleBlog = ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <>
      <HeaderSection>
        <BlogTitleSection data={frontmatter} />
      </HeaderSection>

      <BodySection>
        <BlogBody body={body} />
      </BodySection>

      <Footer />
    </>
  )
}

const HeaderSection = styled.section`
  padding: 6rem 0 3rem 0;

  @media (max-width: 800px) {
    padding-bottom: 1rem;
  }
`

const BodySection = styled.section``

export default SingleBlog

export const SingleBlogQuery = graphql`
  query SingleBlogQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
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
