import { useState } from "react";
import React from 'react'
import "./register.css";
import { Password } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  };

  const showhide = ()=>{
      let eyeicon=document.getElementById("eyeicon");
      let password=document.getElementById("password");

        if(password.type == "password"){
          password.type="text";
          eyeicon.src="eye-open.png";
        }
        else{
          password.type="password";
          eyeicon.src="/eye-close.png";
        }
  }

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password } = udata;
    console.log(udata)

    const res = await fetch("https://solmat.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password
      })
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      // alert("no data");
      toast.warn("Fill up all the details 🫠!", {
        position: "top-center",
      })
    } else if (res.status === 423) {
      // alert("no data");
      toast.warn("Email Id already exist 🤨!", {
        position: "top-center",
      })
      setUdata({ ...udata, email: "" });
    } else if (res.status === 424) {
      // alert("no data");
      toast.warn("Mobile number already exist 🤨!", {
        position: "top-center",
      })
      setUdata({ ...udata, mobile: "" });
    } else if (res.status === 425) {
      // alert("no data");
      toast.warn("Check all your details and fill up carefully!", {
        position: "top-center",
      })
    } else {
      // alert("data succesfully added");
      toast.success("Registration Successfully done 😃!", {
        position: "top-center",
      })
      setUdata({ ...udata, fname: "", email: "", mobile: "", password: ""});
    }

  }
  return (
    <>
      <div className="regibody">
        <div className="regicontainer">
          <div className="image">
            <div className="regiform">
              <div className="form">
                <h2>Register</h2>
                <div className="input-box">
                  <input type="text" onChange={adddata}
                    value={udata.fname}
                    name="fname" id="fname" required />
                  <label htmlFor="">Username</label>
                </div>
                <div className="input-box">
                  <input type="email" placeholder="example@gmail.com" onChange={adddata}
                    value={udata.email}
                    name="email" id="email" required />
                  <label htmlFor="">Email</label>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="10-digit" onChange={adddata}
                    value={udata.mobile}
                    name="mobile" id="mobile" required />
                  <label htmlFor="">Phone Number</label>
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Minimum 6 digit" onChange={adddata}
                    value={udata.password}
                    name="password" id="password" required />
                  <label htmlFor="">Password</label>
                  <img src="/eye-close.png" id="eyeicon" onClick={showhide}/>
                </div>
                <div className="group">
                  <a href="#">Forget Password?</a>
                  <a href="/">Signin</a>
                </div>
                <button type="submit" className='registerbutton' onClick={senddata}>Sign up</button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}
