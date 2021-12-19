import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

import All from '@/routes/all'
import ReactJS from '@/routes/react'
import SvelteJS from '@/routes/svelte'
import VanillaJS from '@/routes/vanilla'

import { getProjects } from '@/components/Graphql-request'


const App = () => {
	const [allProjects, setallProjects] = useState([]);
	const [reactProjects, setreactProjects] = useState([]);
	const [svelteProjects, setsvelteProjects] = useState([]);
	const [jsProjects, setjsProjects] = useState([]);


	const get = async () =>{
		let svelteProj = [];
		let reactProj = [];
		let jsProj = [];
		const projects = await getProjects();

		projects.map(p=>{
			if(p?.framework === "svelte"){
				svelteProj.push(p)
			}
			if(p?.framework === "react"){
				reactProj.push(p)
			}
			if(p?.framework === "js"){
				jsProj.push(p)
			}
		})
		setallProjects(projects);
		setsvelteProjects(svelteProj);
		setreactProjects(reactProj);
		setjsProjects(jsProj);
	}

	useEffect(() => {
		get()
	}, [])


	return (
		<div className="container mx-auto md:px-3">
			<Header />
			<NavBar 
				allProjectsLength={allProjects.length}
				svelteProjectsLength={svelteProjects.length} 
				reactProjectsLength={reactProjects.length}
				jsProjectsLength={jsProjects.length}
			/>
			<Routes>
				<Route path="/" element={<All allProjects={allProjects} />} />
				<Route path="/react" element={<ReactJS reactProjects={reactProjects} />} />
				<Route path="/svelte" element={<SvelteJS svelteProjects={svelteProjects} />} />
				<Route path="/vanilla" element={<VanillaJS jsProjects={jsProjects} />} />
			</Routes>
		</div>
	)
}

export default App