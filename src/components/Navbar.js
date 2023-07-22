import { ConnectWallet } from "@thirdweb-dev/react";
import '../styles/navbar.css';
import Modal from '../components/Auth/Modal';
// import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';
import { useState } from 'react';

function Navbar () {
    // const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    // const handleRegisterClick = () => {
    //     setShowModal(true);
    // };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseModal = () => {
        // setShowModal(false);
        setShowLogin(false);
    };

    return (
        <div className="container">
          <div className="header">
            <img src="/images/logo.jpg" alt="thirdweb logo" />
            <div className="details">
                <ul className="navbar-items">
                    <li>Features</li>
                    <li>About</li>
                    <li>Docs</li>
                </ul>
            </div>
            <div className="user-login">
                    <div className="reg-btn">
                    <ConnectWallet
                        dropdownPosition={{
                        side: "bottom",
                        align: "center",
                        }}
                    />
                    </div>
                    <button className="reg-btn" onClick={handleLoginClick}>Login</button>
                    {showLogin && (
                        <Modal onClose={handleCloseModal}>
                            <LoginForm />
                        </Modal>
                    )}
            </div>  
                {/* <button className="reg-btn" onClick={handleRegisterClick}>Register</button>
                {showModal && (
                    <Modal onClose={handleCloseModal}>
                        <RegisterForm />
                    </Modal>
                )} */}
            </div>
        </div>
    )
}

export default Navbar;