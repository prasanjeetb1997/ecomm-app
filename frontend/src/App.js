import {BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Protected from "./components/Protected";
import AuthComponents from "./components/AuthComponents"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ProductImage from "./components/ProductImage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout></Layout>}>
     <Route index element={<Home></Home>}></Route>
     <Route path="/add" element={<AuthComponents Component={AddProduct}></AuthComponents>}></Route>
     <Route path="/update/:id" element={<AuthComponents Component={UpdateProduct}></AuthComponents>}></Route>
     <Route path="/logout" element={<h1>Logout</h1>}></Route>
     <Route path="/image" element={<ProductImage></ProductImage>}></Route>
     <Route path="/signin" element={<Protected Component={Signin}></Protected>}></Route>
     <Route path="/signup" element={<Protected Component={Signup}></Protected>}></Route>
    </Route>
   
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
