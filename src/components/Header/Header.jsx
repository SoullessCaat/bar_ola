import React from "react";
import "./Header.css"
import PinAltFill from "../../logo/PinAltFill.png"

const Header = () => {

    const handleClick = (e, anchor) => {
        e.preventDefault();
        const elementUnderline = document.querySelector(".underline");
        elementUnderline?.classList?.remove("underline");
        const element = e.target;
        element.classList.add("underline");
    }

    return (
        <div className="header-wrapper">
        <div className="header-header">
            <div className="header-menu">
                <div onClick={(e) => handleClick(e, "general")}>главная</div>
                <div onClick={(e) => handleClick(e, "abouBar")}>о баре</div>
                <div onClick={(e) => handleClick(e, "menu")}>Меню</div>
                <div onClick={(e) => handleClick(e, "events")}>События</div>
                <div onClick={(e) => handleClick(e, "contacts")}>контакты</div>
            </div>
            <div className="header-adress" onClick={(e) => handleClick(e, "contacts")}>
                <div>СПБ, ул. Каштановая аллея, дом 2</div>
                <img src={PinAltFill} alt="" width={36} height={36}></img>
            </div>
        </div>
        </div>
    )
}

export default Header;