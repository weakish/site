---
title: 优秀的命令行工具（三）
date: 2019-01-17
tags:
coverImage: "./images/cmdline-tools-3-cover.png"
summary: 本文是「优秀的命令行工具」系列的第三篇。在这篇文章中，我将展示五个命令行工具，这些工具能助你更方便地解决常见问题。
---


[Darren Burns] 原作， 授权 LeanCloud 翻译。

[Darren Burns]: https://darrenburns.net/posts/more-tools/

本文是「优秀的命令行工具」系列的第三篇。在这篇文章中，我将展示五个命令行工具，这些工具能助你更方便地解决常见问题。

## `tig` 交互式地浏览 git 仓库

有了 [tig](https://git.io/FkX-Mw)，无需离开命令行，就能交互式地浏览 git 仓库。

![tig](https://darrenburns.net/tig-cb475140e22bbb7f227d7e03f9050556.gif)

`tig` 的使用简单直观，提供了 stash、staging、log 等视图。

感谢 Renato Suero [@renatosuero] 在 DEV 上向我推荐 `tig`。

[@renatosuero]: https://twitter.com/renatosuero

### 安装 `tig`

- macOS （[Homebrew]）： `brew install tig`

[Homebrew]: https://brew.sh/

## PathPicker (`fpp`) 快速选择文件

[PathPicker](https://git.io/fh8nL) 是由 Facebook 推出的命令行文件速选库。下面的动画摘自 PathPicker 文档。

![fpp](https://darrenburns.net/fpp-217fdcd6bcffaa605df85f31e8d84d79.gif)

摘自[PathPicker 官网]：

> PathPicker 接受各种各样的输入 —— git 命令的输出，grep 结果，搜索 —— 几乎任何输入都支持。解析输入后，PathPicker 呈现出供你选择文件的美观界面。选中文件后，可以用你偏爱的编辑器打开，或执行任意命令。

[PathPicker 官网]: http://facebook.github.io/PathPicker/

感谢 Nikolay Dubina ([@nikolayid]) 推荐这一工具。

[@nikolayid]: https://twitter.com/nikolayid

### 安装 PathPicker

- macOS （[Homebrew]）： `brew install fpp`

## `tldr` 使用命令行工具的实用示例

[tldr](https://git.io/fh8lY) 助你快速查看使用命令行工具的实际示例。简而言之，「tl;dr」版本的 man 页面。

![tldr](https://darrenburns.net/tldr-2662bd95c1c70e53892d857a3ea990ce.gif)

`tldr` 的例子由社区维护，存储于 `tldr` 的 [GitHub 仓库][tldr-github]。

[tldr-github]: https://github.com/tldr-pages/tldr

### 安装 `tldr`

- 推荐使用 npm 安装：`npm install -g tldr`
- macOS ([Homebrew])： `brew install tldr`

## `gron` 查看 JSON

[gron](https://git.io/fh84V) 将 JSON 文本转换为离散的赋值语句，以便查找。我特别喜欢组合 `fzf` 使用（我在本系列的第一篇文章中提到过这个工具），这样可以交互式地查看 API：

![gron](https://darrenburns.net/gron-with-fzf-40ffb9ae640c6b9e89fd95de3ad88b0e.gif)

`gron` 也可以用来转换 JSON 对象（[例子][gron-example]）。不过这不是 `gron` 的主要使用场景，使用 [jq] 这样的专门工具解决这类任务大概更合适。

[gron-example]: https://github.com/tomnomnom/gron/blob/master/ADVANCED.mkd
[jq]: https://stedolan.github.io/jq/

### 安装 `gron`

- macOS ([Homebrew])： `brew install gron`

## thefuck 快速修正命令行手误

输入命令时拼错了，输入 [fuck](https://git.io/vvbnZ) ，thefuck 会给出一些候选的正确命令。

![thefuck](https://darrenburns.net/thefuck-7ed922a3cb4d321b0f872818ee3c5162.gif)

很不幸，这个命令的名称稍微有点黄暴，你也许想要起个别名。

### 安装 thefuck

- macOS ([Homebrew])： `brew install thefuck`

## 额外福利：explainshell，解释命令

如果你手头有一行很复杂的命令，想要了解它做了什么，又不想一个个查 `man` 或 `tldr`，那么你可以使用 [explainshell](https://explainshell.com)：

![explainshell](https://darrenburns.net/static/explain_shell-0edc1706c18af98816645e6b2db89607-c83f1.png)

## 结语

希望你对这篇文章中的工具感兴趣！想看更多类似内容，欢迎在 [Twitter] 和 [DEV] 上关注 `_darrenburns`。

[Twitter]: https://twitter.com/_darrenburns
[DEV]: https://dev.to/_darrenburns
