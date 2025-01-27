import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, NavLink, Link} from 'react-router';

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
             <NavLink className="nav-bar-item" to="/" onClick={isNavOpen?toggleNav:()=>{}}>
             <i className="fa fa-home"></i>
               Home
             </NavLink>
             <NavLink className="nav-bar-item" to="/doctors" onClick={isNavOpen?toggleNav:()=>{}}>
             <i className="fa fa-user-md"></i>
               Doctors
             </NavLink>
             <NavLink className="nav-bar-item" to="/foodshops" onClick={isNavOpen?toggleNav:()=>{}}>
             <i className="fa fa-pills"></i>
               message testing
             </NavLink>
             <NavLink className="nav-bar-item" to="/testui" onClick={isNavOpen?toggleNav:()=>{}}>
             <i className="fa fa-utensils"></i>
              Pet Foods
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
       <footer className='footer'>
          <div className='f-section-col'>
             <div className="logo-and-dom">
               <img className="logo" src="./assets/logo.jpg" alt="Logo" />
               <h3 className="domain">Pet Vet BD</h3>
             </div>
             <div className='app-summary'>
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
               </p>
             </div>
             <div className='f-contacts'>
                <p><i className="fa fa-phone"></i>
                01733783039</p>
                <p><i className="fa fa-envelope"></i> 
                 rahatalmas55@gmail.com</p>
             </div>
          </div>
          <div className='f-section-col'>
             <div className='f-navs'>
              <NavLink className="f-nav-item" to="/">
              <i className="fa fa-home"></i>
              Home
              </NavLink>
              <NavLink className="f-nav-item" to="/doctors">
              <i className="fa fa-user-md"></i>
              Doctors
              </NavLink>
              <NavLink className="f-nav-item" to="/foodshops">
              <i className="fa fa-utensils"></i>
              message testing
              </NavLink>
              <NavLink className="f-nav-item" to="/testui">
              <i className="fa fa-pills"></i>
              Medicine
              </NavLink>
             </div>
          </div>
          <div className='f-section-col'>
              app links
          </div>
       </footer>
       <div className='end'>&copy; codecafe.io</div>
     </BrowserRouter>
   );
 }

createRoot(document.getElementById('root')).render(<Navigation/>)
