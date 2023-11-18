import styled from 'styled-components'
import { SocialList } from './socialList/SocialList'

export function Footer() {
  return (
     <StyledFooter>
        <Name>Nikita</Name>
        <SocialList/>
        <Copyright>© 2023 Nikita Akmaykin, All Rights Reserved.</Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
   background-color:#696969;
   text-align: center;

`

const Name = styled.span`

`
const Copyright = styled.small`

`

//Добавить при наведении на иконку scale + свечение логотипа и надписей в блоке main + неоновые иконки на соцсети