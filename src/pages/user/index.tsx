import { ComponentClass } from "react";
import Taro, { Component, Config, setNavigationBarColor } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";
import { userInfo, userLogout } from "../../actions/user";
import { AtList, AtListItem, AtButton, AtAccordion } from "taro-ui";
import ListItem from "../../components/listItem/listItem";
// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  userData: { [propName: string]: any };
  loginName: string;
};

type PageDispatchProps = {
  userInfo: (userName: string) => void;
  userLogout: () => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface User {
  props: IProps;
}

@connect(
  store => ({ userData: store.user.userData, loginName: store.user.loginName }),
  dispatch => ({
    userInfo(userName) {
      dispatch(userInfo(userName));
    },
    userLogout() {
      dispatch(userLogout());
    }
  })
)
class User extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "个人中心",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black"
  };

  componentDidMount() {
    this.handleUserInfo();
  }
  handleUserInfo() {
    let { loginName, userInfo } = this.props;
    if (loginName) {
      userInfo(loginName);
    }
  }
  handleLogout() {
    Taro.setStorageSync("token", "");
    this.props.userLogout();
    Taro.redirectTo({ url: "/pages/index/index" });
  }
  render() {
    let {
      avatar_url,
      loginname,
      recent_replies,
      recent_topics
    } = this.props.userData;
    return (
      <View className="user">
        <View className="info">
          <View className="avatar-wrapper">
            <Image src={avatar_url ? avatar_url : ""} className="avatar" />
            <Text className="name">{loginname}</Text>
          </View>
          <AtButton
            type="primary"
            className="logout"
            size="small"
            onClick={this.handleLogout.bind(this)}
          >
            退出登录
          </AtButton>
        </View>
        <ListItem data={recent_topics} title="最新主题" />
        <ListItem data={recent_replies} title="最近回复" />
        <ListItem data={recent_replies} title="已读消息" />
        <ListItem data={recent_replies} title="未读消息" />
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default User as ComponentClass<PageOwnProps, PageState>;
