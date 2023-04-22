import React from "react";
import "./MenuPage.css";
import MenuCard from "../MenuCard";
import rightArrow from "../../logo/arrowRightMenu.svg";
import leftArrow from "../../logo/arrowLeftMenu.svg";

const MenuPage = () => {
  const handleScroll = (dir) => {
    const cards = document.querySelector(".menu-cards");
    if (dir === "right") {
      return cards.scrollBy({
        left: 297,
        behavior: "smooth"
      })
    }
    return cards.scrollBy({
      left: -297,
      behavior: "smooth"
    })
  }

  const openMenuCard = (e, position) => {
    e.preventDefault();
    const elementUnderline = document.querySelector(".underline-menu");
    elementUnderline?.classList?.remove("underline-menu");
    const element = e.target;
    element.classList.add("underline-menu");
    const menuCard = document.getElementById(position);
    menuCard.scrollIntoView({block: "nearest", inline: "center", behavior: "smooth"});
  }

  return (
    <div className="menu-wrapper" id="menu">
      <div className="menu-menu">
        <div className="description_wrapper">
          <div className="pages-number">02</div>
          <div className="pages-description">меню</div>
          <div className="menu_names">
            <div onClick={(e) => openMenuCard(e, "kitchen")} className="underline-menu">кухня</div>
            <div onClick={(e) => openMenuCard(e, "cocktails")}>коктейли</div>
            <div onClick={(e) => openMenuCard(e, "wine")}>Вино</div>
            <div onClick={(e) => openMenuCard(e, "hard")}>крепкое</div>
            <div onClick={(e) => openMenuCard(e, "beer")}>пиво/сидр</div>
          </div>
        </div>
        <div className="menu-cards">
          <MenuCard position="kitchen" />
          <MenuCard position="cocktails" />
          <MenuCard position="wine" />
          <MenuCard position="hard" />
          <MenuCard position="beer" />
        </div>
        <div className="menu-navigation">
          <div className="menu-arrows">
            <div className="menu-arrow-left" onClick={() => handleScroll("left")}>
              <img
                src={leftArrow}
                alt=""
                width="24"
                height="24"
              ></img>
            </div>
            <div className="menu-arrow-right" onClick={() => handleScroll("right")}>
              <img 
              src={rightArrow} 
              alt=""
              width="24"
              height="24"
              ></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuPage;
