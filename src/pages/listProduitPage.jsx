import ListProduit from '../components/ListProduit';


const listProduitPage = ({ produit }) => {
    return (
        <div>
            <h2>{produit.nom}</h2>
            <p>Prix : {produit.prix} €</p>
            <p>Type : {produit.type}</p>
        </div>
    );
};