import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
       <nav>
       <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
       </nav>
        </>
    )
}
