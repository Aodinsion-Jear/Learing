# Java 学习博客

一个用 **VitePress** 搭建的个人 Java 学习博客，用来记录学习笔记和学习感悟。

在线访问：https://aodinsion-jear.github.io/Learing/

---

## 目录结构

```text
docs/
├─ index.md             首页
├─ javase/              JavaSE 学习笔记
│  ├─ index.md          笔记目录
│  ├─ java-basic.md
│  ├─ oop.md
│  └─ collections.md
├─ thoughts/            学习感悟
│  ├─ index.md          感悟目录
│  ├─ first-oop.md
│  └─ collections-review.md
└─ .vitepress/
   └─ config.mjs        网站配置（导航 + 侧边栏）
```

记住两个核心目录：

- **`docs/javase/`** → 放学习笔记
- **`docs/thoughts/`** → 放学习感悟

---

## 启动本地预览

```powershell
npm run dev
```

浏览器访问：

```text
http://127.0.0.1:8080/
```

停止：在 PowerShell 按 `Ctrl + C`。

---

## 新增一篇 JavaSE 学习笔记

以新增 “Java 异常处理” 笔记为例，分 3 步。

### 第一步：新建 Markdown 文件

在 `docs/javase/` 里新建文件，例如：

```text
docs/javase/exception.md
```

文件名要求：

- 使用英文小写
- 不要有空格，用 `-` 连接，例如 `io-stream.md`
- 后缀必须是 `.md`

### 第二步：写内容

打开刚新建的 `exception.md`，按这个模板写：

````md
# Java 异常处理

## 今天学了什么

- 什么是异常
- try-catch
- finally
- throw / throws

## 我的理解

异常就是程序运行过程中出现的问题，需要捕获处理。

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
- `throws` 是方法声明可能抛出异常
````

### 第三步：加进侧边栏

打开 `docs/.vitepress/config.mjs`，找到 `/javase/` 这一段：

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

在 `items` 数组里加一行：

```js
{ text: '异常处理', link: '/javase/exception' }
```

注意：

- `link` 是 `/javase/文件名`（不带 `.md`）
- 文件名必须和你新建的文件一致

保存后浏览器自动刷新，左侧侧边栏就会出现新文章。

---

## 新增一篇学习感悟

以新增 “我终于理解了 Java 方法” 为例。

### 第一步：新建文件

```text
docs/thoughts/java-methods.md
```

### 第二步：写内容

```md
# 我终于理解了 Java 方法

## 今天的感悟

今天学方法的时候，第一次真正理解“封装”是什么意思。

## 我的理解

方法就是把一段代码起个名字，之后可以反复调用，不用每次都重写。

## 今日问题

- 什么时候该用参数？
- 什么时候该用返回值？
```

### 第三步：加进侧边栏

打开 `docs/.vitepress/config.mjs`，找到 `/thoughts/` 这一段，在 `items` 里加入：

```js
{ text: '我终于理解了 Java 方法', link: '/thoughts/java-methods' }
```

---

## 推送到线上（GitHub Pages 自动部署）

写完新文章后，在 PowerShell 执行：

```powershell
git add .
git commit -m "新增感悟：一些话"
git push
```

推送后 GitHub Actions 会自动构建，1–2 分钟后刷新博客即可看到。

部署进度：
https://github.com/Aodinsion-Jear/Learing/actions

---

## Markdown 速查

```md
# 一级标题
## 二级标题
### 三级标题

**加粗**

- 无序列表项
- 第二项

1. 有序列表项
2. 第二项

`行内代码`

> 引用块

[链接文字](https://example.com)
```

代码块写法（三个反引号）：

````md
```java
System.out.println("Hello Java");
```
````

支持的语言：`java`、`js`、`json`、`bash`、`powershell`、`text` 等。

---

## 写作建议

每篇文章按这个结构写，长期坚持效果最好：

```text
# 标题

## 今天学了什么 / 今天的感悟
## 我的理解
## 示例代码（笔记类必写）
## 容易混淆的地方
## 今日问题
```

好处：

- 不只是抄知识点，能训练自己的理解
- 复习时一眼能看到当时想明白的点和卡住的点
- 看得到自己的进步

---

## 常用命令

| 命令 | 用途 |
|------|------|
| `npm run dev` | 启动本地预览 |
| `npm run build` | 本地构建生产版本（一般不用） |
| `git add .` | 添加修改 |
| `git commit -m "..."` | 提交修改 |
| `git push` | 推到 GitHub，自动部署 |

---

## 三句话流程总结

1. 在 `docs/javase/` 或 `docs/thoughts/` 新建 `.md` 文件，写内容
2. 在 `docs/.vitepress/config.mjs` 的对应侧边栏里加一行
3. `git add . && git commit -m "..." && git push`
