import { data } from '../dataSocialLinks/dataSocialLinks'
import { SocialItem } from './socialItem/SocialItem'
import { S } from '../Footer_Styles'
import React from 'react'

export const SocialList: React.FC = () => {
   return (
      <S.SocialList role='list'>
         {data.map(item =>
            <SocialItem
               key={item.id}
               iconId={item.iconId}
               link={item.link}
               ariaLabel={item.ariaLabel}
            />
         )}
      </S.SocialList>
   )
}