import styled from "styled-components"
import { Button } from "../../../../components/Button"
import { theme } from "../../../../styles/Theme"


type ProjectPropsType = {
   src: string,
   title: string,
   tech: string,
   descr: string,
}

export function Project(props: ProjectPropsType) {
   return (
      <StyledProject>
         <WrapperContent>
            <WrapperImage>
               <Image src={props.src} alt="Project" />
            </WrapperImage>
            <ProjectInfo>
               <InfoTitle>{props.title}</InfoTitle>
               <InfoDescription>{props.descr}</InfoDescription>
               <InfoStack>Tech stack: {props.tech}</InfoStack>
               <WrapperButtons>
                  <Button as={'a'} href='#'>Demo</Button>
                  <Button as={'a'} href='#'>Code</Button>
               </WrapperButtons>
            </ProjectInfo>
         </WrapperContent>
      </StyledProject>
   )
}


const StyledProject = styled.div`
margin: 20px;
`
const InfoDescription = styled.p`
font-size: 18px;
margin-bottom: 25px;
text-align: center;
`

const WrapperButtons = styled.div`
display: flex;
gap: 20px;

${Button}{
   background-image: none;
   border: 1px solid ${theme.colors.accentPrimary};
   position: relative;
   border-radius: 0px;
   overflow: hidden;
   padding: 10px 35px;
   font-size: 20px;

   &:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(146, 148, 248, 0.4),
    transparent
  );
  transition: all 650ms;
}

   &:hover{
      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
      &::before{
         left: 100%;
      }
   }
   }
`

const InfoTitle = styled.h3`
padding-top: 40px;
font-size: 35px;
margin-bottom: 25px;
font-weight: 600;
letter-spacing: 1.5px;
text-transform: capitalize;
text-align: center;
`
const InfoStack = styled.p`
font-size: 20px;
color: #a39d9d;
margin-bottom: 35px;
text-align: center;
`

const WrapperImage = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
position:absolute;
transition: transform .7s ease;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
transform: perspective(800px) rotateY(0);
border: 3px solid transparent;
`

const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`

const ProjectInfo = styled.div`
width: 100%;
height: 100%;
padding: 20px;
overflow: hidden;
position:absolute;
background: rgba(155, 144, 251, 0.08);
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
transition: transform .7s ease;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
transform: perspective(800px) rotateY(180deg);
border: 3px solid ${theme.colors.accentPrimary};
`

const WrapperContent = styled.div`
   width: 602px;
   height: 452px;
   position: relative;

   &:hover{
   ${WrapperImage}{
      transform: perspective(800px) rotateY(-180deg);
   }
   ${ProjectInfo}{
      transform: perspective(800px) rotateY(0deg);
   }
}
`