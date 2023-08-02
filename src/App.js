import "./styles/Home.css";
import Main from './components/pages/Home';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import { useAuthContext } from './hooks/useAuthContext';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";

import './App.css';

export default function Home() {
  const { user } = useAuthContext();
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            { !user && (
              <Route
                path="/"
                element={<Main />}
              />
            )}

            {/* { user && (
              <Route
                path="/"
                element={<user ? Dashboard /> : <Navigate to="/login" />}
              />  
            )} */}
            <Route 
              path="/"
              element={user ? <Dashboard /> : <Navigate to='/' />}
            />
            <Route 
              path='/signup'
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route 
              path='/login'
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
