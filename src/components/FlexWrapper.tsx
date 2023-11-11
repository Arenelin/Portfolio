import styled from 'styled-components'

type FlexWrapperPropsType = {
   direction?: string,
   jc?: string,
   ai?: string,
   wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
   display: flex;
   justify-content: ${props => props.jc || 'flex-start'};
   align-items: ${props => props.ai || 'stretch'};
   flex-direction: ${props => props.direction || 'row'};
   flex-wrap: ${props => props.wrap || 'nowrap'}; 
`