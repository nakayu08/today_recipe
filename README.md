# アプリケーション名
TodayRecipe

# アプリケーション概要
食材からレシピを検索し、自炊の手助けとなる。

# URL
未デプロイ

# テスト用アカウント
・ メールアドレス:test@com  
・ パスワード:test1234

# 利用方法
## 食材検索
1. トップページから新規登録（ログイン）を行う。
2. 食材検索欄から食材名を入力しする。

## おすすめレシピ表示
1. 表示したい食材を検索する。
2. 検索後、食材名をクリック。
3. 検索した食材を使ったレシピが4種類表示される。

## レシピ詳細への移動(https://recipe.rakuten.co.jp/へ移動する)
1. 表示したい食材を検索する。
2. 検索後、食材名をクリック。
3. 表示したいレシピの画像をクリック。より多くのレシピを確認したい場合はレシピ一覧へのURLをクリック。 

## お気に入り食材の登録
1. お気に入り登録したい食材を検索する。
2. 検索後、食材名をクリック。
3. お気に入り登録ボタンをクリック。(削除したい場合はマイページから削除可能。)

# アプリケーションを作成した背景
自炊をしている時に自分の中の作れるレシピのレパートリーが少なく、よく同じ料理になってしまうことがある。特売などで安くなっている食材があった際におすすめレシピをすぐに調べることができ、またよく使う食材はお気に入り登録をして、スムーズにレシピ検索ができれと考えました。
上記の問題を解決するために、食材をすぐ検索でき、オススメレシピも教えてくれて、自分のお気に入り食材を登録できるレシピ検索アプリを開発することにした。


# 洗い出した要件
[要件を定義したシート](https://docs.google.com/spreadsheets/d/1KbfTW-hG_TRwnjFbz-lb6DYeyFyu02HLK66OHNT9_ak/edit#gid=1762448625)

# 実装した機能についての画像やGIFおよびその説明
### 食材検索&おすすめレシピ表示
1. 表示したい食材を検索する。
2. 検索後、食材名をクリック。
3. 検索した食材を使ったレシピが4種類表示される。
[![Image from Gyazo](https://i.gyazo.com/8299ab2a814b2dea6119244298ffd6a2.gif)](https://gyazo.com/8299ab2a814b2dea6119244298ffd6a2)

### お気に入り登録&レシピ詳細への移動
1. お気に入り登録したい食材を検索する。
2. 検索後、食材名をクリック。
3. お気に入り登録ボタンをクリック。レシピに移動したい場合は画像をクリック。
[![Image from Gyazo](https://i.gyazo.com/461f32362ab848a4078f662368c929e1.gif)](https://gyazo.com/461f32362ab848a4078f662368c929e1)


# 実装予定の機能
なし。

# データーベース設計
[![Image from Gyazo](https://i.gyazo.com/863b80da54abc2dfc9e4b0ea2e6c09f3.png)](https://gyazo.com/863b80da54abc2dfc9e4b0ea2e6c09f3)

# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/e8c8b885d6bb41d719728142ba63abd4.png)](https://gyazo.com/e8c8b885d6bb41d719728142ba63abd4)

# 開発環境
・rudy  
・javascript  

# ローカルでの動作確認
以下のコマンドを順に実行  
% git clone https://github.com/nakayu08/today_recipe 
% cd today_recipe  
% bundle install  
% yarn install  
% rails db:create  
% rails db:migrate  
% rails s  

# 工夫したポイント
工夫した点は2点あります。  
1点目は、自分の作りたいアプリケーションにあう機能を自分で探し、実装した点です。今回は食材一覧、各食材のレシピを表示のそれぞれの機能の部分に楽天APIを使用し、実装しました。楽天APIに関してのサイトを見ながら、コードを実装していきました。 
json形式のデータの扱いに関しては、自分にとっては未知の部分が多かったですが、なんとか実装することができました。

2点目は自分が使いやすいことを意識して作成した点です。  
食材名を検索する部分は文字を入力するたびに文字と一致する食材だけ表示するように実装し、検索する際のスピード感を上げました。また、お気に入り登録ができることで検索頻度が高い(使用頻度が高い)食材は検索窓への文字入力を省くことができます。
