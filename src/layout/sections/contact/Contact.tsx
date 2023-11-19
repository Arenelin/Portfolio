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
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.9423179489218!2d82.93432539976149!3d55.04422658528784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5bfe121bcd7%3A0x9e1c5173df6eec85!2z0YPQuy4g0JPQvtCz0L7Qu9GPLCAzMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDA1!5e0!3m2!1sru!2sru!4v1700367802620!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></Map>
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

const Map = styled.iframe<{
  allowfullscreen: string,
  loading: string,
  referrerpolicy: string
}>`
  border: 0;
  width: 500px;
  height: 340px;
  margin-bottom: 50px;
`