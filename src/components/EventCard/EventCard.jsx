import React from "react";
import "./EventCard.css";

const EventCard = ({ imageUrl, stringifyEventDateTime, eventDescription, isNextEvent }) => {
  
  return (
    <div className="event-card" id={isNextEvent ? "main" : "usual"}>
      <img src={imageUrl} width={250} height={227} alt=""></img>
      <div className="event-card-description">
        <div className="event-card-description-header">
          <span>{stringifyEventDateTime}</span>
        </div>
        <div className="event-card-description-description">{eventDescription}</div>
      </div>
      <div className="event-card-arrow"></div>
    </div>
  );
};

export default EventCard;
