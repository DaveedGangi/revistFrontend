
import React,{useEffect,useState} from "react";

import {Link,useHistory } from "react-router-dom";

import "./index.css";

function Profile(){
    const[username,setUsername]=useState("");
    const history=useHistory()

 useEffect(()=>{
    const refreshToken=async()=>{
        try{
        const api="https://revistbackenddaveedgangi.onrender.com/refresh-token"
        const options={
            method:"POST",
             credentials: "include"
        }
        const fetching=await fetch(api,options)
        if(fetching.ok){
            console.log("refreshed token");
        }
    }
    catch{
        console.log("error occuring while refresh")
    }
    }
    
    const checkAuth=async()=>{
    const api="https://revistbackenddaveedgangi.onrender.com/protected"
    const options={
        method:"GET",
        credentials: "include"
    }
    const fetching=await fetch(api,options)
    try{
    if(fetching.status===401){
        console.log("User not logged in");
        await refreshToken()
        history.push("/login")
        return;
    }
    const userData=await fetching.json();
    console.log("User logged in..")
    console.log(userData.username);
    setUsername(userData.username);

}
    catch(error){
        console.log("error",error);
        history.push("/login");
    }

}
checkAuth()



 },[history])

 const logout=async()=>{

    try{
        const api="https://revistbackenddaveedgangi.onrender.com/logout"
        const options={
            method:"POST",
             credentials: "include"
        }
        const fetching=await fetch(api,options)
        if(fetching.ok){
            console.log("logout successfully");
            setUsername("");
            history.push("/login")
            window.location.reload(); 
        }
    }
    catch{
        console.log("error while logout")
    }
 }


    return(
        <div>
            <div className="nav-bar">
                <div>
                    <Link to="/"><img className="shopping-image" src="https://i.ibb.co/zV3KpYDM/Screenshot-2025-04-12-184112.png" alt="not-found"/>
                    </Link>
                 </div>
                <div><button className="username-style">{username&&username[0]}</button>{username}
                </div>
            </div>

            <h1 className="logout-heading">Are you sure want to logout</h1>
            
            <button className="logout-button" onClick={()=>logout()} type="button">Logout</button>

        </div>
    )
}
export default Profile;