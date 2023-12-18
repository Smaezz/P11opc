import React from 'react';
import '../Form/form.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { getUserProfil } from '../../API/Api';
// import { getToken } from '../../Redux/sliceLogin';

function SigninF() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  async function login() {
    // Créer une requête HTTP
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      // La connexion est réussie
      const responseJs = await response.json();
      console.log(responseJs);
      localStorage.setItem("token", responseJs.body.token);
      localStorage.setItem("message", responseJs.message);
      // dispatch(login());
      // recuperation du profil
      getUserProfil();
      // Naviguer vers la page "/User"
      navigate("/User");

    } else {
      // La connexion a échoué
      alert("Nom d'utilisateur ou mot de passe incorrect");
      // window.location = "Erreur404.jsx"
    } 
    return SigninF;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button
            classButton="sign-in-button"
            type="submit"
            click={(e) => {
              e.preventDefault();
              login();
            }}
            title="Sign In"
          />
        </form>
      </section>
    </main>
  );
}
export default SigninF;