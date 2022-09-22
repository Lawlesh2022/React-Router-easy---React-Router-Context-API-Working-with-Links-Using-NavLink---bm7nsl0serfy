import React from 'react';
import { NavLink } from 'react-router-dom';



export const NavBar = () =>{
    return(
        <>       
        <nav>
            <ul>
                <li>
                    <NavLink to ='/' className = "index-link">index</NavLink>
                </li>
                <li>
                    <NavLink to = '/home' className = "home-link">home</NavLink>
                </li>        
                            
            </ul>
        </nav>
        </>

    )
}
