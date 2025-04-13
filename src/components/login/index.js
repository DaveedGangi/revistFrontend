import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
function Login(){
    const history=useHistory();
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[condition,setCondition]=useState(false);
    const[message,setMessage]=useState("");

    const formSubmit=async(e)=>{
        e.preventDefault()
        

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
        }
        else{
            setCondition(false);
            const response=await fetchLogin.json();
           console.log(response);
           history.replace("/");

        }
    }



    return (
        <div className="login-page">
            <form className="form" onSubmit={formSubmit}>
                
                <h1 className="login-heading">{condition?"SignUp Page":"Login Page"}</h1>
                <label name="name">Username</label>
        
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter your name" required/>
                <br/>
                <label name="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" required/>
                <br/>
                <p>{message}</p>
                
                <button className="login-button" type="submit">{condition?"SignUp":"Login"}</button>
            </form>
        </div>
    )
}

export default Login;