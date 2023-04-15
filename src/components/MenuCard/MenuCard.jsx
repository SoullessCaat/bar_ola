import React from "react";
import "./MenuCard.css";
import arrowBigRight from "../../logo/arrowBigRight.png";
import menuList from "../../data/menu";

const MenuCard = ({ position }) => {
  const renderPositions = (menu) => {
    return Object.values(menu).map((item) => {
      return (
        <div className="card">
          <div className="menu-name-wrapper">
            <div className="menu-name">{item.name}</div>{" "}
            <div className="menu-description">{item.description}</div>{" "}
          </div>
          <div>
            <img src={arrowBigRight} alt="" />
          </div>
          <div className="menu-price">{item.price}</div>
        </div>
      );
    });
  };

  const renderSubPositions = (menu, position) => {
    return Object.values(menu).map((item) => {
      return (
        <div className="card sub">
          <div className="menu-name-submenu">{item.name && item.name}</div>
          {Object.values(item.items).map((posit) => {
            return (
              <div className="wrapper-submenu">
                <div className="menu-name-wrapper">
                  <div className="menu-name">{posit.name}</div>{" "}
                  <div className="menu-description">{posit?.description}</div>{" "}
                </div>
                <div>
                  <img src={arrowBigRight} alt="" />
                </div>
                <div className="menu-price">{posit.price}</div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const renderContent = () => {
    if (position === "wine" || position === "hard" || position === "bottles" || position === "beer") {
      return renderSubPositions(menuList[position], position);
    }
    return renderPositions(menuList[position], position);
  };

  const renderName = (position) => {
    if (position === "kitchen") return "Кухня";
    if (position === "cocktails") return "Коктейли";
    if (position === "wine") return "Вино";
    if (position === "hard") return "Крепкое";
    if (position === "beer") return "Пиво/сидр";
    if (position === "bottles") return "Бутылки";
  };

  return (
    <div className="menu_card" id={position}>
      <div className="menu-header-card">{renderName(position)}</div>
      {renderContent()}
    </div>
  );
};

export default MenuCard;
