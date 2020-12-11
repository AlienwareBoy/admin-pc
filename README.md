
# 注意事项

| 项目是以vue-cli为基础的脚手架
如果项目更新，将缓存里的修改提交之后运行以下代码

```
vue -V // 检测版本

vue upgrade
```

如果还不能运行尝试运行如下代码
```
$ npm uninstall -g babel-cli unbuild babel-cli@6.0.15
$ npm uninstall babel-preset-es2015 babel-preset-stage-0 --save

$ npm cache clean
$ npm i -g babel-cli; npm i babel-preset-es2015 

```