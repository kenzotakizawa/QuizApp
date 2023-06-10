let currentQuizIndex = 0;

// createQuizChallengeView関数はクイズ挑戦画面を生成します。
function createQuizChallengeView() {
  // アプリケーションのメインコンテナを取得します。
  const appContainer = document.getElementById('app');

  // メインコンテナの内容をクリアします。
  appContainer.innerHTML = '';

  // ローカルストレージからクイズデータを取得します。
  const quizzes = JSON.parse(localStorage.getItem('quizzes'));

  // クイズがない場合、ホームボタンを表示して終了します。
  if (currentQuizIndex >= quizzes.length) {
    appContainer.innerHTML = `
      <h2>すべてのクイズが出されました</h2>
      <button id="home-button">ホーム</button>
    `;
    document.getElementById('home-button').addEventListener('click', function() {
      createHomeView();
      addHomeViewListeners();
    });
    return;
  }
  
  const quiz = quizzes[currentQuizIndex];
  
  // クイズ挑戦ビューのHTMLを作成します。
  const challengeHTML = `
    <h2>${quiz.question}</h2>
    <button id="quiz-choice1-button">${quiz.choices[0]}</button>
    <button id="quiz-choice2-button">${quiz.choices[1]}</button>
    <button id="quiz-choice3-button">${quiz.choices[2]}</button>
    <button id="quiz-choice4-button">${quiz.choices[3]}</button>
    <div id="quiz-result"></div>
    <button id="next-button" style="display: none;">Next</button>
    <button id="home-button" style="display: none;">Home</button>
  `;

  // メインコンテナにクイズ挑戦ビューのHTMLを追加します。
  appContainer.innerHTML = challengeHTML;

  // イベントリスナーを選択肢のボタンに追加します。
  for (let i = 0; i < quiz.choices.length; i++) {
    document.getElementById(`quiz-choice${i+1}-button`).addEventListener('click', function() {
      // 選択肢がクリックされたときの処理を書きます。
      const resultDiv = document.getElementById('quiz-result');
      if (quiz.choices[i] === quiz.answer) {
        // 選択した回答が正しい場合は「正解」を表示します。
        resultDiv.textContent = '正解!';
      } else {
        // 選択した回答が間違っている場合は「不正解」を表示します。
        resultDiv.textContent = '不正解...';
      }
      // 「次へ」ボタンと「ホーム」ボタンを表示します。
      document.getElementById('next-button').style.display = 'block';
      document.getElementById('home-button').style.display = 'block';
    });
  }

  // 「次へ」ボタンがクリックされたときに次のクイズを表示します。
  document.getElementById('next-button').addEventListener('click', function() {
    currentQuizIndex++;
    createQuizChallengeView();
  });

  // 「ホーム」ボタンがクリックされたときにホーム画面を表示します。
  document.getElementById('home-button').addEventListener('click', function() {
    createHomeView();
    addHomeViewListeners();
  });
}

// addHomeViewListeners関数はホームビューのボタンにイベントリスナーを追加します。
function addHomeViewListeners() {
  // 「Start Quiz」ボタンを取得します。
  const startButton = document.getElementById('start-quiz-button');
  // 「Start Quiz」ボタンがクリックされたときにクイズ挑戦画面を生成する関数をイベントリスナーとして追加します。
  startButton.addEventListener('click', function() {
      currentQuizIndex = 0;
      createQuizChallengeView();
  });
  
  // 「Create Quiz」ボタンを取得します。
  const createButton = document.getElementById('create-quiz-button');
  // 「Create Quiz」ボタンがクリックされたときにクイズ作成画面を生成し、そのビューに対するイベントリスナーを設定する関数をイベントリスナーとして追加します。
  createButton.addEventListener('click', function() {
      createQuizCreateView();
      addCreateViewListeners();
  });
}
// アプリの初期表示としてホームビューを表示し、イベントリスナーを設定します。
createHomeView();
addHomeViewListeners();
