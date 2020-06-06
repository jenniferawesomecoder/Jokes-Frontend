import React from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react'
import { createGroup } from '../actions/groupActions'
import Form from './Form';

// functional stateless component
const NewGroup = (props) => {

	const onSubmit = formValues => {
		props.createGroup(formValues);
	}

	return (
		<Container>
			<Header>Create a Group</Header>
			<Form onSubmit={onSubmit} />
		</Container>
	);
}

export default connect(null, { createGroup })(NewGroup);
