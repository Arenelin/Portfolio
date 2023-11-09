import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'

export function Skills() {
  return (
     <StyledSkills>
        <SectionTitle>Tech Stack</SectionTitle>
        <FlexWrapper wrap='wrap'>
           <Skill iconId={'html'} title={'HTML5'}/>
           <Skill iconId={'css'} title={'CSS3'}/>
           <Skill iconId={'js'} title={'JavaScript'}/>
           <Skill iconId={'typescript'} title={'TypeScript'}/>
           <Skill iconId={'react'} title={'React'}/>
           <Skill iconId={'redux'} title={'Redux'}/>
           <Skill iconId={'styled-comp'} title={'Styled Components'}/>
           <Skill iconId={'git'} title={'GIT'}/>
        </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
   background-color: #b3aaaa;
`