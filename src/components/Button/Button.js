import "./Button.css"

/* argomenti -> props -> proprietà */
function Button({testo, pippo, classecss, children}) {
    console.log(children)

    let stampa
    if(testo){
        stampa = testo
    }else{
        stampa = children
    }
    return <button id={pippo} className={"btn "+classecss}>{stampa}</button>;
}

export default Button;
