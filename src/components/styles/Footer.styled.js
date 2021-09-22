import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: hsl(0 100% 100%);
    padding: 100px 0 60px;
    text-align: center;

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        text-align: left;
        p {
            text-align: right;
        }
    }
`