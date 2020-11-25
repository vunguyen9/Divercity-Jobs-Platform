import React from 'react'
import { Link } from 'react-router-dom'

class JobList extends React.Component {
	

	renderList(jobs) {
		return jobs.map(job => {
			return (
				<div className="ui item" key={job.id} >
					<div className="ui placeholder segment">
						<div className="content">
							
							<div className="ui blue header" >
								{job.title}
								<Link to={`/jobs/${job.id}/apply`}>
									<button className="ui right floated basic blue button">
										Apply
									</button>
								</Link>
							</div>
	
							<div className="description">
								{job.description}
							</div>
							<br/>

							<div className="extra content">
								<i className="marker icon"></i>
								{job.location}
							</div>

							<div className="extra content">
								<i className="building icon"></i>
								{job.company.charAt(0).toUpperCase() + job.company.slice(1)}
							</div>

							<div className="extra content">
								<i className="briefcase icon"></i>
								{job.job_type}
							</div>

							<div className="content">
								Minimum Requirements: {job.skills_tag.join(', ')}
							</div>
						</div>
					</div>
				</div>
			)
		})
	}


	render() {
		let jobs = this.props.jobs

		if(this.props.selectedOption && this.props.term) {
			jobs = jobs.filter(job => { return job[this.props.selectedOption] !== undefined })
			jobs = jobs.filter(job => { 
				let result = job[this.props.selectedOption]
				if(Array.isArray(result)) {
					result = result.join(', ')
				}
				return result.toLowerCase().includes(this.props.term) 
			})
		}
		return (
			<div className="ui items">
				{this.renderList(jobs)}
			</div>
		)
	}
}


export default JobList