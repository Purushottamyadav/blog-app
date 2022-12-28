import axios from "axios"
import "./register.css"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
const Register=()=>{
    const [register,setregister]=useState({})
    const navigate=useNavigate()
    const handleregister=(e)=>{
        if(register.password===register.confirmpassword){
        axios.post("http://localhost:3002/register",register).then((res)=>{
            alert("successfully")
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
        }else{
            alert("password and confirm password are different")
        }

    }
    return (
        <>
        <div className="register-page">
                <header className="App-header">
                
                    <h1 className="app-logo" >REGISTER</h1>
                    <input className="login-context" placeholder="UserName" onChange={(e)=>{setregister({...register, username: e.target.value})}} />
                    <input className="login-context" placeholder="Password" onChange={(e)=>{setregister({...register, password: e.target.value})}} />
                    <input className="login-context" placeholder="Confirm Password" onChange={(e)=>{setregister({...register, confirmpassword: e.target.value})}} />                   
                    <button className="login-context" onClick={handleregister} >Register</button>
                    <small className="login-context" id="navi-register">Already have an account? <Link to='/' >Login</Link></small>
                </header>
            </div>
        </>
    )
}
export default Register