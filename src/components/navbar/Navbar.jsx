import './navbar.scss'
import {Person, Mail } from '@mui/icons-material';

function Navbar() {
  return (
  <div id='navbar'>
    <div className="wrapper">
      <div className="left">
        <a href="#homepage" className='logo'>Serg's React Portfolio</a>
      </div>
      <div className="itemContainer">
        <Person className="icon" />
        <span>(415) 535-2141</span>
      </div>
      <div className="itemContainer">
        <Mail className="icon"/>
        <span>sergioslaguardia@gmail.com</span>
      </div>
      <div className="right">
        <div className="hamburger">
          <span className="line1">.</span>
          <span className="line2">.</span>
          <span className="line3">.</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar;
