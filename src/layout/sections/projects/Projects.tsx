import { SectionTitle } from '../../../components/SectionTitle'
import { data } from './dataProjects/dataProjects'
import { Project } from './project/Project'
import { Container } from '../../../components/Container'
import React from 'react'
import { S } from './Projects_Styles'

export const Projects: React.FC = () => {
   return (
      <S.Projects>
         <Container>
            <SectionTitle>Projects</SectionTitle>
            <S.GridContainer>
               {data.map(project =>
                  <Project
                     key={project.id}
                     srcNative={project.srcNative}
                     srcWebp={project.srcWebp}
                     srcJpg={project.srcJpg}
                     tech={project.tech}
                     title={project.title}
                     descr={project.descr}
                     linkGit={project.linkGit}
                     linkDemo={project.linkDemo}
                  />
               )}
            </S.GridContainer>
         </Container>
      </S.Projects>
   )
}