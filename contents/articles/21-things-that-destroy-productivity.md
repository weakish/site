---
title: 破坏程序员生产力的 12 件事
date: 2018-12-24
tags:
---

原文转载自 [John Lafleur](https://anaxi.com/blog/2018/10/15/top-12-things-that-destroy-developer-productivity/)，LeanCloud 经授权进行翻译。

很多文章都提到如何当好一个技术组组长或者技术部经理。常见的话题一般都是如何提高团队的效率。但当你试图提高程序员的效率时，首先要搞清楚效率是怎么变慢的，清楚原因后再来提团队效率。虽然 [Peopleware](https://www.amazon.com/dp/0321934113/ref=asc_df_03219341135715825?tag=shopz0d-20&ascsubtag=shopzilla_mp_1430-20&15456409384055726805310090302008005&creative=395261&creativeASIN=0321934113&linkCode=asn) 在 30 年前就发表了，但很多团队依旧会出现精力浪费和效率低下的问题。

没人会期待程序员不用电脑就能编好程序，但却有很多公司在不了解程序员的思维方式下就期待他们能把程序编好，这肯定是不现实的。

我总结了拖慢程序员创造力和效率的 12 件事，从影响最大到影响最小进行排序。如果有疑问欢迎给我留言！

如果你在想是否应该继续看下去的话，想想付给程序员的高工资，所以哪怕提高 10% 的效率也是值得的！

## 中断和会议

我认为「打断」可以排在破坏程序员创造力的第一位。程序员在被打断后一般不能做到立刻重新开始编程。被打断之后继续编程的话，通常程序员需要重新看一遍代码，再次逐渐进入到编程的思维环境中，才能想起来被打断之前的思维逻辑，再从被打断的点重新开始。这个过程大概要花 30 分钟以上。「打断」越多，烦心越多，工作质量也会降低，Bug 也会随之增加—成为恶性循环。

「如果你在我准备开始编程的时候打断我，次数越多- 我重新进入状态耗费的时间就越长。如果你在早晨就安排了一堆会打断我工作的会议，就别怪我这一天什么程序也没编出来」出自 Reddit 上的一个程序员。

那么「会议」呢？「会议」和「打断」的唯一区别在于会议是计划好的打断，这比非计划的打断还闹心。程序员无法在被打断的时候还能专心做其他任务。比如你跟程序员开 1-2 小时的会议，基本上不会有什么进展，因为一般技术性的任务 1-2 小时以内是无法完成的。

保尔·格雷厄姆(Paul Graham)说过，「一个下午如果被分成两个小会议是最糟糕的情况，因为这两个会议都太短了，什么都做不了。」

那么，如何避免这两种情况呢？

以下请记笔记：工作会议可以安排在一天开始的时候或者午饭前，并尽量简短，避免不必要的「打断」。

## 微管理

在所有管理者类型里面，微管理经理对程序员的效率影响最大。这很容易理解，因为微管理经理的会议和临时打断会更多一些，而这些会议和打断会显示出来他们对程序员不信任，程序员也会觉得他们的能力被低估。导致程序员编程的动力在每次被打断的时候就跟浇了冷水一样。这样的影响不止效率，还会使程序员离职或者更换团队。

## 编程要求模糊

编程要求很模糊有很多种表现方式。比如，故障报告（Bug report）中像「这个不运行，重做！」并不能有效告诉开发人员如何解决问题。用统一的故障报告模版就能解决很多问题。

如果某项功能要求很模糊，在这个情况下，开发人员只能靠自己的感觉来编程。最好是能够把某项功能的要求细节化，再递交给开发人员。

再有，不清楚的优先级也算需求模糊。这些不必要的时间本来是可以避免的，程序员却要花时间搞清楚自己是否在完成正确的任务。想象一下如果经理来问程序员为什么在做这个任务（在任务优先级没有细节化之前）。你能想象之后的各种解释和误解…

## 海鸥管理

你听说过「海鸥管理」么？「海鸥管理」是指管理者完全不管工作，像海鸥一样在高空飞，但….他们时不时的会跳出来捣乱。「这个做的不对，这个，这个还有这个做的不行」等，然后再继续飞走。我必须得说，这个场景虽然听起来很可笑，但却很常见。这种情况对开发人员来说非常的烦心，他们可能在之后的几个小时，甚至几天都无法专心。
5.被「占便宜」

你有过上层或者其他的程序员把你工作成果拿去当成自己成果的情况吗？在程序员心中，能力被认可是摆在第一位的。别人把自己的成果拿去当成是他们的成果，等于剥夺了其他人对自己认可的机会。这一点非常非常重要，如果这种情况发生了，程序员在很长一段时间之内都不会有动力工作。
6.环境-噪音，走动，工作环境等等

这些对非程序员来说可能比较奇怪，但对程序员工作的效率影响却非常大。比如一些白噪音，像空调噪音，汽车卡车行驶的这些声音，反而可以帮助他们更好的集中注意力。这就是为什么我们总是戴着耳机的原因。顺便推荐最近刚发现的 RainyMood 。

相似的，如果工作空间的设计会有很多人走来走去，这也会让程序员无法专心。或者他们坐的位置很容易被管理者看到等等，这些因素都会让程序员压力增大而无法专心。

## 范畴蠕动

范畴蠕动（也称为焦点蠕动，需求蠕动，功能蠕动，有时候也称为厨房水槽现象）在项目管理中意思为无法控制的变数。这种情况在项目范畴没有被确定之前会发生。

范畴蠕动会让简单的请求变成复杂，超级花费时间的怪兽。一般都在开发过程中发生。比如，一个简单的功能：

版本 1（发布前）：功能是在地图中显示一个定位。

版本 2 （当版本 1 几乎开发完毕时）：功能变为「在 3D 地图上展示一个坐标」。

版本 3 （当版本 2 几乎开发完毕时）：功能又变成「在 3D 地图上展示一个用户能在上空飞过的坐标」。
8.产品定义过程

这一点可能第一眼看上去有点怪，但是其实非常好理解。如果一个产品团队在没有仔细考察功能是否有需求就定义了产品优先级（通过客户反馈或者其他渠道），程序员很可能会开发出很多用不到的功能。这会让他们觉得自己做的东西没有利用价值，开发的热情也会大大降低。我们都想创造更多的影响力，开发人员更是如此。
9.没有考虑技术负债

技术负债是为了更快上线产品而使用非最佳解决方案或编写不是最好的代码。这些决定有时候是不可避免的，因为可以在短期内提高软件开发的速度。但是，长远来看，这会让系统复杂程度提高，并且会降低开发速度。非程序员总是想尽快推进项目而低估了生产力的浪费，这就成了一个问题。如果代码重构永远排不上优先级，这不仅会影响效率，还会影响产品质量。

## 工具多样性和硬件

开发人员可能会用很多工具来编程，每天都要运行和合并代码很多次。自动化越多越好。这就好比用非常老的没有任何自动化工具来编程肯定会拖慢编程效率一样。大显示屏和笔记本等硬件的区别也是如此。因此，在开发人员的软件工具和硬件上投资是肯定不会错的！让你的开发团队选择他们喜欢的工具和硬件（为单人买硬件，为整个团队买软件工具）。
11.如何注释

当我们学习编程的时候，知道要尽早开始为代码写注释，越多注释越好。不幸的是，很多程序员把这概念理解错了，导致他们在每一行代码都有注释，如以下这种常见的代码（摘自杰夫安特乌茨（Jeff Atwood）的「不写注释的代码」）：

```javascript
r = n / 2; // 赋值 r 给 n 除以 2

// 迭代直到 r – (n/r) 大于 t
while ( abs( r – (n/r) ) > t ) {
  r = 0.5 * ( r + (n/r) ); // 赋值 r 给(r + (n/r))/2
}
```

你知道这段代码想干嘛么？我也不知道。这就是注释太多会带来的问题，虽然有注释，但这并没有解释为什么要这么写这段代码。如果你在程序调试的时候看到这段代码，对排除报错（debug）并没有帮助。
12.不可能实现的项目截止日期

管理者总是要求开发人员预估项目完成时间，然后再推动他们缩短预估时间，并以此为截止日期。很多管理者甚至认为，既然这是开发人员自己估计的时间，他们就应该在这个截止日期之前完成，所以这个截止日期是可以正式向上级汇报的。然而，开发人员会认为这个截止日是没有办法完成的，这就导致了开发人员与管理者之间紧张的关系。

以上这些事情为什么只针对程序员？

如果你看完这 12 件事，你会发现，这 12 件事其实在项目管理过程中经常发生。只是这些事情对程序员的影响更多一些，他们在工作中更需要全神贯注。

如果你在公司里看到了以上所提的 12 件事，不妨和大家探讨一下。沟通后，搞清楚这些问题是否真实存在并且如何解决。不管他们怎么说，关键是在于信任他们的反馈和意见。现今的科技和 30 年前比已经很不一样了，但即使如此，人性并没有变。你在考虑公司生产效率的同时必须要考虑人的因素。反复推敲你团队的工作流程，工作环境和工作习惯，让你的团队来指引你达到你想要的最高效率。