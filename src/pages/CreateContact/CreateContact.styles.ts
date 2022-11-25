import styled from 'styled-components'

export const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`

export const ContainerForm = styled.div(
  ({
    theme: {
      responsive: { up, breakpoints }
    }
  }) => `
    width:80%;
    max-width:500px;
    ${up(breakpoints.md)}{
      width:50%;
    }
  `
)
