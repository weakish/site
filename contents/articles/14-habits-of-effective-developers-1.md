---
title: 高效程序员的 14 个习惯（一）
date: 2019-05-20
tags:
coverImage: "./images/tirza-van-dijk-58298-unsplash.jpg"
summary: 能从根本上改变一个人的思维习惯并让其从初级程序员转为中级程序员甚至是高级程序员的东西，是「习惯」。
---

[Paul Isaris] 原作，授权 [New Frontend](https://nextfe.com/) 翻译。

[Paul Isaris]: https://dev.to/pavlosisaris/how-to-transition-from-junior-to-mid-level-developer-part-1-4gig

## 序言

很多人相信从一个高效的初级程序员转变成中级程序员只是时间和经验的问题，然而现实中这两类程序员的划分并不太明确，也比较主观。我写这篇文章绝不是想要和其他人争论「如何定义中级程序员」。

我认为，能从根本上改变一个人的思维习惯并让其从初级程序员转为中级程序员甚至是高级程序员的东西，是「习惯」：

> 习惯就是通过系统性地开始做一件事来使它从陌生变得自然的过程。
>
> 形成编程与工作相关的习惯对专业知识的提升和个人的成长至关重要。

让我们看看有哪些习惯一旦形成后能帮你成为更好的程序员并持续取得进步：

## 1. 保持方法短小

理想情况下，每个方法应包含不超过 20 至 30 行代码（LoC）。这个习惯很重要，因为它不仅会让你致力于编写紧凑的代码，还会让你在需要模块化程序时保持较好的分析能力。编写具有多层嵌套的代码（比如使用大量 if 语句和 for 循环）简直就是噩梦，因为虽然这样做可以让编写过程更加容易，但当你日后回头看你的代码时，你可能再也想不起它是做什么的了。

> 除此之外，结构复杂的方法一般具有较低的可复用性。它们通常只在一个项目中具有单一的用途，并且很难在其他地方使用。

## 2. 起有意义的名字

无论是方法还是变量。一个中级程序员给变量起「x」、「xyz」甚至是「object」这样的名字肯定是不行的。用英文单词作为变量名的目的就是为了让它们拥有实际含义。

> 用代码本身传递信息比用文档和注释更加重要。
>
> 注释的目的是解释「为什么」，而不是「怎么做」。

使用有意义的变量名不仅能帮助你更好地向阅读代码的人传递信息，还能让你避免使用大量注释。这一点同时适用于「变量」和「方法」。另外，如果你实在想不出好的名字，应考虑重构你的代码来简化每个方法。给简单的方法取名要比给复杂的方法取名容易得多。

> 想不出名字的时候，看看是不是你写的方法太复杂了，需要重构。

## 3. 不要让方法包含太多参数

如果你发现你写的方法含有大量的参数，你应该考虑去重构它，因为这样的方法通常会违背 [SRP（单一功能原则）](https://zh.wikipedia.org/wiki/单一功能原则)，意味着它承担的工作种类太多了。一个高效、简洁的方法应当专注于「做好一件事」。[Uncle Bob](https://en.wikipedia.org/wiki/Robert_C._Martin) 曾说，一个方法应最多接受三个参数。虽然这不是必须的，但它让你清楚对于一个方法来说最合适的参数数量。

> 重构代码并不是要把方法的参数改成类的变量，而是减少每一个方法的工作量，或者拆成两个方法。

这里引用 Robert C. Martin 说过的一句话：

> 一个方法应尽可能减少参数的数量。没有参数当然是最好的，其次是一个、两个、三个。三个以上的话就比较有问题了，应尽量避免。

## 4. 不要在一个类里面写太多方法

就像一个方法拥有的参数数量一样，一个类里面方法的数量也很重要。如果一个类特别庞大、包含很多方法，通常意味着这个类「存储了太多信息或是承担了太多功能」。这些类通常被称为[上帝对象](https://zh.wikipedia.org/wiki/上帝对象)，以形容它们是含有高度耦合代码的反面模式。

> 如果你的一个类包含了很多方法，想一想你是否需要随着程序的进化而时常回来修改这个类。如果是的话，你可能违背了[开闭原则](https://zh.wikipedia.org/wiki/开闭原则)，也就是「软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的」。

## 5. 只使用长期支持/稳定版的第三方库

你的代码应照顾到日后会用它重新编译整个项目的程序员。LTS（长期支持）版的库、插件和框架可能缺少了一些新鲜的功能，但它们会使其他人重新编译一个项目时更加方便。

> 不要总是想着用最新版的工具，而是要用最安全、最稳定的版本。无论是将来的你还是你的同事都会感谢你的！

## 6. 学会识别常见的设计模式

你没看错，很多大型项目都会使用一种或多种[设计模式](https://zh.wikipedia.org/wiki/设计模式_(计算机))来确立设计描述、关系和抽象等级。你不需要了解所有的设计模式，只需掌握关键的几个就够了，这样不仅有助于你构思和设计自己的程序，还能让你在阅读其他人写的代码时从中认出它们。

> 如果你能在别人的代码中识别出设计模式，你就可以很轻松地找到各个类和对象所在的位置，进而可以扩展和添加你想要的功能。

一个好的设计模式可以让项目的所有参与者使用共同的设计语言并高效地借助代码进行交流。

## 7. 为后来的程序员考虑

无论是将来的你，你的同事，还是新来的程序员，甚至是别的公司的程序员，都有可能需要基于你写的代码扩展或添加新的功能。很多初级程序员不理解这个，因为他们已经习惯为大学里面那些独立完成的项目编写只有自己才能看得懂的代码。

然而工作场合的需求跟大学还是不一样的。你可能需要给已经运行几年的项目编写代码，并且你的代码还要考虑到几年后会进来的程序员。如果你通过一些奇奇怪怪的手段实现了一个功能，或是在构建程序中添加了一些步骤而没有写在文档里，亦或是在本该重构的地方没有这样做，你都会为后来的人创造一些迟早需要解决的[技术负债](https://zh.wikipedia.org/wiki/技术负债)。

> 建议每隔几小时就回顾一下你的工作，比如往 README 文件里添加一些必要的说明，或是删除一些临时编写的但不再需要的代码和文件。另外当你不确定你在架构或编程方面的决策是否正确时，可以请教身边一些更有经验的人。照着这样做，你不仅能在工作中写出更优雅的代码，还能提升在将来处理类似问题的能力，同时适应自尊心受挫的感觉。（这是中高级程序员每天都要面临的体验 :D）

## 结语

从初级程序员跃升到中级程序员并不是一夜之间就能完成的事，你需要养成好的习惯才能在工作上有所提升并变得更加专业。在这篇文章中，我列出了一个程序员想要作出这样的改变并产生影响力所需要的最重要的习惯。

如果你有任何想法，可以在下面留言。敬请期待第二篇！:-)

这篇文章同时发表在我的[个人博客](https://paulisaris.com/the-14-habits-of-highly-effective-developers-part-1/)。

Photo by Tirza van Dijk on Unsplash