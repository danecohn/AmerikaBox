# Cohnsoft Box

<img src="src/app/brand/cohnsoft/logos/mark/cohnsoft-mark.svg" alt="Cohnsoft" width="96">

**A product of Cohnsoft.** Founded by **Demetria Althea Cohn**.

Canonical identity and local Cohn Sans are pinned to cohnsoftassets `752e894f90f1e58e62ae466352cb03c8bfd7d703`.



**Cohnsoft Box**: a desktop chiptune maker with an AI composer, built on BeepBox by John Nesky (MIT, https://github.com/johnnesky/beepbox; pinned commit in src/beepbox.lock.json). Not affiliated with beepbox.co.

Developed by **Cohnsoft** for **Makk OS** (Ubuntu 26.10 ARM64): describe what you want, and the built-in assistant (Anthropic Claude, through your own API key) builds it. The key is stored in your login keyring by Studio and never reaches the app; see `docs/STUDIO-ARCHITECTURE.md` and `docs/README.md`. Local automation uses the existing Studio bridge; installing OpenClaw is not required.



Source layout: `src/` (installed under `/usr/share`), `tools/builders/box.py` (Debian package builder used by the Amerika OS build), `tests/`, `docs/box.md`.
Licence: GPL-3.0-only for Amerika code (see `LICENSE`); third-party licences are listed in `src/NOTICE`.

Existing package/executable names, icon/window identifiers, Studio bridge APIs, song schemas and upstream BeepBox/LAME notices remain unchanged. Original Cohnsoft product SVG and Sprite document sources are included.
