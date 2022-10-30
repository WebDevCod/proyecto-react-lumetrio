import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import BarraMenu from './componentes/BarraMenu';
import InicioPage from './paginas/InicioPage';
import SkateboardsPage from './paginas/SkateboardsPage';
import RopaPage from './paginas/RopaPage';
import AccesoriosPage from './paginas/AccesoriosPage';
import ContactoPage from './paginas/ContactoPage';
import ApiPage from './paginas/ApiPage';

function App() {
  return (
    <div>
      <Router>
        <BarraMenu />
        <Routes>
          <Route path='/' element={<InicioPage />} />
          <Route path='skateboards' element={<SkateboardsPage />} />
          <Route path='ropa' element={<RopaPage />} />
          <Route path='accesorios' element={<AccesoriosPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='api' element={<ApiPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
