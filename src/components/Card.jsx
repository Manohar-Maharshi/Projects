import React from 'react'
import { Icon } from '@iconify/react';	

const Card = () => {
	return (
		<div className="group hover:shadow-pink-600 shadow relative max-h-[17.5rem] cursor-pointer bg-gray-800 rounded-xl p-3 w-[17rem]">
			<img className=" w-full max-h-[8rem] rounded-xl object-cover" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Hello" />
			<div>
				<small className="uppercase text-[0.6rem] font-medium text-gray-500">beginner</small>
				<h2 className="group-hover:text-pink-500 line-clamp-2 my-1 mt-0 text-lg font-bold leading-tight tacking-wide text-gray-300">Background Changer</h2>
				<div className="flex items-center space-x-1 py-1">
					<div className="flex items-center space-x-1.5">
						<Icon icon="vscode-icons:file-type-reactjs" className="w-4 h-4"/>
						<Icon icon="vscode-icons:file-type-vite" className="w-4 h-4"/>
						<Icon icon="vscode-icons:file-type-tailwind" className="w-4 h-4"/>
						<Icon icon="logos:vercel-icon" className="w-3.5 h-3.5" />
						<Icon icon="akar-icons:github-fill" className="fill-white w-3.5 h-3.5" />
					</div>
				</div>
				<div className="absolute group-hover:flex hidden top-2 right-2 flex flex-col space-y-2 items-center justify-end">
					<div title="Live Link : https://git.io/JDKqc" className="hover:bg-gray-200 cursor-pointer bg-gray-300 grid place-items-center rounded-full w-7 h-7">
						<Icon icon="akar-icons:link-out" className="text-black h-3.5 w-3.5"/>
					</div>
					<div title="Github Repo : https://git.io/JDKqc" className="hover:bg-gray-200 cursor-pointer bg-gray-300 grid place-items-center rounded-full w-7 h-7">
						<Icon icon="akar-icons:github-fill" className="text-black h-3.5 w-3.5"/>
					</div>
				</div>
				<div className="py-1">
					<p className="text-xs text-gray-400 line-clamp-3">
						<span className="font-bold">Description: </span>
						<span>Randamize Background Color of the App on Click.Randamize Background Color of the App on Click.Randamize Background Color of the App on Click.Randamize Background Color of the App on Click.Randamize Background Color of the App on Click.Randamize Background Color of the App on Click.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card