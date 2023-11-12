import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

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

`