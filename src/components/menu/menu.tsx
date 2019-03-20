import { ComponentClass } from "react";
import Taro, { Component, Config, base64ToArrayBuffer } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { showMenu, hideMenu, changeMenu } from "../../actions/menu";
import { AtIcon, AtDrawer } from "taro-ui";
import "./menu.scss";

type PageStateProps = {
  menu: { [propName: string]: any };
  loginName: string;
};

type PageDispatchProps = {
  showMenu: () => void;
  hideMenu: () => void;
  changeMenu: (currentMenu: object) => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Menu {
  props: IProps;
}

@connect(
  store => ({ menu: store.menu, loginName: store.user.loginName }),
  dispatch => ({
    showMenu() {
      dispatch(showMenu());
    },
    hideMenu() {
      dispatch(hideMenu());
    },
    changeMenu(currentMenu) {
      dispatch(changeMenu(currentMenu));
    }
  })
)
class Menu extends Component {
  onShow() {
    this.props.showMenu();
  }
  onClose() {
    this.props.hideMenu();
  }
  handleItems(menuData) {
    return menuData.map(item => {
      return item.value;
    });
  }
  changeItem(index: number) {
    let { menuData, currentMenu } = this.props.menu;
    let currentMenu2 = menuData[index];
    if (currentMenu.value === currentMenu2.value) return;
    this.props.changeMenu && this.props.changeMenu(currentMenu2);
  }
  toLogin() {
    if (this.props.loginName) {
      Taro.navigateTo({ url: "/pages/user/index" });
    } else {
      Taro.navigateTo({ url: "/pages/login/index" });
    }
  }

  render() {
    let { menuData, currentMenu, showDrawer } = this.props.menu;
    let items = this.handleItems(menuData);
    return (
      <View className="menu-wrapper">
        <AtIcon
          value="user"
          size="23"
          color="#000"
          onClick={this.toLogin.bind(this)}
        />
        <Text>{currentMenu.value ? currentMenu.value : ""}</Text>
        <AtIcon
          value="menu"
          size="23"
          color="#000"
          onClick={this.onShow.bind(this)}
        />
        <View style="position:absolute">
          <AtDrawer
            show={showDrawer}
            right
            mask
            onClose={this.onClose.bind(this)}
            items={items}
            onItemClick={this.changeItem.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default Menu as ComponentClass<PageOwnProps, PageState>;
