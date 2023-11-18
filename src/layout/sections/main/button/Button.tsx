import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


export function Button(props: {text: string}) {
  return (
    <StyledButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </StyledButton>
  )
}

 const StyledButton = styled.button`
background-color: rgba(155, 144, 251, 0.2);
padding: 20px 40px;
color: #FFF;
overflow: hidden;
font-size: 25px;
font-weight: 400;
letter-spacing: 1.27px;
-webkit-transform: translate(0%, 0%);
        transform: translate(0%, 0%);
-webkit-box-shadow: 0 20px 50px rgba(155, 144, 251, 0.5);
box-shadow: 0 20px 50px rgba(155, 144, 251, 0.5);
transition: all .5s;

&:hover{
   background-color: rgba(155, 144, 251, 0.4);
}

& span{
   position: absolute;
}

& span:nth-child(1){
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(${theme.colors.accentPrimary}));
  background: linear-gradient(to left, rgba(43, 8, 8, 0), ${theme.colors.accentPrimary});
  -webkit-animation: 2s animateTop linear infinite;
          animation: 2s animateTop linear infinite;
}
@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
}

& span:nth-child(2){
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(${theme.colors.accentPrimary}));
  background: linear-gradient(to top, rgba(43, 8, 8, 0), ${theme.colors.accentPrimary});
  -webkit-animation: 2s animateRight linear -1s infinite;
          animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
}

& span:nth-child(3){
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(${theme.colors.accentPrimary}));
  background: linear-gradient(to right, rgba(43, 8, 8, 0), ${theme.colors.accentPrimary});
  -webkit-animation: 2s animateBottom linear infinite;
          animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}

& span:nth-child(4){
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(${theme.colors.accentPrimary}));
  background: linear-gradient(to bottom, rgba(43, 8, 8, 0), ${theme.colors.accentPrimary});
  -webkit-animation: 2s animateLeft linear -1s infinite;
          animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
}
`