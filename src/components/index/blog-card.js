import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const BlogCard = ({ title, date, excerpt, slug }) => {
  return (
    <Link style={{ color: "black", textDecoration: "none" }} to={slug}>
      <Card>
        <Title>{title}</Title>

        <Date>{date}</Date>

        <Excerpt>{excerpt}</Excerpt>
      </Card>
    </Link>
  )
}

const Card = styled.div`
  border: 1px solid grey;
  margin: 2rem 0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${props => props.theme.shadows.shadow1};
`

const Title = styled.h1`
  margin-bottom: 5px;
`

const Excerpt = styled.p``

const Date = styled.p`
  margin-bottom: 20px;
`