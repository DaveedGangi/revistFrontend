import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
function Login(){
    const history=useHistory();
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[condition,setCondition]=useState(false);
    const[message,setMessage]=useState("");
    const[loading,setLoading]=useState(false);

    const formSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true);
        
        try{
        const api=condition?"https://revistbackenddaveedgangi.onrender.com/signup" : "https://revistbackenddaveedgangi.onrender.com/login";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include",
            body:JSON.stringify({username,password})

        }
        const fetchLogin=await fetch(api,options);
        if(!fetchLogin.ok){
            setCondition(true);
           const response=await fetchLogin.json();
           console.log(response);
           setMessage(response.message)
           return;
        }
        else{
            setCondition(false);
            const response=await fetchLogin.json();
            setLoading(false);
           console.log(response);
           history.replace("/");

        }

    }
    catch{
        setMessage("Network error or Server not responding");
    }
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
        setMessage("");
    }
    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
        setMessage("");
    }


    return (
        <div className="login-page">
            <form className="form" onSubmit={formSubmit}>
                
                <h1 className="login-heading">{condition?"SignUp Page":"Login Page"}</h1>
                <label name="name">Username</label>
        
                <input value={username} onChange={handleUsernameChange} type="text" placeholder="Enter your name" required/>
                <br/>
                <label name="password">Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter your password" required/>
                <br/>
                <p>{message}</p>
                
                <button disabled={loading} className="login-button" type="submit">{loading?"Please wait...":condition?"Sign Up":"Login"}</button>
                {condition?
                <p className="allready-account">Already have an account? <span onClick={()=>setCondition(false)}  id="showLoginForm">Login</span></p>
                :
                <p className="dont-have-account">Don't have an account? <span  onClick={()=>setCondition(true)} id="showRegisterForm">Register</span></p>
                }
            
            </form>
        </div>
    )
}

export default Login;