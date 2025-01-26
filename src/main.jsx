import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router';

import './index.css';
import App from './pages/App';
import DoctorsPage from './pages/doctorPage';
import Chat from './pages/chat';
import Login from './pages/login';

function Navigation() {
   const [isNavOpen, setIsNavOpen] = useState(false);
 
   const toggleNav = () => {
     setIsNavOpen((prev) => !prev);
   };
 
   return (
     <BrowserRouter>
       <div className="nav-bar-wrapper">
         <nav className="nav-bar">
           <div className="logo-section">
             <div className="logo-and-dom">
               <img className="logo" src="./assets/logo.jpg" alt="Logo" />
               <h3 className="domain">Pet Vet BD</h3>
             </div>
             <div className="hamburger-mobile" onClick={toggleNav}>
               <i className="fa fa-bars menu-icon"></i>
             </div>
           </div>
           <div className={isNavOpen ?'nav-items':'off-nav-bar-items'}>
             <NavLink className="nav-bar-item" to="/" onClick={toggleNav}>
               Home
             </NavLink>
             <NavLink className="nav-bar-item" to="/doctors" onClick={toggleNav}>
               Doctors
             </NavLink>
             <NavLink className="nav-bar-item" to="/foodshops" onClick={toggleNav}>
               Food Shop
             </NavLink>
             <NavLink className="nav-bar-item" to="/testui" onClick={toggleNav}>
               Test UI
             </NavLink>
           </div>
           <div className="profile-nav">
             <NavLink className="nav-bar-item" to="/login">
               Login
             </NavLink>
           </div>
         </nav>
       </div>
       <Routes>
         <Route index element={<App />} />
         <Route path="doctors" element={<DoctorsPage />} />
         <Route path="foodshops" element={<Chat />} />
         <Route path="login" element={<Login />} />
       </Routes>
     </BrowserRouter>
   );
 }

createRoot(document.getElementById('root')).render(<Navigation/>)
