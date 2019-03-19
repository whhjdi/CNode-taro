import { GET_TOPICLIST, ADD_TOPICLIST } from "../constants/topicList";

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: []
};

export default function topicList(state = TOPIC_STATE, action) {
  switch (action.type) {
    case GET_TOPICLIST:
      return { ...state, list: action.list, page: 1 };
    case ADD_TOPICLIST:
      return {
        ...state,
        list: state.list.concat(action.list),
        page: action.page
      };
    default:
      return state;
  }
}
