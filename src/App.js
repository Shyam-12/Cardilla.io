import "./styles/Home.css";
import Main from './components/Main';
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import { useAuthContext } from './hooks/useAuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userscreen from "./components/Userscreen";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            { !user && (
              <Route
                path="/"
                element={<Main />}
              />
            )}

            { user && (
              <Route
                path="/dashboard"
                element={<Userscreen />}
              />  
            )}
            <Route 
              path='/signup'
              element={ <SignUp /> }
            />
            <Route 
              path='/login'
              element={ <Login /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
