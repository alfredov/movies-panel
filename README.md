## Getting Started
Project that fetchs movies from [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction) API.
This Monorepo has the following packages:
- [@foo-company/provider](./packages/ui/Provider/README.md): It provides css normalize and font family
- [@foo-company/icon-button](./packages/ui/IconButton/README.md) 
- [@foo-company/carousel](./packages/ui/Carousel/README.md)
- [@foo-company/modal](./packages/ui/Modal/README.md)
- [@foo-company/movies](./packages/apps/movies/README.md): NextJS web application
You can check it in live production 👉 [clicking here](https://movies-panel.vercel.app/) 👈

## Requirements
- [Nodejs](https://nodejs.org/en/download/) >= v16

### How to run `@foo-company/movies`
**⚙️ For local development:**
__Must__: First we have to go to [packages/apps/movies/.env.dev](/packages/apps/movies/.env.dev), copy it to another new file called `.env` for then populating an themoviedb `API_KEY` that you own.
Once we have all setted, we can run the command: 
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

###  Extra info
Bugs 🐞 or things are not done yet are listed in [Project Issues](https://github.com/alfredov/movies-panel/issues). 
__*Also, please don't hesitate to give some suggestions, feedbacks or bug report. Thanks!*__
