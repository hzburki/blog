import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

export const BlogBody = ({ body }) => {
  return (
    <MarkdownWrapper>
      <MDXRenderer>{body}</MDXRenderer>
    </MarkdownWrapper>
  )
}

const MarkdownWrapper = styled.div`
  /* Headings */
  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 28px;
  }
  h5 {
    font-size: 26px;
  }
  h6 {
    font-size: 24px;
  }
  /* Seperator */
  hr {
    margin: 2rem 6rem;
    height: 1px;
    background-color: grey;
    border: 0;
    border-radius: 10px;
  }
  /* Italics */
  em {
    font-style: italic;
  }
  strong {
    font-weight: 700;
  }
  li {
    margin-left: 1.5rem;
  }
  a {
    text-decoration: underline;
    font-weight: 700;
    color: black;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    margin: 1rem 0;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
    box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  }
`
