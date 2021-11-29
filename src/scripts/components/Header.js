import "../../styles/components/header.css";
// import { Link, NavLink } from "react-router-dom";
// import { FaBell, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = (props) => {
    return (

        <nav className="navi">
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </nav>
        
    )
}

export default Header;