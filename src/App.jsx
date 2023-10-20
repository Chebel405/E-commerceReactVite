import React, { useEffect, useState } from 'react';
import ListProduit from './components/ListProduit/listProduit';
import DetailProduit from './components/DetailProduit/detailProduit';
import Panier from './components/navbar/panier';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';




function App() {

  const [panier, setPanier] = useState([]);
  const [value, setValue] = useState("");
  const [erreur, setErreur] = useState(null);

  // Fonction pour ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    const produitIndex = panier.findIndex((item) => item.id === produit.id);

    if (produitIndex !== -1) {
      // Le produit est déjà dans le panier, augmentez la quantité
      const nouveauPanier = [...panier];
      nouveauPanier[produitIndex].quantite += 1;
      setPanier(nouveauPanier);
    } else {
      // Le produit n'est pas encore dans le panier, ajoutez-le
      setPanier([...panier, { ...produit, quantite: 1 }]);
    }
  };



  // const ajouterAuPanier = (produit) => {
  //   const produitExistant = panier.find((p) => p.id === produit.id);

  //   if (produitExistant) {
  //     const nouveauPanier = panier.map((p) => {
  //       if (p.id === produit.id) {
  //         return { ...p, quantite: p.quantite + 1 };
  //       }
  //       return p;
  //     });
  //     setPanier(nouveauPanier);
  //   } else {
  //     setPanier([...panier, { ...produit, quantite: 1 }]);
  //   }

  // };

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produitId) => {
    const nouveauPanier = panier.filter((produit) => produit.id !== produitId);
    setPanier(nouveauPanier);
  };


  const fetchData = async () => {
    try {
      const response = await axios.get("https://restapi.fr/api/produits");
      console.log(response)
      setPanier(response.data);

    } catch (error) {
      console.error('ERREUR', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ListProduit ajouterAuPanier={ajouterAuPanier} />
          </Route>
          {/* <Route path="/detail/:id" component={DetailProduit} /> */}
          <Route path="/detail/:id">
            <DetailProduit ajouterAuPanier={ajouterAuPanier} />
          </Route>
          <Route path="/panier" component={() => <Panier panier={panier} ajouterAuPanier={ajouterAuPanier} supprimerDuPanier={supprimerDuPanier} setPanier={setPanier} />} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
