import React from "react";
import EventsStore from "./eventsStore";

class Store {
  constructor() {
    this.eventsStore = new EventsStore(this);
  }
}

export const storeContext = React.createContext(new Store());
export const useStore = () => React.useContext(storeContext);
