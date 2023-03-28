import Figlio from "../Figlio/Figlio";

function Genitore() {
    // tutte le variabili sono "statiche/ferme" non sono reattive ai cambiamenti
    let a = 5;
    let stampa = "prova"    

    let funzioneStampa = (stringa) => {
        console.log(stringa);
        stampa = stringa
    };

    return (
        <>
            <p>sono il Genitore</p>
            {/* posso avere per ogni componente degli attributi personalizzati che chiameremo props */}
            <Figlio numero={a} funzione={funzioneStampa} />
            <Figlio>sono una stringa da stampare</Figlio>
            stampa: {stampa}
        </>
    );
}

export default Genitore;
