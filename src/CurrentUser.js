import React from 'react'
import PropTypes from 'prop-types'

const CurrentUser = props => {
	const {user} = props
	return (
		<div className="name sender">{user}</div>
	)
}

CurrentUser.propTypes = {
	user: PropTypes.string.isRequired
}

export default CurrentUser