# CHANGELOG

This file records official PayDance releases. README introduces the product to new users; full version history and GitHub Release notes are maintained here.

Build artifacts and verification files are available in [GitHub Releases](https://github.com/MasterBao66/PayDance/releases).

### v0.9.4

- **Desktop reliability hardening**: Hybrid clock recalibrates after long sleep or large system clock forward jumps while preserving monotonic earnings; window positions are clamped to visible monitor areas.
- **More trustworthy local settings**: Config migrations upgraded to explicit version chain; future version configs are safely isolated; save failures now show a lightweight UI message instead of only console logs.
- **Updater and release chain improvements**: Updater distinguishes missing dev config, production signature failures, invalid manifests, and network errors; Release dry-run adds build artifact smoke report, post-release smoke no longer misinterprets dry-run as public verification.
- **Web Preview & accessibility**: Web Preview QA is enforced in CI; language switching syncs HTML `lang`; update badge converted to semantic button.

### v0.9.3

- **License architecture reorganization**: Code license switched to AGPL-3.0-only; added AGPL §7 additional terms; trademark policy rewritten; added brand assets, project notice, third-party notices, contributor license agreement; documentation license switched to CC BY-SA 4.0; README license section reorganized.
- **Removed NSIS installer**: Only portable EXE + SHA256 + `.sig` released; `latest.json` points to portable direct download.
- **CI fixes**: gitleaks switched from `gitleaks/gitleaks-action@v2` to `choco install gitleaks` command to resolve Windows runner 404 and API incompatibility.

### v0.9.2

- **Sharing card improvements**: `index.html` adds `og:image:alt` and `twitter:image:alt`; JSON-LD updated.
- **Supply chain security**: CI adds gitleaks, `cargo audit`, and `cargo deny check`.
- **Governance docs**: SECURITY, CONTRIBUTING, TRADEMARK, ROADMAP, SUPPORT, and English versions updated.
- **README refreshed**: reflects bilingual UI, silent updates, and features from v0.9.0.
- **Web Preview language switcher relocated**: Top-right, with dark mode adjustments.
- **Release workflow improved**: Removed occasional failing `attest-build-provenance` step.

### v0.9.1

- **Updater system completion**: Tauri updater key pair generated, portable EXE builds with `.sig` and `latest.json`, full auto-update chain.
- **Update badge state machine**: Downloading and failed states implemented.
- **Exit persistence**: Frontend flush before exit.
- **Tray i18n**: Language switch propagates to Rust.
- **Onboarding simplification**: Removed always-on-top and mini float options.
- **Window position persistence**: Save/restore, safe fallback on monitor disconnect.
- **Web Preview language switch**: New fixed button.
- **Post-release smoke**: `post-release-smoke.yml` validates latest release, README download links, `latest.json`.
- **Tauri plugin process**: Added process plugin with restart permission.
- **Governance docs added**: SECURITY, CONTRIBUTING, TRADEMARK.
- **Code hygiene**: aria-labels i18n, tests updated.

### v0.9.0

- **Multi-language support**: i18n with Simplified Chinese and English; language selector in settings; all UI and validation bilingual.
- **License update**: Code license switched to GPL-3.0-only; trademark declared; documentation CC-BY-4.0.
- **Product website SEO**: Open Graph/Twitter Card/JSON-LD; robots.txt; sitemap.xml.
- **Auto-update**: Tauri plugin updater; silent check; new version shows small arrow near version.
- **Settings improvements**: Update button style fixed, silent check with badge.
- **Mini floating window**: Bilingual aria-label; right-click maintains original interaction.
- **Code quality**: Refactored WindowTitlebar; useAppUpdater enhanced; unified unavailable status.
- **Automation**: Renovate configured, patch auto-merge.
- **Dependency update**: npm and Rust locks synced.
- **Issue templates**: Bug Report & Feature Request updated to v0.9.0.

### v0.8.15

- Windows release assets renamed by version.
- README download link synced to versioned asset.
- Web Preview split into page, top brand, hero text, action buttons, app showcase, mini float, footer.
- Web/Desktop build separated; build boundary assertions added.
- npm and Rust locks synced.
- Issue template version updated.

### v0.8.14

- Web Preview reverted decorative lines from v0.8.13; dark/light modes adjusted for materials and shadow.
- Favicon added; QA assertions enhanced.
- Issue template version updated.

### v0.8.13

- Web Preview dark/light backgrounds refined; component layout and QA assertions enhanced.
- Issue template version updated.

### v0.8.12

- Desktop build explicit `build:desktop`; ensures full Windows interface.
- Build target assertions; prevents entry mix-up.
- Hero text spacing adjusted.
- README download links rearranged.
- Issue template version updated.

### v0.8.11

- Web Preview hero layout adjusted; tag component spacing improved.
- Issue template version updated.