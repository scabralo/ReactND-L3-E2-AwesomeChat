import React from 'react'
import PropTypes from 'prop-types'
import MessagesListItem from './MessagesListItem'

class MessagesList extends React.Component {
	render() {
		const {username, messages} = this.props
		return(
			<ul className="message-list">
				{messages.map((message, index) => (
	                <MessagesListItem key={index} message={message} username={username} />
	            ))}
			</ul>
		)
	}
}

MessagesList.propTypes = {
	username: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired
}

export default MessagesList