import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { Grid, Button, Divider, Card } from 'semantic-ui-react';

import history from '../history';
import { deleteGroup } from '../actions/groupActions';
import { fetchGroups }  from '../actions/groupActions'
import { setGroup }  from '../actions/groupActions'


class Groups extends Component {
  componentDidMount() {
    this.props.fetchGroups()
  }

  handleChange(event) {
    this.props.setGroup(event.target.value)
  }

  onClick = (currentGroup) => {
    this.props.deleteGroup(this.props.currentGroup)
    alert('Group deleted!')
    history.push('/')
  };

  render() {
    const mapGroupsForDropdown = this.props.allGroups.map((group, index) => {
      return (
        <option value={group.id} key={group.id} id={group.id}>
          {group.title}
        </option>
      )
    })

    const GroupInfo = () => {
      if (this.props.currentGroup) {
        const chosengroup = this.props.currentGroup;

        return (
              <Card fluid className="groupDetails">
                <Card.Content>
                  <Card.Header as='h2' textAlign='center'>{chosengroup.title}
                    <Card.Meta content={chosengroup.description} />
                  </Card.Header>

                  <Card.Content className="extraContent" >
                    <Button.Group>
                      <Button as={Link} to="/all" color='violet'>Add Jokes </Button>
                      <Button as={Link} to="/collections" color='green'>Collections</Button>
                      <Button onClick={() => this.onClick()} color='red'>Delete Group</Button>
                    </Button.Group>
                  </Card.Content>
                </Card.Content>
              </Card>
        )
      }
    }

    return (
      <div>
        <Grid centered >
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="ui centered card">
                <select onChange={(e) => this.handleChange(e)}>
                  <option value="">Select a Group</option>
                  {mapGroupsForDropdown}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Divider />

          <Grid.Row>
            <Grid.Column width={12}>
              <div>{GroupInfo()}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      allGroups: state.group.allGroups,
      currentGroup: state.group.currentGroup
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteGroup,
  fetchGroups,
  setGroup
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
