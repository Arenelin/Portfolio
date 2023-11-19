import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'

export function Contact() {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Send me a <span>message</span>, I will be touch with you shortly.</SectionTitle>
        <FlexWrapper jc='space-around' ai='center'>
          <StyledForm action=''>
            <Field placeholder='Your Name' type='text' name='userName' />
            <Field placeholder='Your Email Address' type='email' name='userEmail' />
            <Field placeholder='Your Message' as={'textarea'} />
            <Button type='submit'>Send Message</Button>
          </StyledForm>
          <StyledMap>There will be a map here</StyledMap>
        </FlexWrapper>
      </Container>

    </StyledContact>
  )
}

const StyledContact = styled.section`
text-align: center;
background-color: ${theme.colors.secondaryBg};
${SectionTitle}{
  font-weight: 400;
  letter-spacing: 0;
  &::before{
    display: none;
  }
  & span{
    color: ${theme.colors.accentSecondary};
  }
}
`

const StyledForm = styled.form`
max-width:500px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;

textarea{
  resize: none;
  height: 155px;
}

${Button}{
  font-size: 20px;
  padding: 10px 40px;
}
`
const Field = styled.input`
width: 100%;
border: 1px solid #4A4A4A;
background-color: ${theme.colors.secondaryBg};
padding: 7px 15px;
color: ${theme.colors.font};
font-size: 14px;  
font-weight: 400;
letter-spacing: 0.6px;
font-family: 'Poppins', sans-serif;

&::placeholder{
 color: rgba(255, 255, 255, 0.7);
}

&:focus-visible{
  outline: 1px solid #ffffff;
  &::placeholder{
    color: #ffffff;
  }
}
`

const StyledMap = styled.div`
color:#ffffff;
flex-basis:500px;
margin-bottom: 50px;
min-height: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color:black;
`