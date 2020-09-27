import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0.5rem;
  }
`
