import React from 'react';


export const NavBar = () =>{
    return(
       <>
        <nav>
            <ul>
                <li className = "index-link">
                    <NavLink to ='/'>Index</NavLink>
                </li>
                <li className = "home-link">
                    <NavLink to = '/home'>Home</NavLink>
                </li>
                <li className = "home-link">
                    <NavLink to = '/notfound'>Not</NavLink>
                </li>              
               
            </ul>
        </nav>
    )
}
