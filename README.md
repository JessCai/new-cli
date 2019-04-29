# ffitm-dynamic-threshold-new

## Project setup
```
npm install
```

### 开发环境
```
npm run serve
```

### 生产环境打包

```
npm run dll //进行dll分离
npm run build moduleName //分模块打包 多模块 不带模块名则全量打包

```
### 生产包质量分析
```
npm run analyz
```

### 生成项目文档
```
npm run doc
```

### 输出脚手架配置文件
```
npm run inspect
```

# 项目结构
|-- ffitm-dynamic-threshold-new
    |-- mddir.js                  生成架构图（此图）
    |-- mock                      自动化模拟接口数据
    |   |-- mock.js
    |-- public                    模板文件
    |   |-- *.html
    |-- src
    |   |-- api                   
    |   |   |-- api.js            统一处理后端数据接口
    |   |   |-- errorMessage.js   错误信息
    |   |   |-- http.js           通用接口
    |   |-- assets                静态文件
    |   |   |-- styles
    |   |       |-- common.scss   通用scss变量与方法
    |   |       |-- reset.scss    样式重写
    |   |-- components            底层组件
    |   |   |-- *.vue
    |   |   |-- ...
    |   |-- main                  主模块
    |   |   |-- App.vue           入口vue
    |   |   |-- **.entry.js       入口js   
    |   |   |-- directive         自定义指令
    |   |       |-- *.js
    |   |   |-- http              模块接口
    |   |   |   |-- http.js
    |   |   |-- router            路由
    |   |   |   |-- index.js
    |   |   |-- views             视图层
    |   |       |-- *.vue
    |   |-- mixins                底层方法
    |   |   |-- emmiter.js        脱离vuex的组件通讯方法
    |   |   |-- input.js          基础input底层方法
    |   |   |-- table.js          基础table底层方法
    |   |-- utils
    |       |-- autoRouter.js     自动生成路由工具
    |       |-- findComponents.js 根据制定模块找到其父与子 兄弟 依赖模块工具
    |       |-- index.js          处理数据以及其他工具集合
    |-- store                     vuex状态管理层
    |   |-- index.js              入口文件
    |   |-- type.js               镜子工具，排除mutation层重复方法
    |   |-- actions               方法层
    |   |   |-- common.js         通用模块
    |   |-- getter                getter层
    |   |   |-- common.js         通用模块
    |   |-- modules               模块层
    |   |   |-- index.js            
    |   |-- mutations             mutation层  
    |       |-- common.js