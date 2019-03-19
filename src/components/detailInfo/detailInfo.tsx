import "./detailInfo.scss";
import { ComponentClass } from "react";
import Taro, { Component, Config, stopRecord } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { formatDate } from "../../utils/date";
type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {
  detailInfo: { [propName: string]: any };
};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface DetailInfo {
  props: IProps;
}

@connect(
  store => ({}),
  dispatch => ({})
)
class DetailInfo extends Component {
  componentDidMount() {
    console.log(this.props.detailInfo);
  }
  render() {
    let { detailInfo } = this.props;
    return (
      <View className="detailInfo">
        <View className="detail-header">
          <View className="detail-header-title">
            {detailInfo.top ? (
              <Text className="right-tab">置顶</Text>
            ) : detailInfo.tab === "share" ? (
              <Text className="right-tab right-share">分享</Text>
            ) : (
              <Text className="right-tab right-ask">问答</Text>
            )}
            {detailInfo.title}
          </View>
          <View className="detail-header-desc">
            <Text>
              发布于
              {detailInfo.create_at ? formatDate(detailInfo.create_at) : null}
            </Text>
            <Text className="detail-author">
              .作者{detailInfo.author && detailInfo.author.loginname}
            </Text>
            <Text>.{detailInfo.visit_count}次浏览</Text>
          </View>
        </View>
        <View className="detail-body">
          <RichText nodes={detailInfo.content} />
        </View>
      </View>
    );
  }
}

export default DetailInfo as ComponentClass<PageOwnProps, PageState>;
