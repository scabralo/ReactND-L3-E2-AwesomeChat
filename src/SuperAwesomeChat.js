import React from 'react'
import PropTypes from 'prop-types'
import CurrentUser from './CurrentUser'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

class SuperAwesomeChat extends React.Component {
	render() {
		const {user, messages} = this.props
		return(
			<div className='chat-window'>
				<h2>Super Awesome Chat</h2>
				<CurrentUser userName={user.username} />
				<MessagesList messages={messages} username={user.username} />
				<NewMessageForm />
			</div>
		)
	}
}

SuperAwesomeChat.propTypes = {
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired
}

export default SuperAwesomeChat