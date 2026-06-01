
<p align="center">
  <img src="src-tauri/icons/icon.png" alt="薪跳 PayDance" width="88">
</p>

<h1 align="center">薪跳 PayDance</h1>

<p align="center">
  桌面实时工资看板——把今日入账变成安静跳动的数字，让每一秒的收入增长都看得见。
</p>

<p align="center">
  <a href="https://masterbao66.github.io/PayDance/"><strong>在线体验</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://github.com/MasterBao66/PayDance/releases/latest"><strong>下载桌面版</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="docs/README_EN.md">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/MasterBao66/PayDance?label=%E7%89%88%E6%9C%AC&color=blue" alt="Latest Release">
  <img src="https://img.shields.io/github/license/MasterBao66/PayDance?label=%E8%AE%B8%E5%8F%AF&color=green" alt="License">
  <img src="https://img.shields.io/badge/%E5%B9%B3%E5%8F%B0-Windows%2011-0078D4" alt="Platform">
</p>

---

配置薪资和上下班时间，今日入账就会常驻桌面，随工作时间实时增长。主窗口展示入账金额、工作进度和剩余时间；迷你悬浮窗只保留金额，适合放在屏幕角落随时扫一眼。

<p align="center">
  <img src="docs/posters/poster-02-three-step-setup-v3.png" alt="薪跳 PayDance 三步配置" width="100%">
</p>

## 为什么用它

- **收入可见** — 今日入账精确到分，持续跳动，工作时间有了直观的价值感。
- **贴近真实工作制** — 月薪/日薪/时薪自动换算，支持每周工作日、午休剔除、跨零点夜班。
- **迷你悬浮** — 只显示金额，可拖拽、可置顶、透明度 10%–100% 可调，双击恢复主窗口。
- **本地优先** — 不需要账号，不上传数据，不包含遥测。配置只存在你自己的电脑上。
- **中英双语** — 界面、托盘、校验提示完整覆盖中文与英文。
- **Windows 11 体验** — 无边框圆角窗口、亮暗主题、托盘常驻、开机自启动、静默后台更新。

## 获取

| | 入口 | 说明 |
|---|---|---|
| 🌐 | **[在线体验](https://masterbao66.github.io/PayDance/)** | 浏览器直接打开，核心功能均可预览 |
| ⬇️ | **[Windows 桌面版](https://github.com/MasterBao66/PayDance/releases/latest)** | 便携 EXE，含托盘、置顶、迷你悬浮、开机自启动等完整能力 |

Release 页面同时提供 SHA256 校验文件，下载后可验证完整性。

## 技术栈

| 层级 | 技术 |
|------|------|
| 桌面壳 | Tauri 2 + Rust |
| 前端 | Vue 3 + TypeScript + Vite |
| UI | Windows 11 风格、CSS Container Queries、Lucide Icons |
| 存储 | 本机应用数据目录（Tauri Store） |
| 测试 | Vitest + vue-tsc + cargo clippy |

Web Preview 与桌面端共享核心薪资逻辑，部署在 GitHub Pages 上作为在线体验入口。

## 开发

```powershell
npm install
npm run tauri dev      # 桌面应用
npm run dev:web        # Web Preview
npm run build:exe      # 构建 Windows 便携版
npm run build:web      # 构建网页体验版
```

提交规范、验证命令和贡献方向请参阅 [贡献指南](.github/CONTRIBUTING.md)。

## 隐私

薪跳不需要登录，不上传数据，不包含遥测。所有配置通过 Tauri Store 保存在本机 `salary-settings.json` 中，仅包括薪资参数、工作时间和界面偏好。

## 文档

- [产品定位与边界](docs/PRODUCT.md)
- [路线图](docs/ROADMAP.md)
- [更新日志](CHANGELOG.md)
- [许可与法律信息](legal/LEGAL.md)

## 许可

代码以 [AGPL-3.0-only](LICENSE) 发布，由 Mr.Baoboer 设计与开发。完整许可信息见 [许可导引](legal/LEGAL.md)。

---

> [English version →](docs/README_EN.md)
