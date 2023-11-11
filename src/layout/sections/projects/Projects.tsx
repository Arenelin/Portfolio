import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import {data} from './dataProjects/dataProjects'
import { Project } from './project/Project'

export function Projects() {
  return (
     <StyledProjects>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper jc='center' wrap='wrap'>
           {data.map(project => 
              <Project
                 key={project.id}
                 src={project.src}
                 tech={project.tech}
                 title={project.title} />
           )}
        </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
   background-color: #1f1f1f;
`