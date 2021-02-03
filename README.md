# Simple HTML env setup

この Repository は、HTML コーディングするための簡易セットアップな Repository です。

## What you can do

- sass (scss)
- local-server

## Env Setup

1. Install

```bash
npm run install
```

2. Build

```bash
npm run build
```

2. Start

```bash
npm run serve
```

## ディレクトリ構成 - Directory Structure

```
src
|- api           API関連のtsファイル
|- assets        画像ファイル、フォントファイル、scssファイル
|- components    vueのコンポーネントファイル
|- i18n          国際化対応ファイル
|- models        USERGRAMのドメインロジック
|- store         データの取得、保存関連
|- stories       コンポーネントカタログ
└- util          ドメインロジックではない、一般的な関数
```
