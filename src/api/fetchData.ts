import request from "./request";
import api from "./index";

class fetchData {
  static getTopicList(params) {
    return request(api.topics, "GET", params);
  }
}

export default fetchData;
