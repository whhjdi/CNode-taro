import "./reply.scss";
import { ComponentClass } from "react";
import Taro, { Component, Config, stopRecord } from "@tarojs/taro";
import { View, Image, RichText, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtIcon } from "taro-ui";

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {
  replies: any[];
};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Reply {
  props: IProps;
}

@connect(
  store => ({ ...store.topicList, currentMenu: store.menu.currentMenu }),
  dispatch => ({})
)
class Reply extends Component {
  render() {
    let { replies } = this.props;
    return (
      <View className="reply">
        {replies.map((item, index) => {
          return (
            <View className="reply-item">
              <View className="reply-item-img-wrapper">
                <Image
                  src={item.author.avatar_url}
                  className="reply-item-avatar"
                />
              </View>
              <View className="reply-item-right">
                <View className="reply-item-content">
                  <Text className="reply-item-loginname">
                    {item.author.loginname}
                    <Text className="floor">{index + 1}楼</Text>
                  </Text>
                  <RichText nodes={item.content} />
                </View>
                <View className="star">
                  <AtIcon
                    value={item.is_uped ? "star-2" : "star"}
                    size="16"
                    color="#e67e22"
                  />
                  <Text className="star-text">
                    {item.ups.length ? item.ups.length : 0}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Reply as ComponentClass<PageOwnProps, PageState>;
