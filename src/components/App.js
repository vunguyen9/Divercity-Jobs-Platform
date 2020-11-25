import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import SignInPage from './SignInPage'
import RegisterPage from './RegisterPage'
import ApplyPage from './ApplyPage'


const App = () => {
	return (
		<Router>
			<div className="ui container">
				<Header />
				<Switch>
					<Route path='/' exact component={HomePage}/>
					<Route path='/signin' exact component={SignInPage}/>
					<Route path='/register' exact component={RegisterPage}/>
					<Route path='/jobs/:id/apply' exact component={ApplyPage}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App