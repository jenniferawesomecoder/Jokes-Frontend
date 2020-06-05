import React from 'react'
import { Container } from 'semantic-ui-react'
import  AllGroups  from '../components/AllGroups'
import Header from '../components/Header'

// functional stateless compoennt
const GroupContainer = () => {
	return (
		<Container>
			<Header/>
			<AllGroups/>
		</Container>
	)
}

export default GroupContainer
