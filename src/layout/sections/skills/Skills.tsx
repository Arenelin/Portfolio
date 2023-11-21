import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { data } from '../skills/dataSkills/dataSkills'
import { Container } from '../../../components/Container'

export function Skills() {
   return (
      <StyledSkills>
         <Container>
            <SectionTitle>Tech Stack</SectionTitle>
            <FlexWrapper wrap='wrap' gap='10px'>
               {data.map(skill =>
                  <Skill
                     key={skill.id}
                     iconId={skill.iconId}
                     title={skill.title} />
               )}
            </FlexWrapper>
         </Container>
      </StyledSkills>
   )
}

const StyledSkills = styled.section`

`