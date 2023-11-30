import styled from "styled-components"
import { changeSize } from "../../../../styles/Common"
import { theme } from "../../../../styles/Theme"

//Studies
const Studies = styled.div`
   max-width: 450px;
   width: 100%;
`

//Separate organization
const Organization = styled.div`
align-self: end;
  display: flex;
  align-items: center;  
  margin-bottom: 25px;
  justify-content: end;
 width: ${changeSize({PxMin: 330, PxMax: 345, Vmax: 1440, Vmin: 992})};
 gap: 22px;

  &:last-child{
    margin: 0;
  }

  @media ${theme.media.laptop}{
    width: 100%;
  }
`

const Circle = styled.div`
  border-radius: 50%;
  min-width: 90px;
  height: 90px;
  background-image: linear-gradient(180deg, ${theme.colors.studiesCircle.primary}, ${theme.colors.studiesCircle.secondary});
  display: flex;
  justify-content: center;
  align-items: center;
  `

const OrganizationInfo = styled.div`
flex-grow: 1;
`

const OrganizationYear = styled.span`
color: ${theme.colors.fontsColors.studiesYear};
font-size: 17px;
font-weight: 300;
letter-spacing: 1px;
text-transform: capitalize;
`

export const S = {
   Studies,
   Organization,
   Circle,
   OrganizationInfo,
   OrganizationYear,
}