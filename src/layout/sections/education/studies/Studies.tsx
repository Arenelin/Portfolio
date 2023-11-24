import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'
import { FlexWrapper } from '../../../../components/FlexWrapper'

export function Studies() {
   return (
      <StyledStudies>
         <FlexWrapper ai='center' direction='column'>
            <SectionTitle>Studies</SectionTitle>
            <Organization name={'Medical College'} years={'2018-2022'} />
            <Organization name={'IT-INCUBATOR'} years={'2023-2024'} />
         </FlexWrapper>
      </StyledStudies>
   )
}

const StyledStudies = styled.div`
   max-width: 460px;
   width: 100%;

   @media screen and (max-width: 992px){
   ${SectionTitle}{
      margin-top: 20px;
   }
}
`