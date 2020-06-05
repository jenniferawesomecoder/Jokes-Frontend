import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


class JokeUpvote extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <Button as='div' labelPosition='right'>
        <Button
          color='red'
  	      content='Upvote'
  	      icon='thumbs up'
  	      label={{ basic: true, color: 'red', pointing: 'left', content: this.state.count}}
  	      onClick={this.handleClick}
        />
      </Button>
    )
  }
}

export default JokeUpvote
