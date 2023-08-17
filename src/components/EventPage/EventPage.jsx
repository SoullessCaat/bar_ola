import React, { useEffect } from "react";
import "./EventPage.css";
import EventCard from "../EventCard";
import rightArrow from "../../logo/rightArrow.svg";
import leftArrow from "../../logo/leftArrow.svg";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";

const EventPage = () => {
  const { eventsStore } = useStore();
  const { getEvents, events } = eventsStore;

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    scrollToMainCard();
  }, [events]);

  const scrollToMainCard = ()=>{
    const cards = document.querySelector(".event-cards-wrapper");
    const eventsMain = document.getElementById("main");
    if(!cards || !eventsMain) return;
    const navItemsRect = cards.getBoundingClientRect();
    const navItemActiveRect = eventsMain.getBoundingClientRect();
    const navItemsLeft = navItemActiveRect.left - navItemsRect.left + (navItemActiveRect.width - navItemsRect.width) / 2;
    cards.scrollTo({left: navItemsLeft});
  }

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
    <>
      {events?.length > 0 ? (
        <div className="event-wrapper" id="events">
          <div className="event-event">
            <div className="event-event-wrapper">
              <div className="pages-number">03</div>
              <div className="pages-description">события</div>
              <div className="event-cards-wrapper">
                {events?.map((item) => {
                  console.log(item.eventDescription)
                  return (
                    <EventCard
                      imageUrl={item.imageUrl}
                      stringifyEventDateTime={item.stringifyEventDateTime}
                      eventDescription={item.eventDescription}
                      isNextEvent={item.isNextEvent}
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
      ) : null}
    </>
  );
};

export default observer(EventPage);
