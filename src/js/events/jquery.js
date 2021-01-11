import {randomTexts, createElementOnResult} from './javascript.js'
const result = document.getElementById('result-container-jq')

function showJQCode(eventName) {
    const textArea = document.getElementById('jq-code-textarea')
    textArea.value = jqEventsList[eventName]
}

const jqEventsList = {
    htmlLoad: function () {
        // preliminar code
        createElementOnResult('jq', 'DIV TESTING', result);

        // start
        $('document').ready(console.log('docu loaded on jquery'))
    },
    htmlClick: function () {
        // preliminar code
        createElementOnResult('jq', 'click on me', result);

        // start
        $('#result-test-div-jq').on('click', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    htmlDoubleClick: function () {
        // preliminar code
        createElementOnResult('jq', 'double click on me', result);

        // start
        $('#result-test-div-jq').on('dblclick', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    htmlKeyPress: function () {
        // preliminar code
        createElementOnResult('jq', 'press a key', result);

        // start
        $(document).keypress(() => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
            $('#result-test-div-jq').css({backgroundColor: 'red'})
        })
    },

}

function showResultJQ(eventName) {
    jqEventsList[eventName]()
}


export {showJQCode, showResultJQ}
