//App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/home';
/*import Portfolio from './paginas/Portfolio';
import Contacto from './paginas/Contacto';
import SobreMi from './paginas/SobreMi';*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-mi" element={<SobreMi />} /> */}
      </Routes>
    </Router>
  );
}

export default App;