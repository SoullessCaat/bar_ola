import React from "react";
import "./MenuCard.css";
import arrowBigRight from "../../logo/arrowBigRight.png";
import menuList from "../../menu"

const MenuCard = ({ position }) => {
  const menuCocktails = {
    1: {
      name: "Something food",
      price: 450,
      description: "что-то тут будет написано или нет"
    },
    2: {
      name: "Something food",
      price: 450,
    },
    3: {
      name: "Something food",
      price: 450,
      description: "что-то тут будет написано или нет"

    },
    4: {
      name: "Something food",
      price: 450,
    },
    5: {
      name: "Something food",
      price: 450,
    },
  };

  const menuKitchen = {
    1: {
      name: "пряные оливки",
      price: 450,
    },
    2: {
      name: "французский козий сыр / грушевый соус",
      price: 500,
    },
    3: {
      name: "маринованные черри / крем Маракуйя",
      price: 500,
    },
    4: {
      name: "ростбиф из утки / соус Сливочный чили / соус Бри",
      price: 600,
    },
    5: {
      name: "севиче из тунца / азиатский дрессинг",
      price: 700,
    },
    6: {
      name: "жареные креветки / сливочно- кокосовый мусс / соус Курозу / чиабатта",
      price: 700,
    },
    7: {
      name: "утиный паштет / белый шоколад / варенье из красной смородины / чиабатта",
      price: 700,
    },
  };

  const menuSomething = {
    1: {
      name: "Something food",
      price: 450,
    },
    2: {
      name: "Something food",
      price: 450,
    },
    3: {
      name: "Something food",
      price: 450,
    },
    4: {
      name: "Something food",
      price: 450,
    },
    5: {
      name: "Something food",
      price: 450,
    },
  };

  const renderSubmenu = (item) => {
    if (item.white) return ""
  }

  const renderPositions = (menu) => {
    return Object.values(menu).map((item, index) => {
      return (
        <div className="card" id={index + 1}>
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

  const renderSubPositions = (menu) => {
    return Object.values(menu).map((item, index) => {
      return (
        <div className="card">
          <div className="manu-name-submenu">{renderSubmenu()}</div>
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

  const renderContent = () => {
    if (position === "kitchen") {
      return renderPositions(menuList.kitchen);
    }
    if (position === "cocktails") {
      return renderPositions(menuList.coctails);
    }
  };

  const renderName = (position) => {
    if (position === "kitchen") return "Кухня";
    if (position === "cocktails") return "Коктейли";
    if (position === "wine") return "Вино";
    if (position === "Bubles") return "пузыри";
    if (position === "Hadr") return "крепкое";
    if (position === "beer") return "пиво/сидр";
    if (position === "bottles") return "бутылки";
  };

  return (
    <div className="menu_card">
      <div className="menu-header-card">{renderName(position)}</div>
      {renderContent(position)}
    </div>
  );
};

export default MenuCard;
