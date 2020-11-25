import React from 'react'


class SearchBar extends React.Component {
	state = { term: '', selectedOption: '' }

	onFormSubmit = event => {
		event.preventDefault()
		this.props.onSubmit(this.state.term, this.state.selectedOption)
	}

	onValueChange = event => {
		this.setState({
			selectedOption: event.target.value
		})
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<div className="inline fields">
							<label>Job Search</label>
							<div className="field">
								<div className="ui radio checkbox">
									<input 
										type="radio" 
										name="frequency" 
										value="location"
										checked={this.state.selectedOption === "location"}
										onChange={this.onValueChange}
									/>
									<label>Location</label>
								</div>
							</div>
							<div className="field">
								<div className="ui radio checkbox">
									<input 
										type="radio" 
										name="frequency" 
										value="job_type"
										checked={this.state.selectedOption === "job_type"}
										onChange={this.onValueChange}
									/>
									<label>Job Type</label>
								</div>
							</div>
							<div className="field">
								<div className="ui radio checkbox">
									<input 
										type="radio" 
										name="frequency" 
										value="skills_tag"
										checked={this.state.selectedOption === "skills_tag"}
										onChange={this.onValueChange}
									/>
									<label>Skill</label>
								</div>
							</div>
						</div>
						<input 
							type="text" 
							value={this.state.term} 
							onChange={e => this.setState({ term: e.target.value})} 
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar