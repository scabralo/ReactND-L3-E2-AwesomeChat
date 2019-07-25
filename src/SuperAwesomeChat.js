import React from 'react'
import PropTypes from 'prop-types'
import CurrentUser from './CurrentUser'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

class SuperAwesomeChat extends React.Component {
	render() {
		const {user, messages, sendNewMessage} = this.props
		return(
			<div className='chat-window'>
				<h2>Super Awesome Chat</h2>
				<CurrentUser userName={user.username} />
				<MessagesList messages={messages} username={user.username} />
				<NewMessageForm sendNewMessage={sendNewMessage} username={user.username} />
			</div>
		)
	}
}

SuperAwesomeChat.propTypes = {
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired,
	sendNewMessage: PropTypes.func.isRequired
}

export default SuperAwesomeChat