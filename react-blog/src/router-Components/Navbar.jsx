import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav flex-column nav-pills">
            <NavLink 
                className= {({ isActive }) => isActive ? "d-block nav-link active" : "nav-link"}    
                to="/">Display Posts</NavLink>
            <NavLink 
                className= {({ isActive }) => isActive ? "d-block nav-link active" : "nav-link"} 
                to="/ReactCrud">React Crud</NavLink>   
        </nav>
    )
};