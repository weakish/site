---
title: 优秀的 VS Code 前端开发扩展
date: 2019-03-01
tags:
coverImage: "./images/vsc-plugins-cover.png"
summary: 前端为主的开发者，想高效使用 Visual Studio Code，我觉得这个列表会很有帮助。
---

[Alexander Romano] 原作，授权 LeanCloud 翻译。

[Alexander Romano]: https://dev.to/vip3rousmango/vs-code-extensions-youll-actually-use-46gp

我留意到，网上有不少关于 VS Code 的文章，然而这些文章提到的扩展大部分都让我失望。所以我决定编写我个人使用的插件列表。

前端为主的开发者，想高效使用 Visual Studio Code，我觉得这个列表会很有帮助。其中一些插件你大概已经装了——因为它们是被推荐最多的扩展——但还有一些你也许没装。

## 方便阅读

- [Beautify] - 放大标记，调整间距，让 HTML、CSS、JS 更易阅读。
- [Better Comments] - 在代码中创建对人类更友好的注释。我一直用这个扩展。它是我们研发团队必备扩展。
- [Bookmarks] - 助你浏览代码，在重要位置之间方便快速地移动。搭配 MetaGo 使用，写代码的时候我基本不用鼠标。
- [MetaGo] - 让通过键盘移动光标和选取内容快得不像话，彻底改变了我使用 VS Code 的方式。
- [Log File Highlighter] - 顾名思义，让 VSCode 支持 .log 文件。读日志文件再也不觉得费眼了。
- [Guides] - 有了这个扩展，再也不需要折叠、展开那些该死的元素来搞清楚缩进了。搭配之前提到的 Beautify 和下面的 Rainbow Brackets 使用，效果更佳。
- [Rainbow Brackets] - 高亮当前括号对，其他括号使用不同配色，让定位变得极为容易。重度 JS 开发者的最爱。
- [Image Preview] - 在 gutter 和光标悬浮时显示图片预览。检查是否引用了正确的图片/图标的关键所在。
- [GitLens] - 无疑是最常用的扩展之一；VS Code 不可或缺的扩展，让 Git 体验好上太多。搭配 [.gitignore] 和 [.diff] 插件可以补足功能。

[Beautify]: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
[Better Comments]: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
[Bookmarks]: https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks
[MetaGo]: https://marketplace.visualstudio.com/items?itemName=metaseed.metago
[Log File Highlighter]: https://marketplace.visualstudio.com/items?itemName=emilast.LogFileHighlighter
[Guides]: https://marketplace.visualstudio.com/items?itemName=spywhere.guides
[Rainbow Brackets]: https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets
[Image Preview]: https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview
[GitLens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[.gitignore]: https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore
[.diff]: https://marketplace.visualstudio.com/items?itemName=rafaelmaiolla.diff

## 快速编写

- [CSS Peek] - 借鉴了 Bracket 的 CSS Inline Editors。VS Code 现在有了我最爱的 Brackets 特性之一。
- [stylelint] - 既然我们 lint JS 代码，为什么不同时 lint LESS/SASS/CSS 代码呢？这个扩展有助于快速清理写得比较随意的 CSS。
- [Live Server] - 最佳本地开发服务器，支持实时重载静态和动态页面（甚至支持 PHP！）
- [Version Lens] - 将 package.json 中指定的依赖和开发依赖更新到最新版本。由 [Mihail] 推荐。
- [DotENV] - 为 .env 文件增加高亮支持，有时候我需要推送代码到 Heroku、Netlify……

[CSS Peek]: https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek 
[stylelint]: https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint
[Live Server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer 
[Version Lens]: https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens
[Mihail]: https://dev.to/qm3ster
[DotENV]: https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv

## 美观抓屏

- [Polacode] - 高亮代码并抓屏，展示下你的代码配色方案。想在教程或文档中提供代码示例时很有用。

[Polacode]: https://marketplace.visualstudio.com/items?itemName=pnp.polacode 

## 多个实例

- [Settings Sync] - 使用私密 gist 保存配置文件，在多个 VS Code 实例间同步设置、代码片段、主题、文件图标、任务、键绑定、工作区、扩展。这个扩展让我只需使用两个简单命令，便可同步笔记本、工作台式机、家用台式机的 VS Code。
- [EditorConfig] - 使用 .editorconfig 文件中的配置覆盖用户/工作区配置，让开发团队在同一个项目内统一特定配置。

[Settings Sync]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
[EditorConfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

虽然我还装了很多其他插件，不过它们主要针对我使用的环境（前端 web + Azure 云），所以就这样吧。我希望，在你日常使用 VS Code 的过程中，这些扩展能有帮助。

你早就装了这些扩展？喜欢这些扩展？讨厌这些扩展？有其他我没提到的值得一试的插件？欢迎留言！

## 值得一提

根据读者留言反馈，我新增了一些值得列入的扩展：

- [Import Cost] - 显示 import 语句的文件尺寸开销。由 [miku86] 推荐。
- [Window Colors] - 运行多个 VS Code 实例？每个窗口使用一种颜色，免得忘了哪个项目在哪个窗口里。由 [Jefry Pozo] 推荐。
- [Prettier] - 美化代码，使其更为清晰。Stackoverflow 使用 Prettier 显示代码片段。不过，它无法处理 `.js/.ejs/.jade/.pug` 模板中的 HTML，所以在很多静态站点生成器下效果不佳。

[Import Cost]: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
[miku86]: https://dev.to/miku86
[Window Colors]: https://marketplace.visualstudio.com/items?itemName=stuart.unique-window-colors
[Jefry Pozo]: https://dev.to/jefrypozo
[Prettier]: https://github.com/prettier/prettier-vscode
