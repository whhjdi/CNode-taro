import "./listItem.scss";
import { ComponentClass } from "react";
import Taro, { Component, Config, stopRecord } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { AtList, AtListItem, AtAccordion } from "taro-ui";
import { View } from "@tarojs/components";

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {
  data: any[];
  title: string;
};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface ListItem {
  props: IProps;
}

@connect(
  store => ({}),
  dispatch => ({})
)
class ListItem extends Component {
  state = {
    open: false
  };
  defaultProps = {
    data: []
  };
  handleClick(value) {
    this.setState({
      open: value
    });
  }
  gotoDetail(id) {
    Taro.navigateTo({ url: "/pages/detail/index?topicid=" + id });
  }
  render() {
    let { data, title } = this.props;
    let { open } = this.state;
    return (
      <AtAccordion
        open={open}
        onClick={this.handleClick.bind(this)}
        title={title}
      >
        <AtList hasBorder={true}>
          {data.length > 0 ? (
            data.map(item => {
              return (
                <View key={item.id}>
                  <AtListItem
                    arrow="right"
                    title={item.title || item.reply.content}
                    thumb={item.author.avatar_url}
                    onClick={this.gotoDetail.bind(this, item.id)}
                  />
                </View>
              );
            })
          ) : (
            <AtListItem
              title="暂无主题"
              thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            />
          )}
        </AtList>
      </AtAccordion>
    );
  }
}

export default ListItem as ComponentClass<PageOwnProps, PageState>;
