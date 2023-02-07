import React from "react";
import "./Header.css"
import PinAltFill from "../../logo/PinAltFill.png"

const Header = () => {
    return (
        <div className="header-header">
            <div className="header-menu">
                <div>главная</div>
                <div>о баре</div>
                <div>Меню</div>
                <div>События</div>
                <div>контакты</div>
            </div>
            <div className="header-adress">
                <div>СПБ, ул. Каштановая аллея, дом 2</div>
                <img src={PinAltFill} alt="" width={36} height={36} ></img>
            </div>
        </div>
    )
}

export default Header;