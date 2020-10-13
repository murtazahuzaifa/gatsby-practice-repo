import React from 'react'
import {Link} from 'gatsby';

const Header = () => {
    return (
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/contact' >Contact</Link></li>
            <li><Link to='/app' >App</Link></li>
            <li><Link to='/post' >Post</Link></li>
        </ul>
    )
}

export default Header;