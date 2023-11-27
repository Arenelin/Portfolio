import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'
import { TextField } from '../../../components/TextField'
import { TextArea } from '../../../components/TextArea'
import { font } from '../../../styles/Common'

export function Contact() {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Send me a <span>message</span>, I will be touch with you shortly.</SectionTitle>
        <FlexWrapper jc='space-around' ai='center' wrap='wrap' gap='40px'>
          <StyledForm action=''>
            <TextField id='userName' type='text' name='userName' labelText='Your Name' />
            <TextField id='userEmail' type='email' name='userEmail' labelText='Your Email Address' />
            <TextArea id='userMessage' labelText='Your Message'/>
            <Button type='submit'>Send Message</Button>
          </StyledForm>
          <Map title="developer's location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.9423179489218!2d82.93432539976149!3d55.04422658528784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5bfe121bcd7%3A0x9e1c5173df6eec85!2z0YPQuy4g0JPQvtCz0L7Qu9GPLCAzMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDA1!5e0!3m2!1sru!2sru!4v1700367802620!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </FlexWrapper>
      </Container>

    </StyledContact>
  )
}

const StyledContact = styled.section`
text-align: center;

${SectionTitle}{
  ${font({ PxMax: 56, PxMin: 35, fw: 400, ls: 0 })};
  &::before{
    display: none;
  }
  & span{
    color: ${theme.colors.accentSecondary};
  }
}
`

const StyledForm = styled.form`
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

textarea{
margin-top: 20px;
height: 155px;
}

${Button}{
font-size: 20px;
padding: 10px 40px;
}
`

const Map = styled.iframe<{ allowfullscreen: string, loading: string, referrerpolicy: string }>`
border: 0;
max-width: 500px;
width: 100%;
height: 340px;
margin-bottom: 50px;

 @media ${theme.media.mobile}{
  display: none;
}
`