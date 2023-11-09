//import { fetchLogin } from '../../Redux/apiCall';

import '../Form/form.css';
import Button from '../button/Button'

async function login() {
     // Créer une requête HTTP
     const request = new Request(
        "http://localhost:3001/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    // Ajouter les données de la requête
    request.body = JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    });
   
    // Envoyer la requête
    return fetch(request).then(response => {
      if (response.ok) {
        // La connexion est réussie
      } else {
        // La connexion a échoué
      }
    });
  }
function SigninF() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button
                        classButton="sign-in-button"
                        title="Sign In"
                        type="submit"
                        click={() => login()}
                    />
                </form>
            </section>
        </main>
    )
};        
export default SigninF;

console.log(login());