import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string,
  title: string
}

export function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
        <Icon iconId={props.iconId} />
        <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
/* width:290px; */
text-align: center;
border: 3px solid ${theme.colors.borders.skill};
padding: 20px 0;
transition: all .5s;
position: relative;
overflow: hidden;

&:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  transform: rotateY(50deg);
  background: linear-gradient(
    120deg,
    transparent,
    rgba(146, 148, 248, 0.4),
    transparent
  );
  transition: all 0.75s;
}

   &:hover{
      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
     transform: scale(1.2);
      &::before{
         left: 100%;
      }
   }
`

const SkillTitle = styled.h3`
padding-top: 20px;
`
