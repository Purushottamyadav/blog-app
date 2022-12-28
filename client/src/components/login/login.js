import "./login.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
const Login=()=>{
    const [login,setlogin]=useState({})
    const navigate=useNavigate()
    const handleregister=()=>{
        navigate("/register")
    }
    const handlelogin=()=>{
        axios.post("http://localhost:3002/login",login).then((res)=>{
            alert("successfully")
            localStorage.setItem("authorization",res.data.authToken);
            localStorage.setItem("user",res.data.user)
            navigate("/home")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className="login-page">
                <header className="App-header">
                    <h1 className="app-logo" >MEMBER LOGIN</h1>
                    <input className="login-context" placeholder="UserName" onChange={(e)=>{setlogin({...login, username: e.target.value})}} />
                    <input  className="login-context" placeholder="Password" onChange={(e)=>{setlogin({...login, password: e.target.value})}} />
                    <button className="login-context" onClick={handlelogin} >LOGIN</button>
                    <small className="login-context" id="navi-register">Don't have an account? <a onClick={handleregister} href='#!' >Register</a></small>
                </header>
            </div>
        </>
    )
}

export default Login