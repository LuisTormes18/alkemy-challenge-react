import React from 'react'
import { useSelector, useDispatch  } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSuperheroActive, removeFromTeam } from "../../actions/hero";

export default function Team() {
    const { heroTeam } = useSelector((state) => state.hero);
       const history = useHistory();
    const dispatch = useDispatch();

 const handleDelete = (id) => {
 	console.log('click',id);
 	dispatch(removeFromTeam(id));
 }
 const handleSeeDetails = (superhero) => {
        dispatch(setSuperheroActive(superhero));

        history.push("/home/hero/details");
    };
	return (
		<div className='superhero-team'>
<h1 className='mt-3 title' >My Team de Superhero</h1>
			
			{
				heroTeam.length <=0 ? (<h2>Your team of heroes will appear here!</h2>) : (

			<div className='conateiner mt-2 grid-superhero'>
{heroTeam.map(superhero => 
	(

	<div key={superhero.id} className="card">
            <img src={superhero.image.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{superhero.name}</h5>
            </div>
            <div className="card-body">
                <button
                onClick={()=>{
                	handleDelete(superhero.id)
                }}
                    className="btn btn-outline-dark"
                

                >
                    Remove
                </button>
                <button onClick={()=>{
handleSeeDetails(superhero)
                }} className="card-link">
                    See Details
                </button>
            </div>
        </div>
	) 
	)}

			</div>
				)
			}
		</div>
	)
}