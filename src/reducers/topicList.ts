import { GET_TOPICLIST } from "../constants/topicList";

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: []
};

export default function topicList(state = TOPIC_STATE, action) {
  switch (action.type) {
    case GET_TOPICLIST:
      return { ...state, list: action.list };
    default:
      return state;
  }
}
