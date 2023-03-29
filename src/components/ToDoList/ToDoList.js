import { useState } from "react";

function ToDoList() {
    // tasks è una variabile/array statico
    let tasks = ["primo task", "secondo task", "terzo task"];

    // let tasksReattivo -> ad ogni cambiamento della sua struttura ricarica il pezzetto di html dove viene stampato
    
    // let risultato = somma(1, 5)
    const [lista, setLista] = useState([]);
    // crea uno stato che si chiama lista con valore iniziale array vuoto e per poterlo aggiornare devo utilizzare setLista
    // const [nomeStato, setNomeStato] = useState(valore iniziale)
    // valore iniziale => "", 0, [], {}
    // lista -> uno stato con il nostro array
    // setLista -> funzione che ci permette di modificare il valore di lista
    // const [lista, setLista] --> essendo lista e setLista dei valori riempiti dalla chiamata della funzione useState 
    // siamo obbligati a rispettare il loro tipo di dato, cioè all'interno di useState c'è un return di un array con i due valori
    // [lista, setLista] -> questo array in blocco non può essere modificato da noi in nessun modo quindi lo mettiamo come const

    

    // funzione che gestiscono gli eventi si chiamano handleEvento
    let handleClick = () => {
        console.log("ho cliccato");
        let input = document.getElementsByTagName("input")[0];
        console.log(input.value);
        tasks.push(input.value);
        // ul.appendchild(nuovo li con dentro input.value)
        console.log(tasks);
    };

    return (
        <>
            <h1>ToDoList</h1>
            <input type="text" />
            <button onClick={() => handleClick()}>Aggiungi task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;

/*
ToDoList è formata da 
- un form con un input e pulsante ToDoForm
- la lista (ul) di tutti i task -> map (li) ToDoList
- ogni li sarà un componente ToDo
*/
