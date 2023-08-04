import React from "react";
import "./EventCard.css";

const EventCard = ({ photo, datetime, description, main }) => {

  return (
    <div className="event-card" id={main ? "main" : "usual"}>
      <img src={photo} width={250} height={227} alt=""></img>
      <div className="event-card-description">
        <div className="event-card-description-header">
          <span>{datetime} </span>
        </div>
        <div className="event-card-description-description">{description}</div>
      </div>
      <div className="event-card-arrow"></div>
    </div>
  );
};

export default EventCard;
