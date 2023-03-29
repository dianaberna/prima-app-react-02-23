import { useState } from "react";
import ToDoForm from "../ToDoForm"
import ToDoPrintList from "../ToDoPrintList"

function ToDo() {

    const [lista, setLista] = useState([])
   

    return (
        <>
            <h1>ToDo</h1>
            <p>sono in ToDo</p>
            <ToDoForm array={lista} funzioneModifica={setLista}/>
            {/* nomeattributo=valore */}
            <ToDoPrintList array={lista}/>
            {/* ToDoPrintList(lista) */}
        </>
    );
}

export default ToDo;
