import { Link, NavLink } from 'react-router-dom'
import NavbarContent from '../../data/Data.json'

import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import "./DesktopNavbar.css"
import { useState, useEffect } from 'react';




const DesktopNavbar = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  };

  useEffect(() => {
    // Update screen size when the component mounts
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);


  return (
    <>
      {screenSize >= 1200 ? <>
        {/******* Desktop navbar **************/}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* NavLogo */}
            <div className="logo">
              <Link><img src={NavbarContent.navbar.logo} alt="tesla-logo" className='img-fluid' /></Link>
            </div>
            {/* NavItems */}
            <ul className="navbar-nav nav-items">
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize">One</NavLink>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mega-menu-items">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 border-start">
                      <div className="mega-menu-links">
                        <h5><Link>One</Link></h5>
                        <h5><Link>Two</Link></h5>
                        <h5><Link>Three</Link></h5>
                        <h5><Link>Four</Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize">two</NavLink>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mega-menu-items">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Solar Panels</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Solar Panels</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Solar Panels</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Solar Panels</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 border-start">
                      <div className="mega-menu-links">
                        <h5><Link>One</Link></h5>
                        <h5><Link>Two</Link></h5>
                        <h5><Link>Three</Link></h5>
                        <h5><Link>Four</Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize">three</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize">four</NavLink>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mega-menu-items">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mega-menu-item text-center">
                              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" className='img-fluid w-75 h-75' />
                              <h6>Model S</h6>
                              <div className="links d-flex justify-content-center gap-2">
                                <Link>Learn</Link>
                                <Link>Order</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 border-start">
                      <div className="mega-menu-links">
                        <h5><Link>One</Link></h5>
                        <h5><Link>Two</Link></h5>
                        <h5><Link>Three</Link></h5>
                        <h5><Link>Four</Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-capitalize">five</NavLink>
              </li>
            </ul>
            {/* NavSupportLanguageAuth */}
            <ul className="d-flex gap-3 navbar-nav nav_supportLanguageAuth">
              <li className="nav-item">
                <Link className="nav-link icon"><FaRegCircleQuestion /></Link>
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
      </> : <>
        {/******* Small device navbar **************/}
        <nav className='d-flex justify-content-between align-items-center'>
          <div className="logo">
            <Link><img src={NavbarContent.navbar.logo} alt="tesla-logo" className='img-fluid' /></Link>
          </div>
          <div className="small-device-menu">
            <button className="menu-button btn py-0 px-3 fw-medium" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <button type="close-button button" className="btn-close close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body mt-5">
                <p>Try scrolling the rest of the page to see this option in action.</p>
              </div>
            </div>

          </div>
        </nav>

      </>

      }



    </>
  )
}

export default DesktopNavbar
