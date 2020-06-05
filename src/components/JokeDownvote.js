import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class JokeDownvote extends Component {
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
          color='blue'
  	      content='Downvote'
  	      icon='thumbs down'
  	      label={{ basic: true, color: 'blue', pointing: 'left', content: this.state.count}}
  	      onClick={this.handleClick}
        />
      </Button>
    )
  }
}

export default JokeDownvote;
