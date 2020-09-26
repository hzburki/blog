import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import { Layout } from "../../styled-components"

export const BlogBody = ({ body }) => {
  return (
    <Layout>
      <MarkdownWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </MarkdownWrapper>
    </Layout>
  )
}

const MarkdownWrapper = styled.div`
  border-radius: 15px;
  padding: 2rem;
  text-align: justify;
  background-color: white;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);

  h1 {
    font-size: 34px;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 30px;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 28px;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-size: 26px;
    margin-bottom: 0.5rem;
  }
  h6 {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
  /* Seperator */
  hr {
    margin: 2rem 6rem;
    height: 1px;
    background-color: grey;
    border: 0;
    border-radius: 10px;
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: 700;
  }
  /* Lists */
  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 0.5px;

    p {
      margin-bottom: 0;
    }

    code {
      padding: 0 0.25rem;
      font-size: 18px;
      border-radius: 5px;
    }
  }
  a {
    text-decoration: underline;
    font-weight: 700;
    color: black;
  }
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    margin-top: 1rem;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
    box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  }
  p {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 2rem;
  }
  /* Quote */
  blockquote {
    border-left: 4px solid grey;
    padding-left: 1rem;
    margin-bottom: 2rem;
    background-color: whitesmoke;
    
    p {
      padding: 0.5rem 0.5rem 0.5rem 0rem;
    }
  }
  /* Code */
  pre {
    margin-bottom: 2rem;
  }
  p {
    code {
      padding: 0 0.25rem;
      font-size: 18px;
      border-radius: 5px;
    }
  }
`
