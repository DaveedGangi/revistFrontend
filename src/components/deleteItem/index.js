
import { useParams,useHistory,Link } from "react-router-dom"
function DeleteShoppingItem(){
    const{id}=useParams()
    const history=useHistory();

    const categoryDelete=async(e)=>{
        e.preventDefault();
     
    try{
        const api=`https://revistbackenddaveedgangi.onrender.com/deletecategory/${id}`
        const options={
            method:"DELETE",
            credentials: "include"
            
        }
        const fetchDeleteCategory=await fetch(api,options);
        if(fetchDeleteCategory.ok){
            console.log("Deleted item successfully");
            alert("Deleted shopping category successfully");
            history.replace("/");
        
          
        }
        else{
            console.log("failed to Delete item");
            alert("Failed to delete shopping category")
        }

    }
    catch{
        console.log("error while deleting");
        alert("Error occured");
        
    }

    }

    return(
        <div>
             <form className="add-category-form" onSubmit={categoryDelete}>
            <Link to="/">
            <button className="dashboard" type="button">Back to Dashboard</button>
            </Link>
            <h1>Are you sure delete category</h1>
            <br/>
                <button className="add-category-button" type="submit">Delete Category</button>
            </form>
        </div>
    )
}

export default DeleteShoppingItem;