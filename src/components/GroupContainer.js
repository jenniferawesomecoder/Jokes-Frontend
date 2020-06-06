import React from 'react'
import { Container } from 'semantic-ui-react'
import  Groups  from '../components/Groups'
import Header from '../components/Header'

// functional stateless compoennt
const GroupContainer = () => {
	return (
		<Container>
			<Header/>
			<Groups/>
		</Container>
	)
}

export default GroupContainer
