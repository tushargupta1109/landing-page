import React from 'react'
import './style.css';

const Header = () => {
    return (
        <div>
            <div class="navbar">
                <ul class="menu1">
                    <li><a>Deux Huit Huit</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Expertise</a></li>
                    <li><a>Team</a></li>
                    <li><a>Contact</a></li>
                    <li style={{marginLeft:"30em"}}><a>Francais</a></li>
                    <li><a className="hov">Hire Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;