import { HashRouter, Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { setPokemons as setPokemonsActions } from './actions';
import { PokemonsResponse } from './types/PokemonTypes'

export type AppPokemons = {
  pokemons: PokemonsResponse[],
  setPokemons: any
}

function App({pokemons, setPokemons}: AppPokemons) {
  
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

const mapStateToProps = (state: any) =>  ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (value: PokemonsResponse[]) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
