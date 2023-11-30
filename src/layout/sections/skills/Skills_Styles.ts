import styled from "styled-components"
import { theme } from "../../../styles/Theme"



//All skills
const Skills = styled.section`

`

const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(233px, 1fr));
grid-auto-rows: 155px;
gap: 10px;
justify-content: space-evenly;

@media ${theme.media.laptop}{
   grid-template-columns: repeat(3, minmax(240px,1fr));
}
 @media ${theme.media.tablet}{
    grid-template-columns: repeat(2, minmax(269px,320px)); 
}
@media ${theme.media.mobile}{
   grid-template-columns: repeat(2, minmax(50%, 320px));
} 
`

//Separate skill
const Skill = styled.div`
text-align: center;
border: 3px solid ${theme.colors.borders.skill};
padding: 20px 0;
transition: all .5s;
position: relative;
overflow: hidden;
`

const SkillTitle = styled.h3`
padding-top: 20px;
`


export const S = {
   Skills,
   GridContainer,
   Skill,
   SkillTitle
}