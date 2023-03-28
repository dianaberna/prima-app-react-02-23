import Button from "../Button";
import "./MainSectionCta.css"
import miafoto from "./foto.png"

function MainSectionCta() {
    return (
        <section id="cta">
            <h2>Create the perfect landing page in minutes!</h2>
            <h3>MyPage used around the world</h3>
            <img  alt="" style={{ backgroundImage: miafoto }}/>
            <img src={miafoto} alt=""/>

            <img src="/assets/foto2.png" alt="" />
            <Button pippo="pippo" testo="sono il pulsante di mainsectioncta"/>
                {/* <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.41748 3.45917L11.9583 7L8.41748 10.5408"
                        stroke="#1D1B1F"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M2.04163 7H11.8591"
                        stroke="#1D1B1F"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg> */}

        </section>
    );
}

export default MainSectionCta;
