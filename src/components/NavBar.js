import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return(
       <>
        <nav>
            <ul>
                <li className = "index-link">
                    <NavLink to ='/'>index</NavLink>
                </li>
                <li className = "home-link">
                    <NavLink to = '/home'>home</NavLink>
                </li>
                <li className = "home-link">
                    <NavLink to = '/notfound'>Not</NavLink>
                </li>              
               
            </ul>
        </nav>
    )
}
