import React from 'react'
import JokesCollection from '../components/JokesCollection';
import Header from '../components/Header'
import { Grid, Divider, Container } from 'semantic-ui-react'

// functional stateless compoennt
const CollectionsContainer = () => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header />
      <Divider />

      <Grid >
        <Grid.Column>
          <JokesCollection />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default CollectionsContainer
