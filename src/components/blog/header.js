import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { Container } from "../../styled-components"

export const BlogTitleSection = ({ data: { title, date, featureImage } }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <BackButton to="/">&#x2190; Back</BackButton>

          <BlogTitle>{title}</BlogTitle>

          <PublishedDate>{date}</PublishedDate>
        </Wrapper>
      </Container>

      <GatsbyImage fluid={featureImage.childImageSharp.fluid} />
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

const GatsbyImage = styled(Img)`
  margin: 1rem auto 0 auto;
  
  @media (min-width: 1501px) {
    border-radius: 15px;
  }
`
