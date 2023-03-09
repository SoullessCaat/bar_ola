import React from "react";
import "./Popup.css";
import whatsappPopup from "../../logo/whatsappPopup.png";
import telegramPopup from "../../logo/telegramPopup.png";
import Dell_duotone from "../../logo/Dell_duotone.png";
import popupFirst from "../../photo/popupFirst.png"
import popupSecond from "../../photo/popupSecond.png";


const Popup = ({ handleViewBookPopup, headerText, descriptionText, place, handleViewPlacePopup }) => {
  return (
    <div className={place ? "popup-place-wrapper" : "popup-book-wrapper"}>
      <div className="popup-book">
        <div className="popup-header">
          <span className="popup-header-text">{headerText}</span>
          <div onClick={() => place ? handleViewPlacePopup(false) : handleViewBookPopup(false)}>
            <img src={Dell_duotone} width={24} height={24} alt=""></img>
          </div>
        </div>
        <div className="popup-descriprion">
          {descriptionText}
        </div>
          {
            place && 
            <div className="popup-content">
              <div className="popup-photo">
                <img src={popupFirst} width={205} height={205} alt=""></img>
                <img src={popupSecond} width={205} height={205} alt=""></img>
              </div>
            </div>
          }
          {
            !place && 
              <div className="popup-content">
                <div className="popup-content-number">
                  <img src={telegramPopup} width={32} height={32} alt=""></img>
                  <img src={whatsappPopup} width={32} height={32} alt=""></img>
                  <span className="popup-phone-number">+7(981) 916-48-95</span>
                </div>
                <div className="popup-content-description">
                  *Бронирование столиков рекомендуется минимум за 3 часа до посещения
                  бара. Бронирование бесплатно и допускает опоздание до получаса
                </div>
              </div>
          }
      </div>
    </div>
  );
};

export default Popup;