import myPhoto from '../../../assets/images/myPhoto.webp'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'

export function Main() {
   return (
      <StyledMain>
         <FlexWrapper jc={'space-around'} ai={'center'}>
            <MainInfo>
               <MainGreeting>Welcome</MainGreeting>
               <MainName>I am Nikita Akmaykin</MainName>
               <MainTitle>A Frontend Developer</MainTitle>
               <Button>Download CV</Button>
            </MainInfo>
            <MainPhoto src={myPhoto} alt="Photo" />
         </FlexWrapper>
      </StyledMain>

   )
}

const StyledMain = styled.section`
   background-color: #1F1F1F;
`
const MainInfo = styled.div`

`

const MainGreeting = styled.span`

`

const MainName = styled.h2`

`

const MainTitle = styled.h1`
   
`

const MainPhoto = styled.img`
   max-width: 566px;
   max-height: 600px;
   object-fit: cover;
`