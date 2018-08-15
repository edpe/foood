import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () =>{
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add-item">Add a recipe</Link></li>
      <li><Link to="/index-item">View database</Link></li>
      <li><Link to="/edit/:id">Edit item</Link></li>
    </ul>
  )
}

export default Navigation
