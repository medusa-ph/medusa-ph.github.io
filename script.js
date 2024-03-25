let currentQuestionIndex = 1;
const totalQuestions = 2;
const progressBar = document.getElementById('progressBar');

function nextQuestion(nextQuestionId) {
  document.getElementById('question' + currentQuestionIndex).style.display = 'none';
  currentQuestionIndex++;
  document.getElementById(nextQuestionId).style.display = 'block';
  updateProgressBar();
}

function updateProgressBar() {
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  progressBar.style.width = progress + '%';
}

function displayResults(category) {
    const resultList = document.getElementById('itemsList');
    resultList.innerHTML = ''; // Clear previous results
  
    // Get the items for the selected category
    const items = document.getElementById(category).innerHTML;
  
    // Display the items in the results list
    resultList.innerHTML = items;
  }
  