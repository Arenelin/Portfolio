import { FlexWrapper } from '../../../components/FlexWrapper'
import { Languages } from './languages/Languages'
import { Studies } from './studies/Studies'
import { Container } from '../../../components/Container'
import { S } from './Education_Styles'
import React from 'react'

export const Education: React.FC = () => {
   return (
      <S.Education>
         <Container>
            <FlexWrapper jc='space-between' wrap='wrap' gap='25px' rowG='50px'>
               <Languages />
               <Studies />
            </FlexWrapper>
         </Container>
      </S.Education>
   )
}