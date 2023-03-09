import React from "react";
import "./GeneralPage.css"
import horseLogo from "../../logo/horse.png";
import barLogo from "../../logo/bar-logo.png"

const GeneralPage = () => {
    const handleSroll = (anc) => {
        const page = document.getElementById(anc);
        page.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className="general-general-wrapper" id="general">
            <div className="general-general">
            <div className="general-bar-description">
                <div><img src={barLogo} alt="" width={265} height={165}></img></div>
                <div className="general-description">Место, которое объединяет людей, встречает их радостным шумом разговоров, наполняет веселым энтузиазмом и пятничной любовью к жизни! </div>
                <div className="general-buttons">
                    <div onClick={() => handleSroll("contacts")}>Забронировать</div>
                    <div onClick={() => handleSroll("menu")}>Посмотреть меню</div>
                </div>
            </div>
            <div>
                <img src={horseLogo} alt="" width={337} height={546} />
            </div>
        </div>
        </div>
    )
}

export default GeneralPage;