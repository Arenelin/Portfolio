import React from 'react'
import styled from 'styled-components'

type FlexWrapperPropsType = {
   direction?: string,
   jsc?: string,
   ai?: string,
   wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
   display: flex;
   justify-content: ${props => props.jsc || 'stretch'};
   align-items: ${props => props.ai || 'stretch'};
   flex-direction: ${props => props.direction || 'row'}
`