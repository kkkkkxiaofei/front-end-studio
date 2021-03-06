###开篇

`
从'严格'意义上说，javascript并不是一门真正的面向对象语言。这种说法原因一般都是觉得javascript作为一门弱类型语言与类似java或c#之类的强型语言的继承方式有很大的区别，因而默认它就是非主流的面向对象方式，甚至竟有很多书将其描述为'非完全面向对象'语言。其实个人觉得，什么方式并不重要，重要的是否具有面向对象的思想，说javascript不是面向对象语言的，往往都可能没有深入研究过javascript的继承方式，故特撰此文以供交流。
`

###为何需要利用javascript实现继承

早期pc机器的性能确实不敢恭维，所有的压力全在服务器端，客户端浏览器纯属摆设。再加上那时流行的table布局以及电话线的上网方式导致浏览一个网页十分的卡；而今互联网时代飞速发展，个人电脑硬件得到了极大提升，客户端浏览器的性能也十分的酸爽，web开发的模式也在悄悄改变：服务端不再像以前那样“辛苦”，取而代之的是尽可能的让浏览器承担更多的任务，如此一来，压力分摊到每个客户端上，企业不但节省成本，随之也让web前端开发变的更加有趣－－越来越多的前端框架层出不穷，甚至出现了前端的MVC模型。在这种背景下，javascript的角色已经绝对不是只做一些简单的验证，发送一些请求或者操作一些DOM，更多的需要担任类似于路由层和业务层的角色。相反，javascript需要做大量的逻辑性任务，这里面就包括前台数据的抽离（即model），而只有运用面向对象的思维才能很好的对抽离数据进行处理，因此继承就在这里显得举足轻重。

###从一个简单的需求开始

现从前台抽离一个model名为Person，其有基本属性name和age，默认每个人都会说话，因此将说话的功能say放在了原型对象上，以供每个实例享用。现在对于Man来说，它需要继承Person的基本属性，并且在此基础上添加自己特有的属性。

```
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man() {
    //my own properties
}
```

###下面介绍几种主流的继承方式。


### 1.原型链继承
```
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man() {
}
Man.prototype = new Person('pursue');
var man1 = new Man();
man1.say(); //hello, my name is pursue
var man2 = new Man();
console.log(man1.say === man2.say);//true
console.log(man1.name === man2.name);//true

```

这种继承方式很直接，为了获取`Person`的所有属性方法(实例上的和原型上的)，直接将父类的实例`new Person('pursue')`赋给了子类的原型，其实子类的实例`man1,man2`本身是一个完全空的对象，所有的属性和方法都得去原型链上去找，因而找到的属性方法都是同一个。
所以直接利用原型链继承是不现实的。

### 2.利用构造函数继承

```
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}
//Man.prototype = new Person('pursue');
var man1 = new Man('joe');
var man2 = new Man('david');
console.log(man1.name === man2.name);//false
man1.say(); //say is not a function
```

这里子类的在构造函数里利用了apply去调用父类的构造函数，从而达到继承父类属性的效果，比直接利用原型链要好的多，至少每个实例都有自己那一份资源，但是这种办法只能继承父类的实例属性，因而找不到say方法，为了继承父类所有的属性和方法，则就要修改原型链，从而引入了组合继承方式。


### 3.组合继承

```
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}
Man.prototype = new Person();
var man1 = new Man('joe');
var man2 = new Man('david');
console.log(man1.name === man2.name);//false
console.log(man1.say === man2.say);//true
man1.say(); //hello, my name is joe
```

需要注意的是`man1和man2`的实例属性其实是覆盖了原型属性，但是并没要覆盖掉原型上的`say`方法（因为它们没有），所以这里`man1.say === man2.say`依然返回true，因而需要十分小心没有覆盖掉的原型属性，因为它是所有实例共有的。

### 4.寄生组合继承

说实话我真不知道下面的这种形式叫这名字，但是它确实是最流行，最经典的javascript的继承方式。
其实，只需要明白原型对象的结构即可：

```
function Person (name, age) {
            this.name = name;
            this.age = age;
        }
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}
Man.prototype = Object.create(Person.prototype);//a.
Man.prototype.constructor = Man;//b.
var man1 = new Man('pursue');
var man2 = new Man('joe');
console.log(man1.say == man2.say);
console.log(man1.name == man2.name);
```

其实寄生组合继承和上面的组合继承区别仅在于构造子类原型对象的方式上（`a.和b.`），这里用到了`Object.creat(obj)`方法，该方法会对传入的obj对象进行浅拷贝，类似于：
```
function create(obj){
    function T(){};
    T.prototype = obj;
    return new T();
}
```
因此，`a.`会将子类的原型对象与父类的原型对象进行很好的连接，而并不像一般的组合继承那样直接对子类的原型进行复制（如`Man.prototype = new Person();`）,这样只是很暴力的在对属性进行覆盖。而寄生组合继承方式则对实例属性和原型属性分别进行了继承，在实现上更加合理。

`注意:`代码b.并不会改变instanceof的结果，但是对于需要用到construcor的场景，这么做更加严谨。



`注：本文与Github同步`[Blog请戳](#https://kkkkkxiaofei.github.io/jekyll/update/2015/06/04/inherit.html)