import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Language } from './language/Language'
import { S } from './Languages_Styles'

export const Languages: React.FC = () => {
  return (
    <S.Languages>
      <SectionTitle>Languages</SectionTitle>
      <Language name={'Russian'}
        level={'Fluent'}
        percent={'100%'} />
      <Language name={'English'}
        level={'Intermediate'}
        percent={'50%'} />
    </S.Languages>
  )
}