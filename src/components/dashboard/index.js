
import React,{useEffect,useState} from "react";

import { useHistory,Link } from "react-router-dom";
import {BarLoader} from "react-spinners";

import "./index.css";
function Dashboard(){
    const[username,setUsername]=useState("");
    const[shoppingList,setShoppingList]=useState([]);
    const[spinner,setSpinner]=useState(true);

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

const fetchingCategoriesApi=async()=>{
    try{
    const allcategories="https://revistbackenddaveedgangi.onrender.com/allcategory"
    const options={
        method:"GET",
         credentials: "include"
    }
    const fetchingCategories=await fetch(allcategories,options)
    if(fetchingCategories.ok){
        const responseCategories=await fetchingCategories.json();
        console.log(responseCategories.categories);
        setShoppingList(responseCategories.categories)
        setSpinner(false);
    }
}
catch{
    console.log("error occuring while allcategories");
}
}
fetchingCategoriesApi();


 },[history])


    return(

        <div>
            {
                    spinner?<div className="spinner"><BarLoader /></div>:
                
            
        <div>
            <div className="nav-bar">
                <div><img className="shopping-image" src="https://i.ibb.co/zV3KpYDM/Screenshot-2025-04-12-184112.png" alt="not-found"/>
                 </div>
                <div><button className="username-style">{username&&username[0]}</button>{username}
                </div>
            </div>

            <div className="bottom">
              
                <div className="left-side-nav-bar">
                    <Link className="links" to="/">Dashboard</Link>
                    <br/>
                    <br/>
                    <Link className="links" to="/category">Category</Link>
                </div>



                <div className="shopping-items">
                    <div className="showing-data">
                     <p>Dashboard</p>&nbsp;&nbsp;
                    <p>No. {shoppingList.length} items</p>
                    </div>
                    {
                        shoppingList.length===0?<h1 className="empty-list-heading">Shopping list is empty</h1>:
                        <div className="shoppingList-items">
                            {
                                shoppingList.map((each)=>{
                                    return<div className="item" key={each.id}>
                                        <img className="shopping-item" src={each.image} alt="not-found"/>
                                        <p className="title">{each.title}</p>
                                        <p className="item-count">{each.itemCount} items</p>
                                        </div>
                                })
                            }
                        </div>
                    }
                </div>



            </div>
        </div>

                }
        </div>
    )
}
export default Dashboard