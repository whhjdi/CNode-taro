import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  CHANGE_CURRENT_MENU
} from "../constants/menu";

const MENU_STATE = {
  menuData: [
    { key: "all", value: "全部" },
    { key: "good", value: "精华" },
    { key: "share", value: "分享" },
    { key: "ask", value: "问答" },
    { key: "job", value: "招聘" },
    { key: "dev", value: "客户端测试" }
  ],
  currentMenu: { key: "all", value: "全部" },
  showDrawer: false
};

export default function menu(state = MENU_STATE, action) {
  switch (action.type) {
    case SHOW_DRAWER:
      return { ...state, showDrawer: true };
    case HIDE_DRAWER:
      return { ...state, showDrawer: false };
    case CHANGE_CURRENT_MENU:
      return { ...state, currentMenu: action.currentMenu };
    default:
      return state;
  }
}
