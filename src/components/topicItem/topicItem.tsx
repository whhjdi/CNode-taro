import { formatDate } from "../../utils/date";
import "./topicItem.scss";
import { ComponentClass } from "react";
import Taro, { Component, Config, stopRecord } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

type PageStateProps = {
  list: [];
  item: {
    author: { loginname: string; avatar_url: string };
    tab: string;
    title: string;
    create_at: string;
    reply_count: string;
    visit_count: string;
    top: boolean;
  };
};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface TopicItem {
  props: IProps;
}

@connect(
  store => ({ list: store.topicList.list }),
  dispatch => ({})
)
class TopicItem extends Component {
  pushDetail(item) {
    Taro.navigateTo({ url: "/pages/detail/index?topicid=" + item.id });
  }
  render() {
    let { item } = this.props;
    return (
      <View className="topic-item" onClick={this.pushDetail.bind(this, item)}>
        <View className="topic-left">
          <Image src={item.author.avatar_url} className="avatar-img" />
        </View>
        <View className="topic-right">
          <View className="right-title">
            {item.top ? (
              <Text className="right-tab">置顶</Text>
            ) : item.tab === "share" ? (
              <Text className="right-tab right-share">分享</Text>
            ) : (
              <Text className="right-tab right-ask">问答</Text>
            )}

            <Text className="topic-title">{item.title}</Text>
          </View>
          <View className="right-info">
            <Text className="loginname">{item.author.loginname}</Text>
            <Text className="count">
              {item.reply_count} / {item.visit_count}
            </Text>
            <Text className="create-at">
              {item.create_at ? formatDate(item.create_at) : null}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TopicItem as ComponentClass<PageOwnProps, PageState>;
