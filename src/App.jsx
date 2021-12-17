import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Beginner from '@/routes/beginner'
import Intermediate from '@/routes/intermediate'
import Pro from '@/routes/pro'


const App = () => {
	return (
		<div className="container mx-auto md:px-3">
			<Header />
			<NavBar />
			<Routes>
				<Route path="/" element={<Beginner />} />
				<Route path="/intermediate" element={<Intermediate />} />
				<Route path="/pro" element={<Pro />} />
			</Routes>
		</div>
	)
}

export default App