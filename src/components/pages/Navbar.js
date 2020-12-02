import React from 'react'
import { Link } from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTime} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            <MdFingerprint className='navbar-icon'/>
            LAVISH
          </Link>
          <div className="menu-icon"/>
          {click ? <FaTimes/> : <FaBar/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
