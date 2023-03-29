import { useState } from "react"

function ToDoForm({array, funzioneModifica }) {

    const [elemento, setElemento] = useState("")

    let handleClick = () => {
        /* abbiamo l' elmento 1 perché all'interno di App.js lasciamo ToDoListCompleto */
        //let input = document.getElementsByTagName("input")[1]
        //console.log(input.value)
        funzioneModifica([...array, elemento])
        setElemento("")
    }

    let handleChange = (e) => {
        setElemento(e.target.value)
    }

    return (
        <>
            <p>sono in ToDoForm</p>
            <input type="text" onChange={handleChange} value={elemento}/>
            <button onClick={handleClick}>Aggiungi task</button>
        </>
    );
}

export default ToDoForm;
