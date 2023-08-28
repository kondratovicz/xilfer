import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => (
        <div id="navbar">
            <Link to="/" style={{textDecoration: 'none'}}>
            <p>Home</p>
            </Link>
            <Link to="/catalog" style={{textDecoration: 'none'}}>
            <p>Catalog</p>
            </Link>
            <p className='reflix'>REFLIX</p>
        </div>
 )

export default NavBar;