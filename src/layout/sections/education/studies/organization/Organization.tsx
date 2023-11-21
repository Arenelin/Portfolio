import styled from 'styled-components'
import { EducationTitle } from '../../EducationTitle'
import { Icon } from '../../../../../components/icon/Icon'
import { theme } from '../../../../../styles/Theme'

type OrganizationPropsType = {
  name: string,
  years: string
}

export function Organization(props: OrganizationPropsType) {
  return (
    <StyledOrganization>
      <Circle>
        <Icon iconId='study' w='35' h='35' viewBox='0 0 35 35' />
      </Circle>
      <OrganizationInfo>
        <EducationTitle>{props.name}</EducationTitle>
        <OrganizationYear>{props.years}</OrganizationYear>
      </OrganizationInfo>
    </StyledOrganization>
  )
}

const StyledOrganization = styled.div`
  display: flex;
  align-items: center;  
  margin-bottom: 25px;
  width: 100%;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  background-image: linear-gradient(180deg, ${theme.colors.studiesCircle.primary}, ${theme.colors.studiesCircle.secondary});
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
`

const OrganizationInfo = styled.div`
max-width: 360px;
`

const OrganizationYear = styled.span`
color: ${theme.colors.studiesYear};
font-size: 17px;
font-weight: 300;
letter-spacing: 1px;
text-transform: capitalize;
`