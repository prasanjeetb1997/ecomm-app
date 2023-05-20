import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
   let [products, setProducts] = useState([])

   useEffect(() => {
      console.log("insideUseeffect")
      fetchProducts()
   }, [])



   async function fetchProducts() {
      const response = await fetch("http://localhost:4000/products");
      const productList = await response.json()

      setProducts(productList)
   }

   async function deleteProduct(productId) {
      let token = JSON.parse(localStorage.getItem("token")) 
      if(token){
         const response = await fetch(`http://localhost:4000/product/${productId}`, {
            method: "delete",
            headers: {
               authorization : `Bearer ${token}`
             }
         });
         console.log(await response.json())
         fetchProducts()
      }
     
   }

   async function searchProduct(e) {
      let key = e.target.value;
      if (key) {
         const response = await fetch(`http://localhost:4000/products/${key}`)
         let jsonResult = await response.json()
         setProducts(jsonResult)

      } else {
         fetchProducts()
      }
   }


   return (

      <div style={{ textAlign: "center" }}>
         <h1 style={{ color: "navy" }}>Homepage</h1><br /><br />
         <input className="search-field" type="text" placeholder="Search here" onChange={searchProduct} />
         <ul className="product-list"><li>Category</li><li>Company</li><li>Name</li><li>Price</li><li>Operation</li></ul>
         {
            products.length > 0 ? (products.map((product, index) => {
               return (<ul key={index} className="product-list"><li>{product.category}</li><li>{product.company}</li><li>{product.name}</li><li>{product.price}</li><li><button style={{ padding: "0 5px", marginRight: "10px", background: "red", color: "white" }} onClick={() => { deleteProduct(product._id) }}>X</button><Link to={`/update/${product._id}`}>update</Link></li></ul>)
            })) : <h2 style={{ marginTop: "20px" }}>No Results Found</h2>
         }
      </div>

   );
}

export default Home;
