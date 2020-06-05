import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'

import { fetchJokeOfTheDay } from '../actions/jokeAction'

class JokeOfTheDay extends Component {
  componentDidMount() {
    this.props.fetchJokeOfTheDay();
  }


  render() {
    const renderJokeOfDay = () => {
      if (this.props.jokeOfDay) {
        return (
          <Container textAlign='center'>
            <Header as='h2'>
              "{this.props.jokeOfDay.content}"
            </Header>
          </Container>
        )}
    }

    return (
      <div>{renderJokeOfDay()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jokeOfDay: state.jokes.jokeOfDay
  }
}

export default connect(mapStateToProps, { fetchJokeOfTheDay })(JokeOfTheDay);
