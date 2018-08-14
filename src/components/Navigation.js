import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () =>{
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add-recipe">Add a recipe</Link></li>
      <li><Link to="/IndexItem">View database</Link></li>
    </ul>
  )
}

export default Navigation
