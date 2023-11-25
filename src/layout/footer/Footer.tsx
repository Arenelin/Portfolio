import styled from 'styled-components'
import { SocialList } from './socialList/SocialList'
import { theme } from '../../styles/Theme'
import { Container } from '../../components/Container'
import { font } from '../../styles/Common'

export function Footer() {
   return (
      <StyledFooter>
         <Container>
            <Name>Nikita</Name>
            <SocialList />
            <Copyright>© 2023 Nikita Akmaykin. All Rights Reserved.</Copyright>
         </Container>
      </StyledFooter>
   )
}

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
text-align: center;
padding: 40px 0;
`

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
`
const Copyright = styled.small`
opacity: 0.5;
font-size: 12px;
`