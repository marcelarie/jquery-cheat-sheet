const result = document.getElementById('result-container')

//Show JS code
function showJSCode(eventName) {
    const textArea = document.getElementById('js-code-textarea')
    textArea.value = jsEventsList[eventName]
}

const jsEventsList = {
    htmlLoad: function () {
        document.onload = console.log('docu loaded');
    },

}

// Show result
function showResult(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResult}
