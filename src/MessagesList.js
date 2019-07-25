import React from 'react'
import PropTypes from 'prop-types'

class MessagesList extends React.Component {
	render() {
		const {username, messages} = this.props
		return(
			<ul className="message-list">
				{messages.map((message, index) => (
	                <li
	                  key={index}
	                  className={
	                    message.username === username ? 'message sender' : 'message recipient'
	                  }
	                >
	                	<p>{`${message.username}: ${message.text}`}</p>
	                </li>
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