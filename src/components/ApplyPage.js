import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './Modal'



class ApplyPage extends React.Component {


	renderActions() {
		if (this.props.isSignedIn) {
			return (
				<Link to="/" className="ui primary button">Ok</Link>
			)
		}
		else {
			return (
				<React.Fragment>
					<Link to="/signin" className="ui primary button">Sign In</Link>
					<Link to="/" className="ui button">Cancel</Link>
				</React.Fragment>
			)
		}
	}

	renderContent() {
		if (this.props.isSignedIn) {
			return "You are successfully applied for this job !"
		}
		return "You are not logged in. Do you want to login?"
	}

	render() {
		return (
			<Modal 
				title="Apply for this job"
				content={this.renderContent()}
				actions={this.renderActions()}
			/>
		);
	}

}

const mapStateToProps = (state, ownProps) => {
	return { isSignedIn: state.auth.isSignedIn }
}



export default connect(mapStateToProps)(ApplyPage)