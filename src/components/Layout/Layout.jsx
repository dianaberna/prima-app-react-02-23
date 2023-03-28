import Navbar from "../Navbar";
// se non inserisco index.js all'interno della cartella Header devo fare una import come questa qui sotto
// import Header from "../Header/Header"
// .. -> ci fa risalire nella cartella genitore
// se nella cartella Header inserisco il file index.js dove al suo interno ho messo a disposizione il componente
// Header allora posso semplicemente mettere il nome della cartella e "react" in automatico entra nel file index
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./Layout.css";

function Layout() {
    return (
        <>
            <p>layout</p>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Layout;
