import styled from 'styled-components'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export function SocialList() {
   return (
      <StyledSocialList>
         <SocialItem>
            <SocialLink href='#'>
               <FaTelegramPlane size={21} />
            </SocialLink>
         </SocialItem>
         <SocialItem>
            <SocialLink href='#'>
               <BsInstagram size={21} />
            </SocialLink>
         </SocialItem>
         <SocialItem>
            <SocialLink href='#'>
               <BsGithub size={21} />
            </SocialLink>
         </SocialItem>
         <SocialItem>
            <SocialLink href='#'>
               <BsLinkedin size={21} fill='red'/>
            </SocialLink>
         </SocialItem>
      </StyledSocialList>
   )
}

const StyledSocialList = styled.ul`
display: flex;
gap: 30px;
justify-content: center;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
