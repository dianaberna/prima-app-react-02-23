
// come parametri/argomenti all'interno del componente figlio possiamo avere un oggetto
// con tutti gli attributi speciali (props) creati nel genitore


function Figlio({ numero, funzione, children }) {
    console.log(funzione)
    return (
        <>
            <p>sono il Figlio</p>
            <button onClick={() => funzione("ciao")} >{numero}</button>
            <p>{children}</p>
        </>
    );
}


/* function Figlio(props) {
    console.log(props.numero)
    console.log(props.children)
    //console.log(numero)
    return (
        <>
            <p>sono il Figlio</p>
            <p>{props.numero}</p>
            <p>{props.children}</p>
        </>
    );
} */

export default Figlio;
