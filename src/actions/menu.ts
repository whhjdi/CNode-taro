import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  CHANGE_CURRENT_MENU
} from "../constants/menu";

import { getTopicList } from "./topicList";

export const showMenu = () => {
  return {
    type: SHOW_DRAWER
  };
};
export const hideMenu = () => {
  return {
    type: HIDE_DRAWER
  };
};

export const _changeMenu = currentMenu => {
  return {
    type: CHANGE_CURRENT_MENU,
    currentMenu
  };
};

export const changeMenu = currentMenu => async dispatch => {
  dispatch(_changeMenu(currentMenu));
  dispatch(getTopicList({ tab: currentMenu.key, page: 1, limit: 20 }));
  // try {
  //   let res = await fetchData.getTopicList(params);
  //   if (res.data.length > 0) {
  //     dispatch(_getNextList(res.data, params.page + 1));
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
};
// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch();
    }, 2000);
  };
}
