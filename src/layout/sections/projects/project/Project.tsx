import styled from "styled-components"

type ProjectPropsType = {
   src: string,
   title: string,
   tech: string,
}

export function Project(props: ProjectPropsType) {
   return (
      <StyledProject>
         <Image src={props.src} alt="Project" />
      </StyledProject>
   )
}

const StyledProject = styled.div`
width: 602px;
text-align: center;
margin: 20px;
`

const Image = styled.img`
width: 100%;
height: 452px;
object-fit: cover;
`
