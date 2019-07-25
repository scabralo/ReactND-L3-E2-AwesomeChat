import React from 'react'
import PropTypes from 'prop-types'

class MessagesList extends React.Component {
	render() {
		const {messages} = this.props
		return(
			<ul className="message-list">

			</ul>
		)
	}
}

MessagesList'.propTypes = {
	messages: PropTypes.array.isRequired
}

export default MessagesList