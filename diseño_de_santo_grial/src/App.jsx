//App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/home';
// import Portfolio from './paginas/proyectos';
import { Contacto } from './paginas/contacto';
// import SobreMi from './paginas/SobreMi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre-mi" element={<SobreMi />} /> */}
         {/* <Route path="/proyecto" element={<Proyectos />} /> */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;