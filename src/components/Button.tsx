import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
color: #FFF;
font-size: 25px;
font-weight: 400;
letter-spacing: 1.27px;
padding: 14px 42px;
background: linear-gradient(90deg, ${theme.colors.accentSecondary}, ${theme.colors.accentPrimary});
border-radius: 15px;
font-family: 'Poppins', 'sans-serif';
`