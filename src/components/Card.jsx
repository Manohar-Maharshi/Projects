import React from 'react'
import { Icon } from '@iconify/react';	

const Card = (data) => {

	const renderIcon = (icon) =>{
		if(icon === "vercel"){
			return <Icon icon="logos:vercel-icon" className="w-4 h-4"/>
		}
		if(icon === "github"){
			return <Icon icon="akar-icons:github-fill" className="fill-white w-3.5 h-3.5" />
		}
		return <Icon icon={`vscode-icons:file-type-${icon}`} className="w-4 h-4"/>
	}
	return (
		<div className="group hover:shadow-pink-600 shadow relative h-[16.5rem] max-h-[17.5rem] bg-gray-800 rounded-xl p-3 w-[18rem] md:w-[17rem]">
			<a href={data?.data?.deployLink}>
				<img className=" w-full h-[8rem] max-h-[9rem] rounded-xl object-cover" src={data?.data?.thumb?.url} alt={data?.data?.title} />	
			</a>
			<div className="mt-2.5">
				<a href={data?.data?.repoUrl} className="group-hover:text-pink-500 line-clamp-2 my-1 text-xl font-bold leading-tight tacking-wide text-gray-300">{data?.data?.title}</a>
				<div className="flex items-center space-x-1 py-1">
					<div className="flex items-center space-x-1.5">
						{data?.data?.techStack[0]?.tools.map(icon =>
							renderIcon(icon)
						)}
					</div>
				</div>
				<div className="absolute group-hover:flex hidden top-2 right-2 flex flex-col space-y-2 items-center justify-end">
					<a href={data?.data?.deployLink} target="_blank" title={`Live Link : ${data?.data?.deployLink}`} className="hover:bg-gray-200 cursor-pointer bg-gray-300 grid place-items-center rounded-full w-7 h-7">
						<Icon icon="akar-icons:link-out" className="text-black h-3.5 w-3.5"/>
					</a>
					<a href={data?.data?.repoUrl}  target="_blank" title={`Github Repo : ${data?.data?.repoUrl}`} className="hover:bg-gray-200 cursor-pointer bg-gray-300 grid place-items-center rounded-full w-7 h-7">
						<Icon icon="akar-icons:github-fill" className="text-black h-3.5 w-3.5"/>
					</a>
				</div>
				<div className="py-1">
					<p className="text-xs cursor-default text-gray-400 line-clamp-3">
						<span className="font-bold">Description: </span>
						<span>{data?.data?.description}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card