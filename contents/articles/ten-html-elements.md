---
title: 你可能不知道的 10 个 HTML 元素
date: 2019-06-10
tags:
coverImage: "./images/1*8yz3hkO3ynHV2qYGARynJg.jpeg"
summary: audio、blockquote、output、picture、progress、meter、template、time、video、wbr
---

[Emma Wedekind] 原作，授权 [New Frontend](https://nextfe.com/) 翻译。

[Emma Wedekind]: https://dev.to/emmawedekind/10-html-element-you-didnt-know-you-needed-3jo4 

我都记不得听到过多少次「HTML 很容易」的说法。尽管我同意，相比其他编程语言，HTML 也许学起来要容易一些，但你不该理所当然地认为它不值一提。

HTML 是强大的标记语言，在运用得当的情况下，可以为 web 应用提供结构和强大的无障碍访问功能。

因此，今天我们将了解你可能不知道的十个 HTML 元素，希望它们有助于你创建更便于无障碍访问，结构健全的 web 应用。

如果你想要了解更多 HTML 元素，可以访问 [W3Schools]。（译者注：相比 W3Schools，个人更偏好 [MDN]。）

[W3Schools]: https://www.w3schools.com/tags/
[MDN]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

## Audio

`<audio>` 标签定义声音，例如音乐或其他音频流。当前支持的文件格式有：MP3、WAV、OGG。

```html
<audio controls>
  <source src="cat.ogg" type="audio/ogg">
  <source src="cat.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

## Blockquote

`<blockquote>` 标签指定引用自他处的内容。

```html
<blockquote cite="https://codingcoach.io/">
  Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world.
  It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate.
  This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost.
  Coding Coach is created by the people, for the people.
</blockquote>
```

## Output

`<output>` 标签表示计算的结果。下面的例子中，加号和等号意味着第一项输入值和第二项输入值的和将「输出」至 output 标签；output 标签的可选属性 `for` 指明了加数的元素 id。

```html
<form oninput="totalWeight.value=parseInt(catAWeight.value)+parseInt(catBWeight.value)">
  0<input type="range" id="catAWeight" value="50">100
  +<input type="number" id="catBWeight" value="50">
  =<output name="totalWeight" for="catAWeight catBWeight"></output>
</form>
```

## Picture

`<picture>` 标签可用于指定图像来源。使用 `<picture>`，可指定适配浏览器视图的多张图像。

picture 标签包含两种不同的标签：一个以上 `<source>` 元素，一个 `<image>` 元素。

source 元素的属性如下：

- `srcset`（必备）：定义显示图像的 URL
- `media`：接受任何 CSS 定义下合法的媒体请求
- `sizes`：定义单个宽度值，单个媒体请求和宽度值，或逗号分割的列表（每个列表项为媒体请求和宽度值）
- `type`：定义 MIME 类型

浏览器根据属性值加载最合适的图像；采用首个满足条件的 `<source>` 元素，并忽略后续 source 元素。

`<img>` 标签提供向后兼容性（浏览器可能不支持 picture 元素，或所有 `<source>` 标签均不匹配）。

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_cat_fat.jpg">
  <source media="(min-width: 465px)" srcset="img_cat_fluffy.jpg">
  <img src="img_kitten.jpg" alt="Kitten" style="width:auto;">
</picture>
```

## Progress

`<progress>` 表示任务的进展。

`<progress>` 标签并未取代 `<meter>` 标签，因此磁盘用量、请求结果之类的地方应该使用 `<meter>` 标签。

```html
<progress value="42" max="100"></progress>
```

## Meter

`<meter>` 标签定义了特定区间内的标量测度，或者一个比率。

`<meter>` 标签可用于显示磁盘用量或搜索结果相关性。

`<meter>` 标签不应用于任务进度；任务进度之类的地方应该使用 `<progress>` 元素。

```html
<meter value="4" min="0" max="10">4 out of 10</meter><br>
<meter value="0.3">30%</meter>
```

## Template

`<template>` 标签用来表示重复使用的模板代码，对用户隐藏。

```html
<template>
  <h2>Cat</h2>
  <img src="img_cat.jpg">
</template>
```

配合 JavaScript 进行渲染：

```js
function showMyTemplate() {
  const myTemplate = document.querySelector('template');
  const templateClone = myTemplate.content.cloneNode(true);
  document.body.appendChild(templateClone);
}
```

## Time

`<time>` 标签定义人类可读的日期时间，能够用来以机器可读的形式编码日期时间，以便客户端在用户日程中加入生日提醒或计划事件。此外，也有助于搜索引擎提供「智能」搜索结果。

```html
<p>My cat wakes up at <time>11:00</time> each day.</p>

<p>I have a date with my cat on <time datetime="2019-12-25 20:00">Christmas</time>.</p>
```

## Video

`<video>`　标签指定电影剪辑或视频流。支持的格式包括 MP4、WebM、Ogg。

```html
<video width="320" height="240" controls>
  <source src="catMovie.mp4" type="video/mp4">
  <source src="catMovie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## WBR

如果有一长串文本，可以使用 `<wbr>` 标签指定文本比较理想的换行位置。

```html
<p>super longggggggggggggggggggggggggggggggggggggggggggg<wbr>aaaaa</wbr>bbbbbb</p>
```

我希望这十个 HTML 元素为你提供了创建炫酷应用的新工具。