import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import "./styles/Home.css";
import Main from './components/Main';

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false);
  // const [userProfile, setUserProfile] = useState(null);

  const handleLogin = () => {
    // Simulating a login action with a delay
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="header">
              <header>
                <img src="/images/logo.jpg" alt="thirdweb logo" />
              </header>
              <div className="user-login">
                {loggedIn ? (
                    <div>
                      <div className="connect">
                        <ConnectWallet
                          dropdownPosition={{
                            side: "bottom",
                            align: "center",
                          }}
                        />
                      </div>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={handleLogin}>Login</button>
                      <button>Sign Up</button>
                    </div>
                  )}   
              </div>
          </div>
        </div>
      </main>
      <Main />
    </div>
  );
}
