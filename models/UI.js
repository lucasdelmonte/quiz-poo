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
}