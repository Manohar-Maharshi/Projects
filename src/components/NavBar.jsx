import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = ({ allProjectsLength,svelteProjectsLength,reactProjectsLength,jsProjectsLength }) => {
	return (
		<nav className="flex items-center justify-center space-x-4 text-gray-400">
			<NavLink to="/" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex-col justify-center md:flex-row flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex-col justify-center md:flex-row flex items-center space-x-2"}>
				<span className="text-sm text-center md:text-base">All</span>
				<span className="bg-gray-700 px-2 py-px rounded-full text-[0.7rem] ">{allProjectsLength}</span>
			</NavLink>
			<NavLink to="/react" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex-col justify-center md:flex-row flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex-col justify-center md:flex-row flex items-center space-x-2"}>
				<span className="text-sm text-center md:text-base">React JS</span>
				<span className="bg-gray-700 px-2 py-px rounded-full text-[0.7rem] ">{reactProjectsLength}</span>
			</NavLink>
			<NavLink to="/svelte" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex-col justify-center md:flex-row flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex-col justify-center md:flex-row flex items-center space-x-2"}>
				<span className="text-sm text-center md:text-base">Svelte JS</span>
				<span className="bg-gray-700 px-2 py-px rounded-full text-[0.7rem] ">{svelteProjectsLength}</span>
			</NavLink>
			<NavLink to="/vanilla" className={({ isActive }) => isActive ? "active-link link-underline link-underline-black px-2 py-1 pb-2 text-gray-300  flex-col justify-center md:flex-row flex items-center space-x-2" : " px-2 py-1 pb-2 hover:text-gray-300 link link-underline link-underline-black flex-col justify-center md:flex-row flex items-center space-x-2"}>
				<span className="text-sm text-center md:text-base">Vanilla JS</span>
				<span className="bg-gray-700 px-2 py-px rounded-full text-[0.7rem] ">{jsProjectsLength}</span>
			</NavLink>
		</nav>
	)
}

export default NavBar