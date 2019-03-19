import "./topicList.scss";
import { ComponentClass } from "react";
import Taro, { Component, Config, stopRecord } from "@tarojs/taro";
import { View, ScrollView, Image, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getTopicList } from "../../actions/topicList";
import TopicItem from "../topicItem/topicItem";

type PageStateProps = {
  page: number;
  limit: number;
  list: [];
  currentMenu: { key: string; value: string };
};

type PageDispatchProps = {
  getTopicList: (params: object) => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface TopicList {
  props: IProps;
}

@connect(
  store => ({ ...store.topicList, currentMenu: store.menu.currentMenu }),
  dispatch => ({
    getTopicList(params) {
      dispatch(getTopicList(params));
    }
  })
)
class TopicList extends Component {
  componentDidMount() {
    let { page, limit, getTopicList, currentMenu } = this.props;
    console.log(page, limit);

    getTopicList({ page, limit, tab: currentMenu.key });
  }
  render() {
    let { list } = this.props;
    return (
      <ScrollView className="topicList-wrapper" style={{ height: "650PX" }}>
        {list.map((item: any) => (
          <TopicItem item={item} taroKey={item.id} />
        ))}
      </ScrollView>
    );
  }
}

export default TopicList as ComponentClass<PageOwnProps, PageState>;
