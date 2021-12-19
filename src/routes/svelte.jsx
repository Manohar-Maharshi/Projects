import React from 'react'
import Card from '@/components/Card'

const svelte = ({ svelteProjects }) => {
	return (
		<div className="my-8 w-full">
			<div className="flex items-start gap-7 justify-center flex-wrap">			
				{svelteProjects && svelteProjects.map((data,index)=>
					<Card data={data} key={data?.title} />
				)}
			</div>
		</div>
	)
}

export default svelte