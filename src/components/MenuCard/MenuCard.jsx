import React from "react";
import "./MenuCard.css";

const MenuCard = ({ position }) => {
  const menuCocktails = {
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

  const menuKitchen = {
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

  const renderPposotions = (menu) => {
    return Object.values(menu).map((item) => {
      return (
        <div className="card">
          <div>
            dshkfs{item.name} {item.price}
          </div>
        </div>
      );
    });
  };

  const renderContent = () => {
    if (position === "kitchen") {
      return renderPposotions(menuKitchen);
    }
    if (position === "cocktails") {
      return renderPposotions(menuCocktails);
    }
    if (position === "somethings") {
      return renderPposotions(menuSomething);
    }
  };

  return <div className="menu_card">{renderContent(position)}</div>;
};

export default MenuCard;
