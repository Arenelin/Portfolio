import { theme } from "./Theme"

type SizePropsType = {
   ff?: string,
   fw?: number,
   color?: string,
   lh?: number,
   ls?: number,
   PxMax: number,
   PxMin: number,
   Vmax?: number,
   Vmin?: number
}

export const font = ({ ff, fw, color, lh, ls, PxMax, PxMin, Vmax, Vmin }: SizePropsType) => `
font-weight: ${fw || 400};
font-family: ${ff || 'Poppins, sans-serif'};
line-height: ${lh + 'px' || 1.2};
color: ${color || theme.colors.font};
letter-spacing: ${ls + 'px' || 0 + 'px'};
font-size: ${changeSize({PxMax, PxMin, Vmax, Vmin})};
`

export const changeSize = ({ PxMin, PxMax, Vmax = 1440, Vmin = 360 }: SizePropsType) => {
   const variablePart = (PxMax - PxMin) / (Vmax - Vmin);
   const rem =  parseFloat(((PxMax - Vmax * variablePart) / 16).toFixed(3));
   const vw = parseFloat((100 * variablePart).toFixed(2));

   return `clamp(${PxMin}px, ${rem}rem + ${vw}vw, ${PxMax}px)`;
}

//font-size: calc((100vw - 360px)/(1440 - 360}) * (${PxMax} - ${PxMin}) + ${PxMin}px);