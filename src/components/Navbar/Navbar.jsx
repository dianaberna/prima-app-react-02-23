import "./Navbar.css";

function Navbar() {
    // rendering del codice html con dentro dei dati
    return (
        <>
            <p>navbar</p>
            <nav>
                <span> MyPage </span>
                <ul>
                    <li>
                        <a href="##">Home</a>
                    </li>
                    <li>
                        <a href="##">Why</a>
                    </li>
                    <li>
                        <a href="##">How</a>
                    </li>
                </ul>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
}

/*


function Navbar(){
    return <p>navbar</p>;
}

let Navbar = () => {
    return <p>navbar</p>;
};

*/

export default Navbar;
