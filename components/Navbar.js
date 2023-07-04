import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div >

          <div className="navbar d-flex flex-wrap justify-content-around  bg-dark pb-3 pt-3">
                <NavLink className="btn btn-secondary" to="/">Home</NavLink>
                <NavLink className="btn btn-secondary" to= "/countries" > Countries</NavLink>
                <NavLink className="btn btn-secondary" to= "/weather" >Weather</NavLink> 
                <NavLink className="btn btn-secondary" to= "/recipe" > Recipe</NavLink>
                
          </div>

        </div>
    )
}


       

