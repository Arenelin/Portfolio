import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'

export function Studies() {
  return (
     <StyledStudies>
        <SectionTitle>Studies</SectionTitle>
        <Organization name={'Medical College'} year={'2022'} />
        <Organization name={'IT-INCUBATOR'} year={'2024'} />
    </StyledStudies>
  )
}

const StyledStudies = styled.div`
   flex-basis: 478px;
`

 