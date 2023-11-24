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
`

const SkillTitle = styled.h3`
padding-top: 20px;
`
