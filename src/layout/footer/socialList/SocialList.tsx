import styled from 'styled-components'
import {data} from '../dataSocialLinks/dataSocialLinks'
import { SocialItem } from './socialItem/SocialItem'

export function SocialList() {
   return (
      <StyledSocialList role='list'>
         {data.map(item =>
            <SocialItem
               key={item.id}
               iconId={item.iconId}
               ariaLabel = {item.ariaLabel}
            />
            )}
      </StyledSocialList>
   )
}

const StyledSocialList = styled.ul`
display: flex;
gap: 20px;
justify-content: center;
margin: 30px 0px;
`