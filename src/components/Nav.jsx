import React from "react";
import { useState } from "react";

const Nav = ({onSearch}) => {


const handleSearchInput = (e) => {
    onSearch(e.target.value);
 
}


return(
    <nav className="navbar navbar bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white">Data Colaboradores</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"
            aria-label="Search" onChange={handleSearchInput}/>
            <button className="btn btn-outline-warning" type="submit" >Search</button>
            </form>
         </div>
    </nav>
)

}

export default Nav;