# Java 学习博客

这是一个使用 **VitePress** 搭建的 Java 学习博客项目。

你可以用它来记录：

- JavaSE 学习笔记
- 每天的学习心得
- 代码练习
- 学习过程中遇到的问题
- 复习总结

博客文章使用 **Markdown** 编写，不需要写复杂的前端代码。

---

## 1. 这个项目是做什么的？

这个项目相当于一个“个人 Java 学习网站”。

你平时学习 Java 时，可以把笔记写到 `docs` 文件夹里面。启动项目后，就可以在浏览器中看到一个网页形式的博客。

例如：

- 学完 Java 基础，可以写一篇 `Java 基础.md`
- 学完面向对象，可以写一篇 `面向对象.md`
- 遇到难理解的问题，可以写一篇学习心得

---

## 2. 项目使用的技术

本项目使用的是：

- **Node.js**：运行前端工具的环境
- **npm**：Node.js 自带的包管理工具
- **VitePress**：用 Markdown 生成静态网站的工具
- **Markdown**：写文章用的文本格式

你不需要一开始就完全理解它们。

简单理解：

```text
Markdown 负责写内容
VitePress 负责把 Markdown 变成网页
npm 负责启动和管理项目
浏览器负责查看博客效果
```

---

## 3. 项目目录说明

当前项目结构大概是这样：

```text
新建文件夹/
├─ docs/
│  ├─ index.md
│  ├─ javase/
│  │  ├─ index.md
│  │  ├─ java-basic.md
│  │  ├─ oop.md
│  │  └─ collections.md
│  ├─ thoughts/
│  │  ├─ index.md
│  │  ├─ first-oop.md
│  │  └─ collections-review.md
│  └─ .vitepress/
│     └─ config.mjs
├─ package.json
├─ package-lock.json
├─ README.md
└─ node_modules/
```

### 重要文件说明

#### `package.json`

项目的配置文件，里面写了可以运行的命令。

目前主要有这几个命令：

```json
{
  "scripts": {
    "dev": "vitepress dev docs --host 0.0.0.0 --port 8080",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs --host 0.0.0.0 --port 8080"
  }
}
```

#### `docs/index.md`

博客首页。

打开网站后，最先看到的页面就是它。

#### `docs/javase/`

这里放 JavaSE 学习笔记。

例如：

- Java 基础
- 面向对象
- 集合框架
- 异常
- IO 流
- 多线程

#### `docs/thoughts/`

这里放学习心得。

例如：

- 今天学 Java 的感受
- 某个知识点终于理解了
- 写代码时踩过的坑
- 复习总结

#### `docs/.vitepress/config.mjs`

博客的配置文件。

主要控制：

- 网站标题
- 顶部导航栏
- 左侧侧边栏
- 文章目录链接

#### `node_modules/`

这是 npm 自动安装的依赖文件夹。

一般不要手动修改它，也不要把自己的文章写到这里。

---

## 4. 如何启动博客？

打开 PowerShell，进入当前项目文件夹：

```powershell
cd C:\Users\Administrator\Desktop\新建文件夹
```

然后运行：

```powershell
npm run dev
```

如果看到类似下面的内容，说明启动成功：

```text
vitepress v1.x.x
Local:   http://localhost:8080/
Network: http://192.168.x.x:8080/
```

然后打开浏览器访问：

```text
http://127.0.0.1:8080/
```

或者：

```text
http://localhost:8080/
```

---

## 5. 如何让局域网其他设备访问？

本项目的启动命令已经写了：

```text
--host 0.0.0.0 --port 8080
```

所以同一个 Wi-Fi 或局域网里的其他设备，可以通过你的电脑 IP 访问。

### 第一步：查看电脑 IP

在 PowerShell 输入：

```powershell
ipconfig
```

找到类似这样的 IPv4 地址：

```text
IPv4 地址 . . . . . . . . . . . . : 192.168.1.59
```

