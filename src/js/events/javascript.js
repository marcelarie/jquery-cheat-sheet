const result = document.getElementById('result-container')
const arrayOfRandomText = ['random', 'text',
    'windows sucks', 'linux rocks']


//Show JS code
function showJSCode(eventName) {
    const textArea = document.getElementById('js-code-textarea')
    textArea.value = jsEventsList[eventName]
}

function createElementOnResult(text) {
    const div = document.createElement('div');
    div.classList.add('result-test-div', 'no-select')
    div.id = 'result-test-div'
    div.textContent = text
    result.innerHTML = ''
    result.append(div)
}

const jsEventsList = {
    htmlLoad: function () {
        document.onload = console.log('docu loaded');
        createElementOnResult('DIV TESTING');
    },
    htmlClick: function () {
        createElementOnResult('click on me');
        const div = document.getElementById('result-test-div')
        div.addEventListener('click', () => {
            div.textContent = arrayOfRandomText[Math.floor(Math.random()
                * arrayOfRandomText.length)]
        })
    },


}

// Show result
function showResult(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResult}
