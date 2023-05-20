
import { useState } from "react";


function AddProduct() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [company, setCompany] = useState("");



  async function addProduct() {

    let token = JSON.parse(localStorage.getItem("token")) 
    let user = localStorage.getItem("user")
    let userId = JSON.parse(user)._id
    let productPayload = { name, price, category, company, userId }

    if(token){
      const response = await fetch("http://localhost:4000/add", {
        method: "post",
        body: JSON.stringify(productPayload),
        headers: {
          "Content-Type": "application/json",
          authorization : `Bearer ${token}`
        }
      });
      const jsonData = await response.json()
      console.log(jsonData)
    }

  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form>
        <input type="text" value={name} placeholder="Enter Product Name" onChange={(e) => { setName(e.target.value) }} /> <br />
        <input type="number" value={price} placeholder="Enter Product Price" onChange={(e) => { setPrice(e.target.value) }} /><br />
        <input type="text" value={category} placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} /><br />
        <input type="text" value={company} placeholder="Product Brand" onChange={(e) => { setCompany(e.target.value) }} /><br />
        <button type="button" onClick={addProduct}>Add Product</button>
      </form>
    </>
  );
}

export default AddProduct;
