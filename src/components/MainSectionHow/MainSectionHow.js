import "./MainSectionHow.css"

function MainSectionHow() {
    return (
        <section id="how">
            <h2>How does this work?</h2>
            <p>Create your website in 3 easy steps!</p>
            <div>
                <div id="primo">
                    <span>01</span>
                    <h3>Clone</h3>
                    <p>
                        Clone the repository from Github, the code is public and
                        constantly evolving
                        <br />
                        thanks to the community that supports us.
                    </p>
                </div>
                <div id="secondo">
                    <span>02</span>
                    <h3>Customize</h3>
                    <p>
                        Add your own content and pay attention to the graphic
                        changes you make. <br />
                        Always check if the minimum contrast is sufficient, if
                        the font is accessible <br />
                        and if the focus is visible.
                    </p>
                </div>
                <div id="terzo">
                    <span>03</span>
                    <h3>Go live</h3>
                    <p>
                        Once all the customizations have been made, all that
                        remains is to upload the <br />
                        site online. If you need help, don't hesitate to contact
                        us!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MainSectionHow;
