import './navbar.css';

function Navbar() {

    return (
        <>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
                <div className="menu"></div>
            </label>
            <nav className='nav'>
                <div className='navBrand'>
                    <a href="/">Brand</a>
                </div>
                <ul>
                    <li>
                        <a href="/" className="material-icons">Home</a>
                    </li>
                    <li>
                        <a href="/" className="material-icons">About</a>
                    </li>
                    <li>
                        <a href="/" className="material-icons">Portafolio</a>
                    </li>
                    <li>
                        <a href="/" className="material-icons">Servicios</a>
                    </li>
                    <li>
                        <a href="/" className="material-icons">Contacto</a>
                    </li>
                </ul>
            </nav>
            <div className='invisible'></div>
        </>
    );
}

export default Navbar;
