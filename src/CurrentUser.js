import React from 'react'
import PropTypes from 'prop-types'

const CurrentUser = props => {
	const {userName} = props
	return (
		<div className="name sender">{userName}</div>
	)
}

CurrentUser.propTypes = {
	userName: PropTypes.string.isRequired
}

export default CurrentUser