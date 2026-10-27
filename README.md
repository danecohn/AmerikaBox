# Vigil Box

<img src="src/app/icon.png" alt="Vigil Box" width="96">

**A product of VigilTech, vigiltech.org.** Founded by **Demetria Althea Cohn**.

The VigilTech design system, Vigil Sans and the mark are bundled in `src/app/brand/vigiltech/`.

**Vigil Box**: a desktop chiptune maker with an AI composer, built on BeepBox by John Nesky (MIT, https://github.com/johnnesky/beepbox; pinned commit in src/beepbox.lock.json). Not affiliated with beepbox.co.

Developed by **VigilTech** for **Makk OS** (Ubuntu 26.10 ARM64): describe what you want, and the built-in assistant (Anthropic Claude, through your own API key) builds it. The key is stored in your login keyring by Studio and never reaches the app; see `docs/STUDIO-ARCHITECTURE.md` and `docs/README.md`. Local automation uses the existing Studio bridge; installing OpenClaw is not required.



Source layout: `src/` (installed under `/usr/share`), `tools/builders/box.py` (Debian package builder used by the Amerika OS build), `tests/`, `docs/box.md`.
Licence: GPL-3.0-only for VigilTech code (see `LICENSE`); third-party licences are listed in `src/NOTICE`.

Existing package/executable names, icon/window identifiers, Studio bridge APIs, song schemas and upstream BeepBox/LAME notices remain unchanged. Product icons come from the VigilTech icon kit.
