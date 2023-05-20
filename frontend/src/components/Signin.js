import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  let navigate = useNavigate();
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  const formData = {email,password}

 async function handleLogin(){
   const response = await fetch("http://localhost:4000/login",{
      method : "post",
      body : JSON.stringify(formData),
      headers: {
         "Content-Type": "application/json"
       }
   });
   const jsonData = await response.json()
   
   if(jsonData.error){
    alert(jsonData.error)
   }else{
    localStorage.setItem("user", JSON.stringify(jsonData.user))
    localStorage.setItem("token", JSON.stringify(jsonData.auth))
    navigate("/")
   }
   
 } 


    return (
  
     <form>
        <h2>Login</h2>
        <input type="email" value={email}  placeholder="Email " onChange={(e)=>{setEmail(e.target.value)}}/><br />
        <input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
        <button type="button" onClick={handleLogin}>Login</button>
     </form>
    
    );
  }
  
  export default Signin;
  