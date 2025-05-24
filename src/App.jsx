import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import Detail from './pages/Detail';
import { PokemonProvider } from './context/PokemonContext';

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </PokemonProvider>
  );
};

export default App;
