import React, { useState } from 'react'
import '../assets/css/main.scss'
import 'animate.css'

import logo from '../assets/img/home/logo-petrolida-desktop.svg'
import hamb from "../assets/img/home/hamb-nav.svg"
import exit from "../assets/img/home/exit-nav.svg"

import { Link } from 'react-router-dom'
import { useCookie } from 'react-use'

import bell from '../assets/img/bell-nav.svg'
import {FaUserAlt} from 'react-icons/fa'

const Navbar = ({ currentPage }) => {
  const [token, updateToken, deleteToken] = useCookie('token')

  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [navbarImg, setNavbarImg] = useState(true)

  const handleResponsive = () => {
    setToggleNavbar(!toggleNavbar)
    setNavbarImg(!navbarImg)
  }

  const handleLogout = () => {
    deleteToken()
  }

  return (
    <nav>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" id="logo-petrolida">
          <img src={logo} className="logo" alt="Logo Petrolida" />
        </Link>
        <ul className={`d-flex animate__animated ${toggleNavbar && 'responsive animate__slideInLeft'}`} id="list-link-nav">
          <li><Link to="/about" style={currentPage === 'about' ? {color: 'green'} : {color: 'white'}}>About</Link></li>
          <li>
            <Link to="/#competitions">Events</Link>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="li">
            <div className="btn-group">
              <button type="button" className="btn shadow-none dropdown-toggle btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">Competitions</button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><Link className="dropdown-item" to="/competitions/oil_rig_design">Oil Rig Design</Link></li>
                <li><Link className="dropdown-item" to="/competitions/fracturing_fluid_design">Fracturing Fluid Design</Link></li>
                <li><Link className="dropdown-item" to="/competitions/petrosmart">Petrosmart</Link></li>
                <li><Link className="dropdown-item" to="/competitions/paper">Paper</Link></li>
                <li><Link className="dropdown-item" to="/competitions/stock_trading">Stock Trading</Link></li>
                <li><Link className="dropdown-item" to="/competitions/business_case">Business Case</Link></li>
                <li><Link className="dropdown-item" to="/competitions/case_study">Case Study</Link></li>
              </ul>
            </div>
          </li>
          <li className="li">
            <div className="btn-group">
              <button type="button" className="btn shadow-none dropdown-toggle btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">Non Competitions</button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><Link className="dropdown-item" to="/coming_soon">CV 101</Link></li>
                <li><Link className="dropdown-item" to="/coming_soon">Interview 101</Link></li>
                <li><Link className="dropdown-item" to="/coming_soon">Career Paths</Link></li>
              </ul>
            </div>
          </li>

          {!token && <>
            <li className="li"><Link to="/account/sign_in" className="sign-in">Sign in</Link></li>
          </>
          }
          {token && 
            <>
              <li className="d-block d-md-none bell-nav"><a href="/#"><i className="far fa-user"></i> &nbsp;&nbsp;Account</a></li>
              <li className="d-block d-md-none account-nav"><a href="/#" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> &nbsp;&nbsp;Logout</a></li>
              <li className="bell position-relative d-none d-md-block">
                <span className="badge bg-success position-absolute"></span>
                <a href="/#" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,10"><img src={bell} alt="Icon Bell Navbar"/></a>
              </li>
              <li className="account d-none d-md-block">
                <a href="" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,10"><FaUserAlt/></a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item">
                    <Link to="/coming_soon"><i className="far fa-user"></i> &nbsp;&nbsp;Account</Link>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> &nbsp;&nbsp;Logout</a>
                  </li>
                </ul>
              </li>
            </>
          }
        </ul>
        <button className="d-block d-md-none btn shadow-none" id="btn-nav" onClick={handleResponsive}><img src={navbarImg ? hamb : exit} alt="Button Navigation" id="img-btn-nav"/></button>
      </div>
    </nav>
  )
}

export default Navbar