import React from "react"
import styled from "styled-components"

import { Layout } from "../../styled-components"

export const Header = () => {
  return (
    <Layout>
      <ProfilePicture />

      <Name>
        Haseeb Zia Burki
      </Name>

      <Introduction>
        This is my personal blog. Here, I sporadically write about my technical adventures. 
      </Introduction>
    </Layout>
  )
}

const ProfilePicture = styled.div`
  height: 150px;
  width: 150px;
  border: 2px solid grey;
  border-radius: 50%;
  margin-bottom: 1rem;
`

const Name = styled.h1`
`

const Introduction = styled.h2`
`