import React from 'react'
import PropTypes from 'prop-types'

const MessagesListItem = props => {
	const {username, message} = props
	return(
		<li className={ message.username === username ? 'message sender' : 'message recipient' }>
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
	)
}

MessagesListItem.propTypes = {
	message: PropTypes.object.isRequired,
	username: PropTypes.string.isRequired
}

export default MessagesListItem