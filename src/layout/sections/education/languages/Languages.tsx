import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Language } from './language/Language'

export function Languages() {
  return (
     <StyledLanguages>
        <SectionTitle>Languages</SectionTitle>
        <Language name={'Russian'} 
                  level={'Fluent'} 
                  percent={'100%'} />
        <Language name={'English'} 
                  level={'Intermediate'} 
                  percent={'50%'} />
    </StyledLanguages>
  )
}

const StyledLanguages = styled.div`
  max-width: 488px;
  width: 100%;
`