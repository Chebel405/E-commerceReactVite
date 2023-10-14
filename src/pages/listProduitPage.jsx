import ListProduit from '../components/ListProduit';


const listProduitPage = ({ produit }) => {
    return (
        <div>
            <h2>{produit.nom}</h2>
            {/* <img src={produit.image} alt={produit.nom} className="image-produit" /> */}
            <p>Prix : {produit.prix} €</p>
            <p>Type : {produit.type}</p>
        </div>
    );
};