import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Donations from './pages/Donations'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Patrocinador from './pages/Patrocinio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patrocinador" element={<Patrocinador />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
