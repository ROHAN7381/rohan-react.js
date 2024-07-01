import React, { useState } from 'react'
import axios from 'axios'
function Login() {
  const [email,setemail]=useState("")
  const[password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    axios.post('https://reqres.in/api/login',userdata,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      const data = response.data;
      alert("Login Succesfull")
      localStorage.setItem('token', data.token);
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
    });
  }

  return (
    <div >
      <form onSubmit={handlesubmit} style={{width:"50%",height:"200px",margin:"auto"}}>
      <h3 style={{ marginTop: "50px"}}>LOGIN PAGE</h3>
        <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter The Email' style={{ width: "200px",borderRadius:"30px",height: "30px" }}></input><br></br><br></br>
        <input type='Password'onChange={(e)=>setpassword(e.target.value)} placeholder='Enter The Password' style={{ width: "200px",borderRadius:"30px",height: "30px" }}></input><br></br><br></br>
        <button style={{width:"150px",backgroundColor:"green"}}>Submit</button>
      </form>
    </div>
  )
}

export default Login