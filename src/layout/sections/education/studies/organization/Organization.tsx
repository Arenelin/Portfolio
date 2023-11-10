import styled from 'styled-components'
import { EducationTitle } from '../../EducationTitle'
import { Icon } from '../../../../../components/icon/Icon'

type OrganizationPropsType = {
  name: string,
  year: string
}

export function Organization(props: OrganizationPropsType) {
  return (
    <StyledOrganization>
      <Circle>
        <Icon iconId='study' w='35' h='35' viewBox='0 0 35 35' />
      </Circle>
      <OrganizationInfo>
        <EducationTitle>{props.name}</EducationTitle>
        <span>{props.year}</span>
      </OrganizationInfo>
    </StyledOrganization>
  )
}

const StyledOrganization = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  background: linear-gradient(180deg, #15B9B9 0%, #3C1DFF 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
`

const OrganizationInfo = styled.div`

`