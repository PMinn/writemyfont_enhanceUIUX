# 開發者指引

## 技術細節

- **主要技術**：
  - HTML5 Canvas
  - JavaScript
  - IndexedDB 用於儲存字型資料
  - [potrace.js](https://github.com/kilobtye/potrace) （GPL 2.0授權）用於將繪製的圖像轉換為 SVG。
  - [opentype.js](https://github.com/opentypejs/opentype.js) （MIT授權）用於生成 OTF 字型檔案。

- **檔案結構**：
  - `dist/`：編譯過後的檔案。
  - `doc/`：文件。
  - `glist/`：用於產生字表的工具。
  - `src/`
    - `_locales/`：多種語言。
    - `css/`：css檔案。
    - `fonts/`：字型檔案。
    - `js/`
      - `glyphlist.<language>.js`：字型資料。
      - `index.js`：主要的字型繪製和生成邏輯。
      - `menu.js`：選單功能。
    - `index.html`：界面。
  - `webpack.config.js`：webpack 設定檔，設定將介面編譯成兩個語言。

## 開發者除錯
1. 確認已安裝 Node.js。
2. 開啟命令提示字元，切換路徑至此專案。
3. 安裝套件。
   ```
   npm i
   ```
4. 啟動開發者模式。
    ```
    npm run dev
    ```
5. 預設執行於 `http://localhost:8080/`。
6. （建議）完成後可執行編譯，確認功能是否正常，編譯後的檔案位於`/dist`。
   ```
   npm run build
   ```

## 部署
Guthub action 會自動完成編譯並部署。

---

## 技術詳細

- **主な技術**：
  - HTML5 Canvas
  - JavaScript
  - IndexedDB を使用してフォントデータを保存
  - [potrace.js](https://github.com/kilobtye/potrace) （GPL 2.0ライセンス）を使用して描画した画像を SVG に変換。
  - [opentype.js](https://github.com/opentypejs/opentype.js) （MITライセンス）を使用して OTF フォントファイルを生成。

- **ファイル構成**：
  - `fontdrawer.js`：フォント描画と生成の主要なロジック。
  - `index.html`：繁体字中国語インターフェース。
  - `ja.html`：日本語インターフェース。
  - `glist/`：文字表を生成するためのツール。