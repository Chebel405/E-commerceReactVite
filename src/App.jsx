// //import './App.css';
// import ListProduit from './components/ListProduit/listProduit';
// import DetailProduit from './components/DetailProduit/detailProduit';
// import { NavBar } from './components/navbar/NavBar';
// import { Produits } from './Data/Produits';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <NavBar />
//           <Route path="/" exact component={ListProduit} />
//           <Route path="/detail/:id" component={DetailProduit} />
//           <NavBar />
//           <ListProduit />
//         </Switch>
//       </div>
//     </Router>

//   );
// }

// export default App;

import React from 'react';
import ListProduit from './components/ListProduit/listProduit';
import DetailProduit from './components/DetailProduit/detailProduit';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Placer le composant NavBar en dehors du Switch pour l'afficher sur toutes les pages */}
        <Switch>
          <Route path="/" exact component={ListProduit} />
          <Route path="/detail/:id" component={DetailProduit} />
        </Switch>
        {/* Vous pouvez ajouter d'autres éléments ici, mais assurez-vous qu'ils ne sont pas directement dans le Switch */}
        {/* <ListProduit /> */}
      </div>
    </Router>
  );
}

export default App;