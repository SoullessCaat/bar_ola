import React from "react";
import "./EventCard.css";
import rectangle from "../../logo/rectangle.svg"

const EventCard = ({ photo, date, time, describe }) => {
  return (
  <div className="event-card">
        <img src={photo} width={250} height={227} alt=""></img>
        <div className="event-card-description">
            <div className="event-card-description-header">
                <span>{date} </span>
                &nbsp;<img src={rectangle} alt=""></img>&nbsp;
                <span>{time}</span>
            </div>
            <div className="event-card-description-description">
                {describe}
            </div>
        </div>
        <div className="event-card-arrow"></div>
  </div>
  );
};

export default EventCard;
