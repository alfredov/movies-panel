## Getting Started
This is a monorepo project with `ui` packages and `movies` web package.
This works with yarn workspaces.
You can [play here](https://unknown.vercel.app/) breaking the web page 😈.

## Requirements
- [Nodejs](https://nodejs.org/en/download/) >= v16

### How to run web movies project
**⚙️ For local development:**
```bash
yarn dev:movies
```
After that, open a browser tab in [http://localhost:3000/](http://localhost:3000/)

**📦 For production building:**
```bash
yarn build
```

### How to run ui packages
**⚙️ For local development:**
```bash
yarn start:ui
```
it opens a storybook playground

**📦 For production building:**
```bash
yarn build:ui
```

### 🧪 How to test mono-repo
```bash
yarn test
```
