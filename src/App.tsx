
import Navbar from './components/Navbar/Navbar.tsx';
import NavbarComp from './components/NavbarComp/NavbarComp.tsx';
import { Routes, Route, NavLink } from 'react-router-dom';
import BusinessPage from './pages/Business/BusinessPage.tsx';
import PreciosPage from './pages/Precios/PreciosPage.tsx';
import Home from './pages/Home/Home.tsx';
import './index.css'; 

function App() {

   

  return (
    <>
    
    <Navbar/>
    
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/precios" element={<PreciosPage />} />
    </Routes>
    </>
  );
}

export default App;

