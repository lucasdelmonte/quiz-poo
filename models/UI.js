// @ts-check
export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        if(questionTitle) questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices) {
        const choicesContainer = document.getElementById('choices')
        choices.forEach(choice => {
            const button = document.createElement('button')
            button.innerText = choice
            button.className = 'quiz__choice'
            choicesContainer?.append(button)
        });
    }
}