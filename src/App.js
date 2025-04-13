import {Switch,Route} from "react-router-dom";
import './App.css';

import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Category from "./components/category";
import AddCategory from "./components/addcategory";
import EditShoppingItem from "./components/editItem";
import DeleteShoppingItem from "./components/deleteItem";
import Profile from "./components/profile";


function App() {
  return (
    <div>
      <main>
     <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/category" component={Category}/>
      <Route exact path="/addcategory" component={AddCategory}/>
      <Route exact path="/shopping/:id" component={EditShoppingItem}/>
      <Route exact path="/delete/:id" component={DeleteShoppingItem}/>
      <Route exact path="/profile" component={Profile}/>
     </Switch>
     </main>
    </div>
  );
}

export default App;
