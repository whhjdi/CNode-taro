import request from "./request";
import api from "./index";

class fetchData {
  static getTopicList(params) {
    return request(api.topics, "GET", params);
  }
  static getTopicDetail(id, accessToken) {
    return request(api.topic + "/" + id, "GET", { accesstoken: accessToken });
  }
}

export default fetchData;
