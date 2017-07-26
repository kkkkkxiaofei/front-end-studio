### 1.写在前面

>我们经常使用document.getElementById去获取DOM中的元素，也会使用childNodes来获取子节点。那么Element和Node的区别是什么？而什么又是HTMLCollection,HTMLElement,和NodeList呢？

#### 一个简单的页面：

```
<html>
  <body>
    <h1>China</h1>
    <!-- My comment ...  -->
    <p>China is a popular country with...</p>
    <div>
      <button>See details</button>
    </div>
  </body>
</html>

```

`body`里的直系子元素一共有三个：`h`,`p`,`div`。我们可以用`document.body.childNodes`查看, 结果如下:

>![](https://kkkkkxiaofei.github.io/img/element/nodelist.png)

问题来了：

- 1.这么会有这么多的#text？
- 2.注释算节点？

在回答上面两个问题之前，就有必要理解下什么是`Node`了。

### 2.Node vs Elemet

以下摘自MDN:

>A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.

>The following interfaces all inherit from Node its methods and properties: Document, Element, CharacterData (which Text, Comment, and CDATASection inherit), ProcessingInstruction, DocumentFragment, DocumentType, Notation, Entity, EntityReference.

简单的说就是`Node`是一个基类，DOM中的`Element`，`Text`和`Comment`都继承于它。
换句话说，`Element`，`Text`和`Comment`是三种特殊的`Node`，它们分别叫做`ELEMENT_NODE`,
`TEXT_NODE`和`COMMENT_NODE`。

***所以我们平时使用的html上的元素，即Element是类型为`ELEMENT_NODE`的`Node`。***

利用`nodeType`可以查看所有类型，如下图：

>![](https://kkkkkxiaofei.github.io/img/element/nodetype.png)

到这里，我想我们就可以解释上面两个问题了。

实际上`Node`表示的是DOM树的结构，在html中，节点与节点之间是可以插入文本的，这个插入的空隙就是`TEXT_NODE`，即：

```
<body>
    we can put text here 1...
    <h1>China</h1>
    we can put text here 2...
    <!-- My comment ...  -->
    we can put text here 3...
    <p>China is a popular country with...</p>
    we can put text here 4...
    <div>
      <button>See details</button>
    </div>
    we can put text here 5 ...
</body>
```


这下就顺理成章了，body的直系元素（3）＋ COMMENT_NODE(1) + TEXT_NODE(5) = 9

### 3.NodeList vs HTMLCollection

我们用`childNodes`找到了`NodeList`，但我们操作DOM时往往不想操作`Node`(我只想操作元素Element)，那么如何获取ElementList呢？

其实我们经常使用的`getElementsByXXX`返回的就是一个ElementList，只不过它的真实名字是`ElementCollection`。

就像`NodeList`是`Node`的集合一样，`ElementCollection`也是`Element`的集合。但需要特别注意的是：

***NodeList和ElementCollcetion都不是真正的数组***

如果`document.getElementsByTagName('a') instanceof Array`，那么必然是`false`。

### 4.写在最后

DOM(Document Object Model)简称文档对象模型，它是html和xml是文档编程的接口，它将文档解析为树结构，这个树的根部就是`document`,而`document`的第一个子节点(childeNodes[0])就是html，这才有了后面的一系列html元素。

最后附一张DOM图，此刻再看这张图是不是觉得回味无穷咧。

>![](https://kkkkkxiaofei.github.io/img/element/dom.png)

参考资料：

1.[Node vs Element](.http://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object
)

2.[DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

3.[Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

4.[NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)