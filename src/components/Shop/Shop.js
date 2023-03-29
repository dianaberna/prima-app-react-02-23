import { useState } from "react";

/*

prodotto -> id, nome, prezzo
carrello -> lista di tutti i prodotti (nome prodotto, quantità, spesa totale)
    idprodotto, quantità, prezzounitario

    spesatotale = somma di tutti i prezzi totali
*/
function Shop() {

    const [spesaTotale, setSpesaTotale] = useState(0)
    const [carrello, setCarrello] = useState([])
    
    let arrayProdotti = [
        { id: 1, nome: "mela", prezzo: 1 },
        { id: 2, nome: "pera", prezzo: 2 },
        { id: 3, nome: "kiwi", prezzo: 3 },
    ];

    let handleClick = (prodottoCheRicevo) => {
       
        let controllo = carrello.findIndex(prodotto => prodotto.id == prodottoCheRicevo.id)

        if(controllo == -1){
            // se il prodotto non esiste nel carrello allora lo aggiungo con quantità 1
            let nuovoProdottoNelCarrello = 
            {id: prodottoCheRicevo.id, nome: prodottoCheRicevo.nome,quantità: 1, prezzoUnitario: prodottoCheRicevo.prezzo}
            setCarrello([...carrello, nuovoProdottoNelCarrello])
            setSpesaTotale(spesaTotale+(nuovoProdottoNelCarrello.prezzoUnitario)) // spesaTotale+(nuovoProdottoNelCarrello.prezzo * nuovoProdottoNelCarrello.quantità)
        }else{
            // se il prodotto esiste nel carrello allora aggiorno la quantità
            console.log(carrello[controllo])
            // carrello[controllo].quantità ++ --> non possiamo farlo così perché sto modificando l'array/stato carrello
        }

        console.log(prodottoCheRicevo.prezzo)
        // idprodotto, quantità, prezzounitario
        
    }

    return (
        <>
            <h1>Shop</h1>
            <h3>Prodotti</h3>
            {arrayProdotti.map((prodotto, indice) => (
                <div key={indice}>
                    <ul>
                        <li>id: {prodotto.id}</li>
                        <li>nome: {prodotto.nome}</li>
                        <li>prezzo: {prodotto.prezzo} €</li>
                        <button onClick={() => handleClick(prodotto)}>Aggiungi al carrello</button>
                    </ul>
                </div>
            ))}
            <h3>Carrello</h3>
            <ul>
            {/* idprodotto, quantità, prezzounitario */}
            {carrello.map((prodotto, indice) => 
                <li key={indice}>{prodotto.id} - {prodotto.nome} - {prodotto.prezzoUnitario}</li>
            )}
            </ul>
            Spesa Totale: {spesaTotale}
        </>
    );
}

export default Shop;
