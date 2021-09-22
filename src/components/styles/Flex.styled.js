import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`
