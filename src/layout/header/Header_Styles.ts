import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
   background-color: ${theme.colors.sectionBackgrounds.primary};
   padding: 25px 0px;
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   z-index: 999;
`
export const S = {
   Header,
}