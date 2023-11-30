import { SectionTitle } from '../../../../components/SectionTitle'
import { Organization } from './organization/Organization'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { S } from './Studies_Styles'

export const Studies: React.FC = () => {
   return (
      <S.Studies>
         <FlexWrapper ai='center' direction='column'>
            <SectionTitle>Studies</SectionTitle>
            <Organization name={'Medical College'} years={'2018-2022'} />
            <Organization name={'IT-INCUBATOR'} years={'2023-2024'} />
         </FlexWrapper>
      </S.Studies>
   )
}