import { theme } from "./Theme"

type FontPropsType = {
   ff?: string,
   fw?: number,
   color?: string,
   lh?: number,
   ls?: number,
   Fmax: number,
   Fmin: number
}

let variablePart = 0;

const findRem = (Fmax: number, Fmin: number) => {
   variablePart = (Fmax - Fmin) / (1440 - 360); // Вместо 1440 - максимальный размер окна, вместо 360 - минимальный
   const constant = parseFloat(
      ((Fmax - 1440 * variablePart) / 16).toFixed(3)
   );
   return constant;
}

const findVw = () => {
   const result = parseFloat((100 * variablePart).toFixed(2));
   return result;
}

export const font = ({ ff, fw, color, lh, ls, Fmax, Fmin }: FontPropsType) => `
font-weight: ${fw || 400};
font-family: ${ff || 'Poppins, sans-serif'};
line-height: ${lh + 'px' || 1.2};
color: ${color || theme.colors.font};
letter-spacing: ${ls + 'px' || 0 + 'px'};
font-size: clamp(${Fmin}px, ${findRem(Fmax, Fmin)}rem + ${findVw()}vw, ${Fmax}px);
`


//font-size: calc((100vw - 360px)/(1440 - 360}) * (${Fmax} - ${Fmin}) + ${Fmin}px);