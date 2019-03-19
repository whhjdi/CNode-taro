import { GET_DETAIL } from "../constants/detail";

const DETAIL_STATE = {
  detailInfo: {},
  replies: []
};

export default function detail(state = DETAIL_STATE, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        replies: action.res.replies,
        detailInfo: { ...action.res, replies: null }
      };
    default:
      return state;
  }
}
