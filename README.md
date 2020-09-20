>  项目运行:
  * yarn install / npm install
  * yarn start

>  项目介绍:
  * 1、工程搭建
    * yarn create react-app my-app --typescript
    * 相关文档: https://www.html.cn/create-react-app/docs/adding-typescript/

  * 2、基本概念:
    * 骨架屏（Skeleton Screen）已经不是什么新奇的概念了，Luke Wroblewski 早在 2013 年就首次提出了骨架屏的概念，并将这一概念成功得运用到他当时的产品「Polar app」中，2014 年，「Polar」加入 Google，Luke Wroblewski 本人也成为了Google 的一位产品总监。
    A skeleton screen is essentially a blank version of a page into which information is gradually loaded.
    他是这样定义骨架屏的，他认为骨架屏是一个页面的空白版本，通过这个空白版本传递信息，我们的页面正在渐进式的加载过程中。
    苹果公司已经将骨架屏写入到了 iOS Human Interface Guidelines ,只是在该手册中，其用了一个新的概念「launch images」。在该手册中，其推荐在应用首屏中包含文本或者元素基本的轮廓。
    2015 年，Facebook 也首次在其移动端 App 中使用了骨架屏的设计来预览页面的加载状态.

  * 3、为什么要用骨架屏:
    * 用户大概会在 200ms 内获取到界面的具体关注点，在数据获取或页面加载完成之前，给用户首先展现骨架屏，骨架屏的样式、布局和真实数据渲染的页面保持一致，这样用户在骨架屏中获取到关注点，并能够预知页面什么地方将要展示文字什么地方展示图片，这样也就能够将关注焦点移到感兴趣的位置。当真实数据获取后，用真实数据渲染的页面替换骨架屏，如果整个过程在 1s 以内，用户几乎感知不到数据的加载过程和最终渲染的页面替换骨架屏，而在用户的感知上，出现骨架屏那一刻数据已经获取到了，而后只是数据渐进式的渲染出来。这样用户感知页面加载更快了.

  * 3、手写骨架屏的原理.
    * 根据不同状态渲染不同的html, 首次数据没有加载完成时，使用骨架屏占位; 首次加载完成后，移除骨架屏占位，渲染真实的数据.

  * 4、组件设计图.
    <a href="#">
  <img src="https://github.com/xiangxiong/react-skeleton/blob/8538a916f54fad766aee4e1f6726179c9ec751f1/img/1.jpg">
</a>

  * 5、技术总结:
    <a href="#">
  <img src="https://github.com/xiangxiong/react-skeleton/blob/8538a916f54fad766aee4e1f6726179c9ec751f1/img/2.jpg">
</a>