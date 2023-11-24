//import { fetchLogin } from '../../Redux/apiCall';

import '../Form/form.css';
import Button from '../button/Button'


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
                        title="Sign In"
                        type="submit"
                        click={(e) => {
                          e.preventDefault(); 
                          login();
                        }}
                    />
                </form>
            </section>
        </main>
    )
};        
export default SigninF;


async function login() {

  // Créer une requête HTTP
  const response = await fetch("http://localhost:3001/api/v1/user/login",
     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
        "email": document.getElementById("username").value,
        "password":  document.getElementById("password").value,       
     }) 
    });
      console.log("email", "password");
       if (response.status === 200) {
         // La connexion est réussie
         const token = await response.json();
         sessionStorage.setItem("token", token.token);
         console.log(sessionStorage.getItem("token"));
         window.location="User.jsx";
       } else {
         // La connexion a échoué
         alert("Nom d'utilisateur ou mot de passe incorrect");
         window.location="Erreur404.jsx"
       }
    };

 

 

