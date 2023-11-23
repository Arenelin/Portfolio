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

export const font = ({ff, fw, color, lh, ls, Fmax, Fmin}:FontPropsType) => `
font-weight: ${fw || 400};
font-family: ${ff || 'Poppins, sans-serif'};
line-height: ${lh + 'px' || 1.2};
color: ${color || theme.colors.font};
letter-spacing: ${ls + 'px'|| 0 + 'px'};
font-size: calc((100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`