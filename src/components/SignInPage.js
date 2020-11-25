import React from 'react'

import GoogleAuth from './GoogleAuth'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import SignInForm from './forms/SignInForm'

class SignInPage extends React.Component {

	onSubmit = formValues => {
		this.props.signIn(formValues);
	}

	render() {
		if(this.props.isSignedIn){
			return <Redirect to='/'/>
		}

		return (
			<div className="ui items">
				<SignInForm onSubmit={this.onSubmit} />
				<h4 className="ui dividing header">Or</h4>
				<GoogleAuth/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(SignInPage)