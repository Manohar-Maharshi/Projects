import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-center space-x-4 text-gray-400">
			<NavLink to="/" className={ ({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-1.5 text-gray-300" : "px-2 py-1 pb-1.5 hover:text-gray-300 link link-underline link-underline-black" }>Beginner</NavLink>
			<NavLink to="/intermediate" className={ ({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-1.5 text-gray-300" : "px-2 py-1 pb-1.5 hover:text-gray-300 link link-underline link-underline-black" }>Intermediate</NavLink>
			<NavLink to="/pro" className={ ({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-1.5 text-gray-300" : "px-2 py-1 pb-1.5 hover:text-gray-300 link link-underline link-underline-black" }>Pro</NavLink>
		</nav>
	)
}

export default NavBar