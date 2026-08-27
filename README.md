# use-fluent

Small typed hooks: debounce, localStorage, media query, toggle

Side project, maintained when I have time.

## Usage

```bash
import { useDebounce, useLocalStorage } from './src';

const debounced = useDebounce(value, 300);
```

## What it does

- useLocalStorage with JSON serialization
- useDebounce with leading/trailing options
- Tiny: no dependencies besides React
- useMediaQuery SSR-safe

## Install

```bash
npm install
npm test
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   └── pull_request_template.md
├── docs/
│   ├── development.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── scripts/
│   └── dev.sh
├── src/
│   ├── config.js
│   ├── index.js
│   ├── useDebounce.js
│   └── useLocalStorage.js
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
└── package.json
```

## License

MIT - see [LICENSE](LICENSE).
