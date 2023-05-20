import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


function UpdateProduct() {
  const params = useParams()
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [company, setCompany] = useState("");


  useEffect(() => {
    getProduct()
  }, [])

  async function getProduct() {
    const response = await fetch(`http://localhost:4000/product/${params.id}`)
    const product = await response.json()
    setName(product.name)
    setCategory(product.category)
    setCompany(product.company)
    setPrice(product.price)
  }

  async function updateProduct() {
    let token = JSON.parse(localStorage.getItem("token"))
    let productPayload = { name, price, category, company }

    if (token) {
      const response = await fetch(`http://localhost:4000/product/${params.id}`, {
        method: "put",
        body: JSON.stringify(productPayload),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        }
      });
      const jsonData = await response.json()
      console.log(jsonData)
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Update Product</h1>
      <form>
        <input type="text" value={name} placeholder="Enter Product Name" onChange={(e) => { setName(e.target.value) }} /> <br />
        <input type="number" value={price} placeholder="Enter Product Price" onChange={(e) => { setPrice(e.target.value) }} /><br />
        <input type="text" value={category} placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} /><br />
        <input type="text" value={company} placeholder="Product Brand" onChange={(e) => { setCompany(e.target.value) }} /><br />
        <button type="button" onClick={updateProduct}>Update Product</button>
      </form>
    </>
  );
}

export default UpdateProduct;
