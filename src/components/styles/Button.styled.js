import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.24);
  font-size: 16px;
  font-weight: 700;
  padding: 0.27em 1.1em;
  background-color: ${({ bg }) => bg || 'hsl(0 100% 100%)'};
  color: ${({ color }) => color || 'hsl(0 0% 20%)'};
  
    &:hover {
        opacity 0.96;
        transform: scale(0.98);
    }
  `
