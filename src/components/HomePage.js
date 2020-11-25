import React from 'react'
import { connect } from 'react-redux'
import { fetchJobs } from '../actions'
import SearchBar from './SearchBar'
import JobList from './JobList'

class HomePage extends React.Component {
	state = { term: '', selectedOption: '' }

	componentDidMount() {
		this.props.fetchJobs()
	}

	onSearchSubmit = (term, selectedOption) => {
		this.setState({ term: term, selectedOption: selectedOption })
	}


	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<JobList 
					jobs={this.props.jobs}
					term={this.state.term.toLowerCase()}
					selectedOption={this.state.selectedOption}
				/>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		jobs: Object.values(state.jobs)
	}
}

export default connect(mapStateToProps, { fetchJobs })(HomePage)