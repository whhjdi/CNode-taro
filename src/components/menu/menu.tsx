import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { showMenu, hideMenu, changeMenu } from "../../actions/menu";
import { AtIcon, AtDrawer } from "taro-ui";
import "./menu.scss";

type PageStateProps = {
  menuData: object;
  currentMenu: { key: string; value: string };
  showDrawer: boolean;
};

type PageDispatchProps = {
  showMenu: () => void;
  hideMenu: () => void;
  changeMenu: (currentMenu: string) => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Menu {
  props: IProps;
}

@connect(
  ({ menu }) => menu,
  dispatch => ({
    showMenu() {
      dispatch(showMenu());
    },
    hideMenu() {
      dispatch(hideMenu());
    },
    changeMenu(currentMenu: string) {
      console.log(currentMenu);

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
    let { menuData } = this.props;
    let currentMenu = menuData[index];
    this.props.changeMenu && this.props.changeMenu(currentMenu);
  }
  render() {
    let items = this.handleItems(this.props.menuData);
    return (
      <View className="menu-wrapper">
        {/* <Image
          src={require("../../assets/images/menu.png")}
          className="menu-list"
          onClick={this.onShow.bind(this)}
        /> */}
        <AtIcon
          value="menu"
          size="23"
          color="#000"
          onClick={this.onShow.bind(this)}
        />
        <Text>
          {this.props.currentMenu.value ? this.props.currentMenu.value : ""}
        </Text>
        {/* <Image
          src={require("../../assets/images/user.png")}
          className="menu-user"
        /> */}
        <AtIcon value="user" size="23" color="#000" />
        <AtDrawer
          show={this.props.showDrawer}
          left
          mask
          onClose={this.onClose.bind(this)}
          items={items}
          style="position:absolute"
          onItemClick={this.changeItem.bind(this)}
        />
      </View>
    );
  }
}

export default Menu as ComponentClass<PageOwnProps, PageState>;
