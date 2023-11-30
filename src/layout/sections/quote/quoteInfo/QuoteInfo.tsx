import React from "react"
import { S } from "../Quote_Styles"

type QuoteInfoPropsType = {
   title: string,
   text: string,
   author: string
}

export const QuoteInfo: React.FC<QuoteInfoPropsType> = (props: QuoteInfoPropsType) => {
   return (
      <S.QuoteInfo>
         <S.QuoteTitle>{props.title}</S.QuoteTitle>
         <S.Description>{props.text}</S.Description>
         <S.Author>{props.author}</S.Author>
      </S.QuoteInfo>
   )
}