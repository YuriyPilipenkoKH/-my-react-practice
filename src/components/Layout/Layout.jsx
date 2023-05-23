import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
        <nav>
            <Link to ='/login'>Login</Link>
          
        </nav>
        <hr />
        <Outlet/>
    </div>
  )
}

export default Layout
