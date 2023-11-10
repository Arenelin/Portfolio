import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import {data} from '../skills/dataSkills/dataSkills'

export function Skills() {
  return (
     <StyledSkills>
        <SectionTitle>Tech Stack</SectionTitle>
        <FlexWrapper wrap='wrap'>
           {data.map(skill =>
              <Skill
                 key={skill.id}
                 iconId={skill.iconId}
                 title={skill.title} />
            )};
        </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
   background-color: #1F1F1F;
`