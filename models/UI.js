// @ts-check
export class UI {
  constructor() { }

  /**
   * 
   * @param {string} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById('question')
    if (questionTitle) questionTitle.innerText = text
  }

  /**
   * 
   * @param {string[]} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById('choices')
    if (choicesContainer) choicesContainer.innerHTML = ''
    choices.forEach(choice => {
      const button = document.createElement('button')
      button.innerText = choice
      button.className = 'quiz__choice'
      choicesContainer?.append(button)

      button.addEventListener('click', () => callback(choice))
    })
  }

  /**
   * 
   * @param {number} score the total score
   */
  showScore(score) {
    const quizContainer = document.getElementById('quiz')

    if (!quizContainer) return
    quizContainer.innerHTML = `
      <h1>Result</h1>
      <h2>Your score: ${score}</h2>
    `
  }

  /**
   * 
   * @param {number} currentIndex the current index of the quiz
   * @param {number} total the total questions
   */
  showProgress(currentIndex, total) {
    const progress = document.getElementById('progress')
    if (progress) progress.innerText = `Question ${currentIndex} of ${total}`
  }
}