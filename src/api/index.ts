const baseUrl: string = "https://cnodejs.org/api/v1";

const api = {
  topics: "/topics", //主题首页 get
  topic: "/topic", //主题详情：id  get
  topicCollect: "/topics_collect/collect", //收藏主题 post
  topicDeCollect: "/topics_collect/de_collect", //取消收藏主题 post
  userCollect: "/topic_collect", //用户收藏 :loginName get
  userInfo: "/user", //用户详情 :loginName get
  accessToken: "/accesstoken", //post
  msgCount: "/message/count", //未读消息 get
  msgs: "/messages", //所有消息 get
  markAll: "/message/mark_all", //标记全部已读 post
  markOne: "/message/mark_one" //: msg_id 标记单个消息为已读 post
};

Object.keys(api).forEach(item => {
  api[item] = baseUrl + api[item];
});

export default api;
