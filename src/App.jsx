//import './App.css';
import ListProduit from './components/ListProduit/listProduit';
import { NavBar } from './components/navbar/NavBar';
import { Produits } from './Data/Produits';

function App() {
  return (
    <div>
      <NavBar />
      <ListProduit />
    </div>
  );
}

export default App;

