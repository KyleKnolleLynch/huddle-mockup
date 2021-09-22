import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  svg {
    margin-bottom: 20px;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;

    svg {
      margin-bottom: 0;
    }
  }
`

export const Image = styled.img`
  width: 375px;
  margin: 20px 0 30px 0;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0 0 40px;
  }
`
