// import { ConnectWallet } from "@thirdweb-dev/react";
import '../styles/navbar.css';
import Modal from '../components/Auth/Modal';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';
import { useState } from 'react';

function Navbar () {
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleRegisterClick = () => {
        setShowModal(true);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowLogin(false);
    };

    return (
        <main className="main">
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

                <button className="reg-btn" onClick={handleRegisterClick}>Register</button>
                {showModal && (
                    <Modal onClose={handleCloseModal}>
                        <RegisterForm />
                    </Modal>
                )}
                <button className="log-btn" onClick={handleLoginClick}>Login</button>
                {showLogin && (
                    <Modal onClose={handleCloseModal}>
                        <LoginForm />
                    </Modal>
                )}
            </div>
            {/* <div className="user-login">
                    <div className="connect">
                    <ConnectWallet
                        dropdownPosition={{
                        side: "bottom",
                        align: "center",
                        }}
                    />
                    </div>
            </div>   */}
            </div>
        </div>
      </main>
    )
}

export default Navbar;