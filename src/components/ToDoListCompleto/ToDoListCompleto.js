import { useState } from "react";

function ToDoListCompleto() {
    // tasks è una variabile/array statico
    /* let tasks = ["primo task", "secondo task", "terzo task"]; */

    // let tasksReattivo -> ad ogni cambiamento della sua struttura ricarica il pezzetto di html dove viene stampato
    
    // let risultato = somma(1, 5)
    /*
    function pippo(a, b){
	    return [a, b]
    } 

    let nuovoarray = pippo(2, 3)
    console.log(nuovoarray)
    */
    const [lista, setLista] = useState([]); // l'array di tutti i task
    const [elemento, setElemento] = useState("") // elemento è la stringa del singolo task
    

    // crea uno stato che si chiama lista con valore iniziale array vuoto e per poterlo aggiornare devo utilizzare setLista
    // const [nomeStato, setNomeStato] = useState(valore iniziale)
    // valore iniziale => "", 0, [], {}
    // lista -> uno stato con il nostro array []
    // setLista -> funzione che ci permette di modificare il valore di lista
    // const [lista, setLista] --> essendo lista e setLista dei valori riempiti dalla chiamata della funzione useState 
    // siamo obbligati a rispettare il loro tipo di dato, cioè all'interno di useState c'è un return di un array con i due valori
    // [lista, setLista] -> questo array in blocco non può essere modificato da noi in nessun modo quindi lo mettiamo come const

    // funzione che gestiscono gli eventi si chiamano handleEvento
    let handleClick = () => {
        console.log("ho cliccato");
        // per evitare di fare questa getElements posso salvare la stringa che
        // inserisco come input in uno stato
        //let input = document.getElementsByTagName("input")[0];
    
        /* console.log(input.value);
        tasks.push(input.value);   */
        // ul.appendchild(nuovo li con dentro input.value)
        //console.log(tasks);

        //lista.push(input.value) // --> non vediamo il cambiamento dell'array nel dom 
        // non possiamo toccare direttamente la variabile di stato ma dobbiamo utilizzare setLista

        // strategia sbagliata -> stiamo comunque modificando lista 
        //let array = lista
        // listaAppoggio è un array uguale a lista ma con un elemento in più
        //array.push(input.value) 
        // listaAppoggio diventa la nuova lista 
        //setLista(array)

        // strategia 1 (spread operator)
        setLista([...lista, elemento])

        // strategia 2 (map)
        /* let nuovoArray2 = lista.map(elemento => elemento)
        nuovoArray2.push(elemento) */
        //setLista(nuovoArray2)

        // strategia 3 (forEach)
        /* let nuovoArray3 = []
        lista.forEach(elemento => nuovoArray3.push(elemento))
        nuovoArray3.push(elemento) */
        //setLista(nuovoArray3)

        // strategia 4 (for)
        /* let nuovoArray = []
        for(let i=0; i<lista.length; i++){
            nuovoArray.push(lista[i])
        }
        nuovoArray.push(elemento) */
        //setLista(nuovoArray)

        setElemento("")
    };

    let handleChange = (e) => {
         console.log(e.target.value)
         setElemento(e.target.value)
    }

    return (
        <>
            <h1>ToDoListCompleto</h1>
            {/* il value prende elemento se esiste altrimenti (grazie a ||) prende una stringa vuota */}
            <input type="text" onChange={(e) => handleChange(e)} value={elemento}/>
            <button onClick={() => handleClick()}>Aggiungi task</button>
            
            <p>Numero task: {lista.length}</p>
            <ul>
                {/* {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))} */}
                {lista.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </>
    );
}

export default ToDoListCompleto;

/*
ToDoList è formata da 
- un form con un input e pulsante ToDoForm
- la lista (ul) di tutti i task -> map (li) ToDoList
- ogni li sarà un componente ToDo
*/
