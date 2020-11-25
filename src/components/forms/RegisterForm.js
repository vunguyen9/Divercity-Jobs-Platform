import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends React.Component {
	renderError({ error, touched }){
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				{this.renderError(meta)}
			</div>
		)
	}

	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="username" component={this.renderInput} label="Enter Username" />
				<Field name="password" component={this.renderInput} label="Enter Password" />
				<Field name="name" component={this.renderInput} label="Enter your name" />
				<button className="ui button primary">Submit</button>
			</form>
		)
	}
};

const validate = (formValues) => {
	const error = {};
	if (!formValues.username) {
		error.username = 'Username Required';
	}
	if (!formValues.password) {
		error.password = 'Password Required';
	}
	if (!formValues.name) {
		error.name = 'Name Required';
	}
	return error;
}




export default reduxForm({
	form: 'registerForm',
	validate
})(RegisterForm);

