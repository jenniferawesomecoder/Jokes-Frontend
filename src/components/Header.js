import React from 'react';
import { Header } from 'semantic-ui-react';

import Laugh from '../assets/laugh.png';

// functional stateless component
const HomeHeader = () => {
	return(
		<div>
			<Header as='h2' icon textAlign='center'>
			<img src={Laugh} alt="laugh" className="largeLaugh" />

			</Header>

		</div>
	)
}

export default HomeHeader
