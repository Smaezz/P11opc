// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect } from "react";
// import getToken from "../../Redux/sliceLogin";
import '../Header/header.css';
import logo from '../Header/argentBankLogoR.png';
import { Link } from 'react-router-dom';
import Logout from '../../Redux/sliceLogout';
import { getFirstName } from '../../Redux/sliceFirstname';

const Header = () => {
  
  const token = localStorage.getItem("token");
console.log(token);
  

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!token && (
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <i className="fa fa-circle-user"></i>
            <span className="spanFaCircleUser">Sign In</span>
          </Link>
        </div>
      )}
      {token && (
        <div className="navbar_loginSuccess">
          <Link to="/userAccount" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span className="spanSignOut">{getFirstName}</span>
          </Link>
          <Link to="/" className="main-nav-item" onClick={Logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
