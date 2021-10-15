import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import CardSuperhero from "./CardSuperhero";
import SearchForm from "./SearchForm";

import { cleanSuperheroList } from "../../actions/hero";

function SearchBarSuperheroes() {

    const { superheroList } = useSelector((state) => state.hero);
    const dispatch = useDispatch();
useEffect(() => {
        return () => {
            dispatch(cleanSuperheroList());

        };
    }, [dispatch])
	return (
		<div>

		<SearchForm />

			{ superheroList.length > 0 && (

				<div className="grid-superhero">
           			 {superheroList.map((superhero) => (
                <CardSuperhero key={superhero.id} superhero={superhero} />
            		))}
        			</div>

				) }
		</div>
	)
}

export default SearchBarSuperheroes