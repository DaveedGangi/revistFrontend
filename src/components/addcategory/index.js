import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./index.css";
function AddCategory(){
    const[title,setTitle]=useState("");
    const[image,setImage]=useState("");
    const[category,setCategory]=useState("");
    const[itemCount,setItemCount]=useState(0);

    const categoryAdd=async(e)=>{
        e.preventDefault();
        console.log("h");
        const api="https://revistbackenddaveedgangi.onrender.com/addcategory"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include",
            body:JSON.stringify({
                title,
                image,
                category,
                itemCount:parseInt(itemCount,10)
            })
            
        }
        const fetchAddCategory=await fetch(api,options);
        if(fetchAddCategory.ok){
            console.log("Added item successfully");
            setTitle("");
            setImage("");
            setCategory("");
            setItemCount(0);
        }
        else{
            console.log("failed to add item");
        }

    }
    return(

        <div>
            
            <form className="add-category-form" onSubmit={categoryAdd}>
            <Link to="/">
            <button className="dashboard" type="button">Back to Dashboard</button>
            </Link>
            <br/>
                <label name="imageUrl">Image Url</label>
                <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image url" required/>
                <br/>
                <label name="title">Title</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" required/>
                <br/>
                <label name="category">Category</label>
                <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter category" required/>
                <br/>
                <label name="itemCount">Shopping item count</label>
                <input value={itemCount} onChange={(e)=>setItemCount(e.target.value)} type="number" placeholder="Enter number" required/>
                <br/>
                <button className="add-category-button" type="submit">Add Category</button>
            </form>
        </div>
    )
}

export default AddCategory;