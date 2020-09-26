import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled, { css } from "styled-components"
import { Layout } from "../../styled-components"

export const BlogTitleSection = ({ data: { title, date, featureImage } }) => {
  return (
    <>
      <Layout>
        <Wrapper>
          <BackButton to="/">&#x2190; Back</BackButton>

          <BlogTitle>{title}</BlogTitle>

          <PublishedDate>{date}</PublishedDate>
        </Wrapper>
      </Layout>

      {/* <GatsbyImageWrapper> */}
        <GatsbyImage fluid={featureImage.childImageSharp.fluid} />
      {/* </GatsbyImageWrapper> */}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const BlogTitle = styled.h1`
  font-size: calc(1vw + 2rem);
  text-align: center;
  margin: 1rem 0;
`

const BackButton = styled(Link)`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-size: calc(1vw + 1rem);
`

const PublishedDate = styled.p`
  font-size: calc(1vw + 0.5rem);
`

const GatsbyImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GatsbyImage = styled(Img)`
  margin-top: 1rem;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  
  @media (min-width: 1501px) {
    border-radius: 15px;
  }
`
