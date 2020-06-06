import React from 'react'
import Collection from '../components/Collection';
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
          <Collection />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default CollectionsContainer
