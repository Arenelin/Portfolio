import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'

export function Contact() {
  return (
     <StyledContact>
        <SectionTitle>Send me a message, I will be touch with you shortly.</SectionTitle>
        <FlexWrapper jc='space-around'>
          <StyledForm action='#'>
           <Field placeholder='Your Name'/>
           <Field placeholder='Your Email Address' type='email'/>
           <Field placeholder='Your Message' as={'textarea'} />
           <Button type='submit'>Send Message</Button>
           </StyledForm> 
           <StyledMap>There will be a map here</StyledMap>
        </FlexWrapper>
    </StyledContact>
  )
}

const StyledContact = styled.section`
text-align: center;
background-color:#1f1f1f;

`

const StyledForm = styled.form`
flex-basis:500px;
display: flex;
flex-direction: column;
gap: 10px;
`
const Field = styled.input`

`

const StyledMap = styled.div`
color:#ffffff;
flex-basis:500px;
margin-bottom: 50px;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color:black;
`