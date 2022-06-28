# @ssvt/eslint-config-react

## Overview

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 기반으로 커스터마이징 한 react 프로젝트용 eslint config 레포지토리입니다.

## Installation

해당 패키지와 함께
Peer dependencies에 포함된 패키지를 모두 설치해야 합니다.

```shell
$ npm install --save-dev @ssvt/eslint-config-react

$ npm install --save-dev @typescript-eslint/eslint-plugin@5.11.0 @typescript-eslint/parser@5.11.0 eslint@7.11.0 eslint-config-airbnb@19.0.4 eslint-config-prettier@8.3.0 eslint-plugin-import@2.25.4 eslint-plugin-jest@26.1.0 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-prettier@4.0.0 eslint-plugin-react@7.28.0 eslint-plugin-react-hooks@4.3.0 prettier@2.3.1
```

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
