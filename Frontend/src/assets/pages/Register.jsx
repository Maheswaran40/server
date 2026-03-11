import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {


    var url="http://localhost:5000/api"
    var navigate=useNavigate()
    var [userName,setUserName]=useState("")
    var [userEmail,setUserMail]=useState("")
    var [userPass,setUserPass]=useState("")

        async function PostData(e){
          e.preventDefault()
        var data=await axios.post(`${url}/register`,{userName,userEmail,userPass})
        alert("signup successfully")
        navigate("/login")
        // navigate("/login")
    }

  return (
    <>
    
    <form action="" onSubmit={PostData}>

        <input type="text" name='username' placeholder='username' onChange={(e)=>setUserName(e.target.value)}/>
        <input type="email" name='email' placeholder='email'  onChange={(e)=>setUserMail(e.target.value)}/>
        <input type="password" name='passowrd' placeholder='password'  onChange={(e)=>setUserPass(e.target.value)}/>
        <input type="submit" />

    </form>
    
    
    
    </>
  )
}

export default Register