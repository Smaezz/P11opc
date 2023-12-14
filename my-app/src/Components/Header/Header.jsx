import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from "react";
import '../Header/header.css';
import logo from '../Header/argentBankLogoR.png';
import { Link } from 'react-router-dom';
import { getToken } from '../../Redux/sliceLogin';

// const token = localStorage.getItem("token");

const Header = () => {
  // const [token, setToken] = useState(false);
  // const firstName = useSelector((state) => state.firstName);
  const username = useSelector((state) => state.usernameSlice);
  const token = useSelector((state) => state.tokenSlice);
  // const [token, setToken] = useState();
  // Use Effect
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(getToken(token.value));
  });
*/
  //useEffect(() => {
   // token === localStorage.getItem("token")
  //});
  // deconnexion
  //const dispatch = useDispatch();
  const handleLogout = () => {
    // Logout();
    dispatch(getToken(0));
    localStorage.removeItem("token");
    localStorage.removeItem("message");
  };
if (token.value) {
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
        <div className="navbar_loginSuccess">
          <Link to="/userAccount" className="main-nav-item">
            <i className="fa fa-user-circle sign-in-icon" id="iconSignout"></i>
            <span className="spanSignOut">{username.value}</span>
          </Link>
          <Link to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
    </nav>
    );
    } else {
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
        <div className="navHeader">
          <Link to="/SignIn" className="main-nav-item">
          <i className="fa fa-user-circle sign-in-icon" id="iconSignin"></i>
            <span className="spanFaCircleUser">Sign In</span>
          </Link>
        </div>
      </nav> 
      );
    };
};

export default Header;
