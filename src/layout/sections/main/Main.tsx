import myPhoto from '../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper'
import styled from 'styled-components'

export function Main() {
   return (
      <StyledMain>
         <FlexWrapper jsc={'space-around'} ai={'center'}>
            <div>
               <MainGreeting>Welcome</MainGreeting>
               <MainName>I am Nikita Akmaykin</MainName>
               <MainTitle>A Frontend Developer</MainTitle>
            </div>
            <MainPhoto src={myPhoto} alt="Photo" />
         </FlexWrapper>
      </StyledMain>

   )
}

const StyledMain = styled.div`
   background-color: #1F1F1F;
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