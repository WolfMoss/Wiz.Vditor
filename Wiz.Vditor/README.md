## Vditor 的离线使用

> Vditor 是个很好的开源编辑器。但其实写这个的目的还是因为官方文档太晦涩难懂了，原生 html 的调用测试没有很好的例子，对于新手不怎么友好，我研究了一整天，才勉强搞出来。特此记录，供后人学习和快速使用。

### 在线测试

开启了 Gitee 的 Pages 服务，你也可以在线测试使用哦。

地址：[http://xueshanlinghu.gitee.io/vditor-offline/](http://xueshanlinghu.gitee.io/vditor-offline/)

### 直接调用  CDN  源码

将 `index.html` 中的`<!-- 引用 CDN -->`的两行的注释去掉，再将`<!-- 引用本地 js 和 css -->`这两行内容注释起来即可。建议使用 `live-server` 来本地测试，后续会讲。

### 完全离线使用 Vditor，自己编译

```bash
# 下载最新的Vditor源码
git clone https://github.com/Vanessa219/vditor.git vditor
# 如果通过 Github 下载过慢你可以考虑用 Gitee 的高速源下载（每日从 Github 源库同步的），二选一即可
git clone https://gitee.com/mirrors/Vditor.git vditor
# 进入目录
cd vditor
# 依赖包安装，需要网络支持，可以爬墙保证速度
npm install
# 构建文件
npm run build
# 完成后会在目录下生成一个 dist 文件夹，将该文件夹复制到本项目目录中（本项目中已包含，可直接使用，目前项目中的编译版本为 v3.7.4）
# 后续可以进行本地测试
```

### 使用 live-server 本地测试

```bash
# 全局安装
npm install -g live-server
# 然后进入项目根目录，运行下述
live-server
# 这样就会启动一个本地服务器，默认端口为 8080，就可以进行测试了，运行期间，对项目文件夹的文件的任何改动会即刻加载

# 还有另一个办法，放好后，双击打开 index.html 主页文件应该也可以测试。
```
