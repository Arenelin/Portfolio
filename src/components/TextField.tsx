import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/Theme'

type TextFieldPropsType = {
   id: string,
   labelText: string,
   type: 'text' | 'email' | 'password' | 'tel',
   name: string
}

export const TextField: React.FC<TextFieldPropsType> = ({ id, labelText, type, name }) => {
   return (
      <StyledTextField>
         <StyledInput type={type} id={id} placeholder={labelText} name={name} />
         <label htmlFor={id}>{labelText}</label>
      </StyledTextField>
   )
}

const StyledTextField = styled.div`
position: relative;
width: 100%;

label{
position: absolute;
left: 0;
bottom: 10px;
color: ${theme.colors.label.default};
font-size: 16px;
transition: .25s;
}
`

const StyledInput = styled.input`
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

&::placeholder{
opacity: 0;
}
&:focus-visible{
border-color: ${theme.colors.borders.inputFocus};
}
&:focus + label,
&:not(:placeholder-shown) + label{
transform: translateY(-25px);
font-size: 14px;
color: ${theme.colors.label.focus};
}
`