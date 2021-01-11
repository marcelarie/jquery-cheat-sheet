import {randomTexts, createElementOnResult, createInputOnResult} from './javascript.js'
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
    click: function () {
        // preliminar code
        createElementOnResult('jq', 'click on me', result);

        // start
        $('#result-test-div-jq').on('click', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    doubleClick: function () {
        // preliminar code
        createElementOnResult('jq', 'double click on me', result);

        // start
        $('#result-test-div-jq').on('dblclick', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    keyPress: function () {
        // preliminar code
        createElementOnResult('jq', 'press a key', result);

        // start
        $(document).keypress(() => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
            $('#result-test-div-jq').css({backgroundColor: 'red'})
        })
    },
    moveCursor: function () {
        // preliminar code
        createElementOnResult('jq', 'move the cursor', result);

        // start
        $(document).mousemove(e => {
            $('#result-test-div-jq').text('Page X ' + e.pageX)
        })
    },
    changeValue: function () {
        // preliminar code
        createInputOnResult('jq', 'Put text and press enter', result)

        // start 
        $('#result-test-input-jq').change(() => {
            $('#result-test-input-jq').css('padding', '+=5')
        })
    },
}

function showResultJQ(eventName) {
    jqEventsList[eventName]()
}


export {showJQCode, showResultJQ}
