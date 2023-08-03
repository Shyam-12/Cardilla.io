// import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';
import '../../styles/navbar.css'
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

function Navbar () {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        console.log('logout');
        logout();
    }

    return (
        <div className="container">
          <div className="header">
            <img src="/images/logo.jpg" alt="thirdweb logo" />
            <div className="details">
                <ul className="navbar-items">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li>Features</li>
                    <li>About</li>
                    <li>Docs</li>
                </ul>
            </div>
            { user && ( 
                <div className='user-login'>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            { !user && ( 
                <div className='user-login'>
                    <Link to='/login'><button className="reg-btn">Login</button></Link>
                    <Link to='/signup'><button className="reg-btn">Signup</button></Link>
                </div>
            )}
          </div>
        </div>
    )
}

export default Navbar;