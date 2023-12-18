import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logIn, setUser } from "../utils/redux/sliceUser";
import Api from "../utils/api/Api";
import '../Pages/Signin.css';


function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [Error, setError] = useState("");

  const handleChangeMail = (e) => {
    const name = e.target.value;
    setMail(name);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length !== 0 && password.length !== 0) {
      setError("");

      const tokenRequest = await new Api().tokenRequest(email, password);

      if (tokenRequest.status === 200) {
        const token = tokenRequest.body.token;
        const userRequest = await new Api().userRequest(token);

        if (userRequest.status === 200) {
          const user = userRequest.body;
          dispatch(logIn(token));
          dispatch(setUser(user));
          navigate("/Profile");
        } else {
          setError(userRequest.message);
        }
      } else {
        setError(tokenRequest.message);
      }
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" id="labelSignin"></i>
        <h1 className="labelSignin">Sign In</h1>
        <form className="edit">
          <div className="input-wrapper">
            <label className="labelSignin">Username</label>
            <input
              type="email"
              name="name"
              onChange={(e) => handleChangeMail(e)}
            />
          </div>
          <div className="input-wrapper">
            <label className="labelSignin">Password</label>
            <input
              type="password"
              name="name"
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleChangeCheckbox()}
            />
            <label className="labelSignin">Remember me</label>
          </div>
          <input
            className="sign-in-button"
            type="submit"
            value="Sign In"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
          <p>{Error}</p>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
