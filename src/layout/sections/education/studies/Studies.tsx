import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import img from '../../../../assets/images/myPhoto.jpg';

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
   flex-basis: 478px;
   /* position: relative; */
      

/* &::before{
   content: '';
  display: inline-block;
  width: 300px;
  height: 300px;
  background-image: url(${img});
  background-size: cover;
  /* position: absolute;
  top: 0;
  right: 0; */
 
`

