import { SocialList } from './socialList/SocialList'
import { Container } from '../../components/Container'
import { S } from './Footer_Styles'

export const Footer: React.FC = () => {
   return (
      <S.Footer>
         <Container>
            <S.Name>Nikita</S.Name>
            <SocialList />
            <S.Copyright>© 2023 Nikita Akmaykin. All Rights Reserved.</S.Copyright>
         </Container>
      </S.Footer>
   )
}