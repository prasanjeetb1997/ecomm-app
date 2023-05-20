import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthComponents(props) {
let navigate = useNavigate()
const {Component} = props

useEffect(()=>{
  let user = localStorage.getItem("user");
  if(!user){
   navigate("/")
  }
})

  return (
  <>
 <Component></Component>
  </>
  );
}

export default AuthComponents;
