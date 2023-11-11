import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

export function SocialItem(props:{iconId: string}) {
  return (
     <StyledSocialItem>
        <SocialLink href='#'>
           <Icon
              iconId={props.iconId}
              w='30'
              h='30'
              viewBox='0 0 30 30'
           />
        </SocialLink>
    </StyledSocialItem>
  )
}

const StyledSocialItem = styled.li`
   
`

const SocialLink = styled.a`
   
`