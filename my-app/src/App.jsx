import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Profile from './Pages/Profile'
import Erreur404 from './Pages/Erreur404';
import { Provider } from 'react-redux';
import { store } from '../src/utils/redux/store';
import './App.css';

function App() {             
    return (
    <Provider store={store}>   
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<Erreur404 />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </Provider>
);
}

export default App;