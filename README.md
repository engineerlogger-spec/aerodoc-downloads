# AeroDoc — downloads

Public download channel for **AeroDoc**, the offline Boeing 737 maintenance
reference (AMM / AIPC / WDM / FIM) for the Air Algérie B737-89 fleet.

### Get the app
**→ https://engineerlogger-spec.github.io/aerodoc-downloads/**

| Platform | Latest |
| --- | --- |
| Windows | [Installer](https://github.com/engineerlogger-spec/aerodoc-downloads/releases/latest/download/AeroDoc-Setup-latest.exe) |
| Android | [APK](https://github.com/engineerlogger-spec/aerodoc-downloads/releases/latest/download/AeroDoc-latest.apk) |

All versions + SHA-256 checksums: **[Releases](https://github.com/engineerlogger-spec/aerodoc-downloads/releases)**.

> Builds are not code-signed yet. Windows SmartScreen will warn “unknown
> publisher” — click *More info → Run anyway*. The Android APK is a side-load
> build; enable *Install unknown apps*. Verify the sha256 on the release page.

---

This repo holds **only** the landing page (`index.html` / `styles.css` /
`app.js`) and the release binaries. The page resolves the latest build from
`latest.json`, refreshed on each release by `tools/publish_release.ps1` in the
(private) AeroDoc source repo. The app source is not here.
