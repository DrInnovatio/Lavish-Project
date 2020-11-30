import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTime} from 'react-icons'

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            LAVISH
          </Link>
          <div className="menu-icon">



          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
