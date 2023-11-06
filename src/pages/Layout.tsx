import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <nav>
          <ul>
            {/* <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="add-note">Add note</Link>
            </li> */}
            {/* <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
}

export default Layout;