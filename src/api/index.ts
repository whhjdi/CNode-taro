const baseUrl: string = "https://cnodejs.org/api/v1";

const api = {
  topics: "/topics", //主题首页 get
  topic: "/topic", //主题详情：id  get
  userInfo: "/user", //用户详情 :loginName get
  accessToken: "/accesstoken", //post
  msgs: "/messages" //所有消息 get
};

Object.keys(api).forEach(item => {
  api[item] = baseUrl + api[item];
});

export default api;
