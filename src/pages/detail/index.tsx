import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getDetail } from "../../actions/detail";
import "./index.scss";
import DetailInfo from "../../components/detailInfo/detailInfo";
import Reply from "../../components/reply/reply";
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
  detailInfo: {
    id: string;
  };
  replies: Array<any>;
  user: { [propName: string]: any };
};

type PageDispatchProps = {
  getDetail: (id: string, token: string) => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Detail {
  props: IProps;
}

@connect(
  store => ({
    detailInfo: store.detail.detailInfo,
    replies: store.detail.replies,
    user: store.user
  }),
  dispatch => ({
    getDetail(id, token) {
      dispatch(getDetail(id, token));
    }
  })
)
class Detail extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "详情"
  };

  componentDidMount() {
    let id = this.$router.params.topicid;
    this.handleDetail(id);
  }
  handleDetail(id) {
    this.props.getDetail(id, this.props.user.accessToken);
  }

  render() {
    let { detailInfo, replies } = this.props;
    return (
      <View className="detail">
        <DetailInfo detailInfo={detailInfo} />
        <Reply replies={replies} />
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

export default Detail as ComponentClass<PageOwnProps, PageState>;
