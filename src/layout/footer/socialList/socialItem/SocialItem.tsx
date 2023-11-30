import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import { S } from '../../Footer_Styles'

type SocialItemPropsType = {
  iconId: string,
  ariaLabel: string,
  link: string
}

export const SocialItem: React.FC<SocialItemPropsType> = (props: SocialItemPropsType) => {
  return (
    <S.SocialItem role='listitem'>
      <S.SocialLink aria-label={props.ariaLabel} href={props.link}>
        <Icon iconId={props.iconId} w='21' h='21' viewBox='0 0 16 16' />
      </S.SocialLink>
    </S.SocialItem>
  )
}