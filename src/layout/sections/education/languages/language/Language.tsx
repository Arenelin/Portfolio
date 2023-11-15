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

         <div>
            <EducationTitle>{props.name}</EducationTitle>
            <span>{props.level}</span>
         </div>
         {/* <Progress> */}
            <ProgressLine percent={props.percent} />
         {/* </Progress> */}

      </StyledLanguage>
   )
}

const StyledLanguage = styled.div`

`

const ProgressLine = styled.div<{ percent: string }>`
   position: relative;
   height: 25px;
   border-radius: 50px;
   background: linear-gradient(90deg, #3C1DFF 18.63%, #14C9C9 78.88%);
   max-width: ${props => props.percent};

   span{
      position: absolute;
      top: -25px;
      right: 10px;
   }
`