import { makeAutoObservable, configure } from "mobx";
import api from "../api/api";

class StateStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    configure({
      enforceActions: "never",
    });
  }

  events = [];

  setEvents = (events) => {
    this.events = events;
  };

  getEvents = () => {
    api
      .getEvents()
      .then(({ data }) => {
        this.setEvents(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default StateStore;
