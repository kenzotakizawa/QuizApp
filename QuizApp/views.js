// createHomeView関数はホームビューを生成します。
function createHomeView() {
  // アプリケーションのメインコンテナを取得します。
  const appContainer = document.getElementById('app');
  
  // メインコンテナの内容をクリアします。
  appContainer.innerHTML = '';
  
  // ホームビューのHTMLを作成します。
  // ボタンのIDは後でイベントリスナーを追加するために使用します。
  const homeHTML = `
  <button id="start-quiz-button">Start Quiz</button>
  <button id="create-quiz-button">Create Quiz</button>
  `;
  
  // メインコンテナにホームビューのHTMLを追加します。
  appContainer.innerHTML = homeHTML;
}

// createQuizCreateView関数はクイズ作成ビューを生成します。
function createQuizCreateView() {
  // アプリケーションのメインコンテナを取得します。
  const appContainer = document.getElementById('app');
  
  // メインコンテナの内容をクリアします。
  appContainer.innerHTML = '';
  
  // クイズ作成ビューのHTMLを作成します。
  // 各インプットフィールドのIDは後で入力された値を取得するために使用します。
  const createHTML = `
  <input id="quiz-question-input" type="text" placeholder="Question">
  <input id="quiz-choice1-input" type="text" placeholder="Choice 1">
  <input id="quiz-choice2-input" type="text" placeholder="Choice 2">
  <input id="quiz-choice3-input" type="text" placeholder="Choice 3">
  <input id="quiz-choice4-input" type="text" placeholder="Choice 4">
  <input id="quiz-answer-input" type="text" placeholder="Answer (1-4)">
  <button id="save-quiz-button">Save Quiz</button>
  `;
  
  // メインコンテナにクイズ作成ビューのHTMLを追加します。
  appContainer.innerHTML = createHTML;
}
