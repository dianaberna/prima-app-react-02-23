function ToDoPrintList({ array }) {
    //let array = ["primo", "secondo"];
    return (
        <>
            <p>sono in ToDoPrintList</p>
            <ul>
                {array.map((elemento, indice) => (
                    <li key={indice}>{elemento}</li>
                ))}
            </ul>
        </>
    );
}

export default ToDoPrintList;
