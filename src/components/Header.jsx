import React from 'react'
import { Icon } from '@iconify/react';	


const Header = () => {
	return (
		<div className="text-center py-6 leading-loose">
			<p className="text-pink-600 font-bold text-5xl md:text-7xl leading-sung">Projects</p>
			<p className="pt-3 flex items-center justify-center space-x-2">
				<small className="text-gray-500  text-xs md:text-sm">
					<span>by </span> 
					<a target="_blank" href="https://github.com/Manohar-Maharshi" className="hover:underline cursor-pointer hover:text-pink-500">Manohar Maharshi</a>
				</small>
				<a target="_blank"  href="https://github.com/Manohar-Maharshi"><Icon icon="akar-icons:github-fill" className="fill-pink-700 w-3.5 h-3.5" /></a>
				<a target="_blank"  href="https://twitter.com/Maharshine"><Icon icon="logos:twitter" className="fill-white w-3.5 h-3.5" /></a>
			</p>
		</div>
	)
}

export default Header