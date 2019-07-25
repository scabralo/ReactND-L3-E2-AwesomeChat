import React from 'react'
import PropTypes from 'prop-types'

class MessagesList extends React.Component {
	render() {
		const {messages} = this.props
		return(
			<ul className="message-list">
				{messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
			</ul>
		)
	}
}

MessagesList'.propTypes = {
	messages: PropTypes.array.isRequired
}

export default MessagesList