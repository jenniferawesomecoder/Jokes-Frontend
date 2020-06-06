import React from 'react'
import { Divider, Container } from 'semantic-ui-react'

import Jokes from '../components/Jokes';
import Header from '../components/Header'

// functional stateless compoennt
const JokesContainer = (props) => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header />
      <Divider />
      <Jokes />
    </Container>
  );
}

export default JokesContainer
