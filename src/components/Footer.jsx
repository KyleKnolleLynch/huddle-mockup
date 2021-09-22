import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons.jsx'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="logo_white" />

                <Flex>
                    <ul><li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam illum exercitationem sunt dicta.</li>
                        <li>+1-555-555-5555</li>
                        <li>example@huddle.com</li>
                        </ul>

                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer