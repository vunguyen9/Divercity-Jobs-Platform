import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import jobReducer from './jobReducer'

export default combineReducers({
	jobs: jobReducer,
	auth: authReducer,
	form: formReducer
})