import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'

export function SocialItem(props:{iconId:string}) {
  return (
     <StyledSocialItem>
        <SocialLink href='#'>
           <Icon iconId={props.iconId} w='21' h='21' viewBox='0 0 16 16'/>
        </SocialLink>
    </StyledSocialItem>
  )
}

const StyledSocialItem = styled.li`

`

const SocialLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
width: 45px;
height: 45px;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.1);
color: ${theme.colors.accentPrimary};
transition: all .4s;

&:hover{
   transform: translateY(-4px) scale(1.35);
   background-color: ${theme.colors.accentPrimary};
   color: #111;
}
`