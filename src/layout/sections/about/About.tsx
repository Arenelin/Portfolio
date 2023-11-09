import React from 'react'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.webp'

export function About() {
   return (
      <StyledAbout>
         <FlexWrapper jsc={'space-around'} ai={'center'}>
            <AboutPhoto src={myPhoto} alt='Photo'/>
            <AboutInfo>
               <AboutTitle>About me</AboutTitle>
               <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
                  Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.
               </AboutDescription>
            </AboutInfo>
         </FlexWrapper>
      </StyledAbout>
   )
}

const StyledAbout = styled.div`
   background-color: #2B2A2A;
`

const AboutPhoto = styled.img`
   max-width: 470px;
   max-height: 518px;
   object-fit: cover;
`

const AboutInfo = styled.div`
   
`

const AboutTitle = styled.h2`
   
`

const AboutDescription = styled.p`
   
`
