import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faMedium, faDev, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

const socials = [{
  icon: faLinkedin, 
  href: "https://www.linkedin.com/in/haseeb-burki-%F0%9F%90%A7-737794bb/?originalSubdomain=pk",
  alt: "Haseeb Zia Burki LinkedIn - hzburki"
}, {
  icon: faGithub, 
  href: "https://github.com/hzburki",
  alt: "Haseeb Zia Burki Github - hzburki"
}, {
  icon: faMedium, 
  href: "https://medium.com/@hzburki",
  alt: "Haseeb Zia Burki Medium - hzburki"
}, {
  icon: faDev, 
  href: "https://dev.to/hzburki",
  alt: "Haseeb Zia Burki Dev.to - hzburki"
}, {
  icon: faStackOverflow, 
  href: "https://stackoverflow.com/users/7027615/haseeb-burki",
  alt: "Haseeb Zia Burki StackOverflow - hzburki"
}]

const SocialIcon = ({ icon, href, alt }) => {
  return (
    <SocialLinks href={href} alt={alt} target="__blank">
      <FontAwesome icon={icon} />
    </SocialLinks>
  )
}

export const Socials = () => {
  return (
    <Wrapper>
      {socials.map((item, index) => {
        return (
          <SocialIcon key={index} {...item} />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: center;
    margin: 1rem 0;
  }
`

const FontAwesome = styled(FontAwesomeIcon)`
  margin: 0 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`

const SocialLinks = styled.a`
  color: black;
`
