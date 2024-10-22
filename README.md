# espresso-what

I love coffee, specifically espresso. This application allows users to visualize the different parts of espresso drinks,
in order to learn more about different drinks they could order at a cafe.

#### Story Time

I ordered a cappucino at a cool local coffee shop, and proceeded to scoop the foam off, because I wasn't really a fan.
This prompted my friend to ask, why I ordered one in the first place, since cappucinos are purposefully made with more foam.
I was caught red-handed, I had know idea what any of the words on the menu meant, and had just picked one randomly. >\_<
This app is for past me to understand what all those, mostly Italian, words meant.

## Let's get technical!

I built this project as a showcase of skills to prove I can learn things quickly.
I haven't written any Vue in over 3 years, and it was in Vue2 back then.
I've never used many of the tools included, but they were reccomended within Vue's documentation so I wanted to try them out.
You'll notice from the code there are several arbitrary API calls or added complexity that this app genuinely wouldn't need.
However in order to show case my understanding of these concepts they are a bit shoe-horned in.

## Default Create-Vue ReadMe:

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
