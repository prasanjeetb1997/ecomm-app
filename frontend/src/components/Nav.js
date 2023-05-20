import { Link, useNavigate } from "react-router-dom";


function Nav() {

  let user = localStorage.getItem("user")

  let navigate = useNavigate()


  function logout() {
    localStorage.clear()
    navigate("signin")
  }


  return (

    <nav style={{marginBottom:"40px"}}>
      <ul className="navbar-links">
        <li><img src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg" alt="" /></li>
        <li><Link to="/">Home</Link></li>
        {user ? <> <li><Link to="/add">Add Products</Link></li> <li><Link onClick={logout} to="/signin">Logout ({JSON.parse(user).name})</Link></li> </> : <><li><Link to="/signup">Register</Link></li><li><Link to="/signin">Signin</Link></li></>}
      </ul>
    </nav>

  );
}

export default Nav;
