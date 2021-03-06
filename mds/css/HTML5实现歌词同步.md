####开篇


`HTML5的最强大之处莫过于对媒体文件的处理，如利用一个简单的vedio标签就可以实现视频播放。类似地,在HTML5中也有对应的处理音频文件的标签，那就是audio标签。`


[在线Demo](https://kkkkkxiaofei.github.io/lyric-demo)

####audio标签

实现一个audio标签非常简单，对应的html代码如下：

```
<audio id="player" 
    src="music/我在人民广场吃炸鸡.mp3" 
    autoplay controls>
</audio>
```

上述代码不需要一行js脚本就能实现音乐播放。其中有三个常用的属性，分别为：音频源文件，是否自动播放以及是否显示播放器控件。由于没有任何ui的展现，audio标签在chrome的默认风格如下图:
 
> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/audio.png)

可以看出，一个基本的播放器还包括了显示当前时间，播放，暂停，快进快退等功能。这些功能都决定了如何很好的实现歌词同步（后续介绍）。

既然这么容易就就能播放音乐，那作为一项前端的技术，audio标签在各个浏览器中的兼容性又是怎样的呢？
`Browser Compatibility`

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/compacibility.png)

可以看出，各大浏览器对audio标签基本功能都支持，只是在细微的特性上表现不一，但是这些基本的功能已经足已做出一个好的播放器。

####歌词
一般标准的lyric文件是由`[时间]内容`的tag标签组成，如下图：

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/standard.png)

为了更精确的展现每个字在每句歌词中的时间，又出现了特殊的歌词形式，如下：

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/special.png)

这种歌词的格式的最好例子就是QRC歌词文件（如QQ音乐播放器）：

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/qrc.png)

为了描述简单，本文仅以最简单的lyric格式作为说明，讲解如何分离歌词进行歌词同步。如下，为一首歌曲的歌词文件:

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/song.png)

现对该歌词文件作一下处理：

* `1.以行为单位拆分每一句歌词`
* `2.将没句歌词的时间tag和内容分离`
* `3.将时间转换为分钟`

转换过程较为简单，只需一个简单的正则匹配，过程如下：

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/convert.png)

分离出来的[时间,内容]可以与audio当前的播放时间进行对比，若需要显示对应的歌词则将该行高亮，同时每次更新对应DOM节点的top则可在视觉上达到滚动效果。

####制作歌词ui。

* 1.定义一个现实歌词的区域，添加audio控件

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/empty_canvas.png)

* 2.添加背景图片，制作标题边框

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/backgroud.png)

* 3.添加歌词

> ![](https:kkkkkxiaofei.github.io/../img/Html5实现歌词滚动同步/add_lyric.png)

到此，歌词同步以及ui绘制全部完毕。

[在线Demo](https://kkkkkxiaofei.github.io/lyric-demo)

[Blog同步](https://kkkkkxiaofei.github.io/jekyll/update/2015/06/11/lyric.html)