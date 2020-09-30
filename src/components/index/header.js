import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Container } from "../../components"

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Wrapper>
        <ProfilePicture fluid={data.profilePicture.childImageSharp.fluid} />

        <Name>Haseeb Zia Burki</Name>

        <Introduction>
          I’m a full stack engineer working at Numu, incharge of developing web
          and mobile apps, handling AWS services and devOps tasks.
        </Introduction>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`

const ProfilePicture = styled(Img)`
  height: 190px;
  width: 190px;
  border: 1px solid grey;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
  box-shadow: 2px 2px 5px 0px rgba(112, 112, 112, 1);
`

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const Introduction = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
`
