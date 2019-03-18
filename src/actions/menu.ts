import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  CHANGE_CURRENT_MENU
} from "../constants/menu";

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

export const changeMenu = currentMenu => {
  return {
    type: CHANGE_CURRENT_MENU,
    currentMenu
  };
};
// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch();
    }, 2000);
  };
}
