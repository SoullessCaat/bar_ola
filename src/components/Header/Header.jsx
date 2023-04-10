import React, { useState } from "react";
import "./Header.css"
import PinAltFill from "../../logo/PinAltFill.png";
import MenuLogo from "../../logo/Menu.png";


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (e, anchor, mob) => {
        e.preventDefault();
        const elementUnderline = document.querySelector(".underline");
        elementUnderline?.classList?.remove("underline");
        const element = e.target;
        element.classList.add("underline");
        const page = document.getElementById(anchor);
        page.scrollIntoView({behavior: "smooth"});
        if (mob) {
            setOpenMenu(false)
        }
    }

    const handleClickMenu = () => {
        setOpenMenu(!openMenu);
    }

    const menuMobil = () => {
        if (!openMenu) return null;

        return (
            <div className="header-select-menu">
                 <div onClick={(e) => handleClick(e, "general", "mob")}>главная</div>
                <div onClick={(e) => handleClick(e, "about-ola", "mob")}>о баре</div>
                <div onClick={(e) => handleClick(e, "menu", "mob")}>Меню</div>
                <div onClick={(e) => handleClick(e, "events", "mob")}>События</div>
                <div onClick={(e) => handleClick(e, "contacts", "mob")}>контакты</div>
            </div>
        )
    }

    return (
        <div className="header-wrapper">
        <div className="header-header">
            <div className="header-header-mobil" onClick={handleClickMenu}><img src={MenuLogo} alt="" /></div>
            {openMenu && <div className="header-menu-mobil">{menuMobil()}</div>}
            <div className="header-menu">
                <div onClick={(e) => handleClick(e, "general")}>главная</div>
                <div onClick={(e) => handleClick(e, "about-ola")}>о баре</div>
                <div onClick={(e) => handleClick(e, "menu")}>Меню</div>
                <div onClick={(e) => handleClick(e, "events")}>События</div>
                <div onClick={(e) => handleClick(e, "contacts")}>контакты</div>
            </div>
            <div className="header-adress" onClick={(e) => handleClick(e, "contacts")}>
                <div className="header-current-adress">Санкт-Петербург, набережная реки Фонтанки, 51/53</div>
                <img src={PinAltFill} alt="" width={36} height={36}></img>
            </div>
        </div>
        </div>
    )
}

export default Header;