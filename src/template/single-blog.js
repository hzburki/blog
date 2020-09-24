import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

import { BlogTitleSection, BlogBody, Footer } from "../components"

const SingleBlog = ({ data }) => {
  const { body, frontmatter: { date, title } } = data.mdx

  return (
    <>
      <HeaderSection>
        <BlogTitleSection date={date} title={title} />
      </HeaderSection>

      <BodySection>
        <BlogBody body={body} />
      </BodySection>

      <Footer />
    </>
  )
}

const HeaderSection = styled.section`
  padding: 6rem 0 5rem 0;
`

const BodySection = styled.section`
`

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