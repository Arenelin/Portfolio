import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { data } from '../skills/dataSkills/dataSkills'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export function Skills() {
   return (
      <StyledSkills>
         <Container>
            <SectionTitle>Tech Stack</SectionTitle>
            <GridContainer>
               {data.map(skill =>
                  <Skill
                     key={skill.id}
                     iconId={skill.iconId}
                     title={skill.title} />
               )}
            </GridContainer>
         </Container>
      </StyledSkills>
   )
}

const StyledSkills = styled.section`
`

const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(233px, 1fr));
grid-auto-rows: 155px;
gap: 10px;
justify-content: space-evenly;

@media ${theme.media.laptop}{
   grid-template-columns: repeat(3, minmax(240px,1fr));
}
 @media ${theme.media.tablet}{
    grid-template-columns: repeat(2, minmax(269px,320px)); 
}
@media ${theme.media.mobile}{
   grid-template-columns: repeat(2, minmax(50%,320px));
} 
`