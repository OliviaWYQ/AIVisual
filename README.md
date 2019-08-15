<p align="center">
  <a href="https://alibaba.github.io/ice">
    <img alt="ICE" src="https://gw.alicdn.com/tfs/TB1FEW2nfDH8KJjy1XcXXcpdXXa-487-132.svg" width="200">
  </a>
</p>
<p align="center">赋能企业中后台建设</p>
<p align="center">
  <a href="https://github.com/alibaba/ice/blob/master/LICENSE"><img src="https://img.shields.io/badge/lisense-MIT-brightgreen.svg"></a>
</p>

## 简介

Moonstone AI 可视化分析平台前端应用，基于阿里飞冰开发。

## 特性

- 多场景应用: 高效便捷满足多种需求
- 算法模块化: 定制个性化数据分析流程
- API: 调用算法的支持和保障

## 技术点

- icedesign
- react
- redux
- redux-thunk
- react-router-dom v4
- axios
- webpack v4
- mockjs
- etc...

## 页面

> 按照 Dashboard 综合页和 Block 分类进行展示

```
- 介绍页
- OCR识别页
- 人脸识别页
  - 导航栏
  - 上传组件
  - 识别结果
- 图片识别页
  - 导航栏
  - 上传组件
  - 识别结果
- 声音识别页
  - 导航栏
  - 上传组件
  - 识别结果
- 客流预测页
  - 项目介绍
  - 流程图
- 声音识别页
  - 项目介绍
  - 流程图
- 电信反欺诈页
  - 项目介绍
  - 流程图
- 历史记录页
  - 项目历史
  - 数据历史
- 个人中心页
  - 基本设置
  - 修改密码
```

## 目录结构

```
AIVisual
├── coverage              // 测试代码覆盖率
├── Dockerfile            // Dockerfile
├── Jenkinsfile           // Jenkinsfile 
├── karma.conf.coffee     // karma 配置文件
├── karma.conf.js
├── karma.conf.ts
├── lib               
│   └── jasmine_examples  // jasmine 测试示例
├── package.json          // package.json
├── public
│   ├── favicon.png
│   └── index.html        // 设置 title
├── README.md
├── spec                  // jasmine 测试文件
├── src
│   ├── api               // 用户登录
│   │   ├── index.js
│   │   └── user.js
│   ├── components        // 系统页
│   │   ├── Authorized
│   │   ├── Exception
│   │   ├── LocaleProvider
│   │   ├── NotFound
│   │   ├── PageLoading
│   │   └── SelectLang
│   ├── configureStore.js  // Redux Store
│   ├── index.jsx          // 首页
│   ├── layouts           
│   │   ├── BasicLayout    // 控制台页
│   │   └── UserLayout     // 用户登录页
│   ├── locales            // 语言设置
│   │   ├── en-US
│   │   └── zh-CN
│   ├── menuConfig.js      // 控制台侧栏目录
│   ├── pages
│   │   ├── Dashboard      // 个人中心->历史记录
│   │   │   ├── components
│   │   │   │   ├── EditableTable         // 项目管理
│   │   │   │   └── ModelCards            // 数据管理
│   │   │   └── index.jsx
│   │   ├── Exception      // 错误页
│   │   ├── Introduction   // 平台介绍->新特性
│   │   │   ├── components
│   │   │   │   └── AbilityIntroduction   // 功能展示页
│   │   │   └── index.js
│   │   ├── ModelFace      // 应用场景->人脸识别
│   │   │   ├── components
│   │   │   │   ├── BasicTab              // 导航栏
│   │   │   │   ├── CameraAPI             // 摄像头
│   │   │   │   └── ImgBlock              // 识别结果
│   │   │   └── index.js
│   │   ├── ModelImg       // 应用场景->图片识别
│   │   │   ├── components
│   │   │   │   ├── BasicTab              // 导航栏
│   │   │   │   ├── CameraAPI             // 摄像头
│   │   │   │   └── ImgBlock              // 识别结果
│   │   │   └── index.js
│   │   ├── ModelOcr       // 应用场景->OCR
│   │   │   ├── api
│   │   │   │   └── post_carplate.js      // 车牌识别上传组件
│   │   │   ├── components
│   │   │   │   ├── BasicTab              // 导航栏
│   │   │   │   ├── CameraAPI             // 摄像头
│   │   │   │   └── ImgBlock              // 识别结果
│   │   │   └── index.js
│   │   ├── ModelSound     // 应用场景->声音识别
│   │   │   ├── components
│   │   │   │   ├── BasicTab              // 导航栏与识别结果
│   │   │   │   └── MicAPI                // 录音模块
│   │   │   └── index.js
│   │   ├── ProjectFraud   // 应用场景->电信反欺诈
│   │   │   ├── components
│   │   │   │   └── SimpleFluencyForm     // 流程图
│   │   │   └── index.js
│   │   ├── ProjectKl      // 应用场景->客流预测
│   │   │   ├── components
│   │   │   │   ├── BizchartsHeatmapImage // 识别结果->热力图
│   │   │   │   ├── LineBarChart          // 识别结果->折线图
│   │   │   │   └── SimpleFluencyForm     // 流程图
│   │   │   └── index.js
│   │   ├── Setting        // 个人中心->基本设置
│   │   │   ├── components
│   │   │   │   ├── BaseSetting           // 基本设置
│   │   │   │   └── ChangePasswordForm    // 修改密码
│   │   │   └── index.jsx
│   │   ├── UserLogin      // 登陆页
│   │   └── UserRegister   // 注册页
│   ├── reducers.js        // Redux Reducer
│   ├── routerConfig.js    // 路由配置
│   ├── router.jsx         // React Router
│   ├── store
│   │   ├── userLogout     // Redux 用户登陆
│   │   └── userProfile    // Redux 用户数据
│   └── utils
├── static                 // HTTP Request 接口文档
│   ├── face_tab.json      // 人脸识别测试数据
│   ├── img_tab.json       // 图片识别测试数据
│   └── ocr_tab.json       // OCR 测试数据
└── webpack.config.js      // webpack

```

## 使用

1. 项目发布在: http://192.168.108.3:31714

2. 下载:

```bash
$ git clone http://192.168.6.126/moonstone/moonstone-fe.git
```

2. 使用:

```bash
$ npm start      // 启动预览服务器
$ npm run build  // 构建 dist
```

## 相关文档

- [ICE Design Pro 使用文档](https://github.com/alibaba/ice/wiki#ice-design-pro-%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3)
