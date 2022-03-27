import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../search";

const Navigation = () => {


    return (
        <nav>
            <ul className="nav-links">
                <li className="logo">Reddit Minimum</li>

                <li>
                    <NavLink 
                        to="/" 
                        className="nav-link"
                        activeClassName="nav-link-active"
                        exact
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <Search />
                </li>
            </ul>
        </nav>

    )
}

export default Navigation;