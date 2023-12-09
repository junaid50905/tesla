import { Link, NavLink } from 'react-router-dom'
import NavbarContent from '../../data/Data.json'

import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import "./DesktopNavbar.css"



const DesktopNavbar = () => {
  const navitems = NavbarContent.navbar.navItems;
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          {/* NavLogo */}
          <div className="logo">
            <Link><img src={NavbarContent.navbar.logo} alt="tesla-logo" className='img-fluid'/></Link>
          </div>
          {/* NavItems */}
          <ul className="navbar-nav nav_items">       
            {
              navitems.map((navitem, index)=>{
                return(
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link text-capitalize">{navitem.navItemName}</NavLink>
                  </li>
                )
              })
            }            
          </ul>
          {/* NavSupportLanguageAuth */}
          <ul className="navbar-nav nav_supportLanguageAuth">
            <li className="nav-item">
              <Link className="nav-link icon"><FaRegCircleQuestion/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon"><TbWorld /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon"><FaRegUserCircle /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default DesktopNavbar
