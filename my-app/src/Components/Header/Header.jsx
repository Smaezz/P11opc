import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import '../Header/header.css';
import store from "../../Redux/store"
import logo from '../Header/argentBankLogoR.png';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/actions'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const deconnect = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/")
};

  useEffect(() => {

    // On récupère l'utilisateur connecté
    const user = store.getState().user.auth;

    // On met à jour l'état de l'utilisateur
    setUser(user);

  }, [user]);

  //const fetch = () => {
    // On effectue une requête API pour se connecter
    // dispatch(login(username, password, "https://mongodb"));
  //};

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
      {!user && (
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <i className="fa fa-circle-user"></i>
            <span className="spanFaCircleUser">Sign In</span>
          </Link>
        </div>
      )}
      {user && (
        <div className="navbar_loginSuccess">
          <Link to="/userAccount" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span className="spanSignOut">Name</span>
          </Link>
          <Link to="/" className="main-nav-item" onClick={deconnect}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;