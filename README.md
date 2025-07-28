# GeckoNote

**GeckoNote** is a floating, draggable, and resizable notepad extension for Firefox. It lets you jot down quick notes for any website and automatically remembers them the next time you visit. Designed for researchers, developers, and anyone who wants to stay focused while taking context-specific notes.

## Features

- Floating sticky note that appears over any website
- Per-site memory: notes are saved per domain
- Automatically saves notes to browser storage
- Fully draggable and resizable interface
- Lightweight and fast, built with modern web technologies
- Compatible with Firefox (Manifest V3)

## Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/HawkdotDev/geckonote.git
cd geckonote
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the extension

```bash
npm run build
```

This will output the built files to the `dist/` directory.

### 4. Load in Firefox

1. Open `about:debugging` in Firefox.
2. Click **"This Firefox"** (or **"Load Temporary Add-on"**).
3. Select the `manifest.json` file from the `dist/` folder.

## Development Workflow

To run the extension in development mode with hot reloading:

```bash
npm run dev
```

Note: You will still need to manually reload the extension from `about:debugging` after each build, as Firefox does not yet support automatic reloading for extensions.

## Reporting Issues

If you encounter a bug or want to request a feature, please open an issue on GitHub:
[https://github.com/HawkdotDev/geckonote/issues](https://github.com/HawkdotDev/geckonote/issues)

## License

This project is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

