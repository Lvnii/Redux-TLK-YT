import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from "../../Pages/Home"
import Users from "../../Pages/Users"
import './Header.css'

const Header = () => {

    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
        </>
    )
}

export default Header;