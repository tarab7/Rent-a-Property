import React from 'react'
import logo from "../images/preview.jpg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

          <div className='center'>
              <div className='item'>
                <img src={logo} alt=""/>
              <span>Rent a Property</span>
            </div>
          </div>

          <div className='left'>
            <div className='item active'>
              Rent
            </div>
            <div className='item'>
              Buy
            </div>
            <div className='item'>
              Sell
            </div>
            <div className='item'>
              Manage Property
              <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
              Resources
              <KeyboardArrowDownIcon/>
            </div>
          </div>

          
          <div className='right'>
            <div className='login'>
              <button>Login</button>
            </div>
            <div className='signup'>
              <button>Signup</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
