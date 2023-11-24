import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Language } from './language/Language'
import { theme } from '../../../../styles/Theme'

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
  margin-right: 15px;

  @media ${theme.media.tablet}{
    margin: 0;
  }
`