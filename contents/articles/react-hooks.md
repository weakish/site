---
title: 快速入门 React hooks + 后端集成
date: 2019-04-12
tags:
coverImage: "./images/react-hooks.png"
summary: 2019 年 2 月发布的 React 16.8 正式引入了 hook 的功能。这篇文章就介绍一下最常用的 state hook，以及在这种新的方式下怎么与后端 API 通讯。
---

作者：[LeanCloud 江宏](https://1byte.io)

2019 年 2 月发布的 React 16.8 正式引入了 hook 的功能。它使得 function 组件也像 class 组件一样能维护状态，所有的组件都可以写成函数的形式，比起原有的以 class 的多个方法来维护组件生命周期的方式，简化了代码，也基本消除了因为 `this` 绑定的问题造成的难以发现的 bug。这篇文章就介绍一下最常用的 state hook，以及在这种新的方式下怎么与后端 API 通讯。

本文以一个管理任务的 Todo list 应用为例，可以增加新的任务，点击可以把任务标记为完成。部署好的效果可以在[这里](https://hook-demo.netlify.com/)看到，代码在[这个 GitHub repo](https://github.com/hjiang/react-hook-demo)。这个 demo [使用 LeanCloud 作为存储数据的后端](https://leancloud.cn)，用的是一个 LeanCloud 开发版应用，所以可能遇到请求数超限的情况，建议在本地运行并替换进自己的 AppId 和 AppKey。

这个应用只有一个叫 `App` 的组件：

```js
function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(undefined);
  const [error, setError] = useState('');
```

开头先定义了它使用的状态。`useState` 的参数是状态的初始值，它会返回一对结果：用来读取这个状态的一个只读引用，以及一个设置状态新值的函数。这里创建了三个状态：
- `inputValue`: 输入新任务的 `<input>` 元素的当前值
- `todos`: 当前显示的任务。这里初始值设为 `undefined` 表示尚未加载，而 `[]` 则意味着已经加载过，但是为空。
- `error`: 当前显示的状态信息

每次这个组件被重新渲染时，`App()` 这个函数都会被调用。每个 `useState` 只有第一次被调用时返回的状态是初始值，之后每次都会返回已经记住的当前值。这里有三个状态，React 是用调用 `useState` 的顺序来区分他们。可以理解为 `App()` 的所有状态存储在一个数组里，第一个 `useState()` 返回的是第一个状态，第二个 `useState()` 返回的是第二个状态，以此类推。所以使用 hook 必须保证这个组件函数每次运行中：
1. 对 `useState()` 的调用次数必须是一样的。
2. 与各状态对应的 `useState()`的调用顺序是一样的。

这就意味着 `useState()` 的调用不能放在条件分支或循环中。为了避免出错，最好把所有 `useState()` 调用放在函数开头。

接下来是添加一个任务的函数 `addTodo`：
```js
  const addTodo = () => {
    saveTodo(inputValue).then(todo => {
      setInputValue('');
      setTodos(prev => [todo].concat(prev));
    }).catch(setError);
  };
```
这里 `saveTodo()` 是一个 helper 函数，会在文末介绍。在后端保存了新任务后，会把输入清空，并把新的任务加到用于显示的任务列表的前面。这里使用了设置新状态的两种方式：`setInputValue('')` 直接设置新值，`setTodos(prev => [todo].concat(prev))` 是传递一个更新状态的函数。后者通常在新状态依赖于旧状态的时候使用。

再下一步检查任务列表有没有初始化过，如果没有的话，就查询后端数据把它初始化：
```js
  if (todos === undefined) {
    loadTodos().then(setTodos).catch(setError);
  }
```

然后是定义如何切换任务的完成状态：
```js
  const toggle = item => {
    item.set('finished', !item.get('finished'));
    item.save()
      .then(() => setTodos(prev => prev.slice(0)))
      .catch(setError);
  };
```
这里值得注意的是在设置 `todos` 的新值的时候用 `prev.slice(0)` 把这个数组复制了一份。这是因为切换一个任务的状态只是这个数组中一个元素的一个属性发生了改变。在使用 hook 更新状态时，作为一个优化，React 会用 `Object.is()` 比较新老状态，如果在这个语义下它们相等，React 会认为状态没有改变而不重新渲染这个组件。`Object.is()` 认为满足以下条件之一的两个值相等：
- 两个都是 `undefined`
- 两个都是 `null`
- 两个都是 `true` 或者都是 `false`
- 两个都是字符串并且有相同的长度，相同的字符以相同的顺序出现
- 两个是同一个对象
- 两个都是数字并且：
	- 都是 `+0`
	- 都是 `-0`
	- 都是 `NaN`
	- 都不是零或 `NaN` 并有相同的值

这对于数字、布尔、字符串这样 [immutable](https://www.sitepoint.com/immutability-javascript/) 的简单类型来说不是问题，但是对于数组和对象来说，就意味着只有传递一个新的对象才会触发渲染。好在这里 `slice(0)` 只是做一个浅拷贝，没有复制数组引用的对象，所以代价是比较低的。

最后是把上面👆的一切放到渲染结果里：
```js
  return (
    <div className={AppStyles.app}>
      <div className={AppStyles.error}>{error.toString()}</div>
      <div className={AppStyles.add}>
        <input placeholder="What to do next?" value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               onKeyUp={e => { if (e.keyCode === 13) addTodo(); } } />
        <input type="button" value="↩" />
      </div>
      <ul>
        {todos && todos.map(item =>
                   <li key={item.getObjectId()}
                       onClick={() => toggle(item)}
                       data-finished={item.get('finished')}>
                     {item.get('content')}
                   </li> )}
      </ul>
    </div>
  );
}
```

下面两个函数是 `App()` 里用到的从 LeanCloud 更新和加载数据的 `saveTodo()` 和 `loadTodos()`。
```js
function saveTodo(content) {
  const Todo = LC.Object.extend('Todo');
  const todo = new Todo();
  todo.set('content', content);
  todo.set('finished', false);
  return todo.save();
}

function loadTodos() {
  const query = new LC.Query('Todo');
  query.equalTo('finished', false);
  query.limit(20);
  query.descending('createdAt');
  return query.find();
}
```

有的人认为 React 的 hook 让 React 变得更加「函数式」了。我的看法恰恰相反。把什么都变成了 JavaScript 的 function 并不意味着程序更 functional 了。在有 hook 之前，React 的组件分为 class 组件和 function 组件，本来 function 组件可以看作是纯函数，传递进去的 props 能决定渲染结果，是 functional 的。有了 hook 之后 function 也可以有状态了，所以变成了披着 function 外衣的 object。如果不仔细了解实现机制的话，很容易产生一些微妙的 bug。不过也不可否认，使用 hook 开发简化了组件生命周期的概念，减少了代码量，在开发者熟悉了这个新模式之后，还是一个很有价值的改变。

Photo by Chris Scott on Unsplash
