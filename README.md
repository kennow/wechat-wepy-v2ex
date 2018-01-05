# wechat-wepy-v2ex 📱

V2EX 的克隆项目，基于 wepy 开发的小程序。

## 说明

如果您对此项目感兴趣，欢迎 Star 支持一下，谢谢！😃

如有问题请直接在 Issues 中提出，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

相关项目：[react-native-v2ex](https://github.com/Zoux/react-native-v2ex)

接口地址：[v2ex-api](https://github.com/djyde/V2EX-API)

## 核心模块

* [wepy](https://github.com/Tencent/wepy) - 腾讯官方项目，小程序组件化开发框架

## 项目启动

```
git clone https://github.com/Zoux/wechat-wepy-v2ex

cd wechat-wepy-v2ex

npm install wepy-cli -g

npm install

wepy build

在小程序开发者工具中启动
```

## 项目功能

- [x] 首页话题
- [x] 话题详情
- [x] 用户详情

## 项目截图

<img src="https://github.com/Zoux/react-native-v2ex/blob/master/screenshots/home.png" width="375" height="auto"/> <img src="https://github.com/Zoux/react-native-v2ex/blob/master/screenshots/topic.png" width="375" height="auto"/>

## 项目架构

```
.
├── screenshots                     项目截图
├── src
│   ├── assets                      静态资源
│   ├── components                  组件
│   ├── pages                       页面
│   ├── tabs                        tab
│   ├── utils                       公共方法
│   ├── app.wpy                     项目配置
├── wepy.config.js                  wepy 打包配置
.
```

## License

MIT
