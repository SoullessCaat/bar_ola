import React, { useEffect } from "react";
import "./EventPage.css";
import EventCard from "../EventCard";
import rightArrow from "../../logo/rightArrow.svg";
import leftArrow from "../../logo/leftArrow.svg";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";

const EventPage = () => {
  const { yaDiskStore } = useStore();
  const { getRootDirectoryData, processedData } = yaDiskStore;

  useEffect(() => {
    getRootDirectoryData();
  }, []);

  useEffect(() => {
    scrollToMainCard();
  }, [processedData]);


  const scrollToMainCard = ()=>{
    const cards = document.querySelector(".event-cards-wrapper");
    const eventsMain = document.getElementById("main");
    if(!cards) return;
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
      {processedData?.length > 0 ? (
        <div className="event-wrapper" id="events">
          <div className="event-event">
            <div className="event-event-wrapper">
              <div className="pages-number">03</div>
              <div className="pages-description">события</div>
              <div className="event-cards-wrapper">
                {processedData?.map((item) => {
                  return (
                    <EventCard
                      photo={item.image}
                      datetime={item.text.datetime}
                      description={item.text.description}
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
      ) : null}
    </>
  );
};

export default observer(EventPage);
