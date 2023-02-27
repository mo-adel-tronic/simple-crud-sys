import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="nav flex-column nav-pills me-3 w-25 py-4">
        <NavLink to={'/'} className='p-4 mx-auto'>Home</NavLink>
        <NavLink to={'/products'} className='p-4 mx-auto'>Products</NavLink>
    </div>

  )
}
