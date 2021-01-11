const result = document.getElementById('result-container')

//Show JS code
function showJSCode(eventName) {
    const textArea = document.getElementById('js-code-textarea')
    textArea.value = jsEventsList[eventName]
}

function createElementOnResult() {
    const div = document.createElement('div');
    div.classList.add('result-test-div')
    div.textContent = 'div for testing'
    result.innerHTML = ''
    result.append(div)
}

const jsEventsList = {
    htmlLoad: function () {
        document.onload = console.log('docu loaded');
        createElementOnResult();
    },
    htmlClick: function () {
    },


}

// Show result
function showResult(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResult}
