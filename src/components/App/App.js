// import Layout from '../Layout/Layout';
import Contatore from "../Contatore";
import Genitore from "../Genitore/Genitore";
import Layout from "../Layout";
import Shop from "../Shop";
import StampaArray from "../StampaArray";
import ToDo from "../ToDo/ToDo";
import ToDoListCompleto from "../ToDoListCompleto";
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
            {/* <Genitore/> */}
            {/* <StampaArray/> */}
            <hr/>
           {/*  <ToDoListCompleto/> */}
            <hr/>
            {/* <Contatore/> */}
            {/* <ToDo/> */}
            <Shop/>
        </div>
    );
}

export default App;

// vera funzione js e non un componente
function somma(a, b) {
    return a + b;
}
