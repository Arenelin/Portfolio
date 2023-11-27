import styled from "styled-components"
import { Button } from "../../../../components/Button"
import { theme } from "../../../../styles/Theme"
import { changeSize, font } from "../../../../styles/Common"

type ProjectPropsType = {
   srcNative: string,
   srcWebp: string,
   srcJpg: string,
   title: string,
   tech: string,
   descr: string,
}

export function Project(props: ProjectPropsType) {
   return (
      <StyledProject>
         <WrapperContent>
            <ProjectImage>
               <Picture>
                  <source srcSet={props.srcWebp} type="image/webp" />
                  <source srcSet={props.srcJpg} type="image/jpeg" />
                  <img src={props.srcNative} alt="Frontend Project" />
               </Picture>
            </ProjectImage>
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
`
const ProjectImage = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
position:absolute;
transition: transform 1s;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
transform: perspective(800px) rotateY(0);
border: 3px solid transparent;

@media ${theme.media.tablet}{
   animation: rotate-image 12s ease-in-out infinite;
}
`

const Picture = styled.picture`
   img{
   object-fit: cover;
width: 100%;
height: 100%;   
   }
`

const ProjectInfo = styled.div`
width: 100%;
height: 100%;
padding: ${changeSize({PxMax: 20, PxMin: 10, Vmax: 1440, Vmin: 576})};
border: 3px solid ${theme.colors.borders.cardProject};
transition: all 1s;
background-color: ${theme.colors.thirdBg};
text-align: center;

overflow: hidden;
position:absolute;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
transform: perspective(800px) rotateY(180deg);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 1s;

@media ${theme.media.tablet}{
 animation: rotate-info 12s ease-in-out infinite;
}
`

const WrapperContent = styled.div`
   width: 100%;
   height: 100%;
   position: relative;

   @keyframes rotate-image{
      0%{
         transform: rotateY(0deg);
      }
      30%{
         transform: rotateY(180deg);
      }
      75%{
         transform: rotateY(180deg);
      }
      100%{
         transform: rotateY(0deg);
      }
   }

   @keyframes rotate-info{
      0%{
         transform: rotateY(180deg);
      }
      30%{
         transform: rotateY(0deg);
      }
      75%{
         transform: rotateY(0deg);
      }
      100%{
         transform: rotateY(180deg);
      }
   }

   &:hover{
   ${ProjectImage}{
      transform: perspective(800px) rotateY(-180deg);
   }
   ${ProjectInfo}{
      transform: perspective(800px) rotateY(0deg);
   }
}
`

const InfoTitle = styled.h3`
${font({ PxMax: 35, PxMin: 30, fw: 600, ls: 1.5 })};
text-transform: capitalize;
`

const InfoDescription = styled.p`
font-size: 18px;
margin: ${changeSize({PxMax: 20, PxMin: 15, Vmax: 1440, Vmin: 576})} 0px;
`

const InfoStack = styled.p`
margin-bottom: ${changeSize({PxMax: 35, PxMin: 15, Vmax: 1440, Vmin: 576})};
${font({ PxMax: 20, PxMin: 16, color: theme.colors.infoTechStackCardProject})};
`

const WrapperButtons = styled.div`
display: flex;
gap: 20px;

${Button}{
   background-image: none;
   border: 1px solid ${theme.colors.buttonCardProject.border};
   position: relative;
   border-radius: 0px;
   overflow: hidden;
   padding: 8px 40px;
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
   
@media ${theme.media.tablet}{
      animation: shadow-btn 2s ease-in-out infinite alternate;
}

@keyframes shadow-btn{
0%{
   box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
   transform: translateY(0px);
   
}
100%{
   box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
   transform: translateY(10px);
}
}
   }
`