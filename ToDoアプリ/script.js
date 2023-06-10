document.querySelector('form').addEventListener('submit', function(event) {
  // formのデフォルト送信動作を防ぐ
  event.preventDefault();

  // テキストフィールドの値を取得する
  let inputField = document.querySelector('input[type="text"]');
  let inputValue = inputField.value;

  // 入力値が空でないことを確認する
  if (inputValue.trim() !== '') {
    // 新しい<li>要素を作成する
    let newTask = document.createElement('li');
    newTask.textContent = inputValue;

    // .output_field要素（これは、例えば<ul>要素であると想定します）に新しく作成した<li>要素を追加する
    document.querySelector('.output_field').appendChild(newTask);

    // オプション：テキストフィールドをクリアする
    inputField.value = '';
  } else {
    // 入力が空の場合、何もしない（またはエラーメッセージを表示するなど）
  }
});
