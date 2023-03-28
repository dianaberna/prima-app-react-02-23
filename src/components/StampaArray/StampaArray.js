import StampaPost from "../StampaPost/StampaPost";

function StampaArray() {
    let array = [1, 2, 4, 8];
    let arrayStringhe = ["parola1", "parola2", "parola3", "parola4"];
    let arrayOggetti = [
        { titolo: "primo blogpost", autore: "Pippo", testo: "lorem1" },
        { titolo: "secondo blogpost", autore: "", testo: "lorem2" },
        { titolo: "terzo blogpost", autore: "", testo: "lorem3" },
        { titolo: "quarto blogpost", autore: "Pluto", testo: "lorem4" },
    ];
    /* 
    errore! il componente esce al primo elemento stampando solo 1
    for(let i=0; i<array.length; i++){
        return array[i]
    } 
    */

    return (
        <div>
            {/* tutto il js che ci serve "immerso" all'interno dell'html dobbiamo
            circordarlo con le graffe */}

            {/* 
                elemento = array[i]
                indice = i 
            */}

            {array.map((elemento, indice) => (
                <p key={indice}> {elemento} </p>
            ))}

            {/* l'attributo key va sempre aggiunto all'elemento interno di una map
            per rendere univoco il tag che si sta andando a creare */}

            {arrayStringhe.map((elemento, indice) => (
                <p key={indice}>{elemento}</p>
            ))}


            {/* prima strategia */}
            {arrayOggetti.map((elemento, indice) => (
                <div key={indice}>
                    <p>{elemento.titolo}</p>
                    <p>{elemento.autore}</p>
                    <p>{elemento.testo}</p>
                </div>
            ))}

            {/* seconda strategia */}
            {arrayOggetti.map((elemento, indice) => <StampaPost contenuto={elemento} key={indice}/>)}

        </div>
    );
}

export default StampaArray;
