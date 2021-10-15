import React from 'react'
import { useDispatch } from "react-redux";

import useForm from "./../../hooks/useForm";
import { startSearchSuperheroByName } from "./../../actions/hero";

function SearchForm() {

	const [stateValues, handleInputChange, reset] = useForm({ search: "" });

    const dispatch = useDispatch();

	const handleSubmit = (e) => {
        e.preventDefault();

        if (stateValues.search === "") {
            return;
        }

        dispatch(startSearchSuperheroByName(stateValues.search));
        reset();
    };
	return (
		 <form className="d-flex" onSubmit={handleSubmit}>

                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search "
                        aria-label="Search"
                        name="search"
                        value={stateValues.search}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-dark" type="submit">
                        Search
                    </button>
       </form>
	)
}

export default SearchForm