import { useState } from "react";

function Contatore() {

    const [numero, setNumero] = useState(0)
    //let numero = 0

    let handleClick = (e, parola = "prova") => {
        console.log(e.target)
        console.log(parola)
        //numero++;
        //console.log(numero)
        // setNumero(numero++) // numero = numero + 1  --> stiamo modificando "a mano" il valore di 
        // numero poi utilizziamo setNumero --> errore!
        setNumero(numero+1) // questo (numero) è all'interno di setNumero dove prende il vecchio valore e ci aggiunge = numero + 1 
    }

    return (
        <>
            <h1>contatore</h1>
            all'evento onclick react esegue la funzione handleClick senza passare parametri
            <button onClick={() => handleClick()}>+1</button>
            <br/><br/>
            all'evento onclick react esegue la funzione handleClick dove ci sarà in automatico solo il parametro e dell'evento
            <button onClick={handleClick}>+1</button>
            {/* <button onClick={handleClick()}>+1</button> !! errore */}
            <br/><br/>
            uguale prima ma esplicito che mi serve la e (le informazioni dell'evento)
            <button onClick={(e) => handleClick(e)}>+1</button>
            <br/><br/>
            all'evento onclick react esegue la funzione handleClick come paramentro avrà una stringa
            <button onClick={() => handleClick("ciao")}>+1</button>
            <br/><br/>
            all'evento onclick react esegue la funzione handleClick come paramentro avrà una stringa e i dettagli dell'evento
            <button onClick={(e) => handleClick(e,"ciao")}>+1</button>
            <p>{numero}</p>
        </>
    );
}

export default Contatore;
