import { combineReducers } from "redux";
import menu from "./menu";
import topicList from "./topicList";
import detail from "./detail";
import user from "./user";

export default combineReducers({
  menu,
  topicList,
  detail,
  user
});
