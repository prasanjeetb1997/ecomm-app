import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";


function Layout() {
 
    return (
     <>
     <Nav></Nav>
     <Footer></Footer>
     <Outlet></Outlet>
     </>
    );
  }
  
  export default Layout;
  