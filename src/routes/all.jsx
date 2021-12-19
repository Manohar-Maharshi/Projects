import React from 'react'
import Card from '@/components/Card'

const all = ({allProjects}) => {
	return (
		<div className="my-8 w-full container mx-auto">
			<div className="flex items-start gap-7 justify-center flex-wrap">			
				{allProjects && allProjects.map((data,index)=>
					<Card data={data} key={data?.title} />
				)}
			</div>
		</div>
	)
}

export default all