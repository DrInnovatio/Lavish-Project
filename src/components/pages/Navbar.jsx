import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            <MdFingerprint className='navbar-icon'/>
            LAVISH
          </Link>
          <div className="menu-icon" onClick={ handleClick }>
            { click ? <FaTimes /> : <FaBars /> }
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
            
            <li className='nav-item'>
              <Link tp='/' className='nav-link'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link tp='/services' className='nav-link'>
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link tp='/products' className='nav-link'>
                Products
              </Link>
            </li>
            <li className="nav-btn">
              { button ? (
                <Link to='/sign-up' className="btn-link">
                  <Button buttonStyle="btn--outLine">
                    SIGN UP
                  </Button>
                </Link>
              ) : (
                  <Link to='/sign-up' className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>
                      SIGN UP 
                    </Button>
                  </Link>
              ) }  
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
