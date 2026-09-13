# Om Sri Siddhi Vinayaka Jyotishya Kendra — React + Vite

## Requirements
- Node.js 18 or 20 (your Node.js v20.15.1 is suitable)
- npm

## Run locally
Open a terminal **inside this project folder** and run:

```bash
npm install
npm run dev
```

Then open the localhost URL printed by Vite.

### If you already have a `node_modules` folder or `package-lock.json`
Delete both **inside this project folder**, then run:

```bash
npm install
npm run dev
```

This project pins Vite to a stable version that does not use the Rolldown native-binding setup that can trigger the `Cannot find native binding` error on Windows.

## Production build
```bash
npm run build
npm run preview
```

## Edit later
Business content is kept in `src/App.jsx` and styling in `src/styles.css`. Logo and photo placeholders are ready to replace later.
