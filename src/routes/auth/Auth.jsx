import React from 'react';
import "./Auth.scss";
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className='auth'>
      <div className="cicle"></div>
      <div className='auth-form'>
        <ul className='auth-form__nav'>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')} to="/auth/login">Kirish</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')} to="/auth/create">Ro'yxatdan o'tish</NavLink>
          </li>
        </ul>
        <div>
         <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Auth