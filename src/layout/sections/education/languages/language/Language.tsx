import { EducationTitle } from '../../EducationTitle'
import { S } from '../Languages_Styles'
import React from 'react'

type LanguagePropsType = {
   name: string,
   level: string,
   percent: string
}

export const Language: React.FC<LanguagePropsType> = (props: LanguagePropsType) => {
   return (
      <S.Language>
         <S.WrapperLanguageTitle percent={props.percent}>
            <EducationTitle>{props.name}</EducationTitle>
            <S.LanguageLevel>{props.level}</S.LanguageLevel>
         </S.WrapperLanguageTitle>
         <S.Progress>
            <S.ProgressLine percent={props.percent} />
         </S.Progress>
      </S.Language>
   )
}