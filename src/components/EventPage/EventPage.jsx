import React, { useEffect } from "react";
import "./EventPage.css";
import EventCard from "../EventCard";
import rightArrow from "../../logo/rightArrow.svg";
import leftArrow from "../../logo/leftArrow.svg";
import { events } from "../../data/events";

const EventPage = () => {
  useEffect(() => {
    const cards = document.querySelector(".event-cards-wrapper");
    const eventsMain = document.getElementById("main");
    const navItemsRect = cards.getBoundingClientRect();
    const navItemActiveRect = eventsMain.getBoundingClientRect();
    const navItemsLeft = navItemActiveRect.left - navItemsRect.left + (navItemActiveRect.width - navItemsRect.width) / 2;
    cards.scrollTo({left: navItemsLeft});
  }, [])
  


  const handleScroll = (dir) => {
    const cards = document.querySelector(".event-cards-wrapper");
    if (dir === "right") {
      return cards.scrollBy({
        left: 256,
        behavior: "smooth",
      });
    }
    return cards.scrollBy({
      left: -256,
      behavior: "smooth",
    });
  };

  return (
    <div className="event-wrapper" id="events">
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
                  key={item.date}
                  main={item.main}
                />
              );
            })}
          </div>
          {
            <div className="events-arrows">
              <div
                className="events-arrow-left"
                onClick={() => handleScroll("left")}
              >
                <img src={leftArrow} alt=""></img>
              </div>
              <div
                className="events-arrow-right"
                onClick={() => handleScroll("right")}
              >
                <img src={rightArrow} alt=""></img>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default EventPage;
