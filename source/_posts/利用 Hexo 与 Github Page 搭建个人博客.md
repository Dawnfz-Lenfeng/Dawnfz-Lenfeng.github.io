---
title: 利用 Hexo 与 Github Page 搭建个人博客
date: 2024-07-29
tags:
  - hexo
  - github
category:
  - 教程
toc: true
mathjax: false
---
一次偶然的机会，遇到了[Yihui Xie | 谢益辉](https://yihui.org/)大佬的博客，第一反应是简洁！漂亮！能在一个世外桃源一般的地方表达自己，就像[初遇本站架构 - Tan Jay | 唐 洁 (tang-jay.github.io)](https://tang-jay.github.io/cn/2022/06/17/glimpse/)[^1]里面所说，“我的心被狙中了”！一阵莫名的冲动让我想建立一个自己的博客。

于是趁不多闲余时间，大约花了一个下午的时间把本站构建起来，效率算高，总体来说难度不算大，因此总结一下踩到的坑和帮助过我的资料。
<!--more-->

## 准备工作

### 本地环境
在开始之前，请确保安装以下软件：
- Git：https://git-scm.com/ 
- Node.js：http://nodejs.cn/

按照提示直接安装即可。安装完毕以后，可以在 cmd 里面通过以下命令检查是否安装成功：
```bash
node -v
npm -v
git -v
```

正确安装会输出版本号信息。

### 本地 ssh 连接 Github
使用 ssh 连接至 github 是程序员最基本的操作，首先先确保自己拥有 github 账号。

打开 cmd 或者 powershell 面板，输入以下命令配置本机 ssh：
```shell
ssh-keygen -t rsa -C "邮件地址"
```

连续回车后最终会生成文件至 `C:\Users\用户名\.ssh\` 中。找到 `.ssh\id_rsa.pub` 文件，用记事本打开并复制里面的内容，打开你的github主页，进入`Settings` -> `SSH and GPG keys` -> `New SSH key`：
![](/images/ssh.png)

将 `id_rsa.pub` 里面的内容到复制到 `Key` 中即可。

随后使用以下命令进行连接测试：
```shell
ssh -T git@github.com
```

出现以下提示词即为连接成功：
```
Hi <你的用户名>! You've successfully authenticated, but GitHub does not provide shell access.
```

如果出现
```
ssh: connect to host github.com port 22: Connection timed out.
```

则尝试更改端口号为 443。即在先前 `C:\Users\用户名\.ssh\` 目录下新建 `config` 文件，用记事本打开，输入：
```
Host github.com
  User git
  HostName ssh.github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa
  Port 443
```

再尝试用 `ssh -T git@github.com` 测试，基本能解决问题。
### npm 镜像配置
在开始之前，由于国内网络问题，推荐使用阿里定制的 cnpm 命令行工具代替默认的 npm：
```shell
npm install -g cnpm --registry=http://registry.npmmirror.com
```

随后可检查是否安装成功：
```shell
cnpm -v
```

安装成功之后，以后安装依赖包的方式和 npm 的是一样的，只是 npm 的命令换成是 cnpm 就可以了，比如：
```shell
cnpm install express
```

## 网站部署
### Hexo 本地部署
本地环境部署完成后，hexo 的部署非常简单！

首先进入 cmd 窗口输入指令安装 hexo：
```shell
cnpm install -g hexo-cli
```

创建一个目录，例如 `D:/blog`，进入该目录中，输入
```shell
hexo init
```

但注意此处可能会因为网络问题无法初始化，需要一点运气成分。如果挂梯子仍无法解决，参考以下解决方案[^2]：

本质上 `hexo init` 等价于以下命令：
```
git clone https://github.com/hexojs/hexo-starter.git blog
cd blog
git submodule init
git submodule update
npm i
```

因此只需替换成镜像网站即可：
```
git clone https://gitee.com/weilining/hexo-starter.git blog
cd blog
git submodule init
git submodule update
cnpm i
```

如果配置成功，命令行输入：
```shell
hexo s
```

默认会在 http://localhost:4000/ 构建网页，初始会看到：
![](/images/hexo_init.png)

### Hexo 部署至 Github
首先在 Github 中创建新的仓库，命名为 `<username>.github.io`.
![](/images/new_repo.png)

我们再安装 hexo-deployer-git：
```bash
cnpm install hexo-deployer-git --save
```

然后修改 Hexo 目录下的 `_config.yml` 文件：
```yaml
deploy:
  type: git
  repository: git@github.com:<username>/<username>.github.io.git
  branch: main
```

修改完成后运行以下命令：
```bash
hexo d
```

稍等片刻访问 https://username.github.io  即可看到页面。
### 常用命令

在生成的 Hexo 目录中，目录结构为
- `node_modules`：依赖包 
- `public`：存放生成的页面 
- `scaffolds`：生成文章的一些模板 
- `source`：用来存放你的文章 
- `themes`：主题
- `_config.yml`: 博客的配置文件

其中所有文章会存放于`source/_posts`之下，如果要写文章可以在命令行输入：
```shell
hexo new post "My New Post"
```

此时会调用 `scaffolds/post.md` 模板，自动在`source/_posts` 中生成 `My New Post.md` 文件。实际上，也可以自己手动创建，只需将注意配置好 md 文件中的头信息即可。

在 Hexo 中构建和发布网页只需熟悉以下几个命令即可：

- 清理页面缓存
```shell
hexo clean
```

- 编译页面
```bash
hexo generate
hexo g
```

- 建立本地服务器，默认地址为 http://localhost:4000/ 
```shell
hexo server
hexo s
```

- 部署到远程服务器
```shell
hexo deploy
hexo d
```

更多信息可以访问 [Hexo 官方文档](https://hexo.io/zh-cn/docs/)。
## 个性化配置
### 主题选择

可以在[Hexo 主题官网](https://hexo.io/themes/)浏览心仪的主题，访问对应 github 仓库，使用 `git clone` 进行下载。以本站的 Maupassant 为例（不希望你和我撞车！）：
```shell
git clone https://github.com/tufu9441/maupassant-hexo.git themes/maupassant
```

如果网络问题下载不下来可以使用镜像：
```shell
git clone https://gitclone.com/github.com/tufu9441/maupassant-hexo.git themes/maupassant
```

然后编辑Hexo目录下的 `_config.yml`，将 `theme` 的值改为你的主题文件夹名即可。具体的主题配置可以查询主题自带的文档，例如[本站主题文档](https://www.haomwei.com/technology/maupassant-hexo.html)。
### Markdown 引擎优化

Hexo 默认搭配的 Markdown 渲染器是 `hexo-renderer-marked`，但其支持的渲染格式有限，因此更推荐使用功能更加强大，渲染速度更快的 `hexo-renderer-markdown-it` 渲染器。

首先卸载原有的 `hexo-renderer-marked`，并安装 `hexo-renderer-markdown-it`：

```bash
cnpm un hexo-renderer-marked --save
cnpm i hexo-renderer-markdown-it --save
```

同时还可以安装以下三个扩展：
```bash
cnpm i markdown-it-checkbox 
cnpm i markdown-it-imsize 
cnpm i markdown-it-expandable
```

然后将以下文本复制粘贴到 Hexo 的配置文件 `_config.yml` 的尾部：
```yaml
markdown:
  preset: "default"
  render:
    html: true
    xhtmlOut: false
    langPrefix: "language-"
    breaks: true
    linkify: true
    typographer: true
    quotes: "“”‘’"
  enable_rules:
  disable_rules:
  plugins:
    - markdown-it-abbr
    - markdown-it-cjk-breaks
    - markdown-it-deflist
    - markdown-it-emoji
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-mark
    - markdown-it-sub
    - markdown-it-sup
    - markdown-it-checkbox
    - markdown-it-imsize
    - markdown-it-expandable
    - name: markdown-it-container
      options: success
    - name: markdown-it-container
      options: tips
    - name: markdown-it-container
      options: warning
    - name: markdown-it-container
      options: danger
  anchors:
    level: 2
    collisionSuffix: ""
    permalink: false
    permalinkClass: "header-anchor"
    permalinkSide: "left"
    permalinkSymbol: "¶"
    case: 0
    separator: "-"
```

此时就可以享受功能更加强大的 markdown 渲染器，功能包括不限于 emoji 支持、脚注支持等。具体可参见[【Hexo】选择更高级的Markdown渲染器_hexo-renderer-marked-CSDN博客](https://blog.csdn.net/qq_42951560/article/details/123596899)。
### Obsidian 工具链
关于写笔记的工具，这里推荐 Obsidian，能够很好的与 Hexo 进行联动兼容。

首先去[Obsidian 官网](https://obsidian.md/)下载 Obsidian，打开后在 `source` 目录下创建 Obsidian 仓库。此时我们可以直接在 `_posts` 下创建笔记，完美兼容 Obsidian 生态。

我们还可以使用 Obsidian 的模板系统。在`source/` 目录下创建新文件夹命名为 `template`。在 Obsidian 的设置里面将其设置为模板文件夹，并将 Hexo 目录下的 `scaffolds/` 中所有文件复制进该文件夹。
![](/images/template.png)

其中 `post.md` 的配置可参考：
```text
---
title: {{title}}
date: {{date}}
tags: 
toc: "false"
mathjax: "false"
---

<!--more-->
```

其中 `<!--more-->` 之前的信息会自动变为摘要，而 `{{title}}` 与 `{{date}}` 都是 Obsidian 内置属性，在插入模板时可以根据文章名和系统时间自动生成，格式可以在设置里面更改。

需要写笔记时，只需在 Obsidian 左侧点击“插入模板”即可一键配置头信息。
![](/images/insert_template.png)

此时需要在 Hexo 目录下的 `_config.yml` 中添加 `exclude` 信息，避免页面构建时读取此类文件夹：
```yaml
exclude:
  - ".obsidian/**/*"
  - "template/*"
```

最后注意，在 Obisidian 中插入图片必须使用 md 格式，即 `![]()` 格式，而并非 Obsidian 的 `![[]]` 格式，并且路径需要使用绝对路径，例如 `\images\1.png`。

[^1]: 另外也很佩服这位博客作者，能在四天零基础构建（包括学习 git ），动手能力也了得！
[^2]: [彻底解决 hexo init 卡顿问题 | Ln's Blog (weilining.github.io)](https://weilining.github.io/274.html)