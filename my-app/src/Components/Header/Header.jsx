import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/postReducer'
import '../Header/header.css';
import logo from '../Header/argentBankLogoR.png'
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
 /* const user = useSelector((state) => state.user) */
 /* const isLoggedIn = useSelector((state) => state.login.isLoggedIn)*/
  const token = useSelector((state)=>state.login.token)

console.log("tokenNav", token)

  const handleSignOut = (e) => {
      e.preventDefault();
      dispatch(logout( ));
      navigate("/")
  }; 



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
      { !user.auth.user && (
                <div>
                    <Link to="/SignIn" className="main-nav-item">
                        <i className="fa fa-circle-user"></i>
                        <span className="spanFaCircleUser">Sign In</span>
                    </Link>
                </div> )}
            { user.auth.user && (
                <div className='navbar_loginSuccess'>
                    <Link to='/userAccount' className='main-nav-item'>
                        <i className='fa fa-user-circle'></i>
                        <span className="spanSignOut">Name</span>
                    </Link>
                    <Link to='/' className='main-nav-item' onClick={handleSignOut}>
                        <i className='fa fa-sign-out'></i>
                        Sign Out
                    </Link>
                </div> )}
    </nav>  
  )
}