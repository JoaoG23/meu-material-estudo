import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(<div className='navbar'>
        <h1>Logo</h1>
        <ul className='lista'>
            <li><Link to='/aulas'>Aulas</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
        </ul>
    </div>
    )
}

export default Nav;