import { produits } from "./Produits";

export async function produitData() {
    try {
        const response = await fetch("https://restapi.fr/api/produits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produits),
        });

        if (!response.ok) {
            throw new Error(`La requête a échoué avec un code de statut ${response.status}`);
        }

        console.log("Données envoyées avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'envoi des données :", error);
    }
}
