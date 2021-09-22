import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
        list-style-type: none;
    }

    a {
        border: 1px solid hsl(0 100% 100%);
        border-radius: 50%;
        color: hsl(0 100% 100%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        text-decoration: none;
    }
`