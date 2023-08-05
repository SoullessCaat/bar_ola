import React from "react";
import "./EventCard.css";
import monthDictionary from "./dictionary.js"
import rectangle from "../../logo/rectangle.svg"

const EventCard = ({ photo, datetime, description, main }) => {

  const round = (value) => {
    if (value < 10) return "0" + value;
    return value;
  };

  let date = `${datetime.getDate()} ${monthDictionary[datetime.getMonth()]}, ${datetime.getFullYear()}`;
  let time = `${round(datetime.getHours())}:${round(datetime.getMinutes())}`;
  
  return (
    <div className="event-card" id={main ? "main" : "usual"}>
      <img src={photo} width={250} height={227} alt=""></img>
      <div className="event-card-description">
        <div className="event-card-description-header">
          <span>{date} </span>
          &nbsp;<img src={rectangle} alt=""></img>&nbsp;
          <span>{time}</span>
        </div>
        <div className="event-card-description-description">{description}</div>
      </div>
      <div className="event-card-arrow"></div>
    </div>
  );
};

export default EventCard;
