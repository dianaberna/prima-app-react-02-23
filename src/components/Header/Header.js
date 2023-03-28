// sono nella cartella e nel file Header, quindi creo il mio componente Header

import Button from "../Button";

function Header() {
    return (
        <>
            <p>header</p>
            <header>
                <h1>Basic landing page for big dream</h1>
                <p className="subtitle">Minimal, responsive and accessible</p>
                <Button testo="sono il testo del pulsante" classecss="red"/>
                <Button>
                    <p>voglio utilizzare questo testo</p>
                </Button>
            </header>
        </>
    );
}

// esporto il componente di default perché è l'unico presente
export default Header;
