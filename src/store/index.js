import React from "react";
import YaDiskStore from "./yaDiskStore";

class Store {
  constructor() {
    this.yaDiskStore = new YaDiskStore(this);
  }
}

export const storeContext = React.createContext(new Store());
export const useStore = () => React.useContext(storeContext);
