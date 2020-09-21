import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

import { Layout } from "../styled-components"
import { BlogTitleSection, BlogBody } from "../components"

const SingleBlog = ({ data }) => {
  const { body, frontmatter: { date, title } } = data.mdx

  return (
    <Layout>
      <HeaderSection>
        <BlogTitleSection date={date} title={title} />
      </HeaderSection>

      <BodySection>
        <BlogBody body={body} />
      </BodySection>
    </Layout>
  )
}

const HeaderSection = styled.section`
  padding: 2rem 0;
`

const BodySection = styled.section`
  padding: 0 2rem;
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