import React from 'react'
import { Container, Message, Button } from 'semantic-ui-react'
import  JokeOfTheDay  from '../components/JokeOfTheDay'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

// functional stateless compoennt
const Home = () => {
  return (
    <Container className="extraContent">
      <Header/>

      <Message floating>
        <JokeOfTheDay />
      </Message>

      <Button as={Link} to="/groups" color='green'>View All Groups!</Button>
    </Container>
  )
}

export default Home
