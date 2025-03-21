import React, { useState, useContext, useEffect } from 'react'
import "./home.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
// import { LoginContext } from './context/ContextProvider';


function Home() {


const selection =()=>{
  const butt=document.getElementsByClassName("homeoption");
  butt[0].style.backgroundColor="green";
  butt[2].style.backgroundColor="rgb(31, 29, 29)";
  butt[1].style.backgroundColor="rgb(31, 29, 29)";
  butt[3].style.backgroundColor="rgb(31, 29, 29)";
}
const selection1 =()=>{
  const butt=document.getElementsByClassName("homeoption");
  butt[1].style.backgroundColor="green";
  butt[0].style.backgroundColor="rgb(31, 29, 29)";
  butt[2].style.backgroundColor="rgb(31, 29, 29)";
  butt[3].style.backgroundColor="rgb(31, 29, 29)";
}
const selection2 =()=>{
  const butt=document.getElementsByClassName("homeoption");
  butt[2].style.backgroundColor="green";
  butt[1].style.backgroundColor="rgb(31, 29, 29)";
  butt[0].style.backgroundColor="rgb(31, 29, 29)";
  butt[3].style.backgroundColor="rgb(31, 29, 29)";
}
const selection3 =()=>{
  const butt=document.getElementsByClassName("homeoption");
  butt[3].style.backgroundColor="green";
  butt[2].style.backgroundColor="rgb(31, 29, 29)";
  butt[1].style.backgroundColor="rgb(31, 29, 29)";
  butt[0].style.backgroundColor="rgb(31, 29, 29)";
}

return (
  <>
    <div>
      <div className="tutcont">
        <div className="homecont">
          <div className="homehead">What's your age ?</div>
          <div className="homeoption" onClick={selection} >Between 15 and 20</div>
          <div className="homeoption" onClick={selection1}>Between 21 and 30</div>
          <div className="homeoption" onClick={selection2}>Between 31 and 40</div>
          <div className="homeoption" onClick={selection3}>Above 40</div>
          <div className="btn">
         <NavLink to="/input1" className='hbutton'><button>Next<IoMdArrowRoundForward style={{fontSize:"30px"}} className='arrow' /></button></NavLink>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default Home