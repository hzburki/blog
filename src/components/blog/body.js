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
  padding: 2rem;
  border-radius: 15px;
  background-color: white;

  /* Shadow */
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);

  /* Border around blog content */
  max-width: 904px;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0.5rem;
  }

  /* Remove border radius for small devices */
  @media ${props => props.theme.breakpoints.thirteenInch},
    ${props => props.theme.breakpoints.tablet},
    ${props => props.theme.breakpoints.mobile} {
    border-radius: 0;
    padding: 2rem 0.8rem;
  }

  /* Blog content styling */
  h1 {
    font-size: 36px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 26px;
    }
  }
  h2 {
    font-size: 34px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 32px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 22px;
    }
  }
  h4 {
    font-size: 30px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 20px;
    }
  }
  h5 {
    font-size: 28px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 18px;
    }
  }
  h6 {
    font-size: 26px;
    margin-bottom: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 16px;
    }
  }

  @media ${props => props.theme.breakpoints.thirteenInch},
    ${props => props.theme.breakpoints.tablet},
    ${props => props.theme.breakpoints.mobile} {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: left;
    }
  }

  /* Seperator */
  hr {
    margin: 2rem 6rem;
    height: 1px;
    background-color: grey;
    border: 0;
    border-radius: 10px;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
        margin: 2rem 0;
    }
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
    font-size: 21px;
    margin-bottom: 0.5px;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 18px;
    }

    p {
      margin-bottom: 0;
    }

    code {
      padding: 0 0.25rem;
      font-size: 21px;
      border-radius: 5px;

      @media ${props => props.theme.breakpoints.tablet},
        ${props => props.theme.breakpoints.mobile} {
        font-size: 18px;
      }
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
    font-size: 21px;
    margin-bottom: 2rem;

    @media ${props => props.theme.breakpoints.tablet},
      ${props => props.theme.breakpoints.mobile} {
      font-size: 18px;
    }
  }

  /* Quote */
  blockquote {
    border-left: 4px solid grey;
    padding-left: 1rem;
    margin-bottom: 2rem;
    background-color: whitesmoke;

    p {
      padding: 0.5rem 0.5rem 0.5rem 0rem;
      font-size: 21px;

      @media ${props => props.theme.breakpoints.tablet},
        ${props => props.theme.breakpoints.mobile} {
        font-size: 18px;
      }
    }
  }

  /* Code */
  pre {
    margin-bottom: 2rem;

    @media ${props => props.theme.breakpoints.mobile} {
      width: calc(100vw - 2rem);
    }
  }
  p {
    code {
      font-size: 21px;
      border-radius: 5px;
      padding: 0 0.25rem;

      @media ${props => props.theme.breakpoints.tablet},
        ${props => props.theme.breakpoints.mobile} {
        font-size: 18px;
      }
    }
  }
`
