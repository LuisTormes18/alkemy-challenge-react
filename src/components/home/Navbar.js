import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from './../../actions/auth';

export default function Navbar() {
  const dispatch = useDispatch();
  
  const handleLogout = () =>{
    dispatch(logout());
  }
	return (
		<nav className="navbar bg-light">
  <div className="container-fluid">
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
     <button className="btn btn-dark" type="submit" onClick={handleLogout}>Logout</button>
  </div>
</nav>
	)
}