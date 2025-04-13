
import {Link,useParams} from "react-router-dom";

import React,{useEffect,useState} from "react";
function EditShoppingItem(){
const{id}=useParams()
    const[title,setTitle]=useState("");
    const[image,setImage]=useState("");
    const[category,setCategory]=useState("");
    const[itemCount,setItemCount]=useState(0);


useEffect(()=>{
    const specificAPi=async()=>{
    const itemApi=`https://revistbackenddaveedgangi.onrender.com/shopping/${id}`
    const options={
        method:"GET",
        credentials: "include"
    }
    const fetchSpecific=await fetch(itemApi,options);
    if(fetchSpecific.ok){
        const response=await fetchSpecific.json();
        console.log(response);
        setTitle(response.title)
        setImage(response.image)
        setCategory(response.category)
        setItemCount(response.itemCount)
    }

}
specificAPi()

},[id])


const categoryEdit=async(e)=>{
    e.preventDefault();
    try{
    const api=`https://revistbackenddaveedgangi.onrender.com/editcategory/${id}`
    const options={
        method:"PUT",
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
    const fetchEditCategory=await fetch(api,options);
    if(fetchEditCategory.ok){
        console.log("Edit item successfully");
        alert("Edited shopping category successfully")
        setTitle("");
        setImage("");
        setCategory("");
        setItemCount(0);
    }
    else{
        console.log("failed to Edit item");
        alert("Failed to edit shopping category")
    }
}
catch{
    console.log("Error occured during fetching");
    alert("Error occured");
}

}




    return(

        <div>
        

                <form className="add-category-form" onSubmit={categoryEdit}>
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
                            <button className="add-category-button" type="submit">Edit Category</button>
                        </form>

        </div>
    )
}

export default EditShoppingItem;