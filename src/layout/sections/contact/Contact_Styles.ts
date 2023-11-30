import styled from "styled-components"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"
import { SectionTitle } from "../../../components/SectionTitle"
import { font } from "../../../styles/Common"

const Contact = styled.section`
text-align: center;

${SectionTitle}{
  ${font({ PxMax: 56, PxMin: 35, fw: 400, ls: 0 })};
  &::before{
    display: none;
  }
  & span{
    color: ${theme.colors.accentColors.secondary};
  }
}
`

const Form = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

textarea{
margin-top: 20px;
height: 155px;
}

${Button}{
font-size: 20px;
padding: 10px 40px;
}
`

const Map = styled.iframe<{ allowfullscreen: string, loading: string, referrerpolicy: string }>`
border: 0;
max-width: 500px;
width: 100%;
height: 340px;
margin-bottom: 50px;
`
export const S = {
   Contact,
   Form,
   Map
}