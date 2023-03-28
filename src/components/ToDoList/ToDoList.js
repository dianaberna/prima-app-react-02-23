function ToDoList() {
    let tasks = ["primo task", "secondo task", "terzo task"];
    
    let handleClick = () => {
        console.log("ho cliccato")
        let input = document.getElementsByTagName("input")[0]
        console.log(input.value)
        tasks.push(input.value)
    }
    
    return (
        <>
            <h1>ToDoList</h1>
            <input type="text" />
            <button onClick={() => handleClick()}>Aggiungi task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;
