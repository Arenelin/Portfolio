import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Education = styled.section`

@media ${theme.media.laptop}{
   ${FlexWrapper}{
      justify-content: center;
   }
}
`

export const S = {
   Education,
}