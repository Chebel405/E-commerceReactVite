import { produits } from "./Produits";

export async function produitData() {
    await fetch("https://restapi.fr/api/produits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(produits)
    });
}