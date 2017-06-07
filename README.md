# Coderpad

![](http://om8hmotom.bkt.clouddn.com/2017-06-07-project3.gif)
- [在线地址](http://coderpad.leanapp.cn/)    
- [GITHUB](https://github.com/kylewh/Coderpad)

大家伙儿们，又见面了😉。 自上次Byemess Todo之后，觉得自身不足还是挺多的，期间又萌生了一些将它重构加上更多新特性的想法，之后技术磨炼一阵再来好好改造它。对于Learn by doing这种事情，一次就会上瘾啊有木有❤️，于是乎本着继续精进练习React技术栈，以及实践更多相关技术的初衷，besides that，自己还想再准备一个小项目来为找工作打底气，于是乎就有了CoderPad。      

## 💡 WHY IS THIS
在最开始的时候，是想做一个催稿app，又是一个集成的idea:提供分类书单，可以记录阅读情况，然后根据这个情况设定或者后台计算智能推荐：何时去写一篇相关的博客(技术博客)，当然写作也是在这个app里完成，然后自动部署至github page。 名字我都想好了，就叫催乎...（知乎er们懂的)，奈何这是个大工程啊... 我就造出了这么个只有**编辑，阅读的阉割版**。 另外关于写完markdown直接部署生成静态博客的app我推荐好基友的[Page.qy => 🤘 无代码建站，基于Node.js，React和Electron](https://zhuanlan.zhihu.com/p/26917820?utm_medium=social&utm_source=ZHShareTargetIDMore)，很用心的app，向他学习之，他马上又会写出一个UI逆天美的音乐播放器了，你们可以关注他。

## 🚀 WHAT IT IS
1. **Markdown：** 支持本地缓存，保存/删除/查看/下载，追求极简。
![](http://om8hmotom.bkt.clouddn.com/2017-06-07-project4.gif)
2. **NewsFeed：** 集成v2ex，HackerNews-Top Stories， Github-Trending
![](http://om8hmotom.bkt.clouddn.com/2017-06-07-project5.gif)
3. ~~**Music**: 暂未施工~~

## 🔗Techniques
- **老朋友React全家桶**： 对于这块，值得一提的是react router v4，相对于v3的巨大改动，extremely make sense. 让route与组件化思想更贴切，有种幻觉：定义子route更加随心所欲了。至于为什么... 请君上手感受。

- **Immutable**: 有一些细微的坑，主要体现在数据类型转化上，immutable会将原生JS数据类型进行包装，如Map，List，在对它们进行提取的时候需要注意是否已经转化为原生JS，否则容易出错。 我的建议就是时刻注意提取的数据是什么类型，结合PropTypes进行参数检测，出错时先console看看，一般很快可以解决。 对于多层对象嵌套的时候，为了保险，手动将被嵌套的对象进行指定类型转化，比如`{ list: [] } => { list:Immutable.List([]) }`，如果要偷懒的话可以直接使用`fromJS`，但是这个方法渗透性强，会将所有内嵌结构进行转化，在本项目的后期重构里就遇到了子数组遍历出来全是immutable object的情况，需要手动再次转化，很是恶心。 这些缺点在redux文档里也有表述，在具体实践后才能有更直观的理解。 参照: [What are the issues with using Immutable.JS?](http://redux.js.org/docs/recipes/UsingImmutableJS.html#issues-with-immutable-js).但不可否认Immutable.js非常符合react的思想，都在处理大规模数据时彰显优势。     

- **Reselect**：它用来替代我们手写的state selector， 它的主要思想： state1 + state2 => state3， 缓存先决state，它们如果计算结果是相同的，就使用缓存结果不去改变最终state，同样也是immutable思想。 在结合immutable.js的时候，也是坑啊，还是那个老问题，数据类型，state嵌套越深，越麻烦。 所以，现在明白为什么**强调Redux State扁平化**了吧？

- **Redux Saga**: Oh my.. 无比亲切，至于原因： 我写过这么一篇文章:[From Iterator To Async](https://kylewh.github.io/2017/03/24/From-Iterator-To-Async/). Saga致力于解决复杂场景下的异步流程控制，用它来管理action触发，酸爽无比。 毕竟控制异步流程这种成就在JS话题下本身就是爽的不要不要的。 本质是使用generator，对于理解CO库的同学们，掌握saga不在话下。在操作极其频繁的场景下(比如游戏），你会感受到他的威力。 推荐一篇文章： [Async operations using redux-saga](https://medium.freecodecamp.com/async-operations-using-redux-saga-2ba02ae077b3)， 在本项目里我主要用它来控制news数据的拉取，采用axios.

- **Styled Components**: 老朋友，更新了2.0版本，同样配合**styled-props**，效果拔群。 至于一些宏观上的样式设置，的确不如直接写CSS那么直观。 我采用的方法是，特性按组件写，通性和一些涉及多层级样式都放在wrapper里。 也许单独使用styled-components并不能发挥出色，配合传统CSS写法，应该可以相得益彰。

## 🔑Problem and Solution
- **ref**: 对于ref的感觉一直是又爱又恨，毕竟在react之前，dom操作被我们玩的飞起，而react官方的态度一直是不建议使用。 在这次的项目中，markdown editor处的textarea我便采用了Uncontrolled的形式，使用ref保存dom引用。 初衷是为了对频繁的内容变动进行debounce处理，当编辑暂停时才触发一次内容state更新。 随着组件的增加，在一个嵌套达到3层的modal组件里，需要对textarea的value进行重置操作，好了，这下我得从父组件一层层的把这个ref传进去。 那感觉简直不能再糟.... 一刹那感觉官方文档就像和蔼的老司机，句句肺腑之言啊！ 不过在你真的遇到这个坑前，是不会有多深的感受的。 要解决这个恶心的传递，只有采用controlled形式，onChange监听，value直接链接state. 

- **Perf**: 作为性能测量的利器，测试结果让我发现styled-components的消耗是可观的，尤其是更新到v2.0版本后。在其他方面，由于本项目里的newsFeed可能会涉及频繁点击切换路径的情况，为了防止无谓的重复渲染，给所有presentational components都设置为PureComponent， 接着在一些只需要更新一次的组件里手写`shouldComponentUpdate`， 还是强调一点： 必须十分清楚传入的参数，以及其结构，并考虑这个结构是否在生产环境中有变化的可能导致判断失效。 还有个值得注意的问题是react-router-v4里的NavLink检测location渲染当前激活地址的link(activeClassName属性)时，注意组件是否是PureComponent， 如果是，必须在父组件传入location，否则PureComponent的`shouldComponentUpdate`将会判定参数无变化，从而block掉link的动态渲染。参照: [Dealing with Update Blocking](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md)

- **Server Side**: 由于是使用leancloud部署，用node环境，为了解决v2ex api的跨域问题，自己写了一套请求转发，但是问题来了： 单页APP里为保证刷新后不出现cannot get等问题，必须写上一条`app.get('*', (req, res) => {res.sendFile('index.html的路径')} )`， 这就很麻烦了，后来经过请教，用正则过滤了请求转发涉及的路径，就避免了路径全局拦截。但是！ 这样刷新后，又会遇到cannot get的问题了。 因为再次刷新时url已经变化，浏览器会去请求这个地址，而后台并没有提供此路径的响应。 最好的办法是使用nginx部署环境。(express难道就没办法？ 还是我服务端知识短浅啊...要恶补） 另外一个问题： 生产环境和部署环境下由于使用了不同的请求地址，返回的数据的结构存在微小差异，以本项目为例，请求v2ex topic在生产环境下数据是`res.data`，而到了部署环境下由于使用了自己设置的请求地址，返回的数据成了`res.data[0]`，找了很久才发现问题，值得注意。

- **Cancellation**: 在newsfeed里频繁切换页面时还有一个问题： 也许下一个页面呈现时，上一个页面中触发的fetch操作还没执行完毕。举个例子： 我进入了v2ex的页面，此时组件拉取新闻信息，接着我几乎不等待便切换至github，此时对于v2ex的拉取还在进行。这就是一种浪费了。 为了解决它，起初我尝试用saga结合react-router-redux里提供的`LOCATION_CHANGE` action来作为判定取消之前未完成fetch的标志。 测试发现就算我点击的是同一个link，依然会触发`LOCATION_CHANGE`，（真坑啊，完全不符合直觉好么！？）那么有这么一个场景： 当你进入hackerNews等待数据返回，由于时间较久，你不耐烦的**再次点击**了hackerNews的Link，**Boom~~！ `LOCATION_CHANGE` dispatched. 于是乎你的fetch被取消了...**，所以用`LOCATION_CHANGE`作为判定标志在首次拉取这个场景下是不可行的(论corner case重要性..)， 后来想出来的解决办法是在三块新闻组件的`componentDidMount`的顶部dispatch一个`STOP_FETCH` action，然后将判定取消的标志改为:`STOP_FETCH`，算是解决了，可总感觉有点暴力，因为一旦组件变多，将要手动。接下来将继续思考更优雅的解决方案，如果大神们有答案，请告知。


## 🏅Gain
- 最大的收获： 主动找上问题，而不是问题找上你。 不折腾，不踩坑，进步颇微。
- 当container变多时，直接将container component作为单位，单独设立目录，然后放置对应的components/styled-components/reducer/action. 这就是按feature组织目录的方法。 细致的拆分，解耦性更好，以container component为单位进行修改时，大大降低误伤率的同时，隔离无关的信息。
- 大概总结出一个Learn by doing的心路历程： 
	1.  被未尝试的技术吸引，并且有了下一个project的idea
	2.  尝试拆分所需技能，分成组块(裂墙推荐知乎[金旭亮老师](https://www.zhihu.com/people/jin-xu-liang)组块学习论)
	3.  漫长的学习过程： 读文档，找样例，写小demo倒腾API。由于组块积累未完全，所以无法对project全面下手，自然会很烦躁，并且踏出了舒适区，接收更多的信息。
	4.  组块知识积累完毕，project开始施工： 从最简功能需求开始，不断增加新feature: problem -> google -> resolve.
	6.  Project成型，评估，修正，改进，more problem come in.
	7.  项目总结。然后享受一下独立完成project的成就感。同时也会深刻理解自己的不足，为自己的技术精进之路指明了方向。
	8.  以project为单位，循环以上步骤。

- 最后的领悟： 我早几年干什么去了... 捶胸泪目ing。

## ⛳️More Feature?
未来可能会补上的：
- 白噪音组合播放
- 番茄钟
- 音乐部分（哈哈哈偷懒了时间不多了，赶紧找工作。）

作为一名新人，还请大家多多指教。同样无耻的求star，2333。








