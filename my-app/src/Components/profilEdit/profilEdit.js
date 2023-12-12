import React from 'react';
import '../Form/form.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
// import Header from '../Header/Header';
// import { useDispatch} from 'react-redux';
// import { login, logout } from "./actions";


function SignUp() {
  const navigate = useNavigate();

  
  async function UserEdit() {
    // Créer une requête HTTP
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("password").value;
    const lastName = document.getElementById("password").value;
    const userName = document.getElementById("password").value;

    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
      }),
    });

    if (response.status === 200) {
      // La connexion est réussie
      const responseJs = await response.json();
      console.log(responseJs);
      localStorage.setItem("status", responseJs.body.token);
      localStorage.setItem("message", responseJs.message);
      localStorage.setItem("body", responseJs.body.id);
      localStorage.setItem("email", responseJs.body.email);
      console.log(responseJs.body.token);
      // Naviguer vers la page "/User"
      navigate("/User");
      
    } else {
      // La connexion a échoué
      alert("Nom d'utilisateur ou mot de passe incorrect");
      // window.location = "Erreur404.jsx"
    }
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
            }}
            title="Sign In"
          />
        </form>
      </section>
    </main>
  );
}
export default SignUp;