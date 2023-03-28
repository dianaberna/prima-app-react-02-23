import "./Footer.css"

function Footer() {
    return (
        <>
            <p>footer</p>
            <footer>
                <div>
                    <span id="title">MyPage</span>
                    <div>
                        <div>
                            <h5>Contact</h5>
                            <ul>
                                <li>Via Roma, 1 - Roma (RM)</li>
                                <li>Cel. 123456789</li>
                            </ul>
                        </div>
                        <div>
                            <h5>My Page</h5>
                            <ul>
                                <li>Explore</li>
                                <li>Why</li>
                                <li>How</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <span>© 2023 Bricks Design Kit. All rights reserved</span>
                    <div>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
