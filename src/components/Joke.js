import React from 'react'
import { connect } from 'react-redux'
import { Item, Button, Popup, Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';

import { addJokeToGroupCollections } from '../actions/groupActions';
import history from '../history';

// functional stateless component
const Joke = (props) => {

  const handleClick = () => {
    props.addJokeToGroupCollections(props.selectedJoke, props.currentGroup)
    history.push('/collections')
  }

  const renderJokeDetail = () => {
    if (props.selectedJoke) {
      return (
        <Segment textAlign='center'>
          <Item key={props.selectedJoke.id}>
            <Item.Content>
              <Item.Header as='h3'>{props.selectedJoke.content}</Item.Header>

              <br />

              <Popup
                trigger={<Button basic color='green' onClick={handleClick} content="Add to Collection"/>}
                content={`Added!`}
                on='click'
                position='top right'
              />

            </Item.Content>
          </Item>
        </Segment>
      )
    }

    return null
  }

  return (
    <div>{renderJokeDetail()}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.group.currentGroup,
    selectedJoke: state.jokes.selectedJoke
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addJokeToGroupCollections
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Joke)
