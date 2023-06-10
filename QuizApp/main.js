// window.onloadは、すべてのHTMLが読み込まれすべてのスクリプトがロードされたときに実行されます。
window.onload = function() {
    // createHomeView()関数はviews.jsファイルに定義されています。
    // この関数はホームビュー（スタート画面）を生成します。
    createHomeView();
    // addHomeViewListeners()関数はnavigation.jsファイルに定義されています。
    // この関数はホームビューにある要素（ボタンなど）にイベントリスナーを追加します。
    // イベントリスナーはボタンがクリックされたときなどの特定のイベントに反応します。
    addHomeViewListeners();
}
