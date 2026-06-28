# AeroDoc — downloads

Public download channel for **AeroDoc**, an offline reader for **Boeing
maintenance documentation** (AMM / AIPC / WDM / FIM) on Windows and Android.
First fleet: the Air Algérie B737-89 — more aircraft to follow.

### Get the app
**→ https://engineerlogger-spec.github.io/aerodoc-downloads/**

| Platform | Latest |
| --- | --- |
| Windows | [Installer](https://github.com/engineerlogger-spec/aerodoc-downloads/releases/latest/download/aerodoc_installer_latest.exe) |
| Android | [APK](https://github.com/engineerlogger-spec/aerodoc-downloads/releases/latest/download/aerodoc_latest.apk) |

All versions + SHA-256 checksums: **[Releases](https://github.com/engineerlogger-spec/aerodoc-downloads/releases)**.

> Builds are not code-signed yet. Windows SmartScreen will warn “unknown
> publisher” — click *More info → Run anyway*. The Android APK is a side-load
> build; enable *Install unknown apps*. Verify the sha256 on the release page.

---

This repo holds **only** the landing page (`index.html` / `styles.css` /
`app.js`) and the release binaries. The page resolves the latest build from
`latest.json` and the full history from `versions.json`, both refreshed on each
release by `python tools/aerodoc.py release-app` in the (private) AeroDoc source
repo. The app source is not here.