### 第二步：其他设备访问

假设你的电脑 IP 是 `192.168.1.59`，那么其他设备浏览器输入：

```text
http://192.168.1.59:8080/
```

如果打不开，可能是 Windows 防火墙拦截了，需要允许 Node.js 或当前端口访问。

---

## 6. 如何停止博客？

启动后，PowerShell 窗口会一直运行。

如果你想停止博客，在 PowerShell 窗口按：

```text
Ctrl + C
```

如果提示是否终止批处理操作，输入：

```text
y
```

然后按回车。

---

## 7. 如何写一篇新的学习心得？

假设你想写一篇文章，标题是：

```text
我终于理解了 Java 方法
```

### 第一步：新建 Markdown 文件

在这个文件夹里新建文件：

```text
docs/thoughts/java-methods.md
```

注意：

- 文件名建议使用英文
- 不建议文件名里有空格
- 文件后缀必须是 `.md`

### 第二步：写文章内容

打开 `docs/thoughts/java-methods.md`，写入：

```md
# 我终于理解了 Java 方法

## 今天学了什么

今天学习了 Java 方法的定义和调用。

## 我的理解

方法就是把一段代码封装起来，之后可以重复使用。

## 示例代码

```java
public class Main {
    public static void sayHello() {
        System.out.println("你好，Java");
    }

    public static void main(String[] args) {
        sayHello();
    }
}
```

## 还没完全理解的地方

- 方法参数什么时候使用？
- 返回值什么时候使用？
```

### 第三步：把文章加入侧边栏

打开：

```text
docs/.vitepress/config.mjs
```

找到这一段：

```js
'/thoughts/': [
  {
    text: '学习心得',
    items: [
      { text: '目录', link: '/thoughts/' },
      { text: '第一次理解面向对象', link: '/thoughts/first-oop' },
      { text: '学习集合时的心得', link: '/thoughts/collections-review' }
    ]
  }
]
```

在 `items` 里面加一行：

```js
{ text: '我终于理解了 Java 方法', link: '/thoughts/java-methods' }
```

最终类似这样：

```js
'/thoughts/': [
  {
    text: '学习心得',
    items: [
      { text: '目录', link: '/thoughts/' },
      { text: '第一次理解面向对象', link: '/thoughts/first-oop' },
      { text: '学习集合时的心得', link: '/thoughts/collections-review' },
      { text: '我终于理解了 Java 方法', link: '/thoughts/java-methods' }
    ]
  }
]
```

保存后，浏览器页面会自动刷新。

---

## 8. 如何写一篇新的 JavaSE 笔记？

假设你想写一篇：

```text
Java 异常处理
```

### 第一步：新建文件

新建：

```text
docs/javase/exception.md
```

### 第二步：写文章

```md
# Java 异常处理

## 今天学了什么

- 什么是异常
- try-catch
- finally
- throw
- throws

## 我的理解

异常就是程序运行过程中出现的问题。

## 示例代码

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("不能除以 0");
        }
    }
}
```

## 容易混淆的点

- `throw` 是手动抛出异常
- `throws` 是声明方法可能抛出异常
```

### 第三步：加入侧边栏

打开：

```text
docs/.vitepress/config.mjs
```

找到 JavaSE 侧边栏：

```js
'/javase/': [
  {
    text: 'JavaSE 笔记',
    items: [
      { text: '目录', link: '/javase/' },
      { text: 'Java 基础', link: '/javase/java-basic' },
      { text: '面向对象', link: '/javase/oop' },
      { text: '集合框架', link: '/javase/collections' }
    ]
  }
]
```

加一行：

```js
{ text: '异常处理', link: '/javase/exception' }
```

---

## 9. Markdown 常用写法

### 一级标题

```md
# 一级标题
```

### 二级标题

```md
## 二级标题
```

### 列表

```md
- 第一项
- 第二项
- 第三项
```

### 有序列表

```md
1. 第一步
2. 第二步
3. 第三步
```

### 加粗

```md
**重要内容**
```

显示效果：**重要内容**

### 行内代码

```md
`System.out.println()`
```

显示效果：`System.out.println()`

### Java 代码块

````md
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```
````

