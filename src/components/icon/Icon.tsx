import React from 'react'
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
   iconId: string,
   w?: string,
   h?: string,
   viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
   return (
      <svg width={props.w || '50px'} height={props.h || '50px'} viewBox={props.viewBox || '0 0 119 120'} fill="none" xmlns="http://www.w3.org/2000/svg">
         <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
   )
}