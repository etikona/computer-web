
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import MyPortfolio from './Pages/MyPortfolio';
import Notfound from './Pages/Notfound';
import Purchace from './Pages/Purchace';
import RequiredAuth from './Pages/RequiredAuth';
import Signin from './Pages/Signin';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/signin" element={<Signin></Signin>}/>
    <Route path="/blogs" element={<Blogs></Blogs>}/>
    <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}/>
    <Route path="/purchace" element={<RequiredAuth>
      <Purchace></Purchace>
    </RequiredAuth>}/>
    <Route path="*" element={<Notfound></Notfound>}/>

    </Routes>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
