import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { data } from '../skills/dataSkills/dataSkills'
import { Container } from '../../../components/Container'
import { S } from './Skills_Styles'
import React from 'react'

export const Skills: React.FC = () => {
   return (
      <S.Skills>
         <Container>
            <SectionTitle>Tech Stack</SectionTitle>
            <S.GridContainer>
               {data.map(skill =>
                  <Skill
                     key={skill.id}
                     iconId={skill.iconId}
                     title={skill.title} />
               )}
            </S.GridContainer>
         </Container>
      </S.Skills>
   )
}