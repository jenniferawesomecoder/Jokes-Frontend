import React from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react'
import { createGroup } from '../actions/groupActions'
import GroupForm from './GroupForm';

// functional stateless component
const GroupCreate = (props) => {

	const onSubmit = formValues => {
		props.createGroup(formValues);
	}

	return (
		<Container>
			<Header>Create a Group</Header>
			<GroupForm onSubmit={onSubmit} />
		</Container>
	);
}

export default connect(null, { createGroup })(GroupCreate);
