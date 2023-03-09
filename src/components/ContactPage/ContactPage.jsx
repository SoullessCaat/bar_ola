import React, { useState } from "react";
import "./ContactPage.css";
import Pin_alt from "../../logo/Pin_alt.png";
import instagram from "../../logo/instagram.png";
import Phone_light from "../../logo/Phone_light.png";
import telegram from "../../logo/telegram.png";
import whatsapp from "../../logo/whatsapp.png";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import Popup from "../Popup";

const ContactPage = () => {
  const [viewBookPopup, setViewookPopup] = useState(false);
  const [viewPlacePopup, setPlaceViewPopup] = useState(false);
  const [place, setPlace] = useState(false);

  const headerText = place ?  "Как добраться?" : "Бронирование";
  const descriptionText = place ? "Если вдруг вы заплутали, мы прикрепиили снизу фотографии , как добраться до нас:" :
  "Чтобы забронировать столик в OLA bar вы можете связаться с администратором:" 

  const handleViewBookPopup = (value) => {
    setViewookPopup(value);
    if (!viewBookPopup) {
      return document.body.style.overflow = "hidden";
    }
    return document.body.style.overflow = "inherit";
  }

  const handleViewPlacePopup = (value) => {
    setPlace(value);
    setPlaceViewPopup(value);
    if (!viewPlacePopup) {
      return document.body.style.overflow = "hidden";
    }
    return document.body.style.overflow = "inherit";
  }

  

  return (
    <div className="contact-wrapper" id="contacts">
      <div className="contact-contact">
        <div className="contacts-wrapper">
          <div className="contacts-first">
            <div className="contacts-header">Contacts</div>
            <div>
              <img src={Pin_alt} alt="" width={24} height={24}></img>
              &nbsp;&nbsp;5,Невский пр, г. Спб
            </div>
            <div>
              <img src={Phone_light} alt="" width={24} height={24}></img>
              &nbsp;&nbsp;+7 (872) 456-45-32
            </div>
            <div>
              <img src={telegram} alt="" width={35} height={35}></img>
              <img src={whatsapp} alt="" width={35} height={35}></img>
              <img src={instagram} alt="" width={35} height={35}></img>
            </div>
          </div>
          <button className="contacts-buttons-book" onClick={() => handleViewBookPopup(true)}>
            Забронировать
          </button>
          {(viewBookPopup || viewPlacePopup) && 
            <Popup 
            handleViewBookPopup={handleViewBookPopup} 
            headerText={headerText} 
            descriptionText={descriptionText}
            place={place}
            handleViewPlacePopup={handleViewPlacePopup}
            />}
        </div>
        <div className="contacts-wrapper">
          <div className="contacts-two">
            <div className="contacts-header">Working Hours</div>
            <div>
              <span className="days">Пн-пт:&nbsp;</span>7.00am - 8.00pm
            </div>
            <div>
              <span className="days">Суб:&nbsp;</span>9.00am - 10.00pm
            </div>
            <div>
              <span className="days">Вс:&nbsp;</span>14.00am - 8.00pm
            </div>
          </div>
          <div className="contacts-buttons-place" onClick={() => handleViewPlacePopup(true)}>
            <div>как добраться?</div>
          </div>
        </div>
        <div>
          <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
