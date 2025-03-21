import React from 'react'
import "./navbar.css"
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { HiFire } from "react-icons/hi";

function Navbar() {

  const handlebaar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('navbaractive')) {
      sidebar.classList.remove('navbaractive');
      document.querySelector(".handle").style.position = "relative";
      document.querySelector(".handle").style.right = "0px";
      document.querySelector(".handle").style.top = "0px";
    } else {
      sidebar.classList.add('navbaractive');
      document.querySelector(".handle").style.position = "absolute";
      document.querySelector(".handle").style.right = "30px";
      document.querySelector(".handle").style.top = "35px";
    }
  }
  const handleclose = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('navbaractive');
    document.querySelector(".handle").style.position = "relative";
    document.querySelector(".handle").style.right = "0px";
    document.querySelector(".handle").style.top = "0px";
  }

  return (
    <>
      <header className='navbarheader'>
        <div className="navbarcontain">
          <NavLink to="/home"><img src="logo.jpg" alt="error" /></NavLink>
          <span className="handle" onClick={handlebaar}><RxDragHandleHorizontal style={{ fontSize: "25px" }} /></span>
          <div className="mainnav">
            <div className="nav">
              <NavLink><div className="navbar">Drill</div></NavLink>
              <NavLink><div className="navbar">Premium</div></NavLink>
              <NavLink><div className="navbar">Rewards</div></NavLink>
              <NavLink to="/tutorial" ><div className="navbar">Tutorial</div></NavLink>
              <NavLink><div className="navbar">Contact Us</div></NavLink>
              <NavLink to="/" ><div className="navbar">Log Out</div></NavLink>
            </div>
            <div>
              <div className="navbar" style={{ alignItems: "center", display: "flex",fontSize:"20px",fontWeight:"bold" }}><HiFire style={{ fontSize: "30px", color: "red" }} />10</div>
            </div>
          </div>
          <div className="navbarhandlecont" id="sidebar" onClick={handleclose}>
            <NavLink className="navbar" to=""> <span>Drill</span></NavLink>
            <NavLink className="navbar" to=""><span>Premium</span></NavLink>
            <NavLink className="navbar" to=""> <span>Rewards</span></NavLink>
            <NavLink className="navbar" to="/tutorial"> <span>Tutorial</span></NavLink>
            <NavLink className="navbar" to="/"><span>Log Out</span></NavLink>
            {/* <!-- <span>ENROLLMENT</span> --> */}
            {/* <NavLink to="/enroll"><span className='handlearrow'>ENROLLMENT<FaArrowRight className='enroolarrow' /> </span></NavLink> */}
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar
