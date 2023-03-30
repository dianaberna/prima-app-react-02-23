import { useEffect, useState } from "react";

/*

prodotto -> {id, nome, prezzo}
listaProdotti -> [{}, {}, {}]
carrello (stato) -> lista di tutti i prodotti (nome prodotto, quantità, spesa totale)
    idprodotto, quantità, prezzounitario  [{}, {}, {}]

    quando aggiungiamo o eliminiamo un nuovo prodotto nel carrello aggiorniamo la spesaTotale (stato)

*/
function Shop() {
    const [spesaTotale, setSpesaTotale] = useState(0);
    const [carrello, setCarrello] = useState([]); // array di oggetti
    const [arrayProdotti, setArrayProdotti] = useState([])

    let handleClick = (prodottoCheRicevo) => {
        // findIndex restituisce -1 se l'elemento non viene trovato
        // oppure se viene trovato restituisce l'indice di dove si trova
        let controllo = carrello.findIndex(
            (prodotto) => prodotto.id === prodottoCheRicevo.id
        );

        if (controllo === -1) {
            // se il prodotto non esiste nel carrello allora lo aggiungo con quantità 1
            let nuovoProdottoNelCarrello = {
                id: prodottoCheRicevo.id,
                nome: prodottoCheRicevo.nome,
                quantità: 1,
                prezzoUnitario: prodottoCheRicevo.prezzo,
            };
            // ...carrello --> andare ad accedere ai singoli elemento di carrello
            // [...carrello] --> acceddiamo a tutti gli elementi del carrello e ogni singolo elemento
            // sarà presente nel nuovo array
            // [carrello] -> array[array] --> [[2, 6]]
            // [...carrello] -> array[elementi dell'array] --> [2, 6]
            setCarrello([...carrello, nuovoProdottoNelCarrello]);
            setSpesaTotale(
                spesaTotale + nuovoProdottoNelCarrello.prezzoUnitario
            );
        } else {
            // se il prodotto esiste nel carrello allora aggiorno la quantità
            //console.log(carrello[controllo]);
            // carrello[controllo].quantità ++ --> non possiamo farlo così perché sto modificando l'array/stato carrello
            let carrelloTemporaneo = [...carrello];
            carrelloTemporaneo[controllo].quantità++;
            // accedo all'indice "controllo" dell'array carrelloTemporaneo dove troverò un oggetto
            // di questo oggetto prendo solo l'etichetta quantità
            setCarrello(carrelloTemporaneo);
            // spesaTotale = spesaTotale + prodotto.prezzo * prodotto.quantità
            setSpesaTotale(
                spesaTotale + carrelloTemporaneo[controllo].prezzoUnitario
            );
            /*
            calcolo sbagliato
            aggiungo mela -> st = 1
            aggiungo pera -> st = 3
            aggiungo mela -> st = st + (1*2) = 3 + 2

            calcolo corretto
            aggiungo mela -> st = 1
            aggiungo pera -> st = 3
            aggiungo mela -> st = st + 1 = 3 + 1 
            */
        }

        //console.log(prodottoCheRicevo.prezzo);
        // idprodotto, quantità, prezzounitario
    };

    let aggiornoQuantità = (prodottoCheRicevo, operazione) => {
        
    
        let carrelloTemporaneo = [...carrello];

        let indice = carrello.findIndex(
            (prodotto) => prodotto.id === prodottoCheRicevo.id
        );

        if(operazione === "+"){
            //aggiorno quantità a ++ all'interno del carrello
            carrelloTemporaneo[indice].quantità++;
    
            setSpesaTotale(
                spesaTotale + carrelloTemporaneo[indice].prezzoUnitario
            );
        }else{
            /*una che aggiorna quantità a --, dobbiamo controllare se quantità è 1 perché il prodotto andrebbe eliminato dal carrello */
    
            // array.splice(indiceElemento, quanti elementi eliminare);
            // 1) aggiunge un nuovo elemento array.splice(indice, 0, nuovoelemento)
            // 2) sovrascrivere un elemento array.splice(indice, 1, nuovoelemento)
            // 3) elimina un elemento array.splice(indice, 1)
            // ( uno o più elementi )
            setSpesaTotale(
                spesaTotale - carrelloTemporaneo[indice].prezzoUnitario
            );
            if(carrelloTemporaneo[indice].quantità === 1){
                // andiamo a eliminare il prodotto dal carrello
                carrelloTemporaneo.splice(indice, 1);
    
            }else{
                // decrementiamo la quantità
                carrelloTemporaneo[indice].quantità--;
            }
        }

        setCarrello(carrelloTemporaneo)

    }

    /* let aggiornoQuantitàIncremento = (prodottoCheRicevo) => {
        
        let carrelloTemporaneo = [...carrello];

        let indice = carrello.findIndex(
            (prodotto) => prodotto.id == prodottoCheRicevo.id
        );

        carrelloTemporaneo[indice].quantità++;
        setCarrello(carrelloTemporaneo)

        setSpesaTotale(
            spesaTotale + carrelloTemporaneo[indice].prezzoUnitario
        );
    } */

    // all'avvio del componente aggiunge i tre prodotti all'arrayProdotti
    // quando capta il cambiamento dell'arrayProdotti ricarica il componente
    useEffect(()=> {
        
        /* let arrayProdotti = [
            { id: 1, nome: "mela", prezzo: 1 },
            { id: 2, nome: "pera", prezzo: 2 },
            { id: 3, nome: "kiwi", prezzo: 3 },
        ]; */
        // se lo shop fosse online qui andremo a fare una chiamata fetch per recuperare tutti i nostri prodotti
        // fetch -> scaricare dati (posso non avere nulla nell'array delle dipendenze che mi andrebbe a ricaricare il componente)
        // fetch -> modifico i dati 
        setArrayProdotti([
            { id: 1, nome: "mela", prezzo: 1 },
            { id: 2, nome: "pera", prezzo: 2 },
            { id: 3, nome: "kiwi", prezzo: 3 },
        ])
    }, [])

    

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
                        <button onClick={() => handleClick(prodotto)}>
                            Aggiungi al carrello
                        </button>
                    </ul>
                </div>
            ))}
            <h3>Carrello</h3>
            <ul>
                {/* idprodotto, quantità, prezzounitario */}
                {carrello.map((prodotto, indice) => (
                    <li key={indice}>
                        {prodotto.id} - {prodotto.nome} - Quantità:
                        <button onClick={() => aggiornoQuantità(prodotto, "-")}>-</button>{prodotto.quantità} <button onClick={() => aggiornoQuantità(prodotto, "+")}>+</button> - Prezzo:
                        {prodotto.prezzoUnitario}
                    </li>
                ))}
            </ul>
            Spesa Totale: {spesaTotale}
        </>
    );
}

export default Shop;

/*




*/