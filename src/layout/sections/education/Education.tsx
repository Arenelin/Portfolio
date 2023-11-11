import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Languages } from './languages/Languages'
import { Studies } from './studies/Studies'

export function Education() {
   return (
      <StyledEducation>
         <FlexWrapper jc='space-around' ai='center'>
            <Languages />
            <Studies/>
         </FlexWrapper>
      </StyledEducation>
   )
}

const StyledEducation = styled.section`
   background-color: #1f1f1f;
`
