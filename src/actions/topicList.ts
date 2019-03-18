import fetchData from "../api/fetchData";
import { GET_TOPICLIST } from "../constants/topicList";

export const _getTopicList = list => {
  return {
    type: GET_TOPICLIST,
    list
  };
};

export const getTopicList = params => async dispatch => {
  try {
    let res = await fetchData.getTopicList(params);
    dispatch(_getTopicList(res.data));
  } catch (err) {
    console.log(err);
  }
};
