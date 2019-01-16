---
title: 命令行威力提升（一）
date: 2019-01-11
tags:
---

[Darren Burns] 原作， 授权 LeanCloud 翻译。

[Darren Burns]: https://darrenburns.net/posts/tools/

我打算写一系列文章，展示下近些年发现的一些很棒的非标准命令行工具，这是第一篇。如果你用命令行，那么这些工具中大概至少有一个能让你的生活更舒心。

## `z` 跳转

现代浏览器地址栏可以智能模糊搜索，节省了大量时间。想要刷下推特？只需在地址栏输入「tw」然后回车。

相比之下，在命令行下使用 `cd` 访问文件系统，方式就太陈旧了。谢天谢地，`z` (<https://git.io/uyrp2Q>) 给命令行带来了浏览器风格的导航。

![z](https://darrenburns.net/jump_around-987b878944e690843afd549b81a76be6.svg)

短暂的学习期之后，`z` 能让你**从任意位置**跳转到一个目录，只需输入目标目录名的子字符串。`z` 会跳转到哪个目录取决于你提供的字符串参数、访问目录的**频繁程度**、访问目录的**最近时间**。这称为「**频近度 (frecency)**」。

`z` 不仅提高了速度，还降低了认知负担。使用 `cd` 时，你需要准确回忆目标目录在目录树的位置，并计算到达目录的路径。有了 `z`，只需知道目录的名称。

`z` 也已经移植到了其他 shell （例如 fish 和 zsh）。类似的项目有 `autojump` (<https://git.io/fhZ20>)。

### 安装 `z`

- 在 macOS 上使用 Homebrew 安装 `bash` 版本：`brew install z`
- 在 macOS 上使用 Fisher 安装 `fish` [版本][z-fish-version]：`fisher add jethrokuan/z`

[Homebrew]: https://brew.sh/
[z-fish-version]: https://github.com/jethrokuan/z
[Fisher]: https://github.com/jorgebucaran/fisher

## `fzf` 快速模糊搜寻器

安装 `fzf` (<https://git.io/C4FBDw>) 后，在命令行的任何地方按下 `Ctrl + T`，就可以开启交互式模糊搜索界面，递归搜索当前目录下的文件。输入搜索项后，上、下键选择结果，回车上屏：

![fzf](https://darrenburns.net/fzf-54dfd83c8f95d32152c9c2da2bba488d.svg)

在上面的例子中，我输入了 `bat`（还可以是其他任何命令，例如 `less`、`cd` 等），接着按下 `Ctrl + T`。接着输入 `five`，回车，插入路径 `src/five.rs` 至光标所在处，而不必先输入 `src`，再按 tab 键，再输入 `fi`，再按 tab 键——路径很长或者不好记的时候，这样很麻烦。

### 安装 `fzf`

- macOS （[Homebrew]）： `brew install fzf`
- `fish` 绑定： `fisher add jethrokuan/fzf`

## `bat` 带语法高亮的文件查看

`bat` (<https://git.io/vhrn7>) 助你快速查看文件，有语法高亮。`bat` 可以无缝替换 `cat`。

![bat](https://darrenburns.net/bat-ff214ee3bcfdc35c6cf67e95f4b3004c.svg)

如果输出过大（如上面的例子所示），`bat` 会将输出传给 `less`，自动分页。

### 安装 `bat`

- macOS （[Homebrew]）： `brew install bat`

## `bench` 代码性能测试

`bench` (<https://git.io/fhZwU>) 是极为有用的测试代码性能的工具。它是用 Haskell 写的，从这点上说，算是这篇文章中最酷的。任何可以在终端中运行的命令都可以传给它（加引号），`bench` 会重复运行该命令，测量执行时间。测试完成后，`bench` 会输出有用的统计数据。

![bench](https://darrenburns.net/bench-bfdf5ac0c5538d3c068390d2e42ac95e.svg)

衡量代码执行时间，相比系统内置的 `time` 命令，`bench` 更为强大。

类似的工具有 `hyperfine` (https://git.io/fhZwN) ，是用 Rust 编写的。

### 安装 `bench`

- macOS （[Homebrew]）： `brew install bench`

## `asciinema` 和 `svg-term` 录制终端为 SVG 动画

这篇文章中的终端剪辑实际上是 SVG 动画！使用 SVG 而不是视频文件有不小的优势：

- 任意缩放 🔍
- 可以像其他图像一样嵌入 Markdown 文件 😱
- 文件较小 🧐
- SVG 动画比视频酷太多 🔥

我使用 `asciinema` (<https://asciinema.org/>) 录制终端。输入 `asciinema rec` 即可开始录制。完成后按 `Ctrl+D`，选择本地保存或上传 [asciinema.org](https://asciinema.org/)

![asciinema](https://darrenburns.net/asciinema_example-e1488b9806f360b88391a244d2354cf2.svg)

`svg-term` (<https://git.io/fhZrE>) 可以根据 `asciinema` 录制文件生成 SVG 动画。如果你将录制文件上传到了 asciinema，需要访问 asciinema 链接将其设为公开。

转换录制文件为 SVG 动画，需要提供录制 ID （公开 asciinema 页面后可以在 URL 中找到 ID），输出文件名，还有其他一些可选参数。例如，我使用如下命令将上面例子中的终端录制 (https://asciinema.org/a/219486) 转换为 SVG 文件：

```sh
svg-term --cast=219486 --out ~/somewhere/out.svg --padding 18 --height 8 --width 80
```

或者，如果你不想把录制文件上传到 asciinema，你也可以直接使用 `svg-term` 转换本地录制文件（感谢 svg-term-cli 的作者 Mario Nebl 指出这一点）：

```sh
asciinema rec cast.json
cat cast.json | svg-term-cli
```

### 安装 `asciinema` 和 `svg-term`

- 在 macOS 上安装 `asciinema`：`brew install asciinema`
- 在 macOS 上安装 `svg-term`： `npm install -g svg-term-cli`

## `wrk` 测试 HTTP API 性能

`wrk` (<https://github.com/wg/wrk>) 是个方便的小工具，可以测试 API 性能。为了演示它的用法，我在本地的 8001 端口运行了一个最小化的 Python HTTP API 服务器，它只有一个端点（`/hello`）。用 `wrk` 测试它的性能（5 秒内，使用 12 个线程发起 200 个连接）：

![wrk](https://darrenburns.net/wrk-f2cef144344b219b0ed3398ea1727cb3.svg)

调整线程数、连接数、时长可以测试不同负载下 API 的表现。它不能代替 Locust 和 JMeter 这样的性能测试工具，但很轻量，在许多场景下够用。

很不幸，基于 `wrk` 的命令行接口发起 POST 请求很笨拙：需要用 Lua 编写一个小脚本，作为参数传给命令（详见文档）。

### 安装 `wrk`

- macOS （[Homebrew]）： `brew install wrk`

## `exa` 替代 `ls`

`exa` (<https://the.exa.website/>) 是 `ls` 的现代替代品，其彩色输出更为易读，并提供了更多控制输出如何呈现的选项。

![exa](https://darrenburns.net/exa-c640a48d016bf7391d213c660b4fbe8a.svg)

加上 `--git-ignore` 参数会根据 *.gitignore* 忽略对应文件，使用 `-T` 参数则能以树型结构列出目录。

### 安装 `exa`

- macOS （[Homebrew]）： `brew install exa`

## `fd` 查找文件和目录

通常使用 `find` 命令基于正则表达式查找文件或目录。`fd` (<https://git.io/fwls2>) 是用 Rust 编写的 `find` 替代品。使用合理的默认值，提供更方便的界面，速度也更快。

![fd](https://darrenburns.net/fd-a358bee3a37ed6740896446863857a5f.svg)

`fd` 遵循 *.gitignore* 文件，也支持并行命令执行。并行命令执行可以在搜索返回的每个文件和目录上（并行）执行命令。`fd` 文档中的一个例子是找出所有 `.jpg` 文件，并行转换为 .png 文件（使用 `convert` 命令）：

```sh
fd -e jpg -x convert {} {.}.png
```

### 安装 `fd`

- macOS （[Homebrew]）： `brew install fd`

## `rg` (ripgrep) 查找文件中的字符串

`rg` (<https://git.io/vPvif>) 是 `grep` 的替代品，它比 `grep` 快很多。

![rg](https://darrenburns.net/rg-9e3bbb621ceb9d4a5a84fbc4816fe702.svg)

`rg` 是用 Rust 编写的，VS Code 编辑器的搜索功能其实是通过调用 `rg` 实现的。在性能评测中，`rg` 一贯超过类似工具。

### 安装 ripgrep

- macOS （[Homebrew]）： `brew install ripgrep`

## 结语

我希望你在这篇文章中发现了有用的工具！我打算让这篇文章成为及时更新的工具库，收罗有用的替代性命令行工具，所以我可能会时不时更新这篇文章。如果你对更多类似内容感兴趣，欢迎在 Twitter 上关注 [@_darrenburns]。

[@_darrenburns]: https://twitter.com/_darrenburns