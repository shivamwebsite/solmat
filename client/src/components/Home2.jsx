import React, { useState, useContext, useEffect } from 'react'
import "./home.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Home2() {

    const selection = () => {
        const butt = document.getElementsByClassName("homeoption");
        butt[0].style.backgroundColor = "green";
        butt[4].style.backgroundColor = "rgb(31, 29, 29)";
        butt[2].style.backgroundColor = "rgb(31, 29, 29)";
        butt[1].style.backgroundColor = "rgb(31, 29, 29)";
        butt[3].style.backgroundColor = "rgb(31, 29, 29)";
    }
    const selection1 = () => {
        const butt = document.getElementsByClassName("homeoption");
        butt[1].style.backgroundColor = "green";
        butt[4].style.backgroundColor = "rgb(31, 29, 29)";
        butt[0].style.backgroundColor = "rgb(31, 29, 29)";
        butt[2].style.backgroundColor = "rgb(31, 29, 29)";
        butt[3].style.backgroundColor = "rgb(31, 29, 29)";
    }
    const selection2 = () => {
        const butt = document.getElementsByClassName("homeoption");
        butt[2].style.backgroundColor = "green";
        butt[4].style.backgroundColor = "rgb(31, 29, 29)";
        butt[1].style.backgroundColor = "rgb(31, 29, 29)";
        butt[0].style.backgroundColor = "rgb(31, 29, 29)";
        butt[3].style.backgroundColor = "rgb(31, 29, 29)";
    }
    const selection3 = () => {
        const butt = document.getElementsByClassName("homeoption");
        butt[3].style.backgroundColor = "green";
        butt[4].style.backgroundColor = "rgb(31, 29, 29)";
        butt[2].style.backgroundColor = "rgb(31, 29, 29)";
        butt[1].style.backgroundColor = "rgb(31, 29, 29)";
        butt[0].style.backgroundColor = "rgb(31, 29, 29)";
    }
    const selection4 = () => {
        const butt = document.getElementsByClassName("homeoption");
        butt[4].style.backgroundColor = "green";
        butt[3].style.backgroundColor = "rgb(31, 29, 29)";
        butt[2].style.backgroundColor = "rgb(31, 29, 29)";
        butt[1].style.backgroundColor = "rgb(31, 29, 29)";
        butt[0].style.backgroundColor = "rgb(31, 29, 29)";
    }

    return (
        <>
            <div>
                <div className="tutcont">
                    <div className="homecont">
                        <div className="homehead">What's your Weight(in kilogram)?</div>
                        <div className="homeoption" onClick={selection} >Between 40 and 50</div>
                        <div className="homeoption" onClick={selection1}>Between 51 and 60</div>
                        <div className="homeoption" onClick={selection2}>Between 61 and 70</div>
                        <div className="homeoption" onClick={selection3}>Between 71 and 80</div>
                        <div className="homeoption" onClick={selection4}>Above 80</div>
                        <div className="btn">
                            <NavLink to="/push" className='hbutton'><button>Next<IoMdArrowRoundForward style={{ fontSize: "30px" }} className='arrow' /></button></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2