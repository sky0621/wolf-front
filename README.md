# wolf-front
## 概要
「今日こと」システムのフロントエンド

## バージョン
### Yarn
```
$ yarn -v
1.22.4
```


## プロジェクト作成コマンドログ
```
$ yarn create nuxt-app app
yarn create v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-nuxt-app@3.1.0" with binaries:
      - create-nuxt-app

create-nuxt-app v3.1.0
✨  Generating Nuxt.js project in app
? Project name: app
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: Vuetify.js
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
warning nuxt > @nuxt/webpack > @nuxt/babel-preset-app > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actu
al version of core-js@3.
warning nuxt > @nuxt/webpack > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
warning nuxt > @nuxt/webpack > webpack > watchpack > watchpack-chokidar2 > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
warning nuxt > @nuxt/webpack > webpack > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning nuxt > @nuxt/webpack > webpack > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
yarn run v1.22.4
$ eslint --ext .js,.vue --ignore-path .gitignore . --fix
Done in 3.08s.

🎉  Successfully created project app

  To get started:

        cd app
        yarn dev

  To build & start for production:

        cd app
        yarn build
        yarn start

  To test:

        cd app
        yarn test


  For TypeScript users. 

  See : https://typescript.nuxtjs.org/cookbook/components/
Done in 121.58s.
```

## ライブラリ
```
$ yarn add @nuxtjs/apollo
$ yarn add @nuxtjs/auth
$ yarn add @nuxtjs/proxy
$ yarn add @nuxtjs/toast
$ yarn add @types/lodash
$ yarn add graphql-tag
$ yarn add nuxt-healthcheck
$ yarn add nuxt-i18n
$ yarn add nuxt-property-decorator
$ yarn add vuex-persistedstate
```

```
$ yarn add -D @graphql-codegen/cli
$ yarn add -D @graphql-codegen/typescript
$ yarn add -D @graphql-codegen/typescript-operations
$ yarn add -D @typescript-eslint/eslint-plugin
$ yarn add -D @typescript-eslint/parser
$ yarn add -D vee-validate
```