import {randomTexts, createElementOnResult, result} from './javascript.js'

function showJQCode(eventName) {
    const textArea = document.getElementById('jq-code-textarea')
    textArea.value = jqEventsList[eventName]
}

const jqEventsList = {
    htmlLoad: function () {
        $('document').load(console.log('docu loaded'))
        createElementOnResult('DIV TESTING');
    },
    htmlClick: function () {
        createElementOnResult('click on me');
        $('#result-test-div').on('click', () => {
            $('#result-test-div').text = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },

}


export {showJQCode}
