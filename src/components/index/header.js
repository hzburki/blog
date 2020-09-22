import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../../styled-components"

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
    <Layout>
      <Wrapper>
        <ProfilePicture fluid={data.profilePicture.childImageSharp.fluid} />

        <Name>Haseeb Zia Burki</Name>

        <Introduction>
          I’m a full stack engineer working at Numu, in charge of developing web
          and mobile apps, handling AWS applications and devOps tasks. I may
          also write sporadically about my technical adventures.
        </Introduction>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
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
