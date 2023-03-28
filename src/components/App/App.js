// import Layout from '../Layout/Layout';
import Genitore from "../Genitore/Genitore";
import Layout from "../Layout";
// import NomeComponente from "percorso dove si trova il file NomeComponente.jsx"
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";

function App() {
    // javascript normale
    let numero = 2;
    let stringa = "ciao";
    /* 
      commento  
    */
    let nome = "Pippo";
    let stringaNuova = `ciao io sono ${nome}`;
    let risultato = somma(1, 2);

    return (
        <div className="App">
            {/* <p>
                Sono nel componente App {numero - 6} - {6} - {stringa} -{" "}
                {risultato} - {stringaNuova}
            </p>
            <Layout />
            <Logo /> */} 
            <Genitore/>
        </div>
    );
}

export default App;

// vera funzione js e non un componente
function somma(a, b) {
    return a + b;
}
