import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'
import { FlexWrapper } from '../../../../components/FlexWrapper'

export function Studies() {
  return (
     <StyledStudies>
        <FlexWrapper ai='center' direction='column'>
                      
        <SectionTitle>Studies</SectionTitle>
        <Organization name={'Medical College'} year={'2022'} />
        <Organization name={'IT-INCUBATOR'} year={'2024'} />
        </FlexWrapper>

    </StyledStudies>
  )
}

const StyledStudies = styled.div`
   flex-basis: 478px;
`

 