
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import User from './Pages/User';
import Erreur404 from './Pages/Erreur404';
import './App.css';

function App() {             
    return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Erreur404 />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
);
}

export default App;