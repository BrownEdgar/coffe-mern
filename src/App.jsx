import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

	useEffect(() => {
		axios.get("http://localhost:3000/users")
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}, [])

	return (
		<div>
			<h1>Lorem ipsum dolor sit.</h1>
		</div>
	)
}

export default App
