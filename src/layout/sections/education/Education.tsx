import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Languages } from './languages/Languages'
import { Studies } from './studies/Studies'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'

export function Education() {
   return (
      <StyledEducation>
         <Container>
            <FlexWrapper jc='space-between'>
               <Languages />
               <Studies />
            </FlexWrapper>
         </Container>
      </StyledEducation>
   )
}

const StyledEducation = styled.section`
   background-color: ${theme.colors.secondaryBg};
`
