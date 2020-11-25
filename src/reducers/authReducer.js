import { SIGN_IN, SIGN_OUT, SIGN_IN_WITH_GOOGLE, CREATE_ACCOUNT } from '../actions/types'


const INITIAL_STATE = {
	isSignedIn: null,
	userId: null,
	token: null
}


const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, token: action.payload.token }
		case SIGN_IN_WITH_GOOGLE:
			return { ...state, isSignedIn: true, userId: action.payload }
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null }
		case CREATE_ACCOUNT:
			return { ...state, isSignedIn: true, token: action.payload.message }
		default:
			return state
	}
}
export default authReducer
