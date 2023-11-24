import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { data } from './dataProjects/dataProjects'
import { Project } from './project/Project'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export function Projects() {
   return (
      <StyledProjects>
         <Container>
            <SectionTitle>Projects</SectionTitle>
            <GridContainer>
               {data.map(project =>
                  <Project
                     key={project.id}
                     src={project.src}
                     tech={project.tech}
                     title={project.title}
                     descr={project.descr} />
               )}
            </GridContainer>
         </Container>
      </StyledProjects>
   )
}

const StyledProjects = styled.section`

`

const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, minmax(362px, 607px));
   grid-auto-rows: 452px;
   gap: 15px;


   @media ${theme.media.tablet}{
      grid-template-columns: repeat(1, minmax(250px, 607px));
      justify-content: center;
      grid-auto-rows: 402px;
   }
`