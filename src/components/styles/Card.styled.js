import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(0 100% 100%);
    border-radius: 15px;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.15);
    margin: 40px 0;
    padding: 60px;

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

   

    @media (min-width: ${({ theme }) => theme.mobile}) {
        flex-direction: row;

        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }
`