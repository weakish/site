---
title: 十个好习惯，让你的代码更容易阅读
date: 2019-07-17
tags:
coverImage: "./images/dog-2983021_640.jpg"
summary: 好的代码一定是机器和人类读起来都会感到愉悦的。
---

[Jason McCreary] 原作，授权 [New Frontend](https://nextfe.com/) 翻译。

[Jason McCreary]: https://dev.to/gonedark/10-practices-for-readable-code-143a

我已经写了二十年代码了，这期间我在十七个团队用不同语言写了几百个项目，其中不仅有简单的博客站点，还有支撑每秒 3000 次请求的 [API 服务](https://jason.pureconcepts.net/2013/03/why-i-leave-a-job/)，以及很多[热门应用](https://jason.pureconcepts.net/2014/03/successful-app-fail/)。

通过这些经历，加上一些我读过的书，我总结出了写代码时最需要关注的东西：**可读性**。

表面上来看，可读性是个很主观的东西，它跟语言、代码库、团队都有关系。但是如果你深入研究的话，就会发现其实有很多无论什么代码都能用到的提升可读性的方法。

很多程序员写代码时只会在意「机器」的那一面：只要代码能运行，其他的就不管了。这最终造成了「人」的那一面被忽视掉了。

在过去几个月里，我把有关「人」的那一面总结成了下面十个能让你专注于编写简单、可读代码的好习惯。我在 [BaseCode](https://basecodefieldguide.com/) 里面对每一条都进行了详细解释，并把它们应用到了真实世界的代码片段上。

然而很多人还是会对它们嗤之以鼻，觉得这些都太基本了，不值得关注。但是我可以保证，每一个我接触到的低质量的代码都没能达到这些要求，而每一个你能读到的高质量的代码，即便做不到大部分，也都至少能做到其中一点。

---

## 格式化

我们平时花了太多精力来格式化代码：用 tab 还是用空格、换行大括号还是大括号换行等等。有一天你会突然发现，写代码的时候其实**不应关注**如何去格式化。最好的做法还是为整个代码库选择一个标准，然后让一切自动化，这样你就能把精力重新放回写代码本身了。

## 无用代码

所有被注释掉的代码、没有用到的变量、程序不会经过的代码都是废物。它们时时刻刻在向读代码的人传递着「我的主人不在乎我」这样的信息。代码库里一旦有了这样的代码，恶性循环就开始了。渐渐地，这些无用代码会让你的代码库变成一个烂摊子，这跟[破窗效应](https://zh.wikipedia.org/wiki/破窗效应)差不多。所以你必须时常检查并清理无用代码。即使不把它当作主要任务，至少你也应该做一名[童子军](https://jason.pureconcepts.net/2015/01/are-you-a-boy-scout/)（译者注：童子军有一条军规是让营地比你来时更干净）。

## 多重嵌套代码

几乎所有的代码都是基于逻辑产生的。我们通过代码来产生决策、构造重复、执行计算，这往往会导致代码中存在很多层级。尽管计算机可以很轻易地理清这一切，然而对于人类来说就困难多了。过多的嵌套会让代码看起来更复杂且难以阅读。要解决这个问题，可以通过使用卫语句、提前返回、函数式编程的方法把代码铺平开来。

## 对象的使用

尽管现在是一个面向对象编程的时代，但我们还是会[沉迷于原始的方法](https://blog.codinghorror.com/code-smells/)。我们会写很长的参数列表，把所有数据堆在一起，或是自己定义数组和字典的结构。其实这些东西都可以被重构成多个对象。这么做不仅让数据更加结构化，还可以整理出会反复用到的操纵原始数据的逻辑。

## 大型代码块

尽管并没有一个明确的数字，但代码块还是应该小于某个长度的。如果你知道你的代码里有较大的代码块，你可以把它找出来，然后重新组织它或者是重构它。这个简单的过程能让你认识到代码块的上下文以及抽象等级，这样你就可以正确地认清代码块的作用并将其重构为多个更简单、更可读的代码块。

## 命名

命名确实很难，不过这仅仅是因为我们把它弄复杂了。其实有一个小技巧可以运用在包括命名在内的很多编程难题上：推迟。遇到命名难题时，不要卡在上面，而是要继续前进。如果有需要的话，可以先用一句话来命名一个变量。我可以保证在你完成一个功能或是整个项目的时候，你自然会想到一个合适的名字。

## 注释的清理

这个小小的习惯完全改变了我的编程生涯，让我真正开始关注代码的可读性。尽管我[解释了一遍又一遍](https://jason.pureconcepts.net/2015/03/removing-comments/)，还是会有人因为这个而讨厌我。他们总能拿出一个例子来证明注释是绝对有用的。确实，假如哈勃望远镜的遥测系统就是需要通过返回 `687` 这个值来跟一个古老的适配器进行交流，那么代码旁边的注释还是有用的。但是对于大多数其他情况来说，你应该试着重写代码，争取让读代码的人不靠注释就能理解它。

## 合理的返回值

我们总是爱返回各种奇奇怪怪的值（像 `-1`、`687`、`null`），尤其是遇到边界情况的时候。反过来，又写了很多代码去处理这些值。实际上，发明 `null` 的人把它形容为[十亿美元的损失](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare)。你应该尽可能返回有意义的值，最好是在即使方法内部出错的情况下还能让剩余的代码继续正常执行。如果确实有例外情况，一定有比直接返回 `null` 更好的交流方式。

## 三的法则

假设存在一串数字，我告诉你第一个是 `2`，然后问你后面是几，你可能会说 `3` 跟 `4`，但也有可能是 `1` 或 `2.1`（其实真要问你的话，你可能毫无头绪）。这时我额外给你一个数字，问你 `2, 4` 后面是几，你可能会说 `6` 或 `8` 或 `16`（尽管答案更加确定，不过还是有点茫然）。这时我再给你一个数字，问你 `2, 4, 16` 后面是几，这时作为程序员的你肯定能看出数字间平方的关系，然后确定出下一个数字是 `256`。这就是「三的法则」。

上面这个不包含代码的例子其实告诉我们不要过早地决定一种抽象或设计方式。三的法则就是要我们克服想去减少重复的需求，把它推迟到有足够数据去支撑决策的时候。用 [Sandi Metz 的话来说](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction)，就是「错误的抽象付出的代价要比重复更多」。

## 对称性

用好了这一条，你的代码就能增添几分诗一样的可读性。Kent Beck 的[《Implementation Patterns》](https://www.amazon.com/Implementation-Patterns-Kent-Beck/dp/0321413091)中这样写道：

> 代码里面的对称性就是指同一个主意在不同地方都以同一种方式表达。

不过说起来容易做起来难，对称性其实蕴含了创造性写作的色彩。它构成了命名、结构、对象、模式等方面的基础，而且在不同语言、代码库、团队之间也会有所不同。照这么说，你大概需要用一辈子的生命去追求它。所以，当你开始在代码里运用对称性之后，[一个更干净的形态就会产生](https://twitter.com/gonedark/status/1041716025862119425)，并且你的代码会更快成型。

---

以上是对 BaseCode 里面提到的习惯的概述。我建议你去浏览这篇文章里链接到的资源，观看实践这些习惯的[录像](https://www.youtube.com/watch?v=s9LwS6RFax0&index=2&t=14s&list=PLmwAMIdrAmK7cjLLYrKppUhaR2ywTuKhm)，或者去 [BaseCode](https://basecodefieldguide.com/) 里面详细阅读如何在真实世界的代码片段中运用这些习惯。

Image by Karen Arnold from Pixabay