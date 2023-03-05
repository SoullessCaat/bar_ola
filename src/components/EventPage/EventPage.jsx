import React from "react";
import "./EventPage.css";
import imageEventOne from "../../photo/imageEventOne.png";
import imageEventTwo from "../../photo/imageEventTwo.png";
import imageEventThree from "../../photo/imageEventThree.png";
import EventCard from "../EventCard";
import rightArrow from "../../logo/rightArrow.svg";
import leftArrow from "../../logo/leftArrow.svg";

const EventPage = () => {
  const events = {
    1: {
      photo: imageEventOne,
      date: "September 20, 2022",
      time: "All day",
      describe: "Кольяны со скидкой в 10 процентов в честь нового года",
    },
    2: {
      photo: imageEventTwo,
      date: "September 20, 2022",
      time: "All day",
      describe: "Кольяны со скидкой в 10 процентов в честь нового года",
    },
    3: {
      photo: imageEventThree,
      date: "September 20, 2022",
      time: "All day",
      describe: "Кольяны со скидкой в 10 процентов в честь нового года",
    },
    4: {
      photo: imageEventThree,
      date: "September 20, 2022",
      time: "All day",
      describe: "Кольяны со скидкой в 10 процентов в честь нового года",
    }
  };
  return (
    <div className="event-wrapper">
      <div className="event-event">
        <div className="event-event-wrapper">
          <div className="pages-number">03</div>
          <div className="pages-description">события</div>
          <div className="event-cards-wrapper">
            {Object.values(events).map((item) => {
              return (
                <EventCard
                  photo={item.photo}
                  date={item.date}
                  time={item.time}
                  describe={item.describe}
                />
              );
            })}
          </div>
          <div className="events-arrows">
            <div className="events-arrow-left"><img src={leftArrow} alt=""></img></div>
            <div className="events-arrow-right"><img src={rightArrow} alt=""></img></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
