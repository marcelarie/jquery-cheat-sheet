const result = document.getElementById('result-container-js')
const randomTexts = ['random', 'text', 'windows sucks', 'linux rocks']

//Show JS code
function showJSCode(eventName) {
    const textArea = document.getElementById('js-code-textarea')
    textArea.value = jsEventsList[eventName]
}

function createElementOnResult(lang, text, result) {
    const div = document.createElement('div');
    div.classList.add('result-test-div', 'no-select')
    div.id = `result-test-div-${lang}`
    div.textContent = text
    result.innerHTML = ''
    result.append(div)
}

const jsEventsList = {
    htmlLoad: function () {
        // preliminar code
        createElementOnResult('js', 'DIV TESTING', result);

        // start 
        document.onload = console.log('docu loaded on javascript');
    },
    htmlClick: function () {
        // preliminar code
        createElementOnResult('js', 'click on me', result);
        const div = document.getElementById('result-test-div-js')

        // start
        div.addEventListener('click', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },
    htmlDoubleClick: function () {
        // preliminar code
        createElementOnResult('js', 'double click on me', result);
        const div = document.getElementById('result-test-div-js')

        // start
        div.addEventListener('dblclick', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },
    htmlKeyPress: function () {
        // preliminar code
        createElementOnResult('js', 'press a key', result);
        const div = document.getElementById('result-test-div-js')

        // start
        document.addEventListener('keypress', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
            div.style.backgroundColor = 'red'
        })
    },


}

// Show result
function showResultJS(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResultJS, result, randomTexts, createElementOnResult}
