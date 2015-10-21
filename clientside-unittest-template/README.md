# シンプルなクライアントサイドJavaScriptのユニットテスト環境

Karma + PhantomJS + Mocha + power-assertを使ったクライアントサイドJavaScriptのユニットテスト環境です。  
テストコードもES2015で記述することができます。


## テンプレートの構成

### src

ES6で書くコードの置き場所

### lib

srcフォルダのコードの出力先（babelで変換したコード）

### test

テストコードの置き場所


## 使い方

### 事前準備

依存モジュールのインストールをします。  
必要であればsudoをつけて実行してください

```
npm install
```

### build

srcフォルダのソースをbabelでコンパイルしてlibフォルダに出力します。

```
npm run build
```

### watch

srcフォルダのソースの変更を検知、babelでコンパイルしてlibフォルダに出力します。

```
npm run watch
```

### test

buildタスクを走らせた後でテストを実行するようにしました。

```
npm run test
```

### start

watchタスク + testタスクが実行されます。

```
npm run start
```