import React, { useState } from "react";
import "./GeneralPage.css";
import barLogo from "../../logo/bar-logo.png";
import horseGif from "../../photo/Horse2.gif";
import Popup from "../Popup/Popup";

const GeneralPage = () => {
  const [viewBookPopup, setViewookPopup] = useState(false);

  const handleSroll = (anc) => {
    const page = document.getElementById(anc);
    page.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewBookPopup = (value) => {
    setViewookPopup(value);
    if (!viewBookPopup) {
      return (document.body.style.overflow = "hidden");
    }
    return (document.body.style.overflow = "inherit");
  };

  return (
    <div className="general-general-wrapper" id="general">
      <div className="general-general">
        <div className="general-bar-description">
          <div>
            <img
              className="general-logo"
              src={barLogo}
              alt=""
              width={265}
              height={165}
            ></img>
          </div>
          <div className="general-description">
            Место, которое объединяет людей, встречает их радостным шумом
            разговоров, наполняет веселым энтузиазмом и пятничной любовью к
            жизни!{" "}
          </div>
          {viewBookPopup && (
            <Popup
              handleViewBookPopup={handleViewBookPopup}
              headerText="БРОНИРОВАНИЕ"
              descriptionText="Чтобы забронировать столик в OLA bar вы можете связаться с администратором:"
              place={false}
              handleViewPlacePopup={false}
            />
          )}
          <div className="general-buttons">
            <div onClick={() => handleViewBookPopup(true)}>Забронировать</div>
            <div onClick={() => handleSroll("menu")}>Посмотреть меню</div>
          </div>
        </div>
        <div className="general-horse">
          <img src={horseGif} alt="" width={337} height={546} />
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
