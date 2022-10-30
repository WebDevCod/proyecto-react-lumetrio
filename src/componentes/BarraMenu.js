import React from 'react';
import { Link } from 'react-router-dom';

class BarraMenu extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-dark bg-dark px-4 py-2'>
                <div className='container-fluid'>
                    <Link to='/'>
                        <img src={require('../icono.png')} alt='icono skater' width='50' className='navbar-brand' />
                    </Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='skateboards' className='nav-link'>Skateboards</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='ropa' className='nav-link'>Ropa</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='accesorios' className='nav-link'>Accesorios</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='contacto' className='nav-link'>Contacto</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='api' className='nav-link'>API - Rick and Morty</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default BarraMenu;