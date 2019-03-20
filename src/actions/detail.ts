import { GET_DETAIL } from "../constants/detail";
import fetchData from "../api/fetchData";

export const _getDetail = res => {
  return {
    type: GET_DETAIL,
    res
  };
};

export const getDetail = (id, token) => async dispatch => {
  try {
    let res = await fetchData.getTopicDetail(id, token);
    dispatch(_getDetail(res.data.data));
  } catch (err) {
    console.log(err);
  }
};
