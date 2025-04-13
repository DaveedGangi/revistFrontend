
import React,{useEffect,useState} from "react";

import { useHistory,Link } from "react-router-dom";

import "./index.css";
function Category(){
    const[username,setUsername]=useState("");
    const[shoppingList,setShoppingList]=useState([]);

    const history=useHistory()

 useEffect(()=>{
    
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
        history.push("/login")
        return;
    }
    const userData=await fetching.json();
    console.log("User logged in..")
    console.log("username",userData.username);
    setUsername(userData.username);

}
    catch(error){
        console.log("error",error);
        history.push("/login");
    }

}
checkAuth()

const fetchingCategoriesApi=async()=>{
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
    }
}
fetchingCategoriesApi();


 },[history])


    return(
        <div>
            <div className="nav-bar">
                <div><img className="shopping-image" src="https://i.ibb.co/zV3KpYDM/Screenshot-2025-04-12-184112.png" alt="not-found"/>
                 </div> <div><input className="search" type="search" placeholder="Search"/></div>
                <div>
                    <Link to="/profile">
                    <button className="username-style">{username&&username[0]}</button>{username}
                    </Link>
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
                     <p>Category</p>&nbsp;&nbsp;
                    <p>No.{shoppingList.length} items</p>
                    
                    </div>
                    <div className="add-category-section">
                        <Link to="/addcategory">
                        <button className="add-category-button" type="button">+ Add Category</button></Link>
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
                                        <Link to={`/shopping/${each.id}`}>
                                        <button type="button">Edit</button>
                                        </Link>
                                        <Link to={`/delete/${each.id}`}>
                                        <button type="button">Delete</button>
                                        </Link>
                                        </div>
                                })
                            }
                        </div>
                    }
                </div>



            </div>
        </div>
    )
}
export default Category