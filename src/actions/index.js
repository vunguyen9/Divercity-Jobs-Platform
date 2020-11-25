import jobs from '../apis/jobs'

import {
	SIGN_IN,
	SIGN_IN_WITH_GOOGLE,
	SIGN_OUT,
	CREATE_ACCOUNT,
	FETCH_JOBS
} from './types'

export const signIn = formValues => async (dispatch, getState) => {
	const response = await jobs.post('/login', { ...formValues })
	dispatch({ type: SIGN_IN, payload: response.data})
}

export const signInWithGoogle = (userId) => {
	return {
		type: SIGN_IN_WITH_GOOGLE,
		payload: userId
	}
}

export const signOut = () => {
	return {
		type: SIGN_OUT
	}
}

export const register = formValues => async (dispatch, getState) => {
	const response = await jobs.post('/register', { ...formValues })
	console.log(response.data)
	dispatch({ type: CREATE_ACCOUNT, payload: response.data})
}

export const fetchJobs = () => async dispatch => {
	const response = await jobs.get('/jobs')
	dispatch({ type: FETCH_JOBS, payload: response.data.jobs})
}