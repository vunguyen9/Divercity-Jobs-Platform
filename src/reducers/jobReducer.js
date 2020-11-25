import _ from 'lodash'
import {
	FETCH_JOBS,
	FETCH_JOB
} from '../actions/types'

const jobReducer = (state = {}, action) => {
	switch(action.type) {
		case FETCH_JOBS:
			return { ...state, ..._.mapKeys(action.payload, 'id' )}
		case FETCH_JOB:
			return { ...state, [action.payload.id]: action.payload }
		default:
			return state
	}
}

export default jobReducer