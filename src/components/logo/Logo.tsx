import React from "react"
import { S } from "./Logo_Styles"

export const Logo: React.FC = () => {
   return (
      <S.Link href="#" >
         <S.LogoName aria-label='Top of page'>Nikita Akmaykin</S.LogoName>
      </S.Link>
   )
}