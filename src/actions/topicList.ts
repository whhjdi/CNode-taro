import fetchData from "../api/fetchData";
import { GET_TOPICLIST, ADD_TOPICLIST } from "../constants/topicList";

//获取第一页
export const getTopicList = params => async dispatch => {
  try {
    let res = await fetchData.getTopicList(params);
    dispatch(_getTopicList(res.data.data));
  } catch (err) {
    console.log(err);
  }
};
//获取下一页
export const getNextList = params => async dispatch => {
  try {
    let res = await fetchData.getTopicList(params);
    console.log(res);

    if (res.data.data.length > 0) {
      dispatch(_getNextList(res.data.data, params.page + 1));
    } else {
      console.log("到底了");
    }
  } catch (err) {
    console.log(err);
  }
};
export const _getTopicList = list => {
  return {
    type: GET_TOPICLIST,
    list
  };
};
export const _getNextList = (list, page) => {
  return {
    type: ADD_TOPICLIST,
    list,
    page
  };
};
