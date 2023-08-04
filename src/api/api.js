import axios from "axios";
import { camelizeKeys, decamelizeKeys, camelize } from "humps";

export class Api {
  constructor() {
    this.client = axios.create();
    this.client.defaults.baseURL = "http://45.132.18.97:322/?https://cloud-api.yandex.net/v1/disk/public";
    this.client.defaults.headers["Access-Control-Allow-Origin"] = "*";
    this.client.timeout = 3000;

    this.client.interceptors.response.use((response) => {
      if (
        response.data &&
        response.headers["content-type"].includes("application/json")
      ) {
        response.data = camelizeKeys(response.data);
      }

      return response;
    });

    // Axios middleware to convert all api requests to snake_case
    this.client.interceptors.request.use((config) => {
      const newConfig = { ...config };
      if (newConfig.headers["Content-Type"] === "multipart/form-data")
        return newConfig;

      if (config.params) {
        newConfig.params = decamelizeKeys(config.params);
      }

      if (config.data) {
        newConfig.data = decamelizeKeys(config.data);
      }
      return newConfig;
    });
  }

  clientWrapper = (method, url, data, config = {}) => {
    const clientResult = this.client[method](url, data, config);
    return clientResult;
  };

  getDirectoryContent = (path) => {
    let route = "resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FrT0Jl4XIx8ReWg";
    return this.clientWrapper("get", route+(path?`&path=${path}`:''));
  };
}
const api = new Api();

export default api;
