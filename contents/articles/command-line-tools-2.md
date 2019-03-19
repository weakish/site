---
title: 优秀的命令行工具（二）
date: 2019-01-14
tags:
coverImage: "./images/cmdline-tools-2-cover.jpg"
summary: 本文是[优秀的命令行工具]系列的第二篇，这一系列展示一些出色的非标准工具，这些工具能让命令行用起来更容易、更享受。
---


[Darren Burns] 原作， 授权 LeanCloud 翻译。

[Darren Burns]: https://darrenburns.net/posts/more-tools/

本文是“优秀的命令行工具”系列的第二篇，这一系列展示一些出色的非标准工具，这些工具能让命令行用起来更容易、更享受。

## `peco` 交互式过滤

将任何命令的输出通过管道传给 [peco](https://git.io/Pwz8GA)，便能交互式地过滤输出，查找所需信息。你可以把它想成交互式 `grep`，随着输入实时更新结果，让搜索过程更直观。

![peco](https://darrenburns.net/peco-processes-e31d5338bae787510ce8e39ad394bdb0.gif)

你可以使用上下键选择搜索结果，然后用回车键确认。按下回车后，`peco` 会输出结果。

### 安装 `peco`

- macOS （[Homebrew]）： `brew install peco`

[Homebrew]: https://brew.sh/

## `hexyl` 十六进制查看器

检查二进制文件时通常查看文件的十六进制表示。[hexyl](https://git.io/fhnd7) 是个命令行下的十六进制查看器。

![hexyl](https://darrenburns.net/hexyl-no-less-95d319279084793ad8bba3e3fd6acf2d.gif)

界面分为三栏：

1. **偏移量** 当前所在的字节数
2. **十六进制** 文件的十六进制表示（自身又分为两栏，不过在上面的 gif 例子中不可见）
3. **表示** 尝试将文件显示为文本（同样分为两栏，gif 例子中未显示）

`hexyl` 显示的每个字节的颜色取决于其类型（NULL、ASCII、non-ASCII等），这很有助于可读性。

**小窍门** 查看二进制文件或大的文本文件时，输出经常会超出屏幕，所以你可以把 `hexyl` 的输出传给 `bat` 或 `less`，以支持分页。如果用 `less`，需要加上 `--raw-control-chars`/`-r` 参数以正确显示颜色。

![hexyl | less](https://darrenburns.net/hexyl-with-less-583b828440ed738443efc8e63fe5bda3.gif)

`hexyl` 由 [David Peter] 使用 Rust 编写，他也是 `bat`、`fd`、`hyperfine` 的作者，我在本系列的第一篇文章中介绍过这些工具。

[David Peter]: https://github.com/sharkdp

### 安装 `hexyl`

- macOS （[Homebrew]）： `brew install hexyl`

## `pomo` 番茄钟计时器

番茄工作法是提升生产效率的好方法。如果你还没听说过，那么它大概是这样的：

1. 你心无旁骛地**工作 25 分钟**
2. **放松 5 分钟**，做任何你想做的事情（只要不是工作 😁）
3. 重复以上步骤 4 次（根据需要调整这个数字)，接着休息 **15 分钟**

根据番茄工作法这一理论，遵循这一计划能让你在相对较短的时间内完成相对较多的事情。这也许不适用于每个人，但我个人验证了它的有效性！

![pomo](https://darrenburns.net/pomo-2a74022e8fdf4e05976d9f04ef381f4c.gif)

[pomo](https://git.io/fhnFr) 是一个简单的命令行工具，助你依照番茄工作法管理时间。

### 安装 `pomo`

在 macOS 上安装：

1. 从 GitHub 下载二进制文件：`curl -L -o pomo https://github.com/kevinschoon/pomo/releases/download/0.6.0/pomo-0.6.0-darwin-amd64`
2. 设置权限：`chmod +x pomo`
3. 加入 `PATH`：`mv pomo /usr/local/bin`
4. 初始化数据库：`pomo init`

## `ncdu` 分析、清理磁盘空间

如果你的计算机上有很多项目，最近也没有清理过磁盘。那么你几乎一定能找到一个占用大量磁盘的文件夹（我发现旧项目的 `node_modules` 文件夹特别容易占用大量空间）。[ncdu](https://dev.yorhel.nl/ncdu) 是我最爱的修复工具。事实上，在创建下面的 `ncdu` 演示例子时，我清理了 10 GiB 的磁盘空间！

![ncdu](https://darrenburns.net/ncdu-d9e7172fd2a64a0ca6205f0de2f17b7a.gif)

只需运行 `ncdu` 即可使用。它会扫描当前目录下的所有子目录，所以如果在家目录运行 `ncdu`，也许需要较长时间扫描。

`ncdu` 的 ncurses 界面可以使用方向键，也可以使用 `vim` 风格的快捷键。

### 安装 `ncdu`

- macOS （[Homebrew]）： `brew install ncdu`

## HTTPie `curl` 的现代替代品

[HTTPie](https://httpie.org/) 是一个更简单（不像 `curl`，每次使用都要 Google 下用法）、功能更多、更美观的 `curl` 替代品，可以在命令行调用 HTTP 的 API。到目前为止，我介绍的工具中，它是最流行的，而且有[很精良的文档]。

[很精良的文档]: https://httpie.org/doc

![HTTPie](https://darrenburns.net/httpie-45e43f1f800784a18fcdbf1b089b9513.gif)

`http` 命令的输出足够与 cURL 区分开来。输出的 JSON 响应带语法高亮，十分美观，可读性要好很多。如果你偏爱图形 UI，那么你也许会喜欢 Insomnia、Postman 或 Paw （Paw 需要购买许可，并且只适用于 macOS）。

### 安装 HTTPie

- macOS （[Homebrew]）： `brew install httpie`

## 结语

感谢阅读！在这一系列的下一篇文章中，还有一些工具值得一提。如果你有任何建议，欢迎联系我！如果你对更多类似内容感兴趣，可以在 Twitter 上关注 [@_darrenburns]。

[@_darrenburns]: https://twitter.com/_darrenburns
