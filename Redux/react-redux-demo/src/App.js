import React from 'react'
import './App.css'
import { Provider } from 'react-redux'

import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import TotalContainer from './components/TotalContainer'
import store from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
				<IceCreamContainer />
				<TotalContainer />
			</div>
		</Provider>
	)
}

export default App