---

## 10. 常用命令

### 启动开发服务器

平时写文章、看效果，用这个命令：

```powershell
npm run dev
```

访问：

```text
http://127.0.0.1:8080/
```

### 构建静态网站

如果以后要部署到服务器或 GitHub Pages，可以先构建：

```powershell
npm run build
```

构建成功后，会生成：

```text
docs/.vitepress/dist/
```

这个文件夹里就是最终生成的网站文件。

### 预览构建结果

构建完成后，可以运行：

```powershell
npm run preview
```

然后访问：

```text
http://127.0.0.1:8080/
```

---

## 11. 第一次使用时需要做什么？

如果你是第一次拿到这个项目，或者删除过 `node_modules` 文件夹，需要先安装依赖：

```powershell
npm install
```

安装完成后，再启动：

```powershell
npm run dev
```

如果你已经安装过依赖，平时只需要运行：

```powershell
npm run dev
```

---

## 12. 常见问题

### 问题 1：运行 `npm run dev` 提示命令错误

确认 `package.json` 里是这一行：

```json
"dev": "vitepress dev docs --host 0.0.0.0 --port 8080"
```

注意中间必须有 `dev`：

```text
vitepress dev docs
```

不是：

```text
vitepress docs
```

### 问题 2：浏览器打不开页面

先确认 PowerShell 里是否还在运行：

```powershell
npm run dev
```

如果 PowerShell 已经停止，浏览器就打不开。

然后确认访问地址是：

```text
http://127.0.0.1:8080/
```

不是：

```text
https://127.0.0.1:8080/
```

注意是 `http`，不是 `https`。

### 问题 3：局域网其他设备打不开

可能原因：

1. 两台设备不在同一个 Wi-Fi 或局域网
2. IP 地址写错了
3. Windows 防火墙拦截了
4. 博客服务没有启动
5. 端口不是 8080

### 问题 4：新增文章后侧边栏看不到

原因通常是：只新建了 `.md` 文件，但是没有把它加到 `docs/.vitepress/config.mjs` 的侧边栏里。

解决方法：

1. 打开 `docs/.vitepress/config.mjs`
2. 找到对应分类的 `items`
3. 添加文章链接

### 问题 5：页面显示 404

可能是链接写错了。

例如文件是：

```text
docs/thoughts/java-methods.md
```

侧边栏链接应该写：

```js
{ text: '我终于理解了 Java 方法', link: '/thoughts/java-methods' }
```

注意：

- 不需要写 `.md`
- 前面要有 `/thoughts/`

---

## 13. 推荐的写作方式

每篇文章可以按照这个模板写：

```md
# 标题

## 今天学了什么

写今天学习的知识点。

## 我的理解

用自己的话解释一遍。

## 示例代码

写一段能运行的小代码。

## 容易混淆的地方

记录自己容易忘、容易错的点。

## 今日问题

记录还没理解的问题，之后再回来补充。
```

这样写的好处是：

- 不只是复制知识点
- 能训练自己表达理解
- 以后复习时更容易看懂
- 能看到自己的进步

---

## 14. 适合你接下来添加的文章

可以从这些文章开始写：

```text
Java 基础学习总结
变量和数据类型
if、switch、循环的区别
方法到底是什么
第一次理解类和对象
封装、继承、多态学习心得
ArrayList 和 LinkedList 的区别
HashMap 为什么常用
异常处理学习总结
IO 流学习总结
多线程入门心得
```

---

## 15. 一句话总结

平时使用流程就是：

```text
启动博客 → 新建 Markdown 文章 → 写学习心得 → 加到侧边栏 → 浏览器查看效果
```

常用命令只有一个：

```powershell
npm run dev
```
