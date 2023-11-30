import { EducationTitle } from '../../EducationTitle'
import { Icon } from '../../../../../components/icon/Icon'
import { S } from '../Studies_Styles'
import React from 'react'

type OrganizationPropsType = {
  name: string,
  years: string
}

export const Organization: React.FC<OrganizationPropsType> = (props: OrganizationPropsType) => {
  return (
    <S.Organization>
      <S.Circle>
        <Icon iconId='study' w='35' h='35' viewBox='0 0 35 35' />
      </S.Circle>
      <S.OrganizationInfo>
        <EducationTitle>{props.name}</EducationTitle>
        <S.OrganizationYear>{props.years}</S.OrganizationYear>
      </S.OrganizationInfo>
    </S.Organization>
  )
}