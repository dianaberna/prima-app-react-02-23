import Figlio from "../Figlio/Figlio";

function Genitore() {

    let a = 5

    return (
        <>
            <p>sono il Genitore</p>
            {/* posso avere per ogni componente degli attributi personalizzati che chiameremo props */}
            <Figlio numero={a}/>
            <Figlio>sono una stringa da stampare</Figlio>
        </>
    );
}

export default Genitore;
