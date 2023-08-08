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

  processedData = [];

  pushProcessedData = (proccesedData) => {
    if (this.processedData.find((e) => e.resourceId === proccesedData.resourceId))
      return;

    this.processedData.push(proccesedData);
    this.processedData.sort(function (dateFirst, dateSecond) {
      return dateFirst.text.datetime - dateSecond.text.datetime;
    });

    let currentDate = new Date();
    let isMain = false
    this.processedData.forEach(event => {
      event.main = false;
      if(isMain) return;

      if(event.text.datetime - currentDate >=0){
        event.main = true;
        isMain = true;
      }
    });
  };

  getRootDirectoryData = () => {
    api
      .getDirectoryContent()
      .then(({ data }) => {
        this.handleRootData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleRootData = (data) => {
    let folders = data?.embedded?.items?.filter(
      (element) => element.type === "dir"
    );

    folders.forEach((element) => {
      this.getDirectoryFiles(element.path);
    });
  };

  getDirectoryFiles = (root) => {
    api
      .getDirectoryContent(root)
      .then(({ data }) => {
        this.converToProcessedData(data?.embedded?.items, data?.resourceId);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  converToProcessedData = (items, resourceId) => {
    if (this.processedData.find((e) => e.resourceId === resourceId)) return;
    if (items.length !== 2) return;

    // image and textfile
    if (!items.find((e) => e.mediaType === "image")) return;
    if (!items.find((e) => e.mimeType === "text/plain")) return;

    this.getTextData(items, (text) => {
      text = text.trim("\n");
      let index = text.indexOf("\n");
      let datetime = new Date(Date.parse(text.substring(0, index).trim()));
      let processedText = {
        datetime: datetime,
        description: text.substring(index + 1, text.length).trim("\n"),
      };

      if (processedText.datetime !== "Invalid Date")
        this.pushProcessedData({
          image: this.getImageLink(items),
          resourceId: resourceId,
          text: processedText,
        });
    });
  };

  getImageLink = (data) => {
    if (data[0].mediaType !== "image")
      return this.getImageLink([data[1], data[0]]);

    return data[0].file.replace('https://', 'https://nginx-proxy-server.ru/proxy/');
  };

  getTextData = (data, callback) => {
    if (data[0].mimeType !== "text/plain")
      return this.getTextData([data[1], data[0]], callback);

    this.requestToGetText(data[0].file.replace('https://', 'https://nginx-proxy-server.ru/proxy/'), callback);
  };

  requestToGetText = (url, callback) => {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200 || request.status == 0) {
          console.log(request.responseText);
          callback(request.responseText);
        }
      }
    };
  };
}

export default StateStore;
