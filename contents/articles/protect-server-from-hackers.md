---
title: 如何防范服务器入侵
date: 2019-04-22
tags:
coverImage: "./images/patrick-hendry-1137079-unsplash.jpg"
summary: 最基本的服务器入侵防范措施：安装配置防火墙（ufw），关闭不必要的端口，SSH 仅使用密钥认证，安装配置 fail2ban 加固 SSH 服务。
---

[Vitaliy Kolesov] 原作，授权 [LeanCloud](https://leancloud.cn/) 翻译。

[Vitaliy Kolesov]: https://vkolesov.com/protected-your-server.html

加固服务器并不难，但有很多例行操作需要进行时，有可能会遗忘。以我为例，刚买的服务器就在两周内被人入侵了。有天早上我收到几封来自第三方的邮件，说我服务器上有东西在尝试入侵他们的服务器。所以，我需要快速解决这个问题。

## 如何查找漏洞

我碰到的情况比较简单，我执行了以下命令：

```sh
cat /var/log/auth.log |  grep Accepted
```

该命令返回了我的服务器上的成功认证记录，其中有一个 IP 不是我的。所以，是 SSH 服务被入侵了。

别忘了还有一个命令 `last`，这个命令返回最近成功登录的用户。

## 如何加固服务器

购买服务器后需要立刻进行的操作：

- 安装 **ufw**，简单易用的防火墙软件；
- 关闭除 SSH、HTTP(s) 外的所有端口；
- 安装配置 **fail2ban** 工具。这个工具基于 `/var/log/auth.log` 识别恶意行为并封禁 IP；
- 修改 sshd 配置，只使用密钥认证。

## 具体怎么做？

如果发生了入侵，你需要知道如何调查和清扫。最好的方式是重新创建 VPS。我就是这么做的。我在 hetzner 买了服务器，它的控制台提供了重新创建（移除旧 VPS，新建一个）VPS 并保留原 IP 的功能。 所以我重新创建了一个 VPS。之后我在本地计算机上使用 `ssh-keygen` 工具（标准 OpenSSH 包的一部分）生成了 SSH 密钥：（下面的命令同时适用于 Linux 和 macOS）

```sh
ssh-keygen
```

该命令在 `~/.ssh` 目录中创建了一对密钥。之后运行以下命令：

```sh
ssh-copy-id you_user@your_server_id
```

该命令会将新创建的公钥上传到服务器。接下来，登录服务器并修改 sshd 配置：

```sh
nano /etc/ssh/sshd_config
```

修改配置文件中的 PasswordAuthentication 配置：

```
PasswordAuthentication no
```

这一配置禁用了使用密码登录（只能使用密钥登录）。

## 安装配置 ufw 和 fail2ban

服务器上我用的系统是 Ubuntu，所以通过以下命令可以安装这两个工具：

```sh
apt install ufw fail2ban
```

只开 ssh 和 http(s) 端口：

```sh
ufw allow ssh
ufw allow 80
ufw allow 443
```

启用 ufw：

```sh
ufw enable
```

接下来配置 fail2ban 工具：

```sh
# 备份默认配置
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
nano /etc/fail2ban/jail.local
```

在配置文件中查找 `banaction =`，将其设为 `ufw`。然后重新加载 fail2ban 配置：

```sh
fail2ban-client reload
```

这样简单配置之后，来自同一 IP 的三次错误登录尝试将封禁该 IP 10 分钟。我个人将封禁期限调成了 7 天。以下命令可以查看 fail2ban 的状态：

```sh
fail2ban-client status sshd
```

我的配置是这样的：

```
Status for the jail: sshd
|- Filter
|  |- Currently failed:	1
|  |- Total failed:	6
|  `- File list:	/var/log/auth.log
`- Actions
   |- Currently banned:	1
   |- Total banned:	2
   `- Banned IP list:	187.109.168.150
```

如你所见，有一个 IP 已经被防火墙封禁了。我们也可以通过 ufw 的报告确认这一点：

```
ufw status
Status: active

To                         Action      From
--                         ------      ----
Anywhere                   REJECT      187.109.168.150           
80/tcp                     ALLOW       Anywhere                  
22                         ALLOW       Anywhere                  
443                        ALLOW       Anywhere           
```

可以配置 fail2ban，如果有 IP 被封，给你发一封电子邮件。

题图：[Patrick Hendry](https://unsplash.com/photos/6CfpUEmNWAU)