# loading animation module

## dependency
jquery

## how to use

First loading files

```
<link rel="stylesheet" href="loading.css">
<script src="loading.min.js"></script>
```

stat loading view

```
Loading.start();
```

stop loading view

```
Loading.start();
```


## Methods

| method | means |
|:---|:---|
| start | start loading view |
| stop | finish loading view |


following Japanese translation

# ローディングアニメーション
jsでボタンを押したりしたタイミングをトリガーにして起動するローディングアニメーションをよく作るので、モジュール化して簡単に使えるようにしたものです。

## 依存関係
jqueryに依存します

## 使い方

まず、ファイルを読み込んでください。

```
<link rel="stylesheet" href="loading.css">
<script src="loading.min.js"></script>
```


ローディング画面を表示させる

```
Loading.start();
```

ローディング画面を消す

```
Loading.stop();
```

## メソッド一覧

| メソッド | 内容 |
|:---|:---|
| start | 開始 |
| stop | 終了 |

