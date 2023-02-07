import React from "react";
import "./GeneralPage.css"
import horseLogo from "../../logo/horse.png";
import barLogo from "../../logo/bar-logo.png"

const GeneralPage = () => {
    return (
        <div className="general-general">
            <div className="general-bar-description">
                <div><img src={barLogo} alt="" width={265} height={165}></img></div>
                <div className="general-description">С учётом сложившейся международной обстановки, граница обучения кадров представляет собой интересный эксперимент проверки модели развития. </div>
                <div className="general-buttons">
                    <div>Забронировать</div>
                    <div>Посмотреть меню</div>
                </div>
            </div>
            <div>
                <img src={horseLogo} alt="" width={337} height={546} />
            </div>
        </div>
    )
}

export default GeneralPage;