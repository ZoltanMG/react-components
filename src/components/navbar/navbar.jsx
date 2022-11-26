import './navbar.css';

function Navbar() {

    return (
        <>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
                <div className="menu"></div>
            </label>
            <nav>
                <ul>
                    <li>
                        <i className="material-icons">A</i>Grade A
                    </li>
                    <li>
                        <i className="material-icons">B</i>Grade B
                    </li>
                    <li>
                        <i className="material-icons">C</i>Grade C
                    </li>
                    <li>
                        <i className="material-icons">D</i>Grade D
                    </li>
                    <li>
                        <i className="material-icons">E</i>Grade E
                    </li>
                </ul>
            </nav>
            <div className='invisible'>

            </div>
        </>
    );
}

export default Navbar;
