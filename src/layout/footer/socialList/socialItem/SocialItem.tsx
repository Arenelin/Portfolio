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
animation: animate 3s linear infinite;
text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
    
@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

&:hover{
   transform: translateY(-4px) scale(1.4);
   background-color: ${theme.colors.accentPrimary};
   color: ${theme.colors.primaryBg};
}
`