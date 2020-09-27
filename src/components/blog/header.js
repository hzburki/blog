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
  font-size: 48px;

  @media ${props => props.theme.breakpoints.tablet},
    ${props => props.theme.breakpoints.mobile} {
      font-size: 36px;
  }

  text-align: center;
  margin: 1rem 0;
`

const BackButton = styled(Link)`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-size: 21px;

  @media ${props => props.theme.breakpoints.tablet},
    ${props => props.theme.breakpoints.tablet} {
      font-size: 18px;
  }
`

const PublishedDate = styled.p`
  font-size: 18px;

  @media ${props => props.theme.breakpoints.tablet},
    ${props => props.theme.breakpoints.mobile} {
      font-size: 14px;
  }
`

const GatsbyImage = styled(Img)`
  margin: 1rem auto 0 auto;

  @media ${props => props.theme.breakpoints.banner} {
    border-radius: 15px;
  }
`
