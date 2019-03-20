import request from "./request";
import api from "./index";

class fetchData {
  static getTopicList(params) {
    return request(api.topics, "GET", params);
  }
  static getTopicDetail(id, accessToken) {
    let accesstoken = accessToken ? accessToken : null;
    return request(api.topic + "/" + id, "GET", { accesstoken });
  }
  static userLogin(accesstoken) {
    return request(api.accessToken, "POST", { accesstoken });
  }
  static getUserInfo(userName) {
    return request(api.userInfo + "/" + userName, "GET");
  }
}

export default fetchData;
