import React from 'react'
import PropTypes from 'prop-types'

class NewMessageForm extends React.Component {
	state = {
		message: '',
		isDisabled: true
	}
	onInputChange = (input) => {
		let messageObj = {
			message: input
		}
		if (input.length !== 0) {
			messageObj.isDisabled = false
		} else {
			messageObj.isDisabled = true
		}
		this.setState(()=>(messageObj))
	}
	onClickSend = (event) => {
		console.log('Button clicked!')
		event.preventDefault()
		this.props.sendNewMessage(this.props.username, this.state.message)
		this.clearInputField()
	}
	clearInputField = () => {
		this.setState({
			message: ''
		})
	}
	render() {
		const {isDisabled, message} = this.state
		return(
			<form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." value={message} onChange={(event)=>this.onInputChange(event.target.value)}  />
                <div className="input-group-append">
	              <button className="btn submit-button" disabled={isDisabled} onClick={(event)=>this.onClickSend(event)}>
	                SEND
	              </button>
                </div>
            </form>
		)
	}
}

NewMessageForm.propTypes = {
	username: PropTypes.string.isRequired,
	sendNewMessage: PropTypes.func.isRequired
}

export default NewMessageForm