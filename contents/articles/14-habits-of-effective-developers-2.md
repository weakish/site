---
title: 高效程序员的 14 个习惯（二）
date: 2019-05-24
tags:
coverImage: "./images/zan-ilic-1607679-unsplash.jpg"
summary: 不同的人有不同的习惯，但养成好的习惯应该是每个人共同的追求。
---

[Paul Isaris] 原作，授权 [New Frontend](https://nextfe.com/) 翻译。

[Paul Isaris]: https://paulisaris.com/the-14-habits-of-highly-effective-developers-part-2/

## 序言

这篇文章是「高效程序员的 14 个习惯」系列的第二部分。你可以在[这里](https://nextfe.com/14-habits-of-effective-developers-1/)或者[我的博客](https://paulisaris.com/the-14-habits-of-highly-effective-developers-part-1/)阅读第一部分。

「高效程序员的 14 个习惯」系列的[第一部分](https://nextfe.com/14-habits-of-effective-developers-1/)讲述了「习惯」在程序员日常生活中带来的好处，以及我们要如何通过在工作中做出简单却重要的改变以从中受益，进而成为更好的程序员。

不同的人有不同的习惯，但养成好的习惯应该是每个人共同的追求。好的习惯一旦养成，我们就可以高效地对付生活中那些阻挠我们的东西，比如说「拖延症」、「疲惫」、「无聊」，以及偶尔的「懈怠」。

> 如果你想在大事上表现杰出，你就要先在小事上养成习惯。优秀不应是一时的，而是持久存在的态度。——科林·鲍威尔
>
> 习惯造就了我们。因此优秀并不是一种行为，而是一种习惯。——威尔·杜兰特
>
> 良好的道德源自于习惯。正义的举动让我们变得正义，平和的举动让我们变得平和，勇敢的举动让我们变得勇敢。——亚里士多德

言归正传，让我们继续探讨能够永久改变你的职业发展并让你成为「高效程序员」的 14 个习惯：

## 8. 接受好意的批评

咱们程序员的思维和一般人有些不太一样。我们总是喜欢用他人无法理解的方式讨论只有我们听得懂的东西，直到我们的工作成果惹怒了客户或产品/项目经理，比如说一个功能并没有被正确实现，或者我们没能正确理解项目的需求。这个时候我们的自尊心就体现出来了：

> 这「肯定」不是我的锅！我能犯这种错误吗？他们是不是傻！是不是他们恨我啊？他们知不知道重做这些要花多久！

程序员们经常会有这样的想法，不过这种想法并没有什么积极作用，只会让我们为了维护自尊心而不去面对问题。你要知道，（通常情况下）人们并不会因为你或你的问题而针对你个人。如果你认为你和别人产生了误会，你应该出面把事情解释清楚；如果你的代码里有 bug，确保你把它描述清楚并及时修复它，同时做好测试。这些修养是一个务实、专业的程序员必备的，千万不要让自尊心或是[冒名顶替症候群](https://zh.wikipedia.org/wiki/冒名頂替症候群)给毁了。

> 你的工作不只是当一名优秀的分析师、程序员或是技师，更是要成为你行业内的「专家」。当你的专业技能不够用时，你的软技能就派得上用场了。

## 9. 离开营地时要让它比你来时更干净

源自著名的童子军原则。其实这条原则适用于我们日常生活中的点点滴滴，编程也不例外。很多时候我们需要去扩展一个项目的功能，或是编写一些新的功能，于是我们搭建好开发环境，从版本控制系统拉取代码，然后打开项目，却发现满眼都是 `TODO` 和没用到的方法与变量，还有硬编码的数值与字符串以及未使用的依赖。

这个时候我们就会想，来都来了，就顺便做个清理吧，然而却又担心由此造成更多破坏：如果我要优化命名的方法被项目的其他部分甚至是其他项目用到了怎么办？决定一个项目的重构级别从来就不是一件容易的事情，所以我们需要借助单元测试和集成测试来帮助我们找到受影响的部分，当然处理好方法的作用域也会对此有帮助。

> 如果我们要修改一个全局方法，必须确保所有调用该方法的地方都被照顾到。受保护方法改起来相对容易些，因为我们只需要检查所属类下面用到它的地方。私有方法改起来最容易了，因为它的作用域最小。

负责任的程序员能做的事情远不止改名和重构，他们还可以清理被注释掉的或者没用到的代码，以及不需要的文件。在这过程中，很多专业的 IDE 能快速标记出一个方法是否有被用到。另外不要害怕删除被注释掉的和过时的代码，因为保留过时的代码只会平添更多的技术负债，况且你还可以借助版本控制系统把它们从之前的版本里找回来。

## 10. 不要抗拒非编程类的工作

一个典型的程序员的工作就是编写代码。即便工作中需要分析用户故事、编写需求文档、设计数据库结构，我们的最终的目的依然是写出实用、健壮的代码来帮助我们高效地实现功能。然而接触非技术性的工作并锻炼自己的软实力也是同样重要的。像与经理、测试者、客户沟通这样的事情可能听起来乏味，但它们能给我们带来意想不到的价值。

提升沟通能力和管理能力这样的软技能可以帮你成为更好的专家，因为你可以更好地阐述用户故事，或是无需借助行业术语（那些让别人把我们当作外星人的话）就能把技术细节讲给外行人听。

除此之外，如果你能跟经理与客户顺畅地沟通，你在分析用户故事或估算实现功能所需时间时会更加高效。此时的你能够问出更好的问题，进而更深入地理解客户需求。:-)

> 不幸的是，很多人以为软技能并不重要，但几乎每一位和我聊过的雇主都说他们很看重这个。这个时代可供你选择的工作岗位变化多端，然而软技能会永远作为一项基本要求贯穿其中。

## 11. 多写文档

增删插件、作出假设、增加安装构建步骤、使用特定版本命令行工具时，如果没有在文档里记录清楚，日后会十分麻烦。这一点跟[第一部分](https://nextfe.com/14-habits-of-effective-developers-1/)里的「为后来的程序员考虑」相互照应：你要确保其他人可以维护或构建你的程序。

验证的方法也很简单，只需在项目完工时，把代码克隆到一台全新的机器，然后照着你文档里写的方式进行配置。通常这一过程足以让你发现文档里缺失的说明，这样你就知道如何优化文档了。

## 12. 留出时间休息和锻炼

八小时的睡眠加上每天的锻炼对大多数程序员来说都是极其奢侈的，更何况我们已经习惯在下班后通过追剧和玩游戏的方式消磨时间。与此同时，垃圾食品也逐渐成为了我们的日常。不过我们要清楚，健康的饮食和持续的锻炼对我们工作时的心情和表现都有积极的作用。

你在锻炼时，流进你大脑中的血液会增加，这会帮助你提神醒脑，并让你更好地投入到接下来的项目中。保持身体健康能有效提高你的工作效率，而锻炼作为一种方式不仅能让你减轻体重和降低患病风险，还能提升心血管的健康程度，让你面对一天的工作时更有耐力。

> 锻炼时，大脑会释放血清素来让你保持清醒，借此更好地完成工作。血清素是大脑中的一种神经递质，可以向你的身体发送信号来激发情感。

锻炼之外，睡一场好觉能够让你更好地迎接第二天的生活。通常如果人们太过忙碌，比如有很多工作要做，有不规律的工作节奏，需要上学，或是需要照顾孩子的话，就会放弃一些睡眠。然而前面这些理由虽然看似正当，却比不上一场好觉过后记忆力和效率的提升来得实在。

如果你能在会议上保持清醒，而不是像个刚熬夜玩完游戏的孩子一样，你肯定能更好地完成工作，并让你的同事和客户更加佩服你。

## 13. 别把个人情绪带到工作中

这一条跟第 8 条提到的「接受好意的批评」差不多，然而仅仅做到可以让「程序员的自尊」受到伤害是远远不够的。在这一条里，我们要了解「专家」该如何避免私事影响到工作。

首先要清楚的是，那些指出你产品里有 bug 的客户并不会真的恨你，以及那些抱怨你代码里有设计缺陷和技术负债的同事也不会真的觉得你是坏人或是恨你恨到想去扁你。你要学着接受别人的意见（即便你不同意它们），然后做出对工作和项目有益的事情。

当然，这不代表你应该减少自己的个性或是一味地接受别人告诉你的东西。你依然有权利去反驳，只是你要清楚自己的反驳是否有实际意义。你要明确反驳到底是为了维护自尊心，还是在为双方争取共同的利益。

## 14. 提出有效的建议

初级程序员和高级程序员的最大区别在于他们提出建议和进行有效代码审查的能力。当你需要提出建议或是进行代码审查的时候，尽可能避开自己的偏见，把注意力放在大局和「共同利益」上。

和优秀的超级英雄一样，优秀的程序员在提出建议时应当做到坦诚（而不粗鲁）。看到需要重构的地方就提出来，大胆说出你「专业的想法」！

这其中的关键在于每次提出建议或指出缺陷之前要先问自己一个小问题：

> 「怎样去改进？」

如果你的建议不包含任何改进方案，那它就无异于一场抱怨。你要确保你的建议能够引发建设性的讨论，并且始终顾及大局。

> 作为高级程序员，你不仅要注重自己的提升，还要在乎其他人。与其把好的建议私藏起来，不如拿出来和大家分享，你个人也会因为整个团队的进步而进步。

## 结语

养成良好的个人与职业上的习惯可以帮助一个人快速成为领域的专家。职业发展并不是一夜间就能完成的事，它需要的是时间，更是持之以恒的态度。你现在要做的就是尽可能多地在生活中实践上面这些习惯，早晚有一天你会成为真正的专家的！

如果你对这些习惯有任何想法，欢迎在下面留言！:-)

Photo by Zan Ilic on Unsplash