import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled, { css } from "styled-components"
import { Layout } from "../../styled-components"

export const BlogTitleSection = ({ data: { title, date, featureImage } }) => {
  return (
    <Layout>
      <Wrapper>
        <BackButton to="/">&#x2190; Back</BackButton>

        <BlogTitle>{title}</BlogTitle>

        <PublishedDate>{date}</PublishedDate>
      </Wrapper>

      <GatsbyImage fluid={featureImage.childImageSharp.fluid} />
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const BlogTitle = styled.h1`
  font-size: 2.6rem;
  text-align: center;
  margin: 1rem 0;
`

const BackButton = styled(Link)`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
`

const PublishedDate = styled.p``

const GatsbyImage = styled(Img)`
  margin-top: 1rem;
  border-radius: 15px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
`
