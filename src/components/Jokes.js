import React from 'react'
import { Divider, Container } from 'semantic-ui-react'

import AllJokes from '../components/AllJokes';
import Header from '../components/Header'

// functional stateless compoennt
const JokesContainer = (props) => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header />
      <Divider />
      <AllJokes />
    </Container>
  );
}

export default JokesContainer
