import React from 'react'
import { useSelector } from "react-redux";

export default function Team() {
    const { heroTeam } = useSelector((state) => state.hero);

	return (
		<div className='superhero-team'>

			
			{
				!heroTeam ? (<h2>Your team of heroes will appear here!</h2>) : (

			<div className='grid-superhero'></div>
				)
			}
		</div>
	)
}