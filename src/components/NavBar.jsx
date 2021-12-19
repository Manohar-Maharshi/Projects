import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = ({ allProjectsLength,svelteProjectsLength,reactProjectsLength,jsProjectsLength }) => {
	return (
		<nav className="flex items-center justify-center space-x-4 text-gray-400">
			<NavLink to="/" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex items-center space-x-2"}>
				<span>All</span>
				<span className="bg-gray-700 px-2 ml-1 py-px rounded-full text-[0.7rem] ">{allProjectsLength}</span>
			</NavLink>
			<NavLink to="/react" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex items-center space-x-2"}>
				<span>React JS</span>
				<span className="bg-gray-700 px-2 ml-1 py-px rounded-full text-[0.7rem] ">{reactProjectsLength}</span>
			</NavLink>
			<NavLink to="/svelte" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex items-center space-x-2"}>
				<span>Svelte JS</span>
				<span className="bg-gray-700 px-2 ml-1 py-px rounded-full text-[0.7rem] ">{svelteProjectsLength}</span>
			</NavLink>
			<NavLink to="/vanilla" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex items-center space-x-2"}>
				<span>Vanilla JS</span>
				<span className="bg-gray-700 px-2 ml-1 py-px rounded-full text-[0.7rem] ">{jsProjectsLength}</span>
			</NavLink>
		</nav>
	)
}

export default NavBar