(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"130":function(e,t,n){},"134":function(e,t,n){},"141":function(e,t,n){"use strict";n.r(t);var r=n(40),o=n(0),i=n(1),a=n.n(i),c=n(145),u=n(9),s=function add(){return{"type":"ADD"}};n(134);var l=n(65),p=n(7),f=n(139),h=n(41),m=n(8);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var i=t[r](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}var d=function getTopicList(e){return t=_asyncToGenerator(regeneratorRuntime.mark(function _callee(t){var n;return regeneratorRuntime.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.a.getTopicList(e);case 3:n=r.sent,t(y(n.data.data)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}},_callee,void 0,[[0,7]])})),function(e){return t.apply(this,arguments)};var t},y=function _getTopicList(e){return{"type":m.b,"list":e}},v=function _getNextList(e,t){return{"type":m.a,"list":e,"page":t}};var b=function _changeMenu(e){return{"type":p.a,"currentMenu":e}},g=function changeMenu(e){return t=function menu_asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var i=t[r](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function _callee(t){return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:t(b(e)),t(d({"tab":e.key,"page":1,"limit":20}));case 2:case"end":return n.stop()}},_callee,void 0)})),function(e){return t.apply(this,arguments)};var t};var _=n(95),w=n(144),T=(n(130),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var k=function(e){function Menu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Menu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Menu,o["a"].Component),T(Menu,[{"key":"onShow","value":function onShow(){this.props.showMenu()}},{"key":"onClose","value":function onClose(){this.props.hideMenu()}},{"key":"handleItems","value":function handleItems(e){return e.map(function(e){return e.value})}},{"key":"changeItem","value":function changeItem(e){var t=this.props.menu,n=t.menuData,r=t.currentMenu,o=n[e];r.value!==o.value&&this.props.changeMenu&&this.props.changeMenu(o)}},{"key":"toLogin","value":function toLogin(){this.props.loginName?o.a.navigateTo({"url":"/pages/user/index"}):o.a.navigateTo({"url":"/pages/login/index"})}},{"key":"render","value":function render(){var e=this.props.menu,t=e.menuData,n=e.currentMenu,r=e.showDrawer,o=this.handleItems(t);return a.a.createElement(c.a,{"className":"menu-wrapper"},a.a.createElement(_.a,{"value":"user","size":"23","color":"#000","onClick":this.toLogin.bind(this)}),a.a.createElement(l.a,null,n.value?n.value:""),a.a.createElement(_.a,{"value":"menu","size":"23","color":"#000","onClick":this.onShow.bind(this)}),a.a.createElement(c.a,{"style":"position:absolute"},a.a.createElement(w.a,{"show":r,"right":!0,"mask":!0,"onClose":this.onClose.bind(this),"items":o,"onItemClick":this.changeItem.bind(this)})))}}]),Menu}(),O=k=r.__decorate([Object(u.b)(function(e){return{"menu":e.menu,"loginName":e.user.loginName}},function(e){return{"showMenu":function showMenu(){e(function showMenu(){return{"type":p.c}}())},"hideMenu":function hideMenu(){e(function hideMenu(){return{"type":p.b}}())},"changeMenu":function changeMenu(t){e(g(t))}}})],k),E=(n(92),n(143)),P=n(49),j=(n(90),n(63)),x=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var L=function(e){function TopicItem(){return function topicItem_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TopicItem),function topicItem_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TopicItem.__proto__||Object.getPrototypeOf(TopicItem)).apply(this,arguments))}return function topicItem_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TopicItem,o["a"].Component),x(TopicItem,[{"key":"pushDetail","value":function pushDetail(e){o.a.navigateTo({"url":"/pages/detail/index?topicid="+e.id})}},{"key":"render","value":function render(){var e=this.props.item;return a.a.createElement(c.a,{"className":"topic-item","onClick":this.pushDetail.bind(this,e)},a.a.createElement(c.a,{"className":"topic-left"},a.a.createElement(j.a,{"src":e.author.avatar_url,"className":"avatar-img"})),a.a.createElement(c.a,{"className":"topic-right"},a.a.createElement(c.a,{"className":"right-title"},e.top?a.a.createElement(l.a,{"className":"right-tab"},"置顶"):"share"===e.tab?a.a.createElement(l.a,{"className":"right-tab right-share"},"分享"):a.a.createElement(l.a,{"className":"right-tab right-ask"},"问答"),a.a.createElement(l.a,{"className":"topic-title"},e.title)),a.a.createElement(c.a,{"className":"right-info"},a.a.createElement(l.a,{"className":"loginname"},e.author.loginname),a.a.createElement(l.a,{"className":"count"},e.reply_count," / ",e.visit_count),a.a.createElement(l.a,{"className":"create-at"},e.create_at?Object(P.a)(e.create_at):null))))}}]),TopicItem}();(L=r.__decorate([Object(u.b)(function(e){return{"list":e.topicList.list}},function(e){return{}})],L)).defaultProps={"item":[]};var M=L,C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var N=function(e){function TopicList(){return function topicList_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TopicList),function topicList_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TopicList.__proto__||Object.getPrototypeOf(TopicList)).apply(this,arguments))}return function topicList_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TopicList,o["a"].Component),I(TopicList,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props,t=e.page,n=e.limit;(0,e.getTopicList)({"page":t,"limit":n,"tab":e.currentMenu.key})}},{"key":"handleToLower","value":function handleToLower(){var e=this.props,t=e.page,n=e.limit;(0,e.getNextList)({"page":t+1,"limit":n,"tab":e.currentMenu.key})}},{"key":"render","value":function render(){var e=this.props.list;return a.a.createElement(E.a,{"className":"topicList-wrapper","onScrollToLower":this.handleToLower.bind(this),"scrollY":!0,"style":"height:100vh;"},e.map(function(e){return a.a.createElement(M,{"item":e,"taroKey":e.id,"key":e.id})}))}}]),TopicList}(),D=N=r.__decorate([Object(u.b)(function(e){return C({},e.topicList,{"currentMenu":e.menu.currentMenu})},function(e){return{"getTopicList":function getTopicList(t){e(d(t))},"getNextList":function getNextList(t){e(function getNextList(e){return t=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(t){var n;return regeneratorRuntime.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.a.getTopicList(e);case 3:(n=r.sent).data.data.length>0?t(v(n.data.data,e.page+1)):(Object(f.c)({"title":"没有更多数据了"}),console.log("到底了")),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}},_callee2,void 0,[[0,7]])})),function(e){return t.apply(this,arguments)};var t}(t))}}})],N),R=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var S=function(e){function Index(){!function index_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function index_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"CNode社区"},e}return function index_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),R(Index,[{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return a.a.createElement(c.a,{"className":"index"},a.a.createElement(O,null),a.a.createElement(D,null))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Index}();S=r.__decorate([Object(u.b)(function(e){return{"counter":e.counter}},function(e){return{"add":function add(){e(s())},"dec":function dec(){e({"type":"MINUS"})},"asyncAdd":function asyncAdd(){e(function counter_asyncAdd(){return function(e){setTimeout(function(){e(s())},2e3)}}())}}})],S);t.default=S},"41":function(e,t,n){"use strict";var r=n(139),o=n(146);n(1);var i=function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var i=t[r](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function _callee(e,t,n){return regeneratorRuntime.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(i,a){Object(r.b)(),Object(o.a)({"url":e,"method":t,"data":n,"header":{"content-type":"application/json"}}).then(function(e){Object(r.a)(),i(e)}).catch(function(e){a(e)})}));case 1:case"end":return i.stop()}},_callee,this)}));return function request(t,n,r){return e.apply(this,arguments)}}(),a={"topics":"/topics","topic":"/topic","userInfo":"/user","accessToken":"/accesstoken","msgs":"/messages"};Object.keys(a).forEach(function(e){a[e]="https://cnodejs.org/api/v1"+a[e]});var c=a,u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(){function fetchData(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,fetchData)}return u(fetchData,null,[{"key":"getTopicList","value":function getTopicList(e){return i(c.topics,"GET",e)}},{"key":"getTopicDetail","value":function getTopicDetail(e,t){var n=t||"";return i(c.topic+"/"+e,"GET",{"accesstoken":n})}},{"key":"userLogin","value":function userLogin(e){return i(c.accessToken,"POST",{"accesstoken":e})}},{"key":"getUserInfo","value":function getUserInfo(e){return i(c.userInfo+"/"+e,"GET")}},{"key":"fetchMessages","value":function fetchMessages(e){return i(c.msgs,"GET",{"accesstoken":e})}}]),fetchData}();t.a=s},"49":function(e,t,n){"use strict";function formatDate(e){if(e){var t=(e=e.replace("T"," ")).indexOf(".");return e=e.substr(0,t)}}n.d(t,"a",function(){return formatDate})},"90":function(e,t,n){},"92":function(e,t,n){}}]);