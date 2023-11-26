import { theme } from '../../../../../styles/Theme'
import { EducationTitle } from '../../EducationTitle'
import styled from 'styled-components'

type LanguagePropsType = {
   name: string,
   level: string,
   percent: string
}

export function Language(props: LanguagePropsType) {
   return (
      <StyledLanguage>
         <WrapperLanguageTitle percent={props.percent}>
            <EducationTitle>{props.name}</EducationTitle>
            <LanguageLevel>{props.level}</LanguageLevel>
         </WrapperLanguageTitle>
         <Progress>
            <ProgressLine percent={props.percent} />
         </Progress>
      </StyledLanguage>
   )
}

const StyledLanguage = styled.div`

`
const WrapperLanguageTitle = styled.div<{ percent: string }>`
display: flex;
justify-content: space-between;
align-items: center;
max-width: ${props => props.percent};
margin-bottom: 10px;

${EducationTitle}{
   margin: 0;
}
` 

const LanguageLevel = styled.span`
padding-left: 10px;
font-weight: 600;
letter-spacing: 0.725px;
text-transform: capitalize;
`

const Progress = styled.div`
width: 100%;
border: 1px solid ${theme.colors.borders.progressBar};
border-radius: 50px;
height: 25px;
margin-bottom: 20px;
`

const ProgressLine = styled.div<{ percent: string }>`
height: 100%;
border-radius: 50px;
background-image: linear-gradient(180deg, ${theme.colors.progressLine.primary}, ${theme.colors.progressLine.secondary});
max-width: ${props => props.percent};
`