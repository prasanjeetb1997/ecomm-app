import {useState} from "react"
import { useNavigate } from "react-router-dom";

function Signup() {
let navigate = useNavigate();

let [name,setName] = useState("");
let [email,setEmail] = useState("");
let [password,setPassword] = useState("");
let [nameRequired,setNameRequired] = useState(false)
let [emailRequired,setEmailRequired] = useState(false)
let [passRequired,setPassRequired] = useState(false)

let formDataObject = {name,email,password}

function handleNameInput(e){
  setName(e.target.value)

  if(e.target.value.length<1){
   setNameRequired(true)
  }else{
   setNameRequired(false)
  }
}

function handleEmailInput(e){
   setEmail(e.target.value)

   if(e.target.value.length<1){
      setEmailRequired(true)
     }else{
      setEmailRequired(false)
     }
 }

 function handlePassInput(e){
   setPassword(e.target.value)

   if(e.target.value.length<1){
      setPassRequired(true)
     }else{
      setPassRequired(false)
     }
 }

async function createUser(){

if(name.length<1 || email.length<1 || password.length<1){
   if(name.length<1){setNameRequired(true)}
   if(email.length<1){setEmailRequired(true)}
   if(password.length<1){setPassRequired(true)}
   return 
}

const response = await fetch("http://localhost:4000/register",{
      method : "post",
      body : JSON.stringify(formDataObject),
      headers: {
         "Content-Type": "application/json"
       }
 });
   const jsonData = await response.json()

   console.log(jsonData)
   
   if(jsonData.code){
      alert("This mail has already been taken")
   }else{
      localStorage.setItem("user",JSON.stringify(jsonData))
      navigate("/")
   }
  
 }

    return (
  
     <form>
        <h2>Register</h2>
        <input type="text" value={name}  placeholder="Enter Full Name" onChange={handleNameInput}/>{nameRequired ?<div className="animation">required</div>: <div></div> } 

        <input type="email" value={email} placeholder="Create New Email " onChange={handleEmailInput}/>{emailRequired?<div className="animation">required</div>: <div></div> }

        <input type="password" value={password} placeholder="Set Password" onChange={handlePassInput}/><br />{passRequired?<div className="animation">required</div>: <div></div> }

        <button type="button" onClick={createUser}>SignUp</button>
     </form>
    
    );
  }
  
  export default Signup;
  