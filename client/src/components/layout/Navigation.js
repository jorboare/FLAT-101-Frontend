import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='navbar'>
            <div>
                <h3 className='navbar__title'>FLAT 101</h3>
            </div>
            <div>
                <ul>
                    <li> <Link to='/'>Casas</Link></li>
                </ul>

            </div>

        </nav>
    );
}

export default Navigation;