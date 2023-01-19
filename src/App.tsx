import { HashRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { setPokemons as setPokemonsActions } from './actions';
import { PokemonsResponse } from './types/PokemonTypes'



function App() {

  
  return (
    <div className="w-full bg-gray-400 dark:bg-cyan-800">
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
      </HashRouter>

    </div>
  )
}



export default App;
