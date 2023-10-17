import React, { useState } from 'react';
import ListProduit from './components/ListProduit/listProduit';
import DetailProduit from './components/DetailProduit/detailProduit';
import Panier from './components/navbar/panier';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';



function App() {

  const [panier, setPanier] = useState([]);

  // Fonction pour ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produitId) => {
    const nouveauPanier = panier.filter((produit) => produit.id !== produitId);
    setPanier(nouveauPanier);
  };


  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ListProduit ajouterAuPanier={ajouterAuPanier} />
          </Route>
          <Route path="/detail/:id" component={DetailProduit} />
          <Route path="/panier" component={() => <Panier panier={panier} supprimerDuPanier={supprimerDuPanier} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;