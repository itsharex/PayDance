# Web Preview 质量验证

> [English version →](web-preview-qa_EN.md)

验证标准：本地服务 + 内置 Playwright + 多视口截图 + DOM/console 双校验。目标不是”截到一张图”，而是确认线上橱窗在真实浏览器里能稳定展示、切换主题、保留关键文案和布局边界。

## 不要使用的方法

不要用 headless Chrome/CDP/CLI screenshot 做 Web Preview 验证。此前验证已证明这条路线可能得到全白截图却仍返回正常退出码，不能作为发布信号。

## 标准流程

1. 启动本地 Web Preview dev server，记录本地 URL。
2. 用内置 Node + Playwright 打开页面。
3. 按固定视口截图：桌面 `1440x900`，中等 `960x760`，移动 `390x844`。
4. 浅色和深色主题都要覆盖；只改首屏也不能只看浅色。
5. 同步做 DOM 校验：页面标题、`Web Preview · appVersion` 版本号、软件展示区、移动端展示区不消失也不塌缩。
6. 收集 browser console 与 page error，确认无严重报错。
7. 截图保存到本次运行专属的临时目录：`C:\Users\mrbao\AppData\Local\Temp\paydance-web-preview-qa-{version}-{commit}-{timestamp}`。不要复用固定目录，否则图片查看器可能缓存旧截图。
8. 验证完成后关闭本地服务，避免占用端口。

## 命令

```powershell
npm run qa:web-preview
```

脚本会自动启动 `npm run dev:web`，用内置 Playwright 完成三种视口截图与 DOM/console 校验，然后关闭本地服务。截图和 `summary.json` 写入本次运行的唯一临时目录；`summary.json` 记录 run id、commit 和页面实际读取到的中英文 DOM 文案，避免误把旧截图当新证据。

## 通过标准

- 三种视口都有非空截图，首屏无文字重叠、按钮溢出或主体塌缩。
- 中英文文案来自当前页面 DOM，而非旧截图或手工判断。
- 浅色/深色主题切换后，预览窗口边缘无明显闪白、错色或残影。
- `summary.json` 中无严重 console error 或 page error。
- 验证结束后本地 dev server 已退出。
