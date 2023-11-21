import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const TextArea: React.FC<{ id: string, labelText: string }> = ({ id, labelText }) => {
   return (
      <WrapperTextArea>
         <StyledTextArea id={id} />
         <label htmlFor={id}>{labelText}</label>
      </WrapperTextArea>
   )
}

const WrapperTextArea = styled.div`
position: relative;
width: 100%;

label{
position: absolute;
left: 0;
top: 0;
color: ${theme.colors.label.default};
transition: .4s;
font-size: 16px;
}
`

const StyledTextArea = styled.textarea`
resize: none;
border-bottom: 2px solid ${theme.colors.borders.inputDefault};
outline: none;
width: 100%;
background-color: transparent;
padding: 7px 15px;
color: ${theme.colors.font};
font-size: 14px;
font-weight: 400;
letter-spacing: 0.6px;
font-family: 'Poppins', sans-serif;

&:focus-visible{
border-color: ${theme.colors.borders.inputFocus};
}
&:focus + label{
color: ${theme.colors.label.focus};
}
&::-webkit-scrollbar{
  width: 7px;
}
`

