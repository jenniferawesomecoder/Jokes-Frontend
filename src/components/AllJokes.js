import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Icon, Header, Popup, Card, Grid } from 'semantic-ui-react'
import fetchJokes from '../actions/jokeAction';

import { selectJoke } from '../actions/jokeAction'
import JokeDetail from './JokeDetail'


class AllJokes extends Component {

  componentDidMount() {
    this.props.fetchJokes();
  }

    render() {
      if (this.props.allJokes && this.props.currentGroup) {
        return (
          <div>
            <Header as='h2'>
              <Icon name='group alternate' />

              <Header.Content>
                Available Jokes
              </Header.Content>
            </Header>

            <Grid>
              <Grid.Row columns={3}>
                {this.props.allJokes.map((joke, index) =>
                  <Grid.Column className="column">
                    <Card.Group>
                      <Card className="jokeCard">
                        <Card.Content>
                          <Card.Description>
                            {joke.content}
                          </Card.Description>
                        </Card.Content>

                        <Card.Content extra className="extraContent">
                          <Popup
                            trigger={<Button color="green" onClick={() => this.props.selectJoke(joke)} content="View Joke"/>}
                            content={<JokeDetail />}
                            on='click'
                            position='top right'
                          />
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </div>
        )
      }

      return (
        <div>You must select a group first!</div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.group.currentGroup,
    allJokes: state.jokes.allJokes
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
fetchJokes,
selectJoke
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllJokes)
