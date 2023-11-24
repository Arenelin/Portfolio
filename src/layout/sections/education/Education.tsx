import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Languages } from './languages/Languages'
import { Studies } from './studies/Studies'
import { Container } from '../../../components/Container'

export function Education() {
   return (
      <StyledEducation>
         <Container>
            <FlexWrapper jc='space-between' wrap='wrap' gap='20px'>
               <Languages />
               <Studies />
            </FlexWrapper>
         </Container>
      </StyledEducation>
   )
}

const StyledEducation = styled.section`
@media screen and (max-width: 992px){
   ${FlexWrapper}{
      justify-content: center;
   }
}
`
