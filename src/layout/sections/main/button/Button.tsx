import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { changeSize, font } from "../../../../styles/Common";

export function Button(props: { text: string }) {
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
background-color: ${theme.colors.buttonMain.bgc.default};
padding:  ${changeSize({PxMax: 20, PxMin: 16, Vmax: 1440, Vmin: 576})} ${changeSize({PxMax: 40, PxMin: 32, Vmax: 1440, Vmin: 576})};  
overflow: hidden;
${font({ PxMax: 25, PxMin: 20, ls: 1.27 })};
-webkit-transform: translate(0%, 0%);
        transform: translate(0%, 0%);
-webkit-box-shadow: 0 20px 50px ${theme.colors.buttonMain.shadow};
box-shadow: 0 20px 50px ${theme.colors.buttonMain.shadow};
transition: all .5s;

&:hover{
   background-color: ${theme.colors.buttonMain.bgc.hover};
}

& span{
   position: absolute;
}

& span:nth-child(1){
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(${theme.colors.buttonMain.span}));
  background: linear-gradient(to left, rgba(43, 8, 8, 0), ${theme.colors.buttonMain.span});
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
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(${theme.colors.buttonMain.span}));
  background: linear-gradient(to top, rgba(43, 8, 8, 0), ${theme.colors.buttonMain.span});
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
  background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(${theme.colors.buttonMain.span}));
  background: linear-gradient(to right, rgba(43, 8, 8, 0), ${theme.colors.buttonMain.span});
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
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(${theme.colors.buttonMain.span}));
  background: linear-gradient(to bottom, rgba(43, 8, 8, 0), ${theme.colors.buttonMain.span});
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