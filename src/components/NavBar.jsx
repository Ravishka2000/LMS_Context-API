import react from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
            <ul style={{ display: "flex", listStyle: "none", gap: "3rem" }} >
                <Link to="/">
                    <li> Home </li>
                </Link>

                <Link to="/books">
                    <li> Books </li>
                </Link>

                <Link to="/users">
                    <li> Users </li>
                </Link>
                
            </ul>
        </div>
    )
}

export default NavBar;