import React from 'react'
import Card from '@/components/Card'

const beginner = () => {
	const Users=[1,2,3,4,5,6,6,7,8,9,0,3,4,4,5,5,6,6,5,6];
	return (
		<div className="my-8 w-full">
			<div className="flex items-center gap-7 justify-center flex-wrap">			
				{Users.map(()=>(
					<Card />
				))}
			</div>
		</div>
	)
}

export default beginner