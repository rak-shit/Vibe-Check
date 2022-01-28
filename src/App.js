import styled from 'styled-components'
import { useState } from 'react'
import firebase from 'firebase'
import animationData from './music.json'
import Lottie from 'react-lottie'

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-family: 'Open Sans', sans-serif;
`;

const InnerDiv = styled.div`
  display: grid;
  grid-column: span 6;
  min-height: 100vh;
  @media (max-width: 520px) {
    grid-column: span 12;
    min-height: 0vh;
  }
`;

const Content = styled.div`
  padding: 8rem 5rem;
  margin-top: 10rem;
  @media (max-width: 520px) {
    padding: 3rem 2rem;
    text-align: center;
  }
`;

const WelcomeDiv = styled.div`
  font-weight: 600;
  font-size: 56px;
`;

const GreenContent = styled.div`
  font-size: 18px;
  margin: 2rem 0px;
`;

const GreenContentMail = styled.div`
  font-size: 18px;
  margin: 2rem 0px;
  @media (max-width: 520px) {
    text-align: left;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
`;

const GridItem = styled.div`
  display: grid;
`;

const JoinButton = styled.div`
  padding: 8px 10px;
  color: #8627ff;
  background-color: black;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  height: 50%;
`;

const EmailInput = styled.input`
  background-color: #8627ff;
  border: 2px solid black;
  padding: 5px 5px;
  font-size: 16px;
  ::placeholder {
    color: black;
    font-size: 14px;
  }
`;

const Logo = styled.img`
  max-width: 50%;
  height: auto;
  margin: auto;
  @media (max-width: 520px) {
    margin: 2rem auto;
  }
`;

const App = () => {

  const [email, setEmail] = useState('')

  const defaultOptions = {
    animationData: animationData
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSendEmail = () => {
    if (email === '') {
      alert('Email field is empty')
    } else {
      firebase.database().ref('emails').push({
        email: email
      }, () => {
        alert('Thank you!')
        setEmail('')
      })
    }
  }

  return (
    <MainDiv className="App">
      <InnerDiv style={{ textAlign: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
      </InnerDiv>
      <InnerDiv style={{ backgroundColor: '#8627ff' }}>
        <Content>
          <WelcomeDiv>Welcome</WelcomeDiv>
          <GreenContent>
            At Green Trucks, our mission is to create an enjoyable vegetable shopping experience for our customers. Our goal is 
            to provide fresh and hygienic vegetables with a choice to handpick fresh stock from the cart at your doorstep with a 
            super fast delivery experience with utmost transperancy. We are here to simplify your vegetable shopping experience :)
          </GreenContent>
          <GreenContent>
            <div style={{ margin: '10px 0px' }}>mrksht@gmail.com</div>
            <div style={{ margin: '10px 0px' }}>(+91) 7388080234</div>
          </GreenContent>
          <GreenContentMail style={{ margin: '15px 0px' }}>
            Subscribe to our mailing list!
          </GreenContentMail>
          <Grid>
            <GridItem style={{ gridColumn: 'span 10' }}>
              <EmailInput 
                onChange={handleEmailChange}
                type="text"
                placeholder="Enter your e-mail here."
                value={email}
              />
            </GridItem>
            <GridItem style={{ gridColumn: 'span 2' }}>
              <JoinButton onClick={handleSendEmail}>
                Join
              </JoinButton>
            </GridItem>
          </Grid>
          <GreenContent style={{ fontSize: '12px', marginTop: '8px', textAlign: 'left' }}>
            *Your e-mail will not be shared with anyone.
          </GreenContent>
        </Content>
      </InnerDiv>
    </MainDiv>
  );
}

export default App
