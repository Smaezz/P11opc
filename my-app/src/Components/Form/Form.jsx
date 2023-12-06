import React from 'react';
import '../Form/form.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getToken } from '../../Redux/sliceLogin';
// import { login, logout } from "./actions";

// const dispatch = useDispatch;

function SigninF() {
  const navigate = useNavigate();

  async function login() {
    // Créer une requête HTTP
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    //selection du state
    // const token = useSelector ((state) => state.token.value);
    

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
      console.log(responseJs.body.token);
      // dispatchLoginAction();
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
/** //import { fetchLogin } from '../../Redux/apiCall';
import React from 'react';
import '../Form/form.css';
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom';


function SigninF() {
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
            title="Sign In" />
        </form>
      </section>
    </main>
  )
};
export default SigninF;

async function login() {
  // Créer une requête HTTP
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(email);
  console.log(password);
  const response = await fetch("http://localhost:3001/api/v1/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });
  if (response.status === 200) {
    // La connexion est réussie
    const responseJs = await response.json();
    sessionStorage.setItem("token", responseJs.body.token);
    console.log(responseJs.body.token);
    const navigate = useNavigate();
    navigate("/User");
  } else {
    // La connexion a échoué
    alert("Nom d'utilisateur ou mot de passe incorrect");
    // window.location = "Erreur404.jsx"
  }
};


*/


