import React from 'react'
import Card from '@/components/Card'


const react = ({reactProjects}) => {
	return (
		<div className="my-8 w-full">
			<div className="flex items-start gap-7 justify-center flex-wrap">			
				{reactProjects && reactProjects.map((data,index)=>
					<Card data={data} key={data?.title} />
				)}
			</div>
		</div>
	)
}

export default react