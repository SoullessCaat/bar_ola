import React, { useState } from "react";
import "./ContactPage.css";
import Pin_alt from "../../logo/Pin_alt.png";
import instagram from "../../logo/instagram.png";
import Phone_light from "../../logo/Phone_light.png";
import telegram from "../../logo/telegram.png";
import whatsapp from "../../logo/whatsapp.png";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Popup from "../Popup";

const ContactPage = () => {
  const [viewBookPopup, setViewookPopup] = useState(false);
  const [viewPlacePopup, setPlaceViewPopup] = useState(false);
  const [place, setPlace] = useState(false);

  const headerText = place ? "Как добраться?" : "Бронирование";
  const descriptionText = place
    ? "Если вдруг вы заплутали, мы прикрепиили снизу фотографии , как добраться до нас:"
    : "Чтобы забронировать столик в OLA bar вы можете связаться с администратором:";

  const handleViewBookPopup = (value) => {
    setViewookPopup(value);
    if (!viewBookPopup) {
      return (document.body.style.overflow = "hidden");
    }
    return (document.body.style.overflow = "inherit");
  };

  const handleViewPlacePopup = (value) => {
    setPlace(value);
    setPlaceViewPopup(value);
    if (!viewPlacePopup) {
      return (document.body.style.overflow = "hidden");
    }
    return (document.body.style.overflow = "inherit");
  };

  const buttonReserved = () => {
    return (
      <div
        className="contacts-buttons-book"
        onClick={() => handleViewBookPopup(true)}
      >
        Забронировать
      </div>
    );
  };

  return (
    <div className="contact-wrapper" id="contacts">
      <div className="contact-contact">
       <div className="contact-information">
         <div className="contacts-wrapper">
          <div className="contacts-first">
            <div className="contacts-header">Contacts</div>
            <div>
              <img
                src={Pin_alt}
                alt=""
                width={24}
                height={24}
                className="contact-logo-point"
              ></img>
              Санкт-Петербург,
              <br />
              Набережная реки
              <br />
              фонтанки, 51/53
            </div>
            <div>
              <img src={Phone_light} alt="" width={24} height={24}></img>
              &nbsp;&nbsp;
              <a href="tel:+79810045424" className="contact-phone-number">
                +7 (981) 004-54-24
              </a>
            </div>
            <div className="contact-media">
              <img
                src={telegram}
                alt=""
                width={35}
                height={35}
                onClick={() => window.open("https://t.me/olabarspb")}
              ></img>
              <img
                src={whatsapp}
                alt=""
                width={35}
                height={35}
                onClick={() =>
                  window.open("https://api.whatsapp.com/send?phone=79810045424")
                }
              ></img>
              <img
                src={instagram}
                alt=""
                width={35}
                height={35}
                onClick={() => window.open("https://instagram.com/olabar.spb")}
              ></img>
            </div>
          </div>
          <div className="button-reserved">{buttonReserved()}</div>
          {(viewBookPopup || viewPlacePopup) && (
            <Popup
              handleViewBookPopup={handleViewBookPopup}
              headerText={headerText}
              descriptionText={descriptionText}
              place={place}
              handleViewPlacePopup={handleViewPlacePopup}
            />
          )}
        </div>
        <div className="contacts-wrapper">
          <div className="contacts-two">
            <div className="contacts-header">Working Hours</div>
            <div>
              <span className="days">Ср-Чт:&nbsp;</span>18:00 - 01:00
            </div>
            <div>
              <span className="days">Пт-Сб:&nbsp;</span>17:00 - 03:00
            </div>
            <div>
              <span className="days">Вс:&nbsp;</span>17:00 - 01:00
            </div>
          </div>
          <div className="button-reserved-mob">{buttonReserved()}</div>
          <div
            className="contacts-buttons-place"
            onClick={() => handleViewPlacePopup(true)}
          >
            <div>как добраться?</div>
          </div>
        </div>
        </div>
        <div className="contact-map">
          <YMaps>
            <Map className="contact-map-map" defaultState={{ center: [59.929705, 30.337392], zoom: 15 }}>
              <Placemark geometry={[59.929705, 30.337392]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
