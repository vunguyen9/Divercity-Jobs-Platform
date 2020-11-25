import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class Header extends React.Component {
	onSignOutClick = () => {
		let auth = window.gapi.auth2
		if(auth){
			auth.getAuthInstance().signOut()
		}
		this.props.signOut()
	}
	renderAuthButton() {
		if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red button">
					Sign Out
				</button>
			)
		} else {
			return (
				<div>
					<Link to="/signin">
						<button className="ui primary button">
							Sign In
						</button>
					</Link>
					<Link to="/register">
						<button className="ui red button">
							Register
						</button>
					</Link>
				</div>
			)
		}
	}


	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/" className="item">
					<div className="ui large header">Divercity Jobs</div>
				</Link>
				<div className="right menu">
					{this.renderAuthButton()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(Header)