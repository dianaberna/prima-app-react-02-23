import { useState } from "react";

function Contatore() {

    const [numero, setNumero] = useState(0)
    

    let handleClick = () => {
        // setNumero(numero++) // numero = numero + 1  --> stiamo modificando "a mano" il valore di 
        // numero poi utilizziamo setNumero --> errore!
        setNumero(numero+1) // questo (numero) è all'interno di setNumero dove prende il vecchio valore e ci aggiunge = numero + 1 
    }

    return (
        <>
            <h1>contatore</h1>
            <button onClick={() => handleClick()}>+1</button>
            <p>{numero}</p>
        </>
    );
}

export default Contatore;
