import React from 'react'
import { bindActionCreators } from 'redux'
import { Container, Card, Button, Header, Icon, Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'

import { removeJokeFromGroupCollections } from '../actions/groupActions'
import JokeUpvote from '../components/JokeUpvote';
import JokeDownvote from '../components/JokeDownvote'

// functional stateless component
const CollectionJokes = (props) => {
    if (props.currentGroup) {
      return (
        <Container>
          <Header as='h2'>
            <Icon name='group alternate' />

            <Header.Content>
              You are in Your "{props.currentGroup.title}" Group
            </Header.Content>
          </Header>

          <Grid>
            <Grid.Row columns={2}>
            {props.currentGroup.collections.map((joke, index) =>
              <Grid.Column className="column">
              <Card key={joke.id} className="collectionJokeCard">
                <Card.Content>
                  <Card.Description className="collectionJokeDescription">{joke.content}</Card.Description>
                </Card.Content>

                <Card.Content extra className="extraContent">
                  <Button.Group>
                    <JokeUpvote />
                    <JokeDownvote />
                    <Button onClick={() => props.removeJokeFromGroupCollections(joke, props.currentGroup)}>
                      Remove Joke
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
        </Container>
      )
    }

    return(
     <div>You must select a group first!</div>
    )

  }

const mapStateToProps = (state) => {
  return {
    currentGroup: state.group.currentGroup,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
removeJokeFromGroupCollections
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CollectionJokes)
