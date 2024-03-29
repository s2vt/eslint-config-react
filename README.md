# @ssvt/eslint-config-react

[![npm version](https://badge.fury.io/js/@ssvt%2Feslint-config-react.svg)](https://badge.fury.io/js/@ssvt%2Feslint-config-react)

## Overview

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 기반으로 커스터마이징 한 react 프로젝트용 eslint config 레포지토리입니다.

## Installation

### Webpack, Vite, Next.JS 등의 환경

해당 패키지와 함께
Peer dependencies에 포함된 패키지를 모두 설치해야 합니다.

```shell
$ npm install --save-dev @ssvt/eslint-config-react

$ npm install --save-dev @typescript-eslint/eslint-plugin@^5.11.0 @typescript-eslint/parser@^5.11.0 eslint@^8.2.0 eslint-config-airbnb@^19.0.4 eslint-config-prettier@^8.3.0 eslint-plugin-import@^2.25.4 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-prettier@^4.0.0 eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0 prettier@^2.3.1
```

### Create React App 환경

Create React App로 프로젝트를 시작하면 eslint 패키지가 자동으로 설치되므로 해당 패키지만 설치하면 됩니다
```shell
$ npm install --save-dev @ssvt/eslint-config-react
```

### npm 5+
npm 5+ 이상에서는 `install-peerdeps`를 이용해서 peer dependencies를 자동으로 설치할 수 있습니다.

```shell
$ npx install-peerdeps --dev @ssvt/eslint-config-react
```

### npm 7+
npm 7+ 이상에서는 peer dependency들이 자동으로 설치 되기 때문에 해당 패키지만 설치하면 됩니다.

## Getting Started

패키지를 모두 설치 후 사용하고자 하는 프로젝트의 eslint 설정을 변경하면 됩니다.
적용하고자 하는 플러그인만 extends 속성에 추가하면 됩니다.

### Webpack 기반 / Next.js 프로젝트

```json
{
  "extends": [
    "@ssvt/eslint-config-react/default",
  ],
}
```

### Create React App 프로젝트

```json
{
  "extends": [
    "@ssvt/eslint-config-react/cra",
  ],
}
```

### TypeScript 프로젝트

```json
{
  "extends": [
    "@ssvt/eslint-config-react/default",
    "@ssvt/eslint-config-react/typescript",
  ],
}
```

### Prettier 적용

```json
{
  "extends": [
    "@ssvt/eslint-config-react/default",
    "@ssvt/eslint-config-react/prettier"
  ],
}
```
