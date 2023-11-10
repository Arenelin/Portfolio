import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'

export function Studies() {
  return (
     <StyledStudies>
        <SectionTitle>Studies</SectionTitle>
        <Organization/>
    </StyledStudies>
  )
}

const StyledStudies = styled.div`
   flex-basis: 478px;
`

 