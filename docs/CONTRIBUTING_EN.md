# Contributing to PayDance

> [中文版 →](../.github/CONTRIBUTING.md)

Thanks for your interest in PayDance. This project is intentionally small: it puts today's live earnings on the desktop in a calm, clear way. Please read the boundaries and workflow below before opening an Issue or PR.

## Environment

- **OS**: the current official release and validation baseline is Windows 11; Web Preview can preview the core experience in a browser; platform-adaptation contributions need a clear validation boundary
- **Runtime**: Node.js 22 and the latest stable Rust
- **Package manager**: npm

## Getting Started

```powershell
npm install
npm run tauri dev # Desktop app
npm run dev:web   # Browser Web Preview
```

## Before Submitting

Choose the checks that match your change. CI automatically selects lightweight or full verification by path, but running the right checks locally saves round trips.

```powershell
npm run verify:metadata # Docs, legal, brand, and community-template changes
npm run verify:fast     # Lint, format, tests, desktop build, Web Preview build
npm run qa:web-preview  # Web Preview visual and DOM/console validation
```

For Rust, release, or security-governance changes, also run these commands in `src-tauri/`:

```powershell
cargo fmt --all -- --check
cargo check
cargo clippy --all-targets -- -D warnings
cargo audit --deny warnings
cargo deny check --hide-inclusion-graph
```

## Maintainer Push Workflow

Maintainers should use this command before pushing to `main`:

```powershell
npm run push:main
```

It first classifies the files that are about to be pushed. If every change is limited to documentation, legal, brand asset, or community-template paths, it runs only version consistency, brand and secret hygiene, formatting, repository metadata tests, and `git diff --check`. If the change touches `src/**`, `src-tauri/**`, `package*.json`, `scripts/**`, `.github/workflows/**`, build configuration, or an unknown path, it automatically upgrades to full verification and also runs linting, tests, desktop build, Web Preview build, `npm audit --omit=dev`, `cargo fmt`, `cargo check`, `cargo clippy`, `cargo audit`, and `cargo deny check`.

Lightweight paths include:

- `docs/**`, `legal/**`, `marketing-posters/**`
- `README*`, `LICENSE*`, `SECURITY*`, `CONTRIBUTING*`, `CHANGELOG*`, `PRODUCT*`, `DESIGN*`
- `.github/ISSUE_TEMPLATE.md`, `.github/ISSUE_TEMPLATE/**`, `.github/PULL_REQUEST_TEMPLATE.md`

To run push-readiness checks before committing without running `git push`:

```powershell
npm run verify:push
```

The security audit steps require these local tools:

```powershell
cargo install cargo-audit --locked
cargo install cargo-deny --version 0.19.8 --locked
gh auth login
```

Do not run `npm run build:desktop` and `npm run build:web` in parallel because both write to the same `dist/` directory. The push workflow runs them serially in the same order as CI.

## What We Welcome

All contributions should align with the product boundaries in [PRODUCT.md](PRODUCT.md).

- Bug fixes with reproduction steps
- Desktop reliability improvements: window management, tray, autostart, single instance
- Windows 11 UI polish: theming, accessibility, DPI, multi-monitor behavior
- Platform-adaptation proposals with target OS, build flow, and validation scope
- Performance and edge-case improvements for the wage ticker
- Tests for clock changes, config migration, night shifts, and similar boundaries
- Chinese/English copy, documentation, release workflow, and community-template improvements

## What We Do Not Accept

PayDance is not a time tracker, personal finance manager, payroll system, attendance system, or task manager. The following directions are currently outside the product boundary; related PRs should start with an Issue explaining why they still serve the core experience:

- Keyboard shortcuts or hotkey systems
- Reminders, notifications, or alerts
- Segmented historical timelines, charts, or trend analysis
- Cloud sync, accounts, or online services
- Any feature that sends data off-device by default

These boundaries are not meant to be cold; they keep the product light, stable, and trustworthy. If you are unsure whether an idea fits, open an Issue first.

## PR Guidelines

1. **One change per PR.** Do not mix a bug fix, refactor, and documentation sweep.
2. **Write tests.** New behavior needs test coverage; bug fixes should include a regression test.
3. **Follow existing code style.** Prefer established patterns in the codebase.
4. **Update CHANGELOG.md** under the `## Unreleased` section; for internal verification or tiny doc polish, explain why it is not applicable.
5. **Screenshots are required for UI changes**, covering at least light/dark mode and Chinese/English.
6. **Platform adaptations must describe their validation boundary**, including target OS, build command, manual smoke items, update endpoint, and brand-distinction approach.
7. **Use conventional commits:** `feat:`, `fix:`, `docs:`, `test:`, `chore:`, `refactor:`.

## i18n

All user-facing strings must be in `src/i18n/locales/zh-CN.ts` and `src/i18n/locales/en.ts`, with a type definition in `src/i18n/types.ts`. Do not hardcode Chinese or English strings in Vue components or TypeScript.

## Versioning

PayDance follows [Semantic Versioning](https://semver.org/). Release versions are managed by the project author. Do not bump the version number in your PR.

## License

The project code is released under [AGPL-3.0-only](../LICENSE) with [additional terms under AGPL Section 7](../legal/ADDITIONAL_TERMS.md).

By submitting a code contribution, you confirm that:

- You are legally entitled to make the contribution and it is your original work, or you have the necessary permissions;
- You agree that your contribution is incorporated into the project under AGPL-3.0-only and the project's additional terms;
- You include a `Signed-off-by:` line (DCO) with your submission, confirming its lawful origin.

> The project is currently a solo effort. Ordinary contributions enter the project under the open-source terms above. If the maintainer needs to include a contribution in commercial, OEM, or white-label licensing, the contributor will be asked to explicitly sign the [Contributor License Agreement (CLA)](../legal/CLA.md) before merge. Opening an Issue, suggestion, or security report does not require signing the CLA.

See `LICENSE`, `legal/ADDITIONAL_TERMS.md`, `legal/TRADEMARK.md`, and `legal/BRAND-ASSETS.md` for details.
