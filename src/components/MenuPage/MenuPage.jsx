import React from "react";
import "./MenuPage.css";
import MenuCard from "../MenuCard";

const MenuPage = () => {
  // Карточка на которой будет в бэкграунден номер карточки. Сверху будет меню.
  // Сделать функцию, которая будет принимать позиции по 5 штук с описанием каждой позиции.
  // Если 5 закончилось, то следующая карточка со следующим номером и также 5 позиций
  return (
    <div className="menu-wrapper" id="menu">
      <div className="menu-menu">
        <div className="description_wrapper">
          <div className="pages-number">02</div>
          <div className="pages-description">меню</div>
          <div className="menu_names">
            <div>коктейли</div>
            <div>бутылки</div>
            <div>закуски</div>
          </div>
        </div>
        <div className="menu-cards">
          <MenuCard position="cocktails" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
          <MenuCard position="kitchen" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
