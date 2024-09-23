import React from 'react'
//importing images
import Server from './assets/server.png'
import Dropdown from './assets/dropdown-icon.png'
import Login from './assets/login.png'
import Menu from './assets/menu.png'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="h-20 w-full bg-white p-4 flex flex-row justify-around max-md:w-full max-sm:justify-between max-sm:px-8 md:px-2 fixed top-0 z-10">
        <a href="/" className="flex items-center gap-1">
            <img src={Server} alt="logo" className="h-8 w-8" />
            <p><b>ServerDB</b></p>
        </a>
        <div className="flex flex-row max-md:hidden items-center">
            <a href="/" className="h-[40px] w-[100px] flex items-center justify-center hover:bg-[#d3d3ff] rounded-md">
            Product <img src={Dropdown} className="h-5 w-5 inline mt-1" alt="dropdown" />
            </a>
            <a href="/" className="h-[40px] w-[100px] flex items-center justify-center hover:bg-[#d3d3ff] rounded-md">Pricing</a>
            <a href="/" className="h-[40px] w-[100px] flex items-center justify-center hover:bg-[#d3d3ff] rounded-md">
            Resources <img src={Dropdown} className="h-5 w-5 inline mt-1" alt="dropdown" />
            </a>
        </div>
        <div className="flex flex-row gap-5 max-md:hidden">
            <Link to="/login">
                <button to="" className="p-1 text-[#6a69ff] hover:text-[#5857e0]">
                <img src={Login} alt="login-logo" className="h-5 w-5 inline" /> Login
                </button>
            </Link>
            
            <button className="w-24 h-10 bg-[#6a69ff] rounded-md text-white hover:bg-[#5857e0]">Get it free</button>
        </div>
        <div className="md:hidden">
            <img src={Menu} alt="menu" height="25px" width="25px" />
        </div>
    </header>
    </div>
  )
}

export default Header