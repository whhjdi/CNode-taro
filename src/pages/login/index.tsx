import { ComponentClass } from "react";
import Taro, { Component, Config, setNavigationBarColor } from "@tarojs/taro";
import { View, Button, Text, Input } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";
import { AtButton } from "taro-ui";
import { accessUserToken } from "../../actions/user";

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
  user: { [propName: string]: any };
};

type PageDispatchProps = {
  accessUserToken: (token: string) => any;
};

type PageOwnProps = {};

type PageState = {
  token: string;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Login {
  props: IProps;
}

@connect(
  store => ({ user: store.user }),
  dispatch => ({
    accessUserToken(token) {
      return dispatch(accessUserToken(token));
    }
  })
)
class Login extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "登录",
    navigationBarBackgroundColor: "#5685E4"
  };
  state = {
    token: ""
  };
  componentDidMount() {
    this.getToken();
  }
  getToken() {
    Taro.getStorage({ key: "token" }).then(res => {
      if (res.data) {
        this.setState(
          {
            token: res.data
          },
          () => {
            this.handleLogin();
          }
        );
      }
    });
  }
  handleInput(e) {
    if (e && e.target) {
      this.setState({ token: e.target.value });
    }
  }
  async handleLogin() {
    console.log(this.state.token, 1);
    let { token } = this.state;
    if (token) {
      await this.props.accessUserToken(token);
      Taro.setStorageSync("token", token);
      Taro.redirectTo({ url: "/pages/user/index" });
    } else {
      Taro.showToast({ title: "请输入accesstoken" });
    }
  }
  render() {
    let { loginName } = this.props.user;
    return (
      <View className="login">
        <View className="header">
          <View className="header-avatar">快点登录吧</View>
        </View>
        <View className="input-wrapper">
          <Input
            type="password"
            password
            placeholder="请输入accesstoken"
            focus
            className="login-input"
            onInput={this.handleInput.bind(this)}
          />
        </View>
        <AtButton
          type="primary"
          circle
          className="login-button"
          onClick={this.handleLogin.bind(this)}
        >
          登录
        </AtButton>
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

export default Login as ComponentClass<PageOwnProps, PageState>;
