import React from 'react'
// import PropTypes from 'prop-types'

class NewMessageForm extends React.Component {
	state = {
		message: '',
		isDisabled: true
	}
	onInputChange = (input) => {
		this.setState(()=>({
			message: input
		}))
	}
	render() {
		const {isDisabled, message} = this.state
		return(
			<form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." value={message} onChange={(event)=>this.onInputChange(event.target.value)}  />
                <div className="input-group-append">
	              <button className="btn submit-button" disabled={isDisabled}>
	                SEND
	              </button>
                </div>
            </form>
		)
	}
}

export default NewMessageForm