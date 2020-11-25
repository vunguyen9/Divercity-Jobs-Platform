import React from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions'
import RegisterForm from './forms/RegisterForm'

class RegisterPage extends React.Component {

	onSubmit = formValues => {
		this.props.register(formValues);
	}

	render() {
		if(this.props.isSignedIn){
			return <Redirect to='/'/>
		}

		return (
			<div className="ui items">
				<RegisterForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { register })(RegisterPage)