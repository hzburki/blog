import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Layout } from "../../styled-components"

export const BlogTitleSection = ({ title, date }) => {
  return (
    <Layout>
      <Wrapper>
        <BackButton to="/">
          &#x2190; Back
        </BackButton>

        <BlogTitle>
          {title}
        </BlogTitle>

        <PublishedDate>
          {date}
        </PublishedDate>
      </Wrapper>
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

const PublishedDate = styled.p`
`