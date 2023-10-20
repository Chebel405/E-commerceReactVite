import React, { useEffect, useState } from 'react';
import ListProduit from './components/ListProduit/listProduit';
import DetailProduit from './components/DetailProduit/detailProduit';
import Panier from './components/navbar/panier';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';
import { produits } from './Data/Produits';


// UseEffect here !!!

function App() {

  const [panier, setPanier] = useState([]);
  const [value, setValue] = useState("");
  const [erreur, setErreur] = useState(null);

  // Fonction pour ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produitId) => {
    const nouveauPanier = panier.filter((produit) => produit.id !== produitId);
    setPanier(nouveauPanier);
  };

  // const fetchData = () => {
  //   axios
  //     .get("https://restapi.fr/api/produits")
  //     .then((response) => {
  //       console.log(response)
  //       setPanier(response.panier)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

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
          <Route path="/panier" component={() => <Panier panier={panier} ajouterAuPanier={ajouterAuPanier} supprimerDuPanier={supprimerDuPanier} />} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;





//FETCH
// useEffect(() => {
//   async function fetchProduits() {
//     try {
//       const response = await fetch("https://restapi.fr/api/produits");
//       if (response.ok) {
//         const produits = await response.json();
//         setPanier(Array.isArray(produits) ? produits :
//           [produits]);
//       }
//     } catch (e) {
//       console.error('ERREUR', e);
//     }
//   }
//   fetchProduits();

// }, []);

// async function creationProduit() {
//   try {
//     const response = await fetch("https://restapi.fr/api/produits", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         content: value,
//         // Voir les méthodes (remplacer) ajouterAuPanier, supprimerDuPanier
//         edit: false,
//         done: false,
//       }),
//     });
//     if (response.ok) {
//       const produit = await response.json();
//       ajouterAuPanier(produit);
//       setValue('');
//     } else {
//       setErreur("Echec de la création du produit");
//     }
//   } catch (e) {
//     console.error('ERREUR', e);
//   }
// }