import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
font-size: 25px;
letter-spacing: 1.27px;
padding: 14px 42px;
background-image: linear-gradient(90deg, ${theme.colors.buttonGeneral.bgc.primary}, ${theme.colors.buttonGeneral.bgc.secondary});
border-radius: 15px;
font-family: 'Poppins', sans-serif;
`