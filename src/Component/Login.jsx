import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import logo from "../images/logo.png"
import LoginLayout from "./LoginLayout";

function Login(){
    const [user, setuser] = useState("")
  const [pass, setpass] = useState("")
  const [uerror, setuerror] = useState("")
  const [perror, setperror] = useState("")
  const [fail, setfail] = useState("")
  const navigate = useNavigate()

  function handleuser(evt){
    setuser(evt.target.value)
    setuerror("")
  }

  function handlepass(evt){
    setpass(evt.target.value)
    setperror("")
  }

  function validate(){
    let isValid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!user.trim()){
      setuerror("Email is required.")
       isValid = false;
      console.log("email required")
    }else if(!regex.test(user)){
      console.log("Invalid email format!")
      setuerror("Invalid email format!.")
       isValid = false;
    }

    if(!pass.trim()){
      setperror("password is required.")
       isValid = false;
      console.log("password required")
    }else if(pass.length < 4){
      console.log("Password must be more than 4 characters")
      setperror("Password must be more than 4 characters")
       isValid = false;
    }else if(pass.length > 10){
      console.log("Password cannot exceed more than 10 characters")
      setperror("Password cannot exceed more than 10 characters")
       isValid = false;
    }

    return  isValid
  }

  function handlesubmit(e){
    e.preventDefault()
    if(!validate()) return
    
     var logindetails = axios.post("http://localhost:5000/login",{"username":user,"password":pass})
    logindetails.then(function(data){
     
      if(data.data === true)
      {
        
        navigate("/dashboard")
      }else {
        setfail("Login Failed.")
      }
      
    })
  }

    return(
   <LoginLayout>
        <div className="h-full flex flex-col opacity-100 p-0 m-0">
        
        <img src={logo} className="w-32 md:w-48 p-1 ml-4 md:ml-32"></img>
        
        <div className="bg-black text-white p-4 m-8 mt-0 bg-opacity-80 rounded w-full mx-auto sm:w-full md:mx-auto md:w-3/5 lg:w-2/5 xl:w-2/5">
           
           {fail && <p className="text-3xl font-bold text-black p-3 w-[354] md:w-[354px] bg-yellow-500 rounded ml-4 sm:ml-24 md:ml-5 lg:ml-12 ">{fail}</p>}
           <h1 className="text-white text-3xl font-bold mr-32 sm:mr-64 lg:mr-60">Sign In</h1>
                <div>
                <input onChange={handleuser} className="p-3 mt-6 pr-30 sm:pr-36 bg-black bg-opacity-70 border border-gray-500 rounded font-semibold" type="email" placeholder="Email address or number"></input><br></br>
                {uerror && <p className='text-red-500 border-red-500'>{uerror}</p>}
                <input onChange={handlepass} className="p-3 mt-4 pr-30 sm:pr-36 bg-black bg-opacity-70 border border-gray-500 rounded font-semibold" type="password" placeholder="Password"></input><br></br>
                {perror && <p className='text-red-500'>{perror}</p>}
                <button onClick={handlesubmit} className="p-2 mt-4 font-bold bg-red-600 w-[220px] sm:w-[352px] rounded hover:bg-red-700">Sign In</button>
                
                <p className="p-2 mt-1 font-semibold text-gray-400">OR</p>
                <button className="p-2 mt-1 font-bold bg-gray-50 bg-opacity-20 w-[220px] sm:w-[352px] rounded hover:bg-opacity-15">Use a sign-in code</button><br></br>
                
                <div>
                <p className="mt-2 mb-0 text-lg underline hover:opacity-50 ml-2 lg:ml-[8px]"><a href="#">Forgot password?</a></p><br></br>
                </div>
                </div>
                <div className="flex flex-col justify-start leading-4 mt-0 w-full text-sm">
                <div className="ml-7 sm:ml-24 md:ml-6 lg:ml-[5px] xl:ml-[55px] text-sm sm:text-lg flex items-center w-full">
                    <input className="w-5 h-5" type="checkbox"></input>
                    <label className="ml-2">Remember me.</label>
                 </div><br></br>
                <p className="text-gray-300 mr-7 sm:mr-44 md:mr-[160px] lg:mr-[155px]">New to Netflix?<a className="font-bold text-white hover:underline" href="#">Sign up now.</a></p><br></br>
                </div>
                <div className="flex flex-col justify-start w-full text-sm/3">
                <p className="text-gray-400 text-xs sm:text-sm tracking-tighter sm:tracking-widest md:tracking-normal lg:tracking-normal xl:tracking-wide ml-7 sm:ml-24  md:ml-6 lg:ml-[8px] xl:ml-[56px] xl:text-sm text-left md:text-left leading-4">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p><br></br>
                <p className="mr-[130px] sm:mr-[278px] text-blue-700 text-sm font-semibold underline md:mr-[265px] lg:mr-68 xl:ml-[5px]"><a href="">Learn more.</a></p>
            </div>
        </div>
        </div>
     
        
        </LoginLayout>
    )
}


export default  Login