# ベースイメージの指定
FROM node:20

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションを起動するコマンド
CMD ["npm", "start"]