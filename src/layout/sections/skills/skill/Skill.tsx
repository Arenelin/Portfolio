import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
  width:23%;
  border: 1px solid black;
  margin: 10px;
`

const SkillTitle = styled.h3`
  
`
