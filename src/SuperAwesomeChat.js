import React from 'react'
import PropTypes from 'prop-types'
import CurrentUser from './CurrentUser'

class SuperAwesomeChat extends React.Component {
	render() {
		const {user} = this.props
		return(
			<div className='chat-window'>
				<h2>Super Awesome Chat</h2>
				<CurrentUser user={user} />
			</div>
		)
	}
}

export default SuperAwesomeChat