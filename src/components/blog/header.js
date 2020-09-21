import React from "react"
import styled from "styled-components"

import { Layout } from "../../styled-components"

export const BlogTitleSection = ({ title, date }) => {
  return (
    <Layout>
      <BlogTitle>
        {title}
      </BlogTitle>

      <PublishedDate>
        {date}
      </PublishedDate>
    </Layout>
  )
}

const BlogTitle = styled.h1`
`

const PublishedDate = styled.p`
`