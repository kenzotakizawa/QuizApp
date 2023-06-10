// saveQuiz関数は新しいクイズをローカルストレージに保存します。
function saveQuiz(newQuiz) {
  // まず、すでにローカルストレージに保存されているクイズのリストを取得します。
  let quizzes = JSON.parse(localStorage.getItem('quizzes'));
  
  // ローカルストレージが初めて使用される場合、クイズのリストはnullになります。その場合は、空の配列をセットします。
  if (!quizzes) {
      quizzes = [];
  }
  
  // 新しいクイズをクイズのリストに追加します。
  quizzes.push(newQuiz);
  
  // 更新されたクイズのリストをローカルストレージに保存します。
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
}
